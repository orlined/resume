import { Bullet } from './bullet/bullet.model';
import { Injectable } from '@angular/core';

@Injectable()
export class BulletDataService {


bulletData: Bullet[]=[{id: 1, title: "PM", place: "Seattle", bullet:"Test1", section:"Education" },
  {id: 2, title: "Program Manager", place: "Seattle", bullet:"Test1", section:"Work" },
  {id: 3, title: "APM", place: "Seattle", bullet:"Test1", section:"Work" },
  {id: 4, title: "Engineer", place: "Seattle", bullet:"Test1", section:"Education" },
  {id: 5, title: "Student", place: "Sofia", bullet:"Test1", section:"Education" },
  {id: 6, title: "PM", place: "Santiago", bullet:"Test1", section:"Additional" },
  {id: 7, title: "PM", place: "Santiago", bullet:"Test1", section:"Work" },              
];

  addBul(ind:number, title:string, place: string, bullet: string, whichSection: string){

    this.bulletData.push({id:ind, title: title, place:place, bullet:bullet, section:whichSection});
    console.log(this.bulletData);

  }

  delBullet(index: number){

    this.bulletData.splice(index,1);

  }
  constructor() { }

}
