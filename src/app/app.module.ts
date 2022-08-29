import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriteriaTableComponent } from './criteria-table/criteria-table.component';
import { CriteriaFilterComponent } from './criteria-filter/criteria-filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubcriteriaComponent } from './subcriteria/subcriteria.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CriteriaTableComponent,
    CriteriaFilterComponent,
    SubcriteriaComponent,
    CriteriaComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
