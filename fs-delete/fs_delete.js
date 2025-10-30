const fs = require("fs");
fs.unlink("data.txt", (err,data) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("File deleted successfully!");
  }
});
