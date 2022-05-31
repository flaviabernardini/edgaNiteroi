import { Component, OnInit } from '@angular/core';
import { Topic, Criteria } from '../models/rules.models';
import Rules from "src/rules.json";

@Component({
  selector: 'app-criteria-table',
  templateUrl: './criteria-table.component.html',
  styleUrls: ['./criteria-table.component.scss']
})
export class CriteriaTableComponent implements OnInit {
  rules: Topic[] = Rules as Topic[];
  constructor() { }

  ngOnInit(): void {
  }

  referencesToStr(criteria: Criteria) {
    let referenceStr = "";
    for(const reference of criteria.references) {
      referenceStr = `${referenceStr}[Ref ${reference}]`;
    }
    return referenceStr;
  }
}
