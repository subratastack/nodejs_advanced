process.env.UV_THREADPOOL_SIZE = 6;

const crypto = require("crypto");

const start = performance.now();
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1: ", performance.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2: ", performance.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3: ", performance.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("4: ", performance.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5: ", performance.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("6: ", performance.now() - start);
});
