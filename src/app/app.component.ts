import { SectionComponent } from './section.component';
import { BulletComponent } from './bullet/bullet.component';
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string="";
  place: string="";
  bullet: string;
  sections=["Education", "Work", "Additional"];
  sectName: string;
  bul: BulletComponent[]=[];
  sec: SectionComponent[]=[];

  onSubmit(form: NgForm){

    this.title=form.value.title;
    this.place=form.value.place;
    this.bullet=form.value.bullet;
    this.sectName=form.value.sect;
    this.bul.push(
      new BulletComponent(this.title, this.place, this.bullet)
    )

     this.sec.push(
       new SectionComponent(this.sectName, this.bul)
     )
     
   console.log(form);
  }


  clearTitle(){
    this.sec=[];
    this.bul=[];
    this.title="";
    this.place="";
  }
}
