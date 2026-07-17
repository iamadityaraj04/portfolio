import { Injectable } from '@angular/core';

const YEARS_OF_EXPERIENCE = 3;

export interface ResumeData {
  name: string;
  role: string;
  photo: string;
  summary: string;
  bio: string;
  email: string;
  location: string;
  links: {
    github: string;
    linkedin: string;
    leetcode: string;
  };
  resumeUrl: string;
  experience: {
    role: string;
    company: string;
    client?: string;
    period: string;
    description: string[];
  }[];
  education: {
    degree: string;
    school: string;
    period: string;
    details?: string;
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }[];
  skills: string[];
  certifications: {
    name: string;
    link?: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private data: ResumeData = {
    name: "Aditya Raj",
    role: "Software Engineer"  ,
    photo: "profile.png",
    summary: `With ${YEARS_OF_EXPERIENCE} years of experience in Java backend development. Specialized in building scalable APIs and distributed systems for global operations. Passionate about clean code, performance optimization, and collaborative problem-solving.`,
    bio: `I am a results-driven Java Backend Engineer with over ${YEARS_OF_EXPERIENCE} years of experience building mission-critical systems in the electric vehicle industry. My expertise lies in designing high-performance APIs and optimizing complex data workflows to support global operations across six countries. Driven by a passion for clean code and performance optimization, I thrive in collaborative environments that solve real-world problems through innovative technology.`,
    email: "raj.aditya@outlook.in",
    location: "Bengaluru, Karnataka",
    links: {
      github: "https://github.com/iamadityaraj04/",
      linkedin: "https://www.linkedin.com/in/iamadityaraj04/",
      leetcode: "https://leetcode.com/u/iamadityaraj04/"
    },    
    resumeUrl: "https://drive.google.com/file/d/12mOndJD6wT8qH8uWNTqniTrQ3CZwbp3f/view?usp=sharing",
    experience: [
      {
        role: "Software Engineer",
        company: "Wissen Technology",
        client: "Goldman Sachs",
        period: "Dec 2025 - Present",
        description: [
          "Collaborating on high-scale financial technology solutions and API development."
        ]
      },
      {
        role: "Software Engineer",
        company: "Wissen Technology",
        client: "Spiro (EV Industry)",
        period: "Jul 2023 - Nov 2025",
        description: [
          "Resolved post-payment database update failures by implementing a Redis cache, ensuring transaction state persistence and achieving 100% reliability",
          "Optimised the bulk upload API, reducing processing time from approximately 10 minutes for 500 records to 1 minute—a 90% improvement in efficiency.",
          "Built a scalable notification service to deliver mobile alerts efficiently to 10,000+ users, ensuring real-time delivery with minimal latency.",
          "Directed the integration of enhanced system capabilities through Java migration, embedding COQL functionality in Zoho CRM; improved operational efficiency by facilitating 3,500+ successful queries daily across teams.",
          "Implemented a CRM tool that streamlined lead management and data storage, saving the company $600 - $1200 monthly by reducing reliance on third-party services.",
          "Engineered custom wallet recharge options and high-efficiency charging modules, increasing app downloads by 20% (more than 1,000 new downloads) in 6 weeks due to improved customer satisfaction.",
          "Redesigned the Android application UI, improving user retention by 15% through a more visually appealing and intuitive interface."
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Technology",
        school: "Lovely Professional University - Jalandhar, Punjab",
        period: "Jul 2019 - May 2023",
        details: "Computer Science and Engineering"
      }
    ],
    projects: [
      {
        name: "AuthService",
        description: "Developed CRUD REST APIs for user registration and login using Spring Boot, with API documentation via Swagger. Implemented PostgreSQL for persistent storage of user data, ensuring secure authentication functionality.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Swagger"],
        link: "https://github.com/iamadityaraj04/AuthService"
      },
      {
        name: "Sweat",
        description: "Designed responsive web pages using industry-standard technologies (HTML/CSS/JavaScript/Bootstrap) that focused on improving top drop-off points in customer journey maps for better retention rates.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        link: "https://github.com/iamadityaraj04/sweat-website"
      }
    ],
    skills: [
      "Java", "Spring Boot", "Data Structures", "Algorithms", "PostgreSQL",
      "Git", "Swagger", "Postman", "JIRA", "Grafana", "AWS", "Jenkins",
      "HTML", "CSS"
    ],
    certifications: [
      {
        name: "AWS Cloud Practitioner",
        link: "https://www.credly.com/badges/2fba49b3-636e-4e38-8c79-146c857a4a43/public_url"
      },
      {
        name: "Data Structures, Algorithms and System Design",
        link: "https://drive.google.com/file/d/12XFsNiG8vD7SUpOvpN6RlWscuel9d947/view?usp=share_link"
      }
    ]
  };

  getResume() {
    return this.data;
  }
}
