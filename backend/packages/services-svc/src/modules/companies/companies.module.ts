import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ClientProxyFactory, Transport } from '@nestjs/microservices'
import { SequelizeModule } from '@nestjs/sequelize'
import { LoggerModule } from 'nestjs-pino'

import { DatabaseProvider } from '../../database/database.provider'
import { CompaniesController } from './companies.controller'
import { CompaniesService } from './companies.service'
import { LogsService } from '../logs/logs.service'
import { CompaniesBankAccount } from './entities/companiesBankAccount.entity'
import { Company } from './entities/company.entity'
import { Bank } from '../banks/entities/bank.entity'
import { Log } from '../logs/entities/log.entity'
import { User } from '../users/entities/user.entity'

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRoot(),
    SequelizeModule.forFeature([Company, CompaniesBankAccount, Bank, Log, User])
  ],
  controllers: [CompaniesController],
  providers: [DatabaseProvider, LogsService, CompaniesService,
    {
      provide: 'LOGS_SERVICE',
      inject: [ConfigService],
      useFactory: () =>
        ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: process.env.LOG_HOST,
            port: Number(process.env.LOG_PORT)
          }
        })
    }
  ]
})
export class CompaniesModule {}
