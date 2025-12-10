import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Training Superintelligence",
    description: "Turing develops large-scale RL environments and data generation systems that <span class='gradient-highlight'>train multimodal agents</span> to improve model performance in coding, real-world, economically valuable tasks, and advanced STEM reasoning.",
    caseStudy: {
      problem: "When traffic hit 50,000 requests per minute, the API response time spiked from 300 ms to over 2.5 seconds, causing timeouts and failed matches.",
      solution: "I added Redis caching, optimized SQL queries, and scaled the service to 5 load-balanced backend instances.",
      result: "Average response time dropped to 120 ms, uptime reached 99.98%, and the system handled 120,000 requests per minute with no failures."
    },
    image: "/lovable-uploads/Training.png",
    tags: ["Python", "FastAPI", "Postgres", "Redis", "NGINX", "REST APIs", "Elasticsearch", "OAuth2", "Prometheus", "Grafana"],
    demoUrl: "https://www.turing.com/",
  },
  {
    id: 2,
    title: "ptxmetals",
    description: "Creating Value from <span class='gradient-highlight'>High-Quality Gold and Copper-Nickel-PGE Assets</span> Located in World-Acclaimed Mining Camps of Northern Ontario",
    caseStudy: {
      problem: "As user and content load increased, API response time climbed past 1.8 s and page rendering lagged under 8,000 requests/day.",
      solution: "I refactored the Django ORM usage, added Redis caching for static and infrequently changed data, and deployed a second Django worker.",
      result: "Response time dropped to about 220 ms, and the site reliably handled 20,000 requests/day with zero timeouts."
    },
    image: "/lovable-uploads/PTXMetals.png",
    tags: ["Python", "Django", "DRF", "Celery", "Gunicorn", "MongoDB", "CI/CD", "OAuth2"],
    demoUrl: "https://ptxmetals.com/",
  },
  {
    id: 3,
    title: "MentorCruise",
    description: "1-on-1 Mentorship in <span class='gradient-highlight'>Interviewing</span>, <span class='gradient-highlight'>Marketing</span>, <span class='gradient-highlight'>Product</span>, <span class='gradient-highlight'>Startup</span>, and <span class='gradient-highlight'>Data Science</span> to Help You Grow Your Career.",
    caseStudy: {
      problem: "When mentor/mentee matching data and session logs exceeded 200,000 records, page response time rose to ~2.5 s, and user churn climbed 5%.",
      solution: "I refactored the Django ORM queries, added Redis caching for frequent lookups, moved heavy processing into background tasks with Celery, and horizontally scaled to 3 web workers.",
      result: "Response time dropped to ~180 ms, page load success rate hit 99.9%, and user churn fell by approximately 4%."
    },
    image: "/lovable-uploads/MentorCruise.png",
    tags: ["Python", "Django", "DRF", "RabbitMQ", "AWS", "Sentry", "docker", "kubernetes"],
    demoUrl: "https://mentorcruise.com/",
  },
  {
    id: 4,
    title: "trakstar",
    description: "Trakstar is a web-based performance management and <span class='gradient-highlight'>employee review platform</span> that helps organizations manage performance reviews, goal tracking, feedback, and analytics — all in one place. It supports team leads, HR departments, and individual employees by providing tools to set objectives, track progress, evaluate performance, generate reports, and review growth over time.",
    caseStudy: {
      problem: "A rise in unauthorized login attempts—over 5,000 per day—put user accounts at risk and increased server load.",
      solution: "I added rate-limiting, strengthened password hashing, and implemented multi-factor authentication in the Django backend.",
      result: "Automated attacks dropped by 98%, account security measurably increased, and authentication load on the server decreased by 40%."
    },
    image: "/lovable-uploads/Trakstar.png",
    tags: ["Python", "Django", "DRF", "GraphQL", "Azure", "Nginx", "Gunicorn", "OAuth2"],
    demoUrl: "https://www.trakstar.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Micro Projects Section */}
      {/* <div className="mt-16">
        <h3 className="section-title mb-8">Micro Projects</h3>
        <GlowingEffectDemo />
      </div> */}
    </section>
  );
};

export default Projects;
