import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {
  deposit(value: number): void {
    let balance = this.getBalance();
    balance += value + 10;
    console.log(`Nome:          ${this.getName()}
Depósito:      R$${value}
Novo Saldo:    R$${balance}
---------------------------`);
  }
}
