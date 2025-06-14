export interface JobPost {
  id?: number;
  postId: number;
  postProfile: string;
  postDesc: string;
  reqExperience: number;
  postTechStack: string[];
}

export interface Skill {
  name: string;
}

export interface FormState {
  postId: string;
  postProfile: string;
  reqExperience: number | undefined;
  postTechStack: string[];
  postDesc: string;
}

// Skill set for the job post
export const SkillSet = [
  {
    name: "Javascript",
  },
  {
    name: "Java",
  },
  {
    name: "Python",
  },
  {
    name: "Django",
  },
  {
    name: "Rust",
  },
];
