const spinner1 = function() {
  let i = 0;
  let max = 2;
  while (i < max * 2) {
    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, i * 800 + 100);
    
    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, i * 800 + 300);
    
    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, i * 800 + 500);
    
    setTimeout(() => {
      // Need to escape the backslash since it's a special character.
      process.stdout.write('\r\\   ');
    }, i * 800 + 700);
    i++;
  }
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, (i - 1) * 800 + 900);
};

spinner1();