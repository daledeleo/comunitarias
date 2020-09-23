import { GroupMember } from "../miembros-grupos/group-member";

export class Grupo {
    id: string;
    members: GroupMember[];
    name:string;
    createdBy: string;
    user: string;
    nombreuser: string;
}

export interface Grupo {
    Categorias: Array<Grupo>
}