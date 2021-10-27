export function printSalary(salary) {
    let label_year = "Ano: ";
    let label_salary = "Salário mínimo: ";

    let formatted_salary= formatNumber(salary.salary);

    console.log("\n" + label_year.padEnd(35, ".") + salary.year);
    console.log(label_salary.padEnd(35, ".") + "R$ " + formatted_salary + "\n");
}

export function printIPCA(ipca) {
    let label_year = "Ano: ";
    let label_ipca = "Inflação IPCA: ";

    let formatted_ipca = formatNumber(ipca.ipca);

    console.log("\n" + label_year.padEnd(35, ".") + ipca.year);
    console.log(label_ipca.padEnd(35, ".") + formatted_ipca + "%\n");
}

export function printSalaryIPCA(salary, ipca) {
    let tam = salary.length;
    let diference;
    let salary_growth = [];
    for (let i = 0; i < tam; i++) {

        if (i == 0) {
            salary_growth[i] = 0;
            
        } else {
            diference = salary[i].salary - salary[i - 1].salary;
            let aux = ((diference / salary[i - 1].salary) * 100);
            salary_growth[i] = formatNumber(aux);
        }

        let formatted_salary = formatNumber(salary[i].salary);
        let formatted_ipca = formatNumber(ipca[i].ipca);

        let label_year = "Ano: ";
        let label_salary = "Salário Mínimo: ";
        let label_growth = "Crescimento Salarial: ";
        let label_ipca = "Inflação IPCA: ";

        console.log("\n" + label_year.padEnd(35, ".") + salary[i].year);
        console.log(label_salary.padEnd(35, ".") + "R$ " + formatted_salary);
        console.log(label_growth.padEnd(35, ".") + salary_growth[i] + "%");
        console.log(label_ipca.padEnd(35, ".") + formatted_ipca + "%");
    }

}
function formatNumber(number) {
    let aux = number.toFixed(2);
    let aux2 = aux.toString();
    let formatted_number = aux2.replace(".", ",");

    return formatted_number;
}