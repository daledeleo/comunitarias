import { ClassField } from '@angular/compiler';

export class Campaign {
    id?:string;
    photo?: File;
    name:string;
    contactName: string;
    description:string;
    createdAt?:string;
    createdBy:string;
    scope: string;
    constructor() { }

    public setId(id: string) {
        this.id = id;
    }

    public setName(name: string) {
        this.name = name;
    }
    public setDescription(description: string) {
        this.description = description;
    }

    public setcontactName(contactName: string) {
        this.contactName = contactName;
    }

    public setCreateBy(createdBy: string) {
        this.createdBy = createdBy;
    }

    public setScope(scope: string) {
        this.scope = scope;
    }

}
export interface Campaigns{
    campaigns: Array<Campaign>
 }