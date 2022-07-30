import { CriteriaReference } from './../models/criteria-reference.models';
import { RulesService } from './../rules/rules.service';
import { Component, OnInit } from '@angular/core';
import { Topic, SubCriteria, SelectedSubCriteria } from '../models/rules.models';

@Component({
  selector: 'app-criteria-table',
  templateUrl: './criteria-table.component.html',
  styleUrls: ['./criteria-table.component.scss']
})
export class CriteriaTableComponent implements OnInit {
  rules: Topic[];
  selectedReferences: Map<number, CriteriaReference>;
  checkedSubCriterias: Map<[number, number, number], SelectedSubCriteria> = new Map;

  constructor(private rulesService: RulesService) {
    this.selectedReferences = rulesService.selectedReferences;
    this.rules = rulesService.rules;
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
