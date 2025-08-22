
import { GoRepo, GoLink } from 'react-icons/go';

// --- SKILLS --- //
export const skills = {
    languages: ['Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    frameworks: ['Spring Boot', 'React', 'Tailwind CSS', 'Hibernate'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'Postman', 'Maven', 'Jira']
};

// --- PROJECTS --- //
export const projects = [
    {
        title: 'RESTful Product API',
        description: 'A comprehensive REST API for managing a product inventory system, featuring full CRUD operations, advanced search with filtering, and pagination to handle large datasets efficiently.',
        tech: ['Java', 'Spring Boot', 'MySQL', 'JPA/Hibernate'],
        repoLink: 'https://github.com/your-username/product-api', // <-- TODO: Replace with your repo link
        liveLink: '', // <-- TODO: Add live link if deployed
        icon: GoRepo,
        liveIcon: GoLink
    },
    {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React and Tailwind CSS to showcase my skills and projects. Designed with a clean UI/UX to provide a great user experience.',
        tech: ['React', 'Tailwind CSS', 'JavaScript'],
        repoLink: 'https://github.com/your-username/my-portfolio', // <-- TODO: Replace with your repo link
        liveLink: '', // <-- TODO: Add live link if deployed
        icon: GoRepo,
        liveIcon: GoLink
    },
    // Add more projects here
];

// --- CONTACT --- //
export const contact = {
    email: 'aabdulhakeem427@gmail.com', // <-- TODO: Replace with your email
    linkedin: 'https://www.linkedin.com/in/abdul-hakeem-530a64178/', // <-- TODO: Replace with your LinkedIn URL
    github: 'https://github.com/AbdulHakeem427' // <-- TODO: Replace with your GitHub URL
};
