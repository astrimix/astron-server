import chalk from "chalk";

const logLevel = {
  fatal: (text) => chalk.redBright(text),
  error: (text) => chalk.red(text),
  warn: (text) => chalk.yellow(text),
  info: (text) => chalk.green(text),
  debug: (text) => chalk.gray(text),
};

const getTimestamp = () => {
  return new Date().toLocaleString("pl-PL", { timeStyle: "long" });
};

class Logger {
  status = 0;

  constructor() {
    this.status = 1;
  }

  log(serviceName, type, content) {
    if (this.status !== 1) return;

    console.log(
      `[${getTimestamp()}/${serviceName}] ${logLevel[type](content)}`
    );
    if (type === "fatal") return (process.exitCode = 1);
  }
}

export default Logger;
