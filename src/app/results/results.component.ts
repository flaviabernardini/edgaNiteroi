import { ResultsService } from './results.service';
import { RulesService } from './../rules/rules.service';
import { Component, OnInit } from '@angular/core';
import { Topic } from '../models/rules.models';
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
  }

  ngOnInit(): void {
  }

  // Chart
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
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
