let timer = 0;
let spinnerChar = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']

for (let char of spinnerChar) {
  setTimeout(() => {
    process.stdout.write(char)
  }, timer);
  timer += 200;
}
