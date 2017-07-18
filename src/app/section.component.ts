import { BulletComponent } from './bullet/bullet.component';
import { Bullet } from './bullet/bullet.model';
import { Component, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-section',
  templateUrl:'./section.component.html' ,
  styleUrls: ['./section.component.css']
})

export class SectionComponent  {


 bulList: Bullet[]=[];
showForm: boolean=true;

constructor () {

}

  addBullet(updatedBul, t ){

    this.bulList=updatedBul;

  }

  flipper(sh:boolean){
    this.showForm=!sh;
  }


}