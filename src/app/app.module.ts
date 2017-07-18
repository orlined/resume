import { SectionComponent } from './section.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BulletComponent } from './bullet/bullet.component';
import { BulletFormComponent } from './bullet-form/bullet-form.component'

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    BulletComponent,
    BulletFormComponent
    
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
