import { Criteria, SelectedSubCriteria, SubCriteria } from './../models/rules.models';
import { CriteriaReference } from './../models/criteria-reference.models';
import Rules from 'src/rules.json';
import allReferences from 'src/references.json';
import { Injectable } from '@angular/core';
import { Topic } from '../models/rules.models';

@Injectable({
  providedIn: 'root',
})
export class RulesService {
  //TODO salvar as Rules com alterações
  fullRules: Topic[] = localStorage.getItem('rules') == null?
    Rules as Topic[]
    :
    JSON.parse(localStorage.getItem('rules') as string);

  rules: Topic[] = [];
  selectedReferences: Map<number, CriteriaReference> = localStorage.getItem('references') == null?
    new Map(
      allReferences.map((item) => [item.id, { ...item, selected: true }])
    )
    :
    new Map(
      JSON.parse(
        localStorage.getItem('references') as string
      ).map((item: any) => [item[1].id, { ...item[1]}])
    )

  constructor() {
    this.updateRules();
  }


  //-------------------- CRUD
  updateRules(): Topic[] {
    this.rules = this.fullRules.filter((rule) =>
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

  clearRules() {
    this.fullRules = Rules as Topic[];
    this.rules = this.fullRules;
    this.selectedReferences = new Map(
      allReferences.map((item) => [item.id, { ...item, selected: true }])
    );
    localStorage.removeItem('rules');
    localStorage.removeItem('references');
  }

  setTopicRatingsSize(topic: Topic): void {
    topic.ratings = [0, 0, 0, 0, 0];
    topic.size = 0;
    for (const criteria of topic.criterias) {
      for (const subcriteria of criteria.subcriterias) {
        if (!this.isSubcriteriaDisabled(subcriteria)) {
          topic.ratings[subcriteria.rating ?? 4]++;
          topic.size++;
        }
      }
    }
  }

  toggleReference(referenceId: number, isSelected: boolean) {
    if (this.selectedReferences.get(referenceId)) {
      this.selectedReferences.get(referenceId)!.selected = isSelected;
    }
    localStorage.setItem(
      'references',
      JSON.stringify(this.selectedReferences)
    );

    this.updateRules();
  }

  selectSubcriteriaRating(
    topicId: number,
    criteriaId: number,
    subcriteriaId: number,
    rating: number
  ) {
    this.fullRules[topicId].criterias[criteriaId].subcriterias[
      subcriteriaId
    ].rating = rating;
    this.saveRules();
  }

  saveRules() {
    localStorage.setItem(
      'rules',
      JSON.stringify(this.fullRules)
    );
  }

  loadRules() {
    this.fullRules = JSON.parse(
      localStorage.getItem('rules') as string
    )
  }

  //-------------------- CALCULATE
  calculateTopicRating(topic: Topic): Array<number> {
    let ratings = [0, 0, 0, 0, 0];
    for (const criteria of topic.criterias) {
      for (const subcriteria of criteria.subcriterias) {
        if (!this.isSubcriteriaDisabled(subcriteria)) {
          ratings[subcriteria.rating ?? 4]++;
        }
      }
    }
    return ratings;
  }

  calculateCriteriaRating(criteria: Criteria): Array<number> {
    let ratings = [0, 0, 0, 0, 0];
    for (const subcriteria of criteria.subcriterias) {
      if (!this.isSubcriteriaDisabled(subcriteria)) {
        ratings[subcriteria.rating ?? 4]++;
      }
    }
    return ratings;
  }

  calculateTopicSize(topic: Topic): number {
    let size = 0;
    for (const criteria of topic.criterias) {
      for (const subcriteria of criteria.subcriterias) {
        if (!this.isSubcriteriaDisabled(subcriteria)) {
          size++
        }
      }
    }
    return size;
  }

  //-------------------- VERIFY
  areReferencesDisabled(): boolean {
    for(const reference of this.selectedReferences) {
      if(reference[1].selected == true) {
        return false;
      }
    }
    return true;
  }

  isSubcriteriaDisabled(subcriteria: SubCriteria): boolean {
    return subcriteria.references.every(
      (referenceId) =>
        this.selectedReferences.get(referenceId)?.selected != true
    );
  }

  isCriteriaDisabled(criteria: Criteria): boolean {
    return criteria.subcriterias.every(
      (subcriteria) => this.isSubcriteriaDisabled(subcriteria)
    )
  }

  isTopicDisabled(topic: Topic): boolean {
    return topic.criterias.every(
      (criteria) => this.isCriteriaDisabled(criteria)
    )
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
