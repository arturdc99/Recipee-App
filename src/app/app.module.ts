import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeeListComponent } from './components/recipee-list/recipee-list.component';
import { RecipeSummaryComponent } from './components/recipe-summary/recipe-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeeListComponent,
    RecipeSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
