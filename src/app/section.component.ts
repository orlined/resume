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

sect: string;
bulList: Bullet[]=[];
showForm: boolean=true;

constructor () {

}

  addBullet(updatedBul, t ){
    this.bulList=updatedBul;
    console.log(this.bulList);
  }

  flipper(sh:boolean){
    this.showForm=!sh;
  }

  assignSection(s: string){

    this.sect=s;
    
  }

  deleteBul(id: number) {
    var x;
    this.bulList.splice(id-1,1);
    for(x=0; x<this.bulList.length;x++){
      this.bulList[x].id=x;
    }
    console.log(this.bulList)
    console.log(id+"deleteBul");
  }

}