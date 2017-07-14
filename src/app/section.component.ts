import { BulletComponent } from './bullet/bullet.component';
import { Component, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-section',
  templateUrl:'./section.component.html' ,
  styleUrls: ['./section.component.css']
})

export class SectionComponent  {

sectName: string;
bullets: BulletComponent[]; 
sections=["Eduaction","Work","Additional"]

constructor () {
}

bul: BulletComponent[]=[];


  onSubmit(form: NgForm){

    //this.sectName=form.value.optradio;

    this.bul.push(
      new BulletComponent(form.value.title, form.value.place, form.value.bullet, form.value.optradio)
    )

    //  this.sec.push(
    //    new SectionComponent(this.sectName, this.bul)
    //  )
     
   console.log(form);
  console.log(this.bul)

}
}