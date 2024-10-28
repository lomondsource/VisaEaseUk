export interface VisaType {
  id: string;
  title: string;
  description: string;
  duration: string;
  fee: string;
  requirements: string[];
  eligibility: string[];
  processingTime: string;
  category: string;
  businessActivities?: {
    permitted: string[];
    notPermitted: string[];
  };
  documents?: {
    type: string;
    details: string[];
  }[];
  priorityOptions?: {
    type: string;
    processingTime: string;
    fee: number;
  }[];
  employerRequirements?: {
    checks: string[];
    documents: string[];
    verificationSteps: string[];
    ongoingObligations: string[];
  };
}

// ... rest of the types remain the same