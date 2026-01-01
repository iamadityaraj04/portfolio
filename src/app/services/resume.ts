import { Injectable } from '@angular/core';

export interface ResumeData {
  name: string;
  role: string;
  photo: string;
  bio: string;
  email: string;
  location: string;
  links: {
    github: string;
    linkedin: string;
    leetcode: string;
  };
  experience: {
    role: string;
    company: string;
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
  certifications: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private data: ResumeData = {
    name: "Aditya Raj",
    role: "Software Engineer",
    photo: "profile.png",
    bio: "Software engineer with 2.5+ years of experience in Java Backend development, currently employed by an organisation in the electric vehicle industry that operates across 6 countries. Key responsibilities include designing and developing efficient APIs to support the company's operational requirements. Skilled in programming languages, software design, and debugging. Strong focus on team collaboration and achieving results.",
    email: "raj.aditya@outlook.in",
    location: "Bengaluru, Karnataka",
    links: {
      github: "https://github.com/iamadityaraj04/",
      linkedin: "https://www.linkedin.com/in/iamadityaraj04/",
      leetcode: "https://leetcode.com/u/iamadityaraj04/"
    },
    experience: [
      {
        role: "Software Engineer",
        company: "Wissen Technology",
        period: "Jun 2023 - Present",
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
        link: "https://github.com/iamadityaraj04/Sweat"
      }
    ],
    skills: [
      "Java", "Spring Boot", "Data Structures", "Algorithms", "PostgreSQL",
      "Git", "Swagger", "Postman", "JIRA", "Grafana", "AWS", "Jenkins",
      "HTML", "CSS"
    ],
    certifications: [
      "AWS Cloud Practitioner (Aug 2023)"
    ]
  };

  getResume() {
    return this.data;
  }
}
