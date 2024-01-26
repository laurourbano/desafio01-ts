import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { VipAccount } from "./class/VipAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.deposit(100);
peopleAccount.withdraw(10);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(200);
companyAccount.withdraw(20);
companyAccount.getLoan(100);

const vipAccount: VipAccount = new VipAccount("Lauro", 30);
vipAccount.deposit(300);
