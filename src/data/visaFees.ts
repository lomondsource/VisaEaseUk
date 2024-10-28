import { VisaFee } from '../types/visa';

export const visaFees: VisaFee[] = [
  {
    category: 'Priority Services',
    fees: [
      {
        type: 'Priority Service (5 working days)',
        currentFee: 500,
        newFee: 500,
        change: 0,
        notes: 'Additional fee per person, including dependants'
      },
      {
        type: 'Super Priority Service (next working day)',
        currentFee: 800,
        newFee: 1000,
        change: 200,
        notes: 'Additional fee per person, including dependants'
      },
      {
        type: 'Priority Settlement (30 working days)',
        currentFee: 573,
        newFee: 500,
        change: -73,
        notes: 'For Family visa applications from outside the UK'
      }
    ]
  },
  // ... existing visa fee categories remain the same
];