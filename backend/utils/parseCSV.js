const fs = require('fs');
const csv = require('csv-parser');

/**
 * Parses CSV file and returns GPS data array.
 * @param {String} filePath - The path to the uploaded CSV file.
 * @returns {Promise} Resolves with an array of GPS data.
 */
function parseCSV(file_path) {
  const gpsDataArray = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(file_path)
      .pipe(csv())
      .on('data', (row) => {
        gpsDataArray.push({
          latitude: parseFloat(row.latitude),
          longitude: parseFloat(row.longitude),
          timestamp: row.timestamp,
          ignition: row.ignition === 'true'
        });
      })
      .on('end', () => {
        resolve(gpsDataArray);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

module.exports = { parseCSV };
