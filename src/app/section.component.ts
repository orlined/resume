import { BulletComponent } from './bullet/bullet.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  template:`` ,
  styleUrls: ['./section.component.css']
})

export class SectionComponent {

constructor (public name:string, public bullets: BulletComponent[] ) {}


}