import chalk from "chalk";
import boxen from "boxen";


export const notify = {

    seller: (title: string, message: string) => {
        console.log(boxen(chalk.bgGreen.bold(title) + ": " + chalk.italic(message), { title: "Notificación Vendedor", padding: 1, borderStyle: "round", borderColor: "green", margin: 1 }));
    },
    rider: (title: string, message: string) => {
        console.log(boxen(chalk.bgRed.bold(title) + ": " + chalk.italic(message), { title: "Notificación Rider", padding: 1, borderStyle: "round", borderColor: "red", margin: 1 }));
    },
    customer: (title: string, message: string) => {
        console.log(boxen(chalk.bgBlue.bold(title) + ": " + chalk.italic(message), { title: "Notificación Cliente", padding: 1, borderStyle: "round", borderColor: "blue", margin: 1 }));
    },


}
