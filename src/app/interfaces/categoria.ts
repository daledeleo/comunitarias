export class Categoria {
    id?:string;
    name: string;
    description?: string;
    createdBy?: string;

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

    public setCreateBy(createdBy: string) {
        this.createdBy = createdBy;
    }

}

export interface Categorias{
    Categorias: Array<Categoria>
 }