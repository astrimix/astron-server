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

export default class Logger {
  status = 0;

  log(serviceName, type, content) {
    if (this.status !== 1) return;
    console.log(
      `${chalk.gray(`[${getTimestamp()}/${serviceName}]`)} ${logLevel[type](
        content
      )}`
      // ex. [17:00/MongoDB] Service started.
    );
    if (type === "fatal") return (process.exitCode = 1);
  }
}
