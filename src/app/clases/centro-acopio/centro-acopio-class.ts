export class CentroAcopioClass {
    id?:string;
    name: string;
    address?: string;
    contactName:string;
    contactPhone:string;
    photo:File;
    latitude?: number;
    longitude?: number;
    createdBy: string;
    
    constructor(){}
    
    public setCreateBy(createdBy:string){
        this.createdBy=createdBy;
    }
    public setId(id:string){
        this.id=id;
    }
    public setaddress(address:string){
        this.address=address;
    }
    public setlatitude(latitude:number){
        this.latitude=latitude;
    }
    public setlongitude(longitude:number){
        this.longitude=longitude;
    }
    public setName(name:string){
        this.name=name;
    }

}
export interface Centro_Acopio{
    Categorias: Array<CentroAcopioClass>
 }
