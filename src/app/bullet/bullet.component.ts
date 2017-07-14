import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-bullet',
  template: ``,
  styleUrls: ['./bullet.component.css']
})

export class BulletComponent   {

  constructor(public title: string, public place: string, public bullet: string, public section: string) { 
   
  }

}
  


