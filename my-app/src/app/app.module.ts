import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
=======
>>>>>>> 52ddb924f72c3393082a1a9102959217ad7f3b28

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    FormsModule
=======
    BrowserModule
>>>>>>> 52ddb924f72c3393082a1a9102959217ad7f3b28
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
