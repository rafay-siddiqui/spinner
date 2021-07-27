const spinner = (spins) => {
  process.stdout.write('\r|   ');
  const positions = ['\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
  let delay = 200;
  const displayPosition = (currentPos) => {
    setTimeout(() => {
      process.stdout.write(currentPos);
    }, delay);
    delay += 200;
  };
  for (let i = 0; i < spins; i++) {
    for (let position of positions) {
      displayPosition(position);
    }
  }
};
spinner(1);


//CODE for spinner without specifying how many spins
// const positions = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
// let delay = 200;
// const displayPosition = (currentPos) => {
//   setTimeout(() => {
//     process.stdout.write(currentPos);
//   }, delay);
//   delay += 200;
// };
// for (let position of positions) {
//   displayPosition(position);
// }