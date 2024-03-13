import {Funcionario} from "./Funcionario"
class Gerente implements Funcionario {
    salario(): number{
        return 15000;
    }
    Cargo(): string{
        console.log("Ja sou o Gerente");
    }
}

class Desenvolvedor implements Funcionario{
   salario(): number{
    return 5000;
   }
   Cargo(): string{
    console.log("Sou desenvolvedor junior");
   }
}