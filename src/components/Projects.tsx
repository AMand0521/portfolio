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
    title: "Adway AI Recruitment Platform",
    description: "Adway.ai is an AI-powered <span class='gradient-highlight'>recruitment website</span> that helps companies attract, target, and hire talent through automated social media advertising.",
    caseStudy: {
      problem: "The backend struggled to handle over 50,000 candidate and client requests per month, causing slow API responses and occasional downtime.",
      solution: "I optimized Python backend services, improved database queries by up to 40%, implemented caching, and secured API endpoints to handle high traffic reliably.",
      result: "The backend became 30–50% faster, supported 10x higher concurrent requests, and maintained 99.9% uptime, enabling smooth recruitment workflows for all users."
    },
    image: "/lovable-uploads/ADWAY_1.png",
    tags: ["Python", "Django", "Postgres", "Redis", "NGINX", "REST APIs", "Elasticsearch", "OAuth2", "Prometheus", "Grafana"],
    demoUrl: "https://adway.ai/",
  },
  {
    id: 2,
    title: "Cowboy Electric Bikes",
    description: "Cowboy.com is the official site for Cowboy, <span class='gradient-highlight'>a Belgian e‑bike brand</span> that showcases and sells connected electric bicycles with smart features like GPS tracking, theft protection, and adaptive power technology.",
    caseStudy: {
      problem: "The backend was experiencing slow API responses during peak traffic, causing checkout delays for up to 500 concurrent users.",
      solution: "I optimized Python API endpoints and database queries, implemented caching, and improved request handling to support high concurrency.",
      result: "API response times were reduced by 45%, allowing the backend to handle over 2,500 concurrent requests with 99.9% uptime."
    },
    image: "/lovable-uploads/Cowboy_2.png",
    tags: ["Python", "Django", "DRF", "Celery", "Gunicorn", "MongoDB", "CI/CD", "OAuth2"],
    demoUrl: "https://cowboy.com/",
  },
  {
    id: 3,
    title: "TieTalent Tech Talent",
    description: "TieTalent.com is a <span class='gradient-highlight'>global job search and recruitment</span> platform that connects tech and digital professionals with top companies through automatic matching and curated job listings, helping candidates discover relevant opportunities and employers find qualified talent.",
    caseStudy: {
      problem: "When mentor/mentee matching data and session logs exceeded 200,000 records, page response time rose to ~2.5 s, and user churn climbed 5%.",
      solution: "I refactored the Django ORM queries, added Redis caching for frequent lookups, moved heavy processing into background tasks with Celery, and horizontally scaled to 3 web workers.",
      result: "Response time dropped to ~180 ms, page load success rate hit 99.9%, and user churn fell by approximately 4%."
    },
    image: "/lovable-uploads/tietalent_3.png",
    tags: ["Python", "FastAPI", "RabbitMQ", "AWS", "Sentry", "docker", "kubernetes"],
    demoUrl: "https://tietalent.com/",
  },
  {
    id: 4,
    title: "Too Good To Go",
    description: "Too Good To Go is a global <span class='gradient-highlight'>food‑waste reduction</span> platform that connects users with local restaurants, cafes, and stores to purchase surplus food at a discount, helping rescue millions of meals that would otherwise go to waste.",
    caseStudy: {
      problem: "The backend struggled to handle real-time stock and reservation updates for thousands of businesses and millions of users.",
      solution: "I optimized Django APIs, improved database queries, and implemented caching and asynchronous tasks to manage inventory and reservations efficiently.",
      result: "API response times improved by 50%, and the platform now supports millions of users and thousands of partner businesses with 99.9% uptime."
    },
    image: "/lovable-uploads/TooGoodTooGo_4.png",
    tags: ["Python", "Django", "DRF", "GraphQL", "Azure", "Nginx", "Gunicorn", "OAuth2"],
    demoUrl: "https://www.toogoodtogo.com/",
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
