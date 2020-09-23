export class Distribucion {
    id?: string;
    departureAddress: string;
    destinationAddress?: string;
    manager_type?: string;
    information?: string;
    photo:File;
    createdBy: string;
    user?: string;

    constructor() { }

    public setCreateBy(createdBy: string) {
        this.createdBy = createdBy;
    }
    public setId(id: string) {
        this.id = id;
    }
    public setLugarOrigen(address: string) {
        this.destinationAddress = address;
    }
    public setLugarDestino(direccion: string) {
        this.destinationAddress = direccion;
    }

}
export interface Distribucion {
    Categorias: Array<Distribucion>
}
