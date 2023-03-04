import chalk from 'chalk';

export class Logger {
    public static info = (args: any) => {
        console.log(chalk.blueBright(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [INFO]`), typeof args === 'string' ? chalk.blue(args) : args);
    };
    public static warning = (args: any) => {
        console.log(chalk.yellowBright(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [WARNING]`), typeof args === 'string' ? chalk.yellow(args) : args);
    };
    public static error = (args: any) => {
        console.log(chalk.redBright(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [ERROR]`), typeof args === 'string' ? chalk.red(args) : args);
    };
}
