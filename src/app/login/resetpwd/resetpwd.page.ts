import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.page.html',
  styleUrls: ['./resetpwd.page.scss'],
})
export class ResetpwdPage implements OnInit {

  constructor(
    public router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
  }
 

}
