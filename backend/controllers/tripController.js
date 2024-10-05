const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const db = require("../config/db");

// Multer configuration for file upload
const upload = multer({ dest: "uploads/" });

// Calculate distance between two coordinates using Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
};

exports.uploadTrip = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const { trip_name } = req.body;
  const userId = req.user;
  const filePath = req.file.path;

  let totalDistance = 0;
  let previousPoint = null;
  let travelDuration = 0;
  let stoppageDuration = 0;
  let overspeedDuration = 0;

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => {
      const { latitude, longitude, timestamp, ignition } = row;

      if (previousPoint) {
        const distance = calculateDistance(
          previousPoint.latitude,
          previousPoint.longitude,
          latitude,
          longitude
        );
        totalDistance += distance;

        const timeDifference =
          new Date(timestamp) - new Date(previousPoint.timestamp);
        travelDuration += timeDifference;

        if (ignition === "off") {
          stoppageDuration += timeDifference;
        }
      }

      if (row.speed > 60) {
        overspeedDuration += timeDifference;
      }

      previousPoint = { latitude, longitude, timestamp };
    })
    .on("end", () => {
      db.query(
        "INSERT INTO trips SET ?",
        {
          user_id: userId,
          trip_name,
          csv_file_path: filePath,
          total_distance: totalDistance,
          travel_duration: travelDuration,
          stoppages: stoppageDuration,
          overspeed_duration: overspeedDuration,
        },
        (err, result) => {
          if (err) throw err;
          res.json({ message: "Trip data saved successfully" });
        }
      );
    });
};
