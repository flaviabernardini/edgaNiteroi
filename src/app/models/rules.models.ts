export interface SubCriteria {
  references: number[];
  subcriteria_id: number;
  subcriteria_title: string;
}

export interface Criteria {
  criteria_id: number;
  criteria_title: string;
  subcriterias: SubCriteria[];
}

export interface Topic {
  topic: string;
  criterias: Criteria[];
}