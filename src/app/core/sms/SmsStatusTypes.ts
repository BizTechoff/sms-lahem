import { ValueListFieldType } from "remult";

@ValueListFieldType<SmsStatusTypes>({ caption: 'סטטוס' })
export class SmsStatusTypes {
    static waiting = new SmsStatusTypes('ממתין')
    static sending = new SmsStatusTypes('בשליחה')
    static sent = new SmsStatusTypes('נשלח')
    constructor(public caption = '') { }
    id!: string
}
