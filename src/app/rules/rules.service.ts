import { CriteriaReference } from './../models/criteria-reference.models';
import Rules from 'src/rules.json';
import allReferences from 'src/references.json';
import { Injectable } from '@angular/core';
import { Topic } from '../models/rules.models';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  rules: Topic[] = Rules as Topic[];
  selectedReferences: Map<number, CriteriaReference> = new Map(allReferences.map(
    item => [item.id, {...item, selected: true}]
  ))
  constructor() {}

  toggleReference(referenceId: number, isSelected: boolean) {
    console.log(referenceId, isSelected);
    console.log(this.selectedReferences);
    if(this.selectedReferences.get(referenceId)) {
      this.selectedReferences.get(referenceId)!.selected = isSelected;
    }
  }

  filterRules(): Topic[] {
    return this.rules.filter(rule =>
      rule.criterias.filter(criteria =>
        criteria.subcriterias.filter(subcriteria =>
          subcriteria.references.some(referenceId =>
            this.selectedReferences.get(referenceId)?.selected ==  true
          )
        )
      )
    )
  }

  filterTitles(text: string) {
    const words = text.split(' ');
    return this.rules.filter(rule =>
      rule.criterias.some(criteria =>
        words.every(word => criteria.criteria_title.includes(word))
      )
    )
  }
}
