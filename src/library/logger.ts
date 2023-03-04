import chalk from 'chalk';

export default class Logger {
    public static info = (args: string) => {
        console.log(chalk.blueBright(`[${new Date().toLocaleDateString()}] [INFO] ${args}`));
    };
    public static warning = (args: string | number) => {
        console.log(chalk.yellowBright(`[${new Date().toLocaleDateString()}] [INFO] ${args}`));
    };
    public static error = (args: string | number) => {
        console.log(chalk.redBright(`[${new Date().toLocaleDateString()}] [INFO] ${args}`));
    };
}
