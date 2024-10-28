import { DocumentCategory } from '../types/document';

export const documentCategories: DocumentCategory[] = [
  {
    id: 'identity',
    title: 'Identity Documents',
    description: 'Essential documents to prove your identity',
    documents: [
      {
        id: 'passport',
        name: 'Valid Passport',
        description: 'Current passport with at least 6 months validity',
        required: true,
        format: ['PDF', 'JPG', 'PNG'],
        maxSize: '5MB',
        examples: ['Biographical page', 'All used pages']
      },
      {
        id: 'photos',
        name: 'Passport Photos',
        description: 'Recent passport-sized photographs meeting UK specifications',
        required: true,
        format: ['JPG', 'PNG'],
        maxSize: '2MB'
      }
    ]
  },
  {
    id: 'financial',
    title: 'Financial Documents',
    description: 'Proof of financial stability and support',
    documents: [
      {
        id: 'bank-statements',
        name: 'Bank Statements',
        description: 'Last 6 months of bank statements showing required funds',
        required: true,
        format: ['PDF'],
        maxSize: '10MB'
      },
      {
        id: 'payslips',
        name: 'Payslips',
        description: 'Last 6 months of payslips from current employer',
        required: false,
        format: ['PDF'],
        maxSize: '5MB'
      }
    ]
  },
  {
    id: 'sponsorship',
    title: 'Sponsorship Documents',
    description: 'Required documents for sponsored visas',
    documents: [
      {
        id: 'cos',
        name: 'Certificate of Sponsorship (CoS)',
        description: 'Valid sponsorship certificate from UK employer',
        required: true,
        format: ['PDF'],
        maxSize: '5MB',
        verifiable: true,
        verificationDetails: {
          type: 'reference_number',
          pattern: '^[A-Z0-9]{11}$',
          example: 'ABC1234XY789'
        }
      },
      {
        id: 'sponsor-license',
        name: 'Sponsor License Details',
        description: 'UK employer\'s sponsor license information',
        required: true,
        format: ['PDF'],
        maxSize: '5MB',
        verifiable: true,
        verificationDetails: {
          type: 'sponsor_license',
          pattern: '^[A-Z0-9]{8}$',
          example: 'XYZ12345'
        }
      }
    ]
  },
  {
    id: 'education',
    title: 'Educational Documents',
    description: 'Academic qualifications and certifications',
    documents: [
      {
        id: 'cas',
        name: 'Confirmation of Acceptance for Studies (CAS)',
        description: 'Valid CAS from UK educational institution',
        required: true,
        format: ['PDF'],
        maxSize: '5MB',
        verifiable: true,
        verificationDetails: {
          type: 'reference_number',
          pattern: '^[A-Z][0-9]{7}$',
          example: 'E1234567'
        }
      },
      {
        id: 'qualifications',
        name: 'Academic Certificates',
        description: 'Degree certificates and academic transcripts',
        required: true,
        format: ['PDF'],
        maxSize: '10MB'
      },
      {
        id: 'english-language',
        name: 'English Language Certificate',
        description: 'Approved English language test results',
        required: true,
        format: ['PDF'],
        maxSize: '5MB',
        verifiable: true,
        verificationDetails: {
          type: 'reference_number',
          pattern: '^[A-Z]{3}[0-9]{6}$',
          example: 'IEL123456'
        }
      }
    ]
  },
  {
    id: 'employment',
    title: 'Employment Documents',
    description: 'Current and previous employment records',
    documents: [
      {
        id: 'contract',
        name: 'Employment Contract',
        description: 'Signed contract from UK employer',
        required: true,
        format: ['PDF'],
        maxSize: '5MB'
      },
      {
        id: 'experience-letters',
        name: 'Experience Letters',
        description: 'Previous employment references and experience certificates',
        required: false,
        format: ['PDF'],
        maxSize: '10MB'
      }
    ]
  },
  {
    id: 'accommodation',
    title: 'Accommodation Documents',
    description: 'Proof of UK accommodation arrangements',
    documents: [
      {
        id: 'tenancy',
        name: 'Tenancy Agreement',
        description: 'Valid rental agreement or property ownership documents',
        required: true,
        format: ['PDF'],
        maxSize: '5MB'
      },
      {
        id: 'proof-address',
        name: 'Proof of Address',
        description: 'Utility bills or council tax statements',
        required: true,
        format: ['PDF', 'JPG', 'PNG'],
        maxSize: '5MB'
      }
    ]
  }
];