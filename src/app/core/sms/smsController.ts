import { BackendMethod, remult } from "remult";
import { NotificationService, SmsMultiRequest, SmsRequest } from "../../../server/send-sms";

export class SmsController {

    @BackendMethod({ allowed: true })
    static async sendSms() {
        let req: SmsRequest = {
            message: 'hello FLASH new world',
            mobile: '0526526063',
            uid: '123',
            international: false
        }
        let res = await new NotificationService().sendSmsFlash(req)

        // let req: GroupCreateRequest = { groupName: 'tester', groupDescription: 'test users', international: false }
        // let res = await new NotificationService()
        //     .addGroup(req)

        // let req: GroupAddRecipientsRequest = { groupName: 'tester', recipientsArray: ['0526526063'] }
        // let res = await new NotificationService()
        //     .addRecipients(req)

        // let req: SmsMultiRequest = {
        //     message: 'hello XML new MULTI world',
        //     mobiles: ['0526526063'],
        //     messageType: 'flash',
        //     senderid: remult.user?.id!,
        //     international: false
        // }
        // let res = await new NotificationService()
        //     .sendSmsMulti(req)

        console.log(res)
    }

}
