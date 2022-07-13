import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { ExerciceActiveComponent } from './exercice/exercice-active/exercice-active.component';
import { ExerciceInactiveComponent } from './exercice/exercice-inactive/exercice-inactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceComponent,
    ExerciceActiveComponent,
    ExerciceInactiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
