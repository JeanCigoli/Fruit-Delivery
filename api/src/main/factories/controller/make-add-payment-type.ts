import { DbAddPaymentType } from '../../../data/usecases/db-add-type-payment';
import { PaymentTypeRepository } from '../../../infra/db/mysql/payment-type-repository';
import { AddPaymentTypeController } from '../../../presentation/controllers/add-type-payment-controller';

export function makeAddPaymentType() {
  const paymentTypeRepository = new PaymentTypeRepository();
  const dbAddPaymentType = new DbAddPaymentType(
    paymentTypeRepository,
    paymentTypeRepository,
  );
  return new AddPaymentTypeController(dbAddPaymentType);
}
