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
  sectName: string;
  bul: BulletComponent[]=[];
  sec: SectionComponent[]=[];

  onSubmit(t,p, b, s){

    this.title=t;
    this.place=p;
    this.sectName=s;
    this.bul.push(
      new BulletComponent(t, p, b)
    )

     this.sec.push(
       new SectionComponent(this.sectName, this.bul)
     )
     
   console.log(this.sec);
  }


  clearTitle(){
    this.sec=[];
    this.bul=[];
    this.title="";
    this.place="";
  }
}
