import { RulesService } from './../../rules/rules.service';
import { Topic, Criteria } from './../../models/rules.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-rating',
  templateUrl: './result-rating.component.html',
  styleUrls: ['./result-rating.component.scss'],
})
export class ResultRatingComponent implements OnInit {
  @Input() topic!: Topic;
  @Input() rating!: number;

  ratingLabels = [
    'Não encontrado',
    'Encontrado facilmente',
    'Encontrado com dificuldade',
    'Encontrado com muita dificuldade ',
    'Não informado',
  ];

  constructor(private rulesService: RulesService) {}

  ngOnInit(): void {}

  calculateCriteriaRating(criteria: Criteria) {
    return this.rulesService.calculateCriteriaRating(criteria);
  }
}
