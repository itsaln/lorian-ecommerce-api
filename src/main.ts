import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaService } from './prisma.service'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true })

	const prismaService = app.get(PrismaService)
	await prismaService.enableShutdownHooks(app)

	app.setGlobalPrefix('api')
	await app.listen(process.env.PORT || 5000)
	console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
