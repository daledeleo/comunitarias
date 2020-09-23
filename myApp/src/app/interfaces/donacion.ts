import { ClassField } from '@angular/compiler';

export class Donacion {
    id?:string;
    description?:string;
    createdBy?:string;
    beginDate?: string;
    expirationDate?: string;
    photo?: File;
    
    state?: string;
    createdAt?:string;
    

    provider: string;
    category: string;
    collectionCenter?:string;
    users:string;

    constructor() { }

    public setProvider(provider: string) {
        this.provider = this.provider;
    }

    public setCategory(category: string) {
        this.category = this.category;
    }

    public setUsers(users: string) {
        this.users = this.users;
    }

    public setId(id: string) {
        this.id = id;
    }

   
    public setDescription(description: string) {
        this.description = description;
    }


    public setCreateBy(createdBy: string) {
        this.createdBy = createdBy;
    }

}
export interface Donaciones{
    Donaciones: Array<Donacion>
 }