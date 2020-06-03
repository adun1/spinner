//max specifies the number of full revolutions
const spinner2 = function(max) {
  const characterList = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  let i = 0;
  while (i < max * 2) {
    for (let j = 0; j < characterList.length; j++) {
      printToken((i * 800) + (j * 200) + 100, characterList[j]);
    }
    i++;
  }
  printToken(((i) * 800) + 100, characterList[0]);
  printToken(((i) * 800) + 300, '\n\r');
};

const printToken = function(index, character) {
  // console.log(index);
  setTimeout((character) => {
    process.stdout.write(character);
  }, index, character);
};

spinner2(1);