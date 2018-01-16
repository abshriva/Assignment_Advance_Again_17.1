import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IfElseComponent } from './if-else/if-else.component';
import { AsAndPipeComponent } from './as-and-pipe/as-and-pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    IfElseComponent,
    AsAndPipeComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
