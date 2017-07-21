import { BulletDataService } from './../bullet-data.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html' ,
  styleUrls: ['./bullet.component.css'],
  providers: []
})

export class BulletComponent implements OnInit  {

@Input() transBul: {id: number, title: string, place: string, bullet: string, section: string } ;
@Input() id: number;
@Output() delBul = new EventEmitter<number>();


  constructor(private bulData: BulletDataService) {}

  ngOnInit(){}

deleteBullet(bulId){

this.bulData.delBullet(bulId);

 // this.delBul.emit(bulId);
}



}
  


