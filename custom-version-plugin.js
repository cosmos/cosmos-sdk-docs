const fs = require('fs');
const path = require('path');

// Helper function to get all files recursively from a directory
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

module.exports = function (_context, _options) {
  return {
    name: 'custom-version-plugin',

    async loadContent() {
      // Read the versions.json file to get the list of versions
      const versionsJsonPath = path.join(_context.siteDir, 'versions.json');
      const versions = JSON.parse(fs.readFileSync(versionsJsonPath, 'utf8'));

      // Read all the files in the /docs folder
      const docsPath = path.join(_context.siteDir, 'docs');
      const files = getAllFiles(docsPath);

      // Iterate through the list of versions
      for (const version of versions) {
        const versionedDocsPath = path.join(_context.siteDir, 'versioned_docs', `version-${version}`);

        // Check if the version directory exists
        if (fs.existsSync(versionedDocsPath)) {
          // Iterate through the list of files in the /docs folder
          for (const file of files) {
            const relativePath = path.relative(docsPath, file);
            const customFilePath = path.join(versionedDocsPath, relativePath);

            // Check if the file exists in the version directory
            if (!fs.existsSync(customFilePath)) {
              // Create the directory if it doesn't exist
              fs.mkdirSync(path.dirname(customFilePath), { recursive: true });

              // If the file doesn't exist, copy it from the /docs folder
              fs.copyFileSync(file, customFilePath);
              console.log(`Copied file from /docs to version-${version}:`, relativePath);
            }
          }
        }
      }
    },
  };
};
