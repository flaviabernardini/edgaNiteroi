import { CriteriaReference } from './../models/criteria-reference.models';
import { RulesService } from './../rules/rules.service';
import { Component, OnInit } from '@angular/core';
import { Topic, Criteria, SubCriteria } from '../models/rules.models';
import allReferences from "src/references.json"
import Rules from "src/rules.json";

@Component({
  selector: 'app-criteria-table',
  templateUrl: './criteria-table.component.html',
  styleUrls: ['./criteria-table.component.scss']
})
export class CriteriaTableComponent implements OnInit {
  rules: Topic[];
  selectedReferences: Map<number, CriteriaReference>;

  constructor(private rulesService: RulesService) {
    this.selectedReferences = rulesService.selectedReferences;
    this.rules = rulesService.rules;
    console.log(this.selectedReferences);
  }

  ngOnInit(): void {
  }

  isSubcriteriaDisabled(subcriteria: SubCriteria): boolean {
    return subcriteria.references.every(referenceId =>
      this.selectedReferences.get(referenceId)?.selected != true
    )
  }

  referencesToStr(subCriteria: SubCriteria) {
    let referenceStr = "";
    for(const reference of subCriteria.references) {
      referenceStr = `${referenceStr}[Ref ${reference}]`;
    }
    return referenceStr;
  }
}
