import { BulletDataService } from './bullet-data.service';
import { BulletComponent } from './bullet/bullet.component';
import { Bullet } from './bullet/bullet.model';
import { Component, Output, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-section',
  templateUrl:'./section.component.html' ,
  styleUrls: ['./section.component.css'],
  providers: [BulletDataService]
})

export class SectionComponent implements OnInit {

sect: string;
bulList: Bullet[]=[];
showForm: boolean=true;

constructor (private bulData: BulletDataService) {}

ngOnInit(){
this.bulList=this.bulData.bulletData;
}

 
  flipper(sh:boolean){
    this.showForm=!sh;
  }

  assignSection(s: string){

    this.sect=s;
    
  }

  deleteBul(id: number) {
    var x;
    this.bulList.splice(id,1);
   
    console.log(this.bulList)
    console.log(id+"deleteBul");
  }

}