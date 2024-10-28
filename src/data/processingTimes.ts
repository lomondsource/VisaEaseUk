import { ProcessingTime } from '../types/visa';

export const processingTimes: ProcessingTime[] = [
  {
    category: 'Visit Visas',
    subcategories: [
      { name: 'Standard Visitor', time: '3 weeks' },
      { name: 'Marriage Visitor', time: '3 weeks' },
      { name: 'Chinese tour group', time: '3 weeks' },
      { name: 'Transit', time: '3 weeks' }
    ]
  },
  {
    category: 'Study Visas',
    subcategories: [
      { name: 'Student', time: '3 weeks' },
      { name: 'Child Student', time: '3 weeks' },
      { name: 'Short-term student', time: '3 weeks', description: '6 to 11 month English language courses' }
    ]
  },
  {
    category: 'Family Visas',
    subcategories: [
      { name: 'Partner or spouse', time: '12 weeks' },
      { name: 'Parent', time: '12 weeks' },
      { name: 'Child', time: '12 weeks' },
      { name: 'Adult coming to be cared for by a relative', time: '12 weeks' }
    ]
  },
  {
    category: 'Work Visas',
    subcategories: [
      { name: 'Skilled Worker', time: '3 weeks' },
      { name: 'Health and Care Worker', time: '3 weeks' },
      { name: 'Global Talent', time: '3 weeks' },
      { name: 'Innovator Founder', time: '3 weeks' },
      { name: 'Start-up', time: '3 weeks' },
      { name: 'Scale-up Worker', time: '3 weeks' }
    ]
  }
];