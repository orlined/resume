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

@Input() sectionName: string;

sect: string;
bulList: Bullet[]=[];
showForm: boolean=true;

constructor (private bulData: BulletDataService) {}

ngOnInit(){
this.bulList=this.bulData.bulletData;
console.log(this.bulList)
}

 
  flipper(sh:boolean){
    this.showForm=!sh;
  }

  assignSection(s: string){
    this.sect=s; 
  }

 

}