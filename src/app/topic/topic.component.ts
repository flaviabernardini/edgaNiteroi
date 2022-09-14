import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Topic } from '../models/rules.models';
import { RulesService } from '../rules/rules.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  @Input() topic!: Topic;
  @Input() topicId!: number;
  @Input() topicRating!: Array<number>;

  constructor(private rulesService: RulesService) { }

  ngOnInit(): void {
  }

  calculateTopicRating(topic: Topic): Array<number> {
    return this.rulesService.calculateTopicRating(topic);
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
