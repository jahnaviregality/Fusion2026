
import { EventDetails, CommitteeMember, ScheduleItem } from './types';

export const INSTITUTION_NAME = "Aditya College of Engineering, Madanapalle (Autonomous)";
export const INSTITUTION_ADDRESS = "Punganur Road, Valasapalle (Post), Annamayya (Dist) – 517325";
export const FEST_NAME = "FUSION 2K26";
export const TAGLINE = "Techno Cultural Fest – Integrating Modern Technology with Traditional Culture";
export const PRIZE_POOL = "₹1,00,000+";
export const FEST_DATES = "06–07 March 2026";

export const TECHNICAL_EVENTS: EventDetails[] = [
  {
    id: 'code-fusion',
    type: 'technical',
    title: 'Code Fusion',
    tagline: 'Competitive Coding',
    description: 'A fast-paced competitive coding event designed to test participants’ problem-solving ability, logical thinking, and coding proficiency. Solve real-world and algorithmic problems within a stipulated time.',
    fee: '₹200.00 per Candidate',
    eligibility: 'B.Tech. students',
    teamSize: 'Individual / Team (up to 2)',
    imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1200',
    rules: [
      'Participants must carry a valid College ID card.',
      'Coding must be done only in specified languages.',
      'Internet access is strictly prohibited unless explicitly permitted.',
      'Plagiarism leads to immediate disqualification.',
      'Decision of judges and coordinators will be final.'
    ],
    criteria: [
      'Correctness (40 Marks)',
      'Efficiency (25 Marks)',
      'Execution Time (15 Marks)',
      'Code Quality and Reliability (10 Marks)',
      'Problem Solving Approach (10 Marks)'
    ],
    prizes: 'Winner: ₹4000, Runner: ₹2000',
    day: '06.03.2026',
    facultyInCharge: ['Mr. M. Madhusudan Reddy', 'Mrs. N. Tejaswini'],
    studentCoordinators: [
      { name: 'Ms. G. Praneetha', phone: '88851 06466' },
      { name: 'Ms. A. Susmitha', phone: '83096 62579' }
    ]
  },
  {
    id: 'hacksprint',
    type: 'technical',
    title: 'HackSprint',
    tagline: '12 Hours Hackathon',
    description: 'The ultimate endurance challenge to design, develop, and present innovative technology-based solutions to real-world problems. This 12-hour intensive sprint pushes the boundaries of rapid prototyping and teamwork.',
    fee: '₹200.00 per Student',
    eligibility: 'B.Tech. students',
    teamSize: 'Team of 3 to 4',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c89eececbfbc?auto=format&fit=crop&q=80&w=1200',
    rules: [
      '12-hour duration for all development work.',
      'Use of Open-source Tools, Libraries, and Frameworks permitted.',
      'Teams must bring their own Laptops and accessories.',
      'Internet access provided only for development purposes.',
      'Projects evaluated on Innovation, Implementation, Feasibility, and Presentation.'
    ],
    criteria: [
      'Innovation & Creativity (25 Marks)',
      'Technical Implementation (30 Marks)',
      'Feasibility & Scalability (15 Marks)',
      'Problem Understanding & Relevance (10 Marks)',
      'Teamwork & Collaboration (10 Marks)',
      'Presentation & Demonstration (10 Marks)'
    ],
    prizes: 'Winner: ₹4000, Runner: ₹2000',
    day: '06.03.2026 – 07.03.2026',
    facultyInCharge: ['Dr. M. Roshini', 'Ms. S. Jahnavi'],
    studentCoordinators: [
      { name: 'Mr. G. Manil Kumar', phone: '90149 42224' },
      { name: 'Mr. C. Nanda Kishore', phone: '99635 17534' }
    ]
  },
  {
    id: 'paper-fusion',
    type: 'technical',
    title: 'Paper Fusion',
    tagline: 'Technical Paper Presentation',
    description: 'A platform to present Innovative Ideas, Research Findings, and Emerging Technologies across 6 streams (CSE, CSE Allied, ECE, EEE/ME/CE, Mathematics, Science).',
    fee: '₹200.00 per Student',
    eligibility: 'B.Tech. Students',
    teamSize: 'Maximum 2 Authors',
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200',
    rules: [
      'Original papers only (not previously published).',
      'Format strictly following IEEE standard.',
      '8–10 Minutes for Presentation followed by Q&A.',
      'Submit Paper in PDF/Word format within deadline.',
      'Plagiarism beyond permissible limits leads to disqualification.'
    ],
    criteria: [
      'Originality & Innovation (20 Marks)',
      'Technical Content & Depth (30 Marks)',
      'Relevance & Problem Definition (10 Marks)',
      'Paper Organization & IEEE Format (15 Marks)',
      'Presentation Skills (15 Marks)',
      'Response to Questions (10 Marks)'
    ],
    prizes: 'Winner: ₹3000 (per stream), Runner: ₹2000 (per stream)',
    day: '06.03.2026',
    facultyInCharge: ['Dr. P. Gangadhar Reddy', 'Mr. K. Manju Balaji'],
    studentCoordinators: [
      { name: 'Mr. B. Mahesh (ECE)', phone: '85558 67869' },
      { name: 'Mr. U. Gourav Reddy (CSE)', phone: '96527 00116' }
    ]
  },
  {
    id: 'tech-tambola',
    type: 'technical',
    title: 'Tech Tambola',
    tagline: 'The Ultimate Tech Quiz Arena',
    description: 'A high-octane technical quiz reimagined through the lens of Tambola. Participants identify complex technical concepts and buzzwords to mark their victory. It tests speed, accuracy, and depth of technical knowledge.',
    fee: '₹200.00 per Candidate',
    eligibility: 'B.Tech. students',
    teamSize: 'Individual',
    imageUrl: 'https://images.unsplash.com/photo-1606326666333-460170435163?auto=format&fit=crop&q=80&w=1200',
    rules: [
      'Tickets provided at the venue contain technical prompts.',
      'Entries marked only after identifying the concept correctly.',
      'No mobile phones or external assistance.',
      'Winning patterns: Early Five, Top Row, Full House, etc.',
      'Decision of coordinators and judges is final.'
    ],
    criteria: [
      'Conceptual Understanding (35 Marks)',
      'Accuracy of Responses (25 Marks)',
      'Speed & Presence of Mind (20 Marks)',
      'Rule Compliance & Discipline (10 Marks)',
      'Active Participation (10 Marks)'
    ],
    prizes: 'Winner: ₹4000, Runner: ₹2000',
    day: '06.03.2026',
    facultyInCharge: ['Dr. J. Pradeep', 'Mrs. S. Reddy Mubharaq'],
    studentCoordinators: [
      { name: 'Ms. G. Sumathi', phone: '75697 48278' },
      { name: 'Mr. S. Sameer Basha', phone: '93988 02932' }
    ]
  },
  {
    id: 'drone-robotics',
    type: 'technical',
    title: 'Drone Demo & Robotics Showcase',
    tagline: 'Live Technology Exhibition',
    description: 'A bright showcase of unmanned aerial systems and robotic automation. Featuring live drone flights and robotic system displays for hands-on exposure to futuristic hardware.',
    fee: '₹200.00 per Candidate',
    eligibility: 'Open to all students and faculty',
    teamSize: 'N/A',
    imageUrl: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&fit=crop&q=80&w=1200',
    rules: [
      'Live demonstrations only by authorized personnel.',
      'Safety instructions must be strictly followed.',
      'Entry into demo area is regulated.',
      'Photography/videography requires prior approval.',
      'Participation Certificate provided.'
    ],
    criteria: [
      'Participation (Ungraded Exhibition)'
    ],
    prizes: 'Participation Certificate',
    day: '07.03.2026',
    facultyInCharge: ['Mr. B. Subramanyam', 'Mr. M. Karunakara Reddy'],
    studentCoordinators: [
      { name: 'Ms. M. Prachanya', phone: '63032 69529' },
      { name: 'Mr. B. Rajesh', phone: '86881 33629' }
    ]
  }
];

export const CULTURAL_EVENTS: EventDetails[] = [
  {
    id: 'glam-walk',
    type: 'cultural',
    title: 'Glam Walk',
    tagline: 'Fashion Show',
    description: 'Set the stage on fire with presence, personality, and style. A vibrant showcase of elegance and confidence across diverse artistic themes.',
    fee: '₹200.00 per Candidate',
    eligibility: 'Solo (1 Participant)',
    teamSize: 'Individual',
    imageUrl: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1200',
    rules: [
      'Time Limit: 30-45 seconds.',
      'Music provided by organizer.',
      'Judge’s decision is final.',
      'Themes: Traditional, Western, Indo-western, Horror, Retro, etc.'
    ],
    criteria: [
      'Body Language & Stage Presence (10)',
      'Outfit & Styling (10)',
      'Walk & Grace (10)',
      'Overall Impact (10)'
    ],
    prizes: 'Winner: ₹5000.00, Runner: ₹3000.00',
    day: '06.03.2026',
    facultyInCharge: ['Mrs. N. Ajitha', 'Mrs. B. Sasikala'],
    studentCoordinators: [
      { name: 'Ms. V. Meenhaz', phone: '62815 32032' },
      { name: 'Mr. V. Sai Sanjeev', phone: '93464 99782' }
    ]
  },
  {
    id: 'rhythm',
    type: 'cultural',
    title: 'Rhythm',
    tagline: 'Singing Competition',
    description: 'A melodic showdown featuring solo and group vocalists. Capture the audience with the fire of your voice.',
    fee: '₹200.00 per Candidate',
    eligibility: 'Solo / Group (2-3)',
    teamSize: '1–3 members',
    imageUrl: 'https://images.unsplash.com/photo-1514525253344-f85653b743fb?auto=format&fit=crop&q=80&w=1200',
    rules: [
      'Time Limit: 3-5 minutes.',
      'Submit karaoke track (MP3) in advance.',
      'Bring own instruments if performing instrumental.',
      'Language no bar.'
    ],
    criteria: [
      'Vocal Quality/Melody (10)',
      'Coordination with Karaoke (10)',
      'Expression/Stage presence (10)',
      'Overall Impact (10)'
    ],
    prizes: 'Solo Winner: ₹3000, Runner: ₹2000. Group (2-3) Winner: ₹5000',
    day: '07.03.2026',
    facultyInCharge: ['Mr. J. T. Pramod', 'Mrs. S. Alimunisha'],
    studentCoordinators: [
      { name: 'Mr. R. Jitendra', phone: '91826 56229' },
      { name: 'Ms. A. Meenakshi', phone: '95506 09791' }
    ]
  },
  {
    id: 'dance-fever',
    type: 'cultural',
    title: 'Dance Fever',
    tagline: 'Dancing Competition',
    description: 'High-energy dance battles across all styles. From classical to breakdance, ignite the floor with your movement.',
    fee: '₹200.00 per Candidate',
    eligibility: 'Solo / Group (2-6)',
    teamSize: '1–6 members',
    imageUrl: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80&w=1200',
    rules: [
      'Time Limit: 3-5 minutes.',
      'Costume and makeup mandatory.',
      'Submit music track (MP3) in advance.',
      'Judge’s decision is final.'
    ],
    criteria: [
      'Synchronization with music (10)',
      'Choreography (10)',
      'Costume and Stage presence (10)',
      'Overall Impact (10)'
    ],
    prizes: 'Solo Winner: ₹3000, Runner: ₹2000. Group (2-6) Winner: ₹10,000',
    day: '07.03.2026',
    facultyInCharge: ['Mr. K. Balachandra', 'Mrs. J. Sabitha'],
    studentCoordinators: [
      { name: 'Ms. V. Meghana', phone: '96524 16879' },
      { name: 'Mr. M. Nithya Santhosh', phone: '90147 62467' }
    ]
  },
  {
    id: 'open-mic',
    type: 'cultural',
    title: 'Open Mic',
    tagline: 'Spotlight on Talent',
    description: 'The bright spotlight is yours. Showcase Poetry, Story Telling, Standup Comedy, or Beat Boxing in this solo arena of raw expression.',
    fee: '₹200.00',
    eligibility: 'Solo (1 Participant)',
    teamSize: 'Individual',
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200',
    rules: [
      'Time Limit: 3-5 minutes.',
      'Language: English or Telugu.',
      'Various categories allowed (Comedy, Poetry, Story Telling, etc.).',
      'Judge’s decision is final.'
    ],
    criteria: [
      'Talent (10)',
      'Performance (10)',
      'Confidence (10)',
      'Overall Impact (10)'
    ],
    prizes: 'Winner: ₹3000.00, Runner: ₹2000.00',
    day: '06.03.2026',
    facultyInCharge: ['Mr. Y. Arun Kumar Reddy', 'Dr. T. Maheswari'],
    studentCoordinators: [
      { name: 'Mr. R. Ashok', phone: '76719 92848' },
      { name: 'Ms. K. Ganesh Sriyagna', phone: '81794 59665' }
    ]
  }
];

// Added missing exports for Schedule and Committees
export const SCHEDULE_DAY_1: ScheduleItem[] = [
  { time: '09:00 AM', event: 'Inauguration Ceremony', venue: 'Main Auditorium' },
  { time: '10:30 AM', event: 'Code Fusion', venue: 'CSE Lab 1' },
  { time: '10:30 AM', event: 'Paper Fusion', venue: 'Seminar Hall' },
  { time: '11:00 AM', event: 'Tech Tambola', venue: 'College Lobby' },
  { time: '02:00 PM', event: 'Glam Walk', venue: 'Open Stage' },
  { time: '03:00 PM', event: 'Open Mic', venue: 'Amphitheater' },
];

export const SCHEDULE_DAY_2: ScheduleItem[] = [
  { time: '09:30 AM', event: 'HackSprint (Finale)', venue: 'Innovation Lab' },
  { time: '10:00 AM', event: 'Drone Demo & Robotics', venue: 'College Grounds' },
  { time: '11:30 AM', event: 'Rhythm (Singing)', venue: 'Open Stage' },
  { time: '02:00 PM', event: 'Dance Fever', venue: 'Main Stage' },
  { time: '04:00 PM', event: 'Valedictory & Awards', venue: 'Main Auditorium' },
];

export const TECH_COMMITTEE: CommitteeMember[] = [
  { role: 'Chief Patron', name: 'Dr. N. Satish Reddy', designation: 'Chairman' },
  { role: 'Patron', name: 'Dr. N. Nagabhushana Reddy', designation: 'Principal' },
  { role: 'Convener', name: 'Dr. R. Md. Shafi', designation: 'Professor & HOD' },
  { role: 'Co-Convener', name: 'Dr. J. Pradeep', designation: 'Associate Professor' },
];

export const CULTURAL_COMMITTEE: CommitteeMember[] = [
  { role: 'Patron', name: 'Dr. N. Nagabhushana Reddy', designation: 'Principal' },
  { role: 'Convener', name: 'Dr. P. Saleema', designation: 'Associate Professor' },
  { role: 'Co-Convener', name: 'Mrs. N. Ajitha', designation: 'Assistant Professor' },
];
