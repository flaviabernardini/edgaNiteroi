import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriteriaTableComponent } from './criteria-table/criteria-table.component';
import { CriteriaFilterComponent } from './criteria-filter/criteria-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CriteriaTableComponent,
    CriteriaFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
