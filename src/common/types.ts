export type ExperienceType = {
  id: string;
  date: string;
  period: string;
  company: string;
  position: string;
  cases: string[];
};

export type MainInfoType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country?: string;
  city?: string;
  birthDate?: string;
  businessDetails?: string;
};

export type AdditionalInfo = {
  linkedinProfileLink?: string;
  githubProfileLink?: string;
};

export type EducationType = {
  id: string;
  title: string;
  major: string;
  date: string;
  university: string;
};

export type DesiredPositionType = {
  desiredPosition: string;
  busyness: string;
  specializations: string;
  workSchedule: string;
};
