export class Voluntario {
    id?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    social?: string;
    createdBy?: string;
    user?: string;
    schedule?:string;
    activities?:any[];
}
export interface Voluntarios {
    Voluntario: Array<Voluntario>
}
