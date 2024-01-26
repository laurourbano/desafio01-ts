import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

  getLoan = (loan: number): void => {
    if (this.validateStatus()) {
      let balance = this.getBalance();
      balance += loan;
      console.log(
        `
Nome:          ${this.getName()}
Empréstimo:    R$${loan}
Novo saldo:    R$${balance}
---------------------------`
      );
    } else {
      console.log("Sua conta está inativa.");
    }
  };
}
