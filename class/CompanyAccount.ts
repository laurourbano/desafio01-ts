import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  getLoan = (): void => {
    console.log('Você pegou um empréstimo')
  }
}
