import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GroupMember } from '../../clases/miembros-grupos/group-member'
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class GroupMemberServiceService {

  private api = Api.api+'group-member/';

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  getGrupoMembers() {
    const path = this.api;
    return this.http.get<GroupMember[]>(this.api, { headers: this.headers })
  }
  getApi() {
    return this.api;
  }

  guardarGrupoMember(Grupo) {
    const path = this.api;
    return this.http.post(path, Grupo, { headers: this.headers });
  }

  getGrupoMemberId(id: string) {
    return this.http.get<GroupMember>(this.api + id, { headers: this.headers });;
  }

  deleteGrupoMember(id: string) {
    const path = `${this.api}${id}`;
    console.log(path);
    return this.http.delete(path, { headers: this.headers }).subscribe(
      resp => console.log('eliminado'),
      error => console.log('error occur, delete fail'));
  }

  updateGrupoMember(grupo: any, id: any) {
    const path = this.api + id + '/';
    return this.http.patch(path, grupo, { headers: this.headers });
  }
}
