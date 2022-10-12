const beeps = process.argv.slice(2);
//loop through user input
for (let i = 0; i < beeps.length; i++) {
  let j = beeps[i];
  //if beep is a negative number or not a number continue on
  if (beeps[i].includes('-') || isNaN(beeps[i])) {
    continue;
  }
  //setTimeout with current input
  setTimeout(() => {
    process.stdout.write('\x07');
  }, `${j}000`);
}