import { ClassField } from '@angular/compiler';

export class ContactosList {
    id?:string;
    firstName?:string;
    lastName?:string;
    phoneNumber?: string;
    social?: string;
    provider?: File;
    
    
    createdAt?:string;
    

    createdBy: string;

    constructor() { }
}

export interface ContactosListas{
    ContactosListas: Array<ContactosList>
 }