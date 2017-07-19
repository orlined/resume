import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html' ,
  styleUrls: ['./bullet.component.css']
})

export class BulletComponent   {

@Input() transBul: {id: number, title: string, place: string, bullet: string, section: string } ;

@Output() delBul = new EventEmitter<number>();


  constructor() { 
   
  }

deleteBullet(bulId){


  this.delBul.emit(bulId);
  //console.log(bulId);
}

}
  


