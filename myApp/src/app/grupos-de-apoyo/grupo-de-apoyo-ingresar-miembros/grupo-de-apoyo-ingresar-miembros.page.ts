import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { GroupMemberServiceService } from '../../services/group-member/group-member-service.service'
import { GrupoService } from '../../services/grupo-service/grupo.service'
import { GroupMember } from '../../clases/miembros-grupos/group-member'
import { CreteByService } from '../../services/create-by.service'

@Component({
  selector: 'app-grupo-de-apoyo-ingresar-miembros',
  templateUrl: './grupo-de-apoyo-ingresar-miembros.page.html',
  styleUrls: ['./grupo-de-apoyo-ingresar-miembros.page.scss'],
})
export class GrupoDeApoyoIngresarMiembrosPage implements OnInit {
  public formMiembro: FormGroup;
  public idGrupo: string;
  public groupMember: GroupMember = new GroupMember();
  public editar: string;
  public idMiembro: string;

  constructor(private recibiendo: ActivatedRoute, private formBuilder:
    FormBuilder, private apiConexionGroupMember: GroupMemberServiceService,
    private navegar: Router, private apiGrupo: GrupoService, private createdBy:CreteByService) {
  }

  ngOnInit() {
    this.recibiendo.queryParamMap.subscribe(datos => {
      this.idGrupo = datos.get('grupoId');
      this.editar = datos.get('editar');
      this.idMiembro = datos.get('miembroId');
    });
    this.creandoFomrmulario();
  }

  check() {
    return this.formMiembro.invalid;
  }
  creandoFomrmulario() {
    this.formMiembro = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      apellidos: ['', [Validators.required, Validators.maxLength(100)]],
      telefono: ['', [Validators.required, Validators.pattern('09[0-9]{8}')]],
    });
    console.log(this.editar+this.idMiembro)
    if (this.editar == 'editar' && this.idMiembro != null) {
      this.apiConexionGroupMember.getGrupoMemberId(this.idMiembro).subscribe(miembro => {
        this.formMiembro.setValue({
          nombre: miembro.firstName,
          apellidos: miembro.lastName,
          telefono: miembro.phoneNumber,
        });
      });

    }
  }

  enviarDatos() {
    this.groupMember.createdBy = this.createdBy.getNombre();
    this.groupMember.firstName = this.formMiembro.get('nombre').value;
    this.groupMember.lastName = this.formMiembro.get('apellidos').value;
    this.groupMember.phoneNumber = this.formMiembro.get('telefono').value;
    let data = {
      'firstName': this.formMiembro.get('nombre').value,
      "lastName": this.formMiembro.get('apellidos').value,
      'phoneNumber': this.formMiembro.get('telefono').value,
      'createdBy': this.createdBy.getNombre(),
      'supportgroup': this.idGrupo,
    }
    if (this.editar == 'editar' && this.idMiembro != null) {

      console.log(data);
      console.log(this.idMiembro);
      this.apiConexionGroupMember.updateGrupoMember(data, this.idMiembro).subscribe(exito => {
        this.navegar.navigate(['./grupos-de-apoyo/grupo-de-apoyo-detalles'], {
          queryParams: {
            idGrupo: this.idGrupo,
          }
        });
      }, error => {
        console.log(error);
      });
    } else {
      this.apiConexionGroupMember.guardarGrupoMember(data).subscribe(newTask => {
        console.log(newTask);
        this.apiGrupo.getGrupoId(this.idGrupo).subscribe(grupo => {
          grupo.members.push(this.groupMember);
          this.apiGrupo.updateGrupo(grupo, this.idGrupo).subscribe(ne => {
            this.navegar.navigate(['./grupos-de-apoyo/grupo-de-apoyo-detalles'], {
              queryParams: {
                idGrupo: this.idGrupo,
              }
            });
          }, error => {
            console.log('Error en update group member');
          });
        });
      }, error => {
        console.log("Algo sucedio con guardar miembro");
      });
    }

  }
}
