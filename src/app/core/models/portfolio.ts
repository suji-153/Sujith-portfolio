export interface Profile { title: string; role: string; intro: string; about: string[]; }
export interface SkillGroup { name: string; number: string; skills: string[]; note?: string; }
export interface Experience { role: string; company: string; period: string; highlights: string[]; }
export interface Education { degree: string; institution: string; year: string; }
export interface Project { number: string; title: string; description: string; stack: string[]; features: string[]; status: 'Planned'; }
export interface SocialLink { label: string; url: string; verified: boolean; }
