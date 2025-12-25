
export type RiskLevel = 'low' | 'medium' | 'high';

export interface Stage {
  title: string;
  duration: string;
  description: string;
  requirements: string[];
}

export interface Pathway {
  country: string;
  entryStage: string;
  transitionSteps: Stage[];
  totalDuration: string;
  riskLevel: RiskLevel;
  riskDescription: string;
  whyItWorks: string;
  potentialRoadblocks: string[];
  fallbackOptions: string;
}

export interface IntentAnalysis {
  fieldOfInterest: string;
  intentStages: string[];
  constraints: {
    budget: string;
    educationLevel: string;
    timeHorizon: string;
  };
  priorities: string[];
  pathways: Pathway[];
}

export type AppState = 'idle' | 'analyzing' | 'results' | 'error';
