import { BulletComponent } from './bullet/bullet.component';
import { Bullet } from './bullet/bullet.model';
import { Component, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-section',
  templateUrl:'./section.component.html' ,
  styleUrls: ['./section.component.css']
})

export class SectionComponent  {

ind: number=0;
sectName: string;
bullets: Bullet[]; 
sections=["Eduaction","Work","Additional"]

constructor () {
}

bul: Bullet[]=[];


  onSubmit(form: NgForm){

    //this.sectName=form.value.optradio;
    this.ind+=1;
    this.bul.push(
      new Bullet(this.ind, form.value.title, form.value.place, form.value.bullet, form.value.optradio)
    )

   
     
   console.log(form);
  console.log(this.bul)

}
}