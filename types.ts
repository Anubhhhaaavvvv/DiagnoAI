export interface PatientDetails {
  name: string;
  age: string;
  gender: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
  patientId: string;
}

export interface Hospital {
  id: string;
  name: string;
}

export interface Doctor {
  id: string;
  name: string;
  hospitalId: string;
}

export interface LabResult {
  id: string;
  name: string;
  value: string;
  unit: string;
  range?: { low: number; high: number };
}

export interface GeneticMarker {
  id: string;
  name: string;
  status: 'Positive' | 'Negative' | 'Not Tested';
}

export interface StructuredData {
  labResults: LabResult[];
  geneticMarkers: GeneticMarker[];
}

export interface ExtractedReportData {
  patientSummary?: string;
  tumorSize?: string;
  geneticMutations?: string[];
  lymphNodeStatus?: string;
}

export interface Diagnosis {
  name: string;
  probability: number;
  reasoning: string;
}

export interface ClinicalTrial {
    trialId: string;
    title: string;
    summary: string;
    sponsor: string;
    url: string;
    eligibility: string[];
}

export interface AnalysisResult {
  diagnoses: Diagnosis[];
  inconsistencies: string[];
  overallAssessment: string;
  suggestedTrials: ClinicalTrial[];
}

export interface PatientProfile extends StructuredData {
  patientDetails: PatientDetails;
  reportAnalysis: ExtractedReportData;
  fullReport: string;
  scanAnalyses: string[];
}
