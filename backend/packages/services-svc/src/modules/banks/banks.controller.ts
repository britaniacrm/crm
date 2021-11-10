import { Controller, Inject, Get, UseGuards, Query, Header, Res, Response } from '@nestjs/common'
import { ApiTags, ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger'

import { JwtAuthGuard } from '@britania-crm-com/auth-utils'

import { LogsService } from '../logs/logs.service'

import { BanksService } from './banks.service'
import { BankDto } from './dtos/bank.dto'
import { BanksQueryDto } from './dtos/banksQuery.dto'

@ApiTags('Banks')
@Controller('banks')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class BanksController {
    constructor(
      @Inject('BanksService') private readonly banksService: BanksService,
      @Inject('LogsService') private readonly logsService: LogsService
    ) {}

    @ApiOkResponse({
      type: BankDto,
      isArray: true,
      description: 'List of banks'
    })

    @Get()
    findAll(@Query() query: BanksQueryDto): Promise<BankDto[]> {
      return this.banksService.findAll(query)
    }
}
