const fs = require("fs");
fs.appendFile("data.txt", "\nThis line was added later.", (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("Data appended successfully!");
  }
});
