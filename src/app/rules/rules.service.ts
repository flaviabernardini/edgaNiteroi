import { SelectedSubCriteria } from './../models/rules.models';
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
  selectedSubCriteria: SelectedSubCriteria[] = new Array<SelectedSubCriteria>();
  constructor() {}

  updateSelectedSubCriteria(): SelectedSubCriteria[] {
    this.selectedSubCriteria = [];
    this.rules.map(
      rule => rule.criterias.map(
        criteria => criteria.subcriterias.map(
          subcriteria => this.selectedSubCriteria.push(subcriteria)
        )
      )
    )
    console.log(this.selectedSubCriteria);
    return this.selectedSubCriteria;
  }

  updateRules(): Topic[] {
    this.rules = Rules.filter(rule =>
      rule.criterias.filter(criteria =>
        criteria.subcriterias.filter(subcriteria =>
          subcriteria.references.some(referenceId =>
            this.selectedReferences.get(referenceId)?.selected ==  true
          )
        )
      )
    )

    return this.rules;
  }

  toggleReference(referenceId: number, isSelected: boolean) {
    if(this.selectedReferences.get(referenceId)) {
      this.selectedReferences.get(referenceId)!.selected = isSelected;
    }

    this.updateRules();
    this.updateSelectedSubCriteria();
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
