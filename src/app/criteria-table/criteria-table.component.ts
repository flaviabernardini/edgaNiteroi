import { CriteriaReference } from './../models/criteria-reference.models';
import { RulesService } from './../rules/rules.service';
import { Component, OnInit } from '@angular/core';
import { Topic, SubCriteria, SelectedSubCriteria } from '../models/rules.models';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-criteria-table',
  templateUrl: './criteria-table.component.html',
  styleUrls: ['./criteria-table.component.scss']
})
export class CriteriaTableComponent implements OnInit {
  rules: Topic[];
  selectedReferences: Map<number, CriteriaReference>;

  constructor(private rulesService: RulesService) {
    this.selectedReferences = this.rulesService.selectedReferences;
    this.rules = this.rulesService.rules;
  }

  ngOnInit(): void {
  }

  referencesToStr(subCriteria: SubCriteria) {
    let referenceStr = "";
    for(const reference of subCriteria.references) {
      referenceStr = `${referenceStr}[Ref ${reference}]`;
    }
    return referenceStr;
  }

  generateTopicRating(topic: Topic): Array<number> {
    return this.rulesService.generateTopicRating(topic);
  }

  // Chart
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = [
    "Não encontrei",
    "Encontrei facilmente",
    "Encontrei com dificuldade",
    "Tive muita dificuldade ",
    "Não informado"
  ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
