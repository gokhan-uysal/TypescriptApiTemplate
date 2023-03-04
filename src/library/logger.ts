import chalk from 'chalk';

export class Logger {
    public static info = (args: string) => {
        console.log(chalk.blueBright(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [INFO] ${args}`));
    };
    public static warning = (args: string | number) => {
        console.log(chalk.yellowBright(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [INFO] ${args}`));
    };
    public static error = (args: string | number) => {
        console.log(chalk.redBright(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] [INFO] ${args}`));
    };
}
