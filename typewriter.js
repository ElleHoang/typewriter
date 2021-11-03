const sentence = "Good morning said the lady with a red scarf.\n"; // fix newline
let delay = 200
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, delay); //with each loop, we register delay output of the char by 1s, so they will all appear after 1s.
  delay += 200; // prints 1st char @ 1s, 2nd chara @ 2s...
}