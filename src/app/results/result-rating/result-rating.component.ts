import { RulesService } from './../../rules/rules.service';
import { Topic, Criteria, SubCriteria } from './../../models/rules.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-rating',
  templateUrl: './result-rating.component.html',
  styleUrls: ['./result-rating.component.scss'],
})
export class ResultRatingComponent implements OnInit {
  @Input() topic!: Topic;
  @Input() criteria!: Criteria;

  ratingLabels = [
    'Não encontrado',
    'Encontrado facilmente',
    'Encontrado com dificuldade',
    'Encontrado com muita dificuldade ',
    'Não informado',
  ];

  ratingColors = [
    'bg-danger',
    'bg-primary',
    'bg-success',
    'bg-warning',
    'bg-secondary',
  ]

  constructor(private rulesService: RulesService) {}

  ngOnInit(): void {}

  calculateCriteriaRating(criteria: Criteria) {
    return this.rulesService.calculateCriteriaRating(criteria);
  }

  isSubcriteriaDisabled(subcriteria: SubCriteria): boolean {
    return this.rulesService.isSubcriteriaDisabled(subcriteria);
  }

  isCriteriaDisabled(criteria: Criteria): boolean {
    return this.rulesService.isCriteriaDisabled(criteria);
  }
}
