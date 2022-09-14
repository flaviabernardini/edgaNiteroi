import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriteriaTableComponent } from './topic-list/topic-list.component';
import { CriteriaFilterComponent } from './criteria-filter/criteria-filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubcriteriaComponent } from './subcriteria/subcriteria.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    CriteriaTableComponent,
    CriteriaFilterComponent,
    SubcriteriaComponent,
    CriteriaComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
