import { SectionComponent } from './section.component';
import { BulletComponent } from './bullet/bullet.component';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  template:` 
  <app-section></app-section>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  }


  // clearTitle(){
  //   this.sec=[];
  //   this.bul=[];
  //   this.title="";
  //   this.place="";
  // }

