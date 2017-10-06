import {AxiosInstance, AxiosResponse} from 'axios'
import * as merge from 'deepmerge'
import * as qs from 'querystring'
import {IShopArgs, JobCd, Method, SeqMode} from '../client'
import {TConfig} from '../config'

export interface IEntryTranArgs extends IShopArgs {
  OrderID: string
  JobCd: JobCd
  Amount: number
}

export interface IEntryTranResult {
  AccessID: string
  AccessPass: string
}

export interface IExecTranArgs {
  AccessID: string
  AccessPass: string
  OrderID: string
  Method?: Method
  PayTimes?: number
  CardNo?: string
  Expire?: string
  SecurityCode?: string
  Token?: string
  Pin?: string
  SiteID?: string
  SitePass?: string
  MemberID?: string
  SeqMode?: SeqMode
  CardSeq?: number
  CardPass?: string
  ClientField1?: string
  ClientField2?: string
  ClientField3?: string
}

export interface IExecTranResult {
  Acs: string
  OrderID: string
  Forward: string
  Method: Method
  PayTimes: string
  Approve: string
  TranID: string
  TranDate: string
  CheckString: string
  ClientField1: string
  ClientField2: string
  ClientField3: string
}

export interface IAlterTranArgs extends IShopArgs {
  AccessID: string
  AccessPass: string
  JobCd: JobCd
  Amount?: number
  Method?: Method
}

export interface IAlterTranResult {
  AccessID: string
  AccessPass: string
  Forward: string
  Approve: string
  TranID: string
  TranDate: string
}

export interface ISearchTradeArgs extends IShopArgs {
  OrderID: string
}

export interface ISearchTradeResult {
  OrderID: string
  Status: string
  ProcessDate: string
  JobCd: JobCd
  AccessID: string
  AccessPass: string
  ItemCode: string
  Amount: string
  Tax: string
  SiteID: string
  MemberID: string
  CardNo: string
  Expire: string
  Method: Method
  PayTimes: string
  Forward: string
  TranID: string
  Approve: string
  ClientField1: string
  ClientField2: string
  ClientField3: string
  ErrCode: string
  ErrInfo: string
}

export interface IChangeTranArgs extends IShopArgs {
  AccessID: string
  AccessPass: string
  JobCd: JobCd
  Amount: number
  Tax?: string
}

export interface IChangeTranResult {
  AccessID: string
  AccessPass: string
  Forward: string
  Approve: string
  TranID: string
  TranDate: string
}

export default class Tranable {
  public config: TConfig
  public client: AxiosInstance

  public async entryTran(args: IEntryTranArgs): Promise<IEntryTranResult> {
    const data: IEntryTranArgs = merge(
    {
      ShopID: this.config.ShopID,
      ShopPass: this.config.ShopPass,
      OrderID: undefined,
      JobCd: undefined,
      Amount: undefined
    },
    args)
    const res: AxiosResponse = await this.client.post('/payment/EntryTran.idPass', data)

    return qs.parse(res.data)
  }

  public async execTran(args: IExecTranArgs): Promise<IExecTranResult> {
    const res: AxiosResponse = await this.client.post('/payment/ExecTran.idPass', args)

    return qs.parse(res.data)
  }

  public async alterTran(args: IAlterTranArgs): Promise<IAlterTranResult> {
    const data: IAlterTranArgs = merge(
    {
      ShopID: this.config.ShopID,
      ShopPass: this.config.ShopPass,
      AccessID: undefined,
      AccessPass: undefined,
      JobCd: undefined
    },
    args)
    const res: AxiosResponse = await this.client.post('/payment/AlterTran.idPass', data)

    return qs.parse(res.data)
  }

  public async searchTrade(args: ISearchTradeArgs): Promise<ISearchTradeResult> {
    const data: ISearchTradeArgs = merge(
    {
      ShopID: this.config.ShopID,
      ShopPass: this.config.ShopPass,
      OrderID: undefined
    },
    args)
    const res: AxiosResponse = await this.client.post('/payment/SearchTrade.idPass', data)

    return qs.parse(res.data)
  }

  public async changeTran(args: IChangeTranArgs): Promise<IChangeTranResult> {
    const data: IChangeTranArgs = merge(
    {
      ShopID: this.config.ShopID,
      ShopPass: this.config.ShopPass,
      AccessID: undefined,
      AccessPass: undefined,
      JobCd: undefined,
      Amount: undefined
    },
    args)
    const res: AxiosResponse = await this.client.post('/payment/ChangeTran.idPass', data)

    return qs.parse(res.data)
  }
}
