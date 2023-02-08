import { Module } from '@nestjs/common'
import { PaymentController } from '@app/payment/payment.controller'
import { PaymentService } from '@app/payment/payment.service'

@Module({
	controllers: [PaymentController],
	providers: [PaymentService]
})
export class PaymentModule {}
