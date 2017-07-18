import { BulletComponent } from './../bullet/bullet.component';
import { Bullet } from './../bullet/bullet.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'bullet-form',
  templateUrl: './bullet-form.component.html',
  styleUrls: ['./bullet-form.component.css']
})
export class BulletFormComponent implements OnInit {

ind: number=0;
sections=["Eduaction","Work","Additional"]
bul: Bullet[]=[];

@Input() seeForm: boolean;

@Output() newBul = new EventEmitter<Bullet[]>(); 
@Output() closeForm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
      this.ind+=1;
      this.bul.push(
          new Bullet(this.ind, form.value.title, form.value.place, form.value.bullet, form.value.optradio)
         )
    this.seeForm=true;
    this.newBul.emit(this.bul);
    this.closeForm.emit(this.seeForm);

    console.log(form);
    console.log(this.bul);
  }

}
