const spinner = (spins) => {
  for (let i = 0; i < spins; i++) {
    if (i === 0) {
      setTimeout(() => {
        process.stdout.write('\r|   ');
      }, 100 + (1700 * i));
    }
    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, 300 + (1700 * i));

    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, 500 + (1700 * i));

    setTimeout(() => {
      // Need to escape the backslash since it's a special character.
      process.stdout.write('\r\\   ');
    }, 700 + (1700 * i));

    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, 900 + (1700 * i));

    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, 1100 + (1700 * i));

    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, 1300 + (1700 * i));

    setTimeout(() => {
      process.stdout.write('\r\\   ');
    }, 1500 + (1700 * i));

    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, 1700 + (1700 * i));
  }
};

spinner(1);