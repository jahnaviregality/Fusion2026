
export interface Coordinator {
  name: string;
  phone: string;
}

export interface EventDetails {
  id: string;
  type: 'technical' | 'cultural';
  title: string;
  tagline: string;
  description: string;
  fee: string;
  eligibility: string;
  teamSize: string;
  rules: string[];
  criteria: string[];
  prizes: string;
  day: string;
  imageUrl?: string;
  facultyInCharge: string[];
  studentCoordinators: Coordinator[];
}

export interface CommitteeMember {
  role: string;
  name: string;
  designation?: string;
  phone?: string;
}

export interface ScheduleItem {
  time?: string;
  event: string;
  venue?: string;
}
