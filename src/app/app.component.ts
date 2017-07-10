import { BulletComponent } from './bullet/bullet.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string="";
  place: string="";
  bul: BulletComponent[]=[];

  setTitle(t,p, b, s){

    this.bul.push(
      new BulletComponent(t, p, b, s)
    )
      console.log(this.bul);
    this.title=t;
    this.place=p;

  }
  clearTitle(){
    this.bul=[];
    this.title="";
    this.place="";
  }
}
