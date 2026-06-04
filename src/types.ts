export type Translatable = string | Record<string, string>;

export interface Cert {
  name: Translatable;
  issuer: string;
  date: Translatable;
  link: string;
}

export interface ExperienceProject {
  name: Translatable;
  description: Translatable;
}

export interface SkillItem {
  name: Translatable;
  icon: string;
}

export interface SkillCategory {
  category: Translatable;
  items: SkillItem[];
}

export interface Project {
  imageKey: string;
  title: Translatable;
  description: Translatable;
  tags: string[];
  link: string;
  deploy: string;
  image?: string;
}
