
export type Specialty = 'life_skills' | 'behavior_mod' | 'vocational' | 'occupational' | 'academic';

export interface PlanData {
  title: string;
  content: string;
}

export interface ReportData {
  input: string;
  summary: string;
  recommendations: string;
}

export interface QnAData {
  question: string;
  answer: string;
}

export interface MarketingAngle {
  title: string;
  slogan: string;
}
