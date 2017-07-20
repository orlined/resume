import { BulletComponent } from './../bullet/bullet.component';
import { Bullet } from './../bullet/bullet.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BulletDataService } from '../bullet-data.service';



@Component({
  selector: 'bullet-form',
  templateUrl: './bullet-form.component.html',
  styleUrls: ['./bullet-form.component.css'],
  providers: [BulletDataService]
})
export class BulletFormComponent implements OnInit {

ind: number=1;
bul: Bullet[]=[];
nBul: Bullet;


@Input() seeForm: boolean;
@Input() whichSection: string;
@Output() closeForm = new EventEmitter<boolean>();

  constructor(private records: BulletDataService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){

    this.ind = (this.bul.length<1 ? 1:(this.bul.length)+1)

    this.records.addBul(this.ind, form.value.title, form.value.place, form.value.bullet, this.whichSection)
  
    this.seeForm=true;
  
    this.closeForm.emit(this.seeForm);
  }

}
