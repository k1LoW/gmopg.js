import {AxiosInstance, AxiosResponse} from 'axios'
import * as qs from 'querystring'
import {TConfig} from '../config'
import {ISiteArgs} from '../client'

export interface ISaveMemberArgs extends ISiteArgs {
  MemberName?: string
}

export interface ISaveMemberResult {
  MemberID: string
}

export interface IUpdateMemberArgs extends ISiteArgs {
  MemberName?: string
}

export interface IUpdateMemberResult {
  MemberID: string
}

export interface IDeleteMemberResult {
  MemberID: string
}

export interface ISearchMemberResult {
  MemberID: string
  MemberName: string
  DeleteFlag: string
}

export default class Memberable {
  public config: TConfig
  public client: AxiosInstance

  public async saveMember(args: ISaveMemberArgs): Promise<ISaveMemberResult> {
    const res: AxiosResponse = await this.client.post('/payment/SaveMember.idPass', args)

    return qs.parse(res.data)
  }

  public async updateMember(args: IUpdateMemberArgs): Promise<IUpdateMemberResult> {
    const res: AxiosResponse = await this.client.post('/payment/UpdateMember.idPass', args)

    return qs.parse(res.data)
  }

  public async deleteMember(args: ISiteArgs): Promise<IDeleteMemberResult> {
    const res: AxiosResponse = await this.client.post('/payment/DeleteMember.idPass', args)

    return qs.parse(res.data)
  }

  public async searchMember(args: ISiteArgs): Promise<ISearchMemberResult | null> {
    const res: AxiosResponse = await this.client.post('/payment/SearchMember.idPass', args)

    return qs.parse(res.data)
  }
}