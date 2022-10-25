import { Field, Fields, IdEntity, remult } from "remult";
import { Mobile } from "../mobile/mobile";
import { Sms } from "./sms";
import { SmsStatusTypes } from "./SmsStatusTypes";

export class SmsStatus extends IdEntity {

    @Field(() => Sms)
    sms!: Sms

    @Field(() => Mobile)
    mobile!: Mobile

    @Field(() => SmsStatusTypes)
    status = SmsStatusTypes.waiting

    @Fields.string({ caption: 'שגיאה' })
    error = ''


    // static async post(req: { id?: string, mobile: Mobile, sms: Sms, status: SmsStatusTypes, error: string }) {
    //     let result = '';
    //     let item: SmsStatus = undefined!;
    //     if (req.id) {
    //         item = await remult.repo(SmsStatus).findId(req.id);
    //         if (!item) {
    //             return 'Id Not Found';
    //         }
    //         item.mobile = req.mobile;
    //         item.sms = req.sms;
    //         item.status = req.status;
    //         item.error = req.error;
    //         await item.save();
    //         result = item.id;
    //     }
    //     return result;
    // }

}
