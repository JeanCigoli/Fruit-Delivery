import { DbListAllPaymentsType } from '../../../data/usecases/db-list-all-types-payment';
import { PaymentTypeRepository } from '../../../infra/db/mysql/payment-type-repository';
import { ListAllPaymentsTypeController } from '../../../presentation/controllers/list-all-types-payments-controller';

export function makeListAllPaymentsTypes() {
  const paymentTypeRepository = new PaymentTypeRepository();
  const dbListAllPaymentsType = new DbListAllPaymentsType(
    paymentTypeRepository,
  );
  return new ListAllPaymentsTypeController(dbListAllPaymentsType);
}
