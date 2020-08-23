import { AccountModel } from '../../domain/model'
import { AddAccountModel } from '../../domain/usecases/add-account'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
