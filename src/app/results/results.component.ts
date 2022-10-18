import { ResultsService } from './results.service';
import { RulesService } from './../rules/rules.service';
import { Component, OnInit } from '@angular/core';
import { Criteria, Topic } from '../models/rules.models';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  rules: Topic[];

  constructor(
    private rulesService: RulesService,
    private resultsService: ResultsService,
  ) {
    this.rules = rulesService.rules;
    for(let topic of this.rules) {
      topic.ratings = rulesService.calculateTopicRating(topic);
      console.log(topic);
    }
  }

  ngOnInit(): void {
  }

  calculateTopicRating(topic: Topic): Array<number> {
    return this.rulesService.calculateTopicRating(topic);
  }
  calculateCriteriaRating(criteria: Criteria): Array<number> {
    return this.rulesService.calculateCriteriaRating(criteria);
  }

  openPDF() {
    this.resultsService.openPDF();
  }

  // Chart
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
    animation: {
      duration: 0,
      onComplete: (animation) => {
        animation.chart.options.animation = {
          duration: 400
        };
      }
    }
  };
  public pieChartLabels = [
    "Não encontrei",
    "Encontrei facilmente",
    "Encontrei com dificuldade",
    "Tive muita dificuldade ",
    "Não informado"
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
