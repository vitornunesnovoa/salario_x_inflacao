import input from "readline-sync";
import minimumSalary from "./data/salary.js";
import inflation from "./data/inflation.js";
import { printSalary, printIPCA, printSalaryIPCA } from "./function/functions.js";

let choice = 0;

do {
    console.log("\nEscolha uma das alternativas: \n");
    console.log("1 - Listar os salários minimos de 2010 à 2020");
    console.log("2 - Listar o índice IPCA de 2010 à 2020");
    console.log("3 - Comparação entre percentual de aumento salarial e o IPCA");
    console.log("4 - Sair");
    
    choice = input.question();
    choice = Number(choice);

    switch (choice) {
        case 1:
            minimumSalary.forEach(printSalary);
            break;
        case 2:
            inflation.forEach(printIPCA);
            break;
        case 3:
            printSalaryIPCA(minimumSalary, inflation);
            break;
        case 4:
            console.log("Finalizando programa!!");
            break;
        default:
            console.log("Opção inválida:");
    }
} while (choice != 4)