const crypto = require("crypto");

const start = performance.now();
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1: ", performance.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2: ", performance.now() - start);
});
