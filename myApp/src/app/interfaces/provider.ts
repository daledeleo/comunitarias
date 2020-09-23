export class Provider {
    id?: string;
    name?: string;
    address?: string;
    phoneNumber?: string;
    email?: string;
    createdBy?:string;
    createdAt?:string;
    categories?: string

    constructor() { }

    public setId(id: string) {
        this.id = id;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setCreateBy(createdBy: string) {
        this.createdBy = createdBy;
    }

}

export interface Providers{
    providers: Array<Provider>
 }