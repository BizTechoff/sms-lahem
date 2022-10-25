import { Entity, Field, Fields, IdEntity, remult } from "remult";
import { DataControl } from "../../common-ui-elements/interfaces";
import { DEFUALT_DAY_WIDTH, DEFUALT_TIME_WIDTH } from "../../terms";
import { Group } from "../group/group";

@Entity('smsim', {
    allowApiCrud: remult.authenticated()
})
export class Sms extends IdEntity {

    @Fields.string({ caption: 'סוג' })
    type = 'SMS'

    @Fields.string({ caption: 'הודעה' })
    message = ''
 
    @Field(() => Group, { dbName: 'group_' })
    group!:Group

    @DataControl<Sms, Date>({ width: '149' })
    @Fields.dateOnly({ caption: 'תאריך' })
    date!: Date

    @DataControl<Sms, string>({ width: DEFUALT_TIME_WIDTH })
    @Fields.string({ caption: 'שעה', inputType: 'time' })
    time!: string

    @DataControl<Sms, Date>({ width: '149' })
    @Fields.dateOnly({ caption: 'עד תאריך' })
    tdate!: Date

    @DataControl<Sms, string>({ width: DEFUALT_TIME_WIDTH })
    @Fields.string({ caption: 'עד שעה', inputType: 'time' })
    ttime!: string

    @DataControl<Sms, boolean>({ width: DEFUALT_DAY_WIDTH })
    @Fields.boolean({ caption: 'א' })
    sunday = false

    @DataControl<Sms, boolean>({ width: DEFUALT_DAY_WIDTH })
    @Fields.boolean({ caption: 'ב' })
    monday = false

    @DataControl<Sms, boolean>({ width: DEFUALT_DAY_WIDTH })
    @Fields.boolean({ caption: 'ג' })
    tuesday = false

    @DataControl<Sms, boolean>({ width: DEFUALT_DAY_WIDTH })
    @Fields.boolean({ caption: 'ד' })
    wednesday = false

    @DataControl<Sms, boolean>({ width: DEFUALT_DAY_WIDTH })
    @Fields.boolean({ caption: 'ה' })
    thursday = false

    @DataControl<Sms, boolean>({ width: DEFUALT_DAY_WIDTH })
    @Fields.boolean({ caption: 'ו' })
    friday = false

    @DataControl<Sms, boolean>({ width: DEFUALT_DAY_WIDTH })
    @Fields.boolean({ caption: 'ז' })
    saturday = false

    @Fields.date({
        caption: 'נוצר ב',
        allowApiUpdate: false
    })
    createDate = new Date()

    @Fields.string({
        caption: 'נוצר ע"י',
        allowApiUpdate: false
    })
    createBy = ''

}
