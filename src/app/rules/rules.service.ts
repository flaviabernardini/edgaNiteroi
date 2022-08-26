import { SelectedSubCriteria, SubCriteria } from './../models/rules.models';
import { CriteriaReference } from './../models/criteria-reference.models';
import Rules from 'src/rules.json';
import allReferences from 'src/references.json';
import { Injectable } from '@angular/core';
import { Topic } from '../models/rules.models';

@Injectable({
  providedIn: 'root',
})
export class RulesService {
  rules: Topic[] = Rules as Topic[];
  selectedReferences: Map<number, CriteriaReference> = new Map(
    allReferences.map((item) => [item.id, { ...item, selected: true }])
  );

  constructor() {}

  updateRules(): Topic[] {
    this.rules = Rules.filter((rule) =>
      rule.criterias.filter((criteria) =>
        criteria.subcriterias.filter((subcriteria) =>
          subcriteria.references.some(
            (referenceId) =>
              this.selectedReferences.get(referenceId)?.selected == true
          )
        )
      )
    );

    return this.rules;
  }

  generateTopicRating(topic: Topic): Array<number> {
    let ratings = [0,0,0,0]
    for(const criteria of topic.criterias) {
      for(const subcriteria of criteria.subcriterias) {
        if(this.isSubcriteriaDisabled(subcriteria)) {
          ratings[subcriteria.rating?? 4]++;
        }
      }
    }
    return ratings;
  }

  isSubcriteriaDisabled(subcriteria: SubCriteria): boolean {
    return subcriteria.references.every(referenceId =>
      this.selectedReferences.get(referenceId)?.selected != true
    )
  }

  toggleReference(referenceId: number, isSelected: boolean) {
    if (this.selectedReferences.get(referenceId)) {
      this.selectedReferences.get(referenceId)!.selected = isSelected;
    }

    this.updateRules();
  }

  selectSubcriteriaRating(
    topicId: number,
    criteriaId: number,
    subcriteriaId: number,
    rating: number
  ) {
    this.rules[topicId]
      .criterias[criteriaId]
      .subcriterias[subcriteriaId]
      .rating = rating;
  }

  filterTitles(text: string) {
    const words = text.split(' ');
    return this.rules.filter((rule) =>
      rule.criterias.some((criteria) =>
        words.every((word) => criteria.criteria_title.includes(word))
      )
    );
  }
}
