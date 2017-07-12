import { SectionComponent } from './section.component';
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
  sec: SectionComponent[]=[];

  onSubmit(t,p, b, s){

    this.bul.push(
      new BulletComponent(t, p, b, s)
    )

    this.sec.push(
      new SectionComponent("Education", this.bul)
    )
      console.log(this.sec);
    this.title=t;
    this.place=p;

  }
  clearTitle(){
    this.bul=[];
    this.title="";
    this.place="";
  }
}
