
const geolib = require("geolib");

/**
 * Calculates total trip distance, idling, and stoppage times based on GPS data.
 * @param {Array} gpsDataArray - Array of GPS data points (latitude, longitude, timestamp, ignition).
 * @returns {Object} - Trip details (totalDistance, idlingTime, stoppageTime).
 */
exports.calculateTripDetails = (gpsDataArray) => {
  let totalDistance = 0;
  let idlingTime = 0;
  let stoppageTime = 0;
  let idlingStart = null;
  let stoppageStart = null;

  for (let i = 1; i < gpsDataArray.length; i++) {
    const prevPoint = gpsDataArray[i - 1];
    const currPoint = gpsDataArray[i];

    // Calculate distance between two consecutive points
    const distance = geolib.getDistance(
      { latitude: prevPoint.latitude, longitude: prevPoint.longitude },
      { latitude: currPoint.latitude, longitude: currPoint.longitude }
    );

    totalDistance += distance;

    // Check for idling (ignition on, speed = 0, distance = 0)
    if (prevPoint.ignition && distance === 0) {
      if (!idlingStart) idlingStart = new Date(prevPoint.timestamp);
      idlingTime += new Date(currPoint.timestamp) - idlingStart;
    } else {
      idlingStart = null;
    }

    // Check for stoppage (ignition off)
    if (!currPoint.ignition) {
      if (!stoppageStart) stoppageStart = new Date(currPoint.timestamp);
      stoppageTime += new Date(currPoint.timestamp) - stoppageStart;
    } else {
      stoppageStart = null;
    }
  }

  return {
    totalDistance, // in meters
    idlingTime: idlingTime / 1000, // convert to seconds
    stoppageTime: stoppageTime / 1000, // convert to seconds
  };
};
