import { VisaType } from '../types/visa';

export const visaTypes: VisaType[] = [
  {
    id: 'skilled-worker',
    title: 'Skilled Worker Visa',
    description: 'For qualified workers with a job offer from a UK employer',
    duration: 'Up to 5 years',
    fee: '£625 - £1,423',
    requirements: [
      'Job offer from licensed UK employer',
      'Minimum skill level RQF3',
      'English language proficiency',
      'Minimum salary threshold',
      'Valid Certificate of Sponsorship'
    ],
    eligibility: [
      'Valid Certificate of Sponsorship',
      'Proof of English language ability',
      'Maintenance funds',
      'Appropriate skill level',
      'Meet salary requirements'
    ],
    processingTime: '3 weeks',
    category: 'work',
    employerRequirements: {
      checks: [
        'Verify original documents in presence of applicant',
        'Check photos match across all documents',
        'Verify dates of birth are consistent',
        'Confirm document authenticity and validity',
        'Check work permissions and restrictions'
      ],
      documents: [
        'Valid passport or travel document',
        'Biometric Residence Permit',
        'Share code for online right to work check',
        'Proof of qualifications',
        'Professional certifications'
      ],
      verificationSteps: [
        'Obtain and verify share code',
        'Check online right to work status',
        'Keep copies of verified documents',
        'Record date of verification check',
        'Store records securely for 2 years after employment ends'
      ],
      ongoingObligations: [
        'Conduct follow-up checks for time-limited permissions',
        'Monitor and record visa expiry dates',
        'Report significant changes in employment',
        'Maintain accurate records of all checks',
        'Comply with sponsor duties and responsibilities'
      ]
    }
  },
  {
    id: 'student',
    title: 'Student Visa',
    description: 'For international students accepted into UK educational institutions',
    duration: 'Course length + 4 months',
    fee: '£363',
    requirements: [
      'Acceptance to UK institution',
      'English language proficiency',
      'Financial requirements',
      'Valid CAS number',
      'Tuberculosis test results if applicable'
    ],
    eligibility: [
      'Confirmed place at UK institution',
      'Proof of funds for course and living costs',
      'English language qualification',
      'Valid Confirmation of Acceptance for Studies (CAS)',
      'Meet character requirements'
    ],
    processingTime: '3 weeks',
    category: 'study'
  },
  {
    id: 'business',
    title: 'Business Visitor Visa',
    description: 'For business-related activities in the UK',
    duration: 'Up to 6 months',
    fee: '£115',
    requirements: [
      'Proof of business activities',
      'Sufficient funds',
      'Intent to leave UK after visit',
      'No paid work activities'
    ],
    eligibility: [
      'Valid business purpose',
      'Adequate financial means',
      'Strong ties to home country',
      'No intention to work'
    ],
    processingTime: '3 weeks',
    category: 'business',
    businessActivities: {
      permitted: [
        'Attend meetings and conferences',
        'Negotiate contracts',
        'Attend trade fairs',
        'Site visits',
        'Intra-corporate activities'
      ],
      notPermitted: [
        'Paid work',
        'Direct selling to public',
        'Providing services',
        'Permanent employment'
      ]
    }
  },
  {
    id: 'family',
    title: 'Family Visa',
    description: 'Join a family member who is a UK citizen or settled person',
    duration: '2.5 - 5 years',
    fee: '£1,538',
    requirements: [
      'Relationship proof',
      'English language requirement',
      'Financial requirement',
      'Accommodation requirement',
      'Valid passport'
    ],
    eligibility: [
      'Valid relationship with UK sponsor',
      'Meet minimum income requirement',
      'Suitable accommodation',
      'English language proficiency',
      'Good character requirement'
    ],
    processingTime: '12 weeks',
    category: 'family'
  },
  {
    id: 'domestic-worker',
    title: 'Domestic Worker Visa',
    description: 'For domestic workers accompanying their employer to the UK',
    duration: 'Up to 6 months',
    fee: '£637',
    requirements: [
      'Worked for employer for at least one year',
      'Accompanying employer to UK',
      'Written terms of employment',
      'Intention to leave UK after stay'
    ],
    eligibility: [
      'Current domestic worker for employer',
      'One year continuous employment',
      'Valid employment contract',
      'Adequate maintenance funds'
    ],
    processingTime: '3 weeks',
    category: 'work'
  }
];

export default visaTypes;