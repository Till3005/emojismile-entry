const answer = "🫠";
const newline = "\n";

const format = (): string => answer + newline;

const main = (): void => {
  process.stdout.write(format());
};

main();
