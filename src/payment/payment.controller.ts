import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { PaymentStatusDto } from '@app/payment/dto/payment-status.dto'
import { PaymentDto } from '@app/payment/dto/payment.dto'
import { PaymentService } from '@app/payment/payment.service'

@Controller('payment')
export class PaymentController {
	constructor(private readonly paymentService: PaymentService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	async createPayment(@Body() dto: PaymentDto) {
		return this.paymentService.payment(dto)
	}

	@HttpCode(200)
	@Post('status')
	async getPaymentStatus(@Body() dto: PaymentStatusDto) {
		return this.paymentService.paymentStatus(dto)
	}
}
