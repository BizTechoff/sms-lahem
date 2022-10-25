import { Entity, Fields, IdEntity, remult } from "remult";

@Entity('groups', {
    allowApiCrud: remult.authenticated()
})
export class Group extends IdEntity {

    @Fields.string({ caption: 'שם' })
    name = ''

}
