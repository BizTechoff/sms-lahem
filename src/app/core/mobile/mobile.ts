import { Entity, Fields, IdEntity, remult } from "remult";

@Entity('mobiles', {
    allowApiCrud: remult.authenticated()
})
export class Mobile extends IdEntity {

    @Fields.string({caption: 'שם פרטי'})
    fName = ''

    @Fields.string({caption: 'שם משפחה'})
    lName = ''

    @Fields.string({caption: 'כינוי'})
    nName = ''

    @Fields.string({caption: 'מספר'}) 
    number = ''

}
