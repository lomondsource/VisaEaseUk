export interface VerificationDetails {
  type: 'reference_number' | 'sponsor_license';
  pattern: string;
  example: string;
}

export interface DocumentRequirement {
  id: string;
  name: string;
  description: string;
  required: boolean;
  format: string[];
  maxSize: string;
  examples?: string[];
  verifiable?: boolean;
  verificationDetails?: VerificationDetails;
}

export interface DocumentCategory {
  id: string;
  title: string;
  description: string;
  documents: DocumentRequirement[];
}