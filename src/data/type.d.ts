export interface Contact {
  name: string;
  website?: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Project {
  name: string;
  period: string;
  description: string[];
  highlights: string[];
}

export interface Skills {
  programmingLanguages: {
    [years: string]: string[];
  };
  technologies: string[];
  awards: string[];
  courses: string[];
}

export interface ResumeData {
  contact: Contact;
  about: string[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  skills: Skills;
}
