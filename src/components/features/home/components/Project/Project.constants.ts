import type { Project } from "./Project.types";

export const PROJECTS: Project[] = [
    {
        title: "Web Portfolio",
        description: "A showcase of my projects and skills, built with Next.js, Node.js, Tailwind CSS, and Docker, reflecting my passion for web development.",
        image: "/path/to/image1.jpg",
        //link: "https://project1.com",
        technologies: ["Next", "Node", "Tailwind", "Docker"],
    },
    {
        title: "AI Sound Classification",
        description: "Web-based application using HTML, CSS, JavaScript, and React, integrating TensorFlow.js for real-time sound classification, enabling the identification of various sounds, animal noises and human voices. Implemented Node.js and Python backend for audio processing and model management, employing OpenSSL for website security and conducting user testing to refine UI/UX based on feedback.",
        image: "/path/to/image1.jpg",
        //link: "https://project1.com",
        technologies: ["React", "Node", "Python", "TensorFlow", "OpenSSL"],
    },
    {
        title: "VR Hospice Care",
        description: "Conducted user testing to enhance user interface and user experience (UI/UX), gathering valuable feedback from over 50 nursing students to improve educational effectiveness. Utilized debugging techniques to identify and resolve over 75 software issues, resulting in a 90% reduction in application size and significantly improving performance and stability. Developed and implemented comprehensive test cases and documentation to ensure adherence to quality standards throughout the application life cycle.",
        image: "/path/to/image1.jpg",
        //link: "https://project1.com",
        technologies: ["Unity", "C#", "Plastics"],
    },
    {
        title: "Pokemon Search",
        description: "Designed a responsive and intuitive web application utilizing React libraries with APIs to enable users to easily search for and retrieve information on Pokemons by name. Integrated the Google Earth API and PokeAPI to provide real-time proximity data, leading to a 40% increase in user engagement and interactivity.",
        image: "/path/to/image1.jpg",
        //link: "https://project1.com",
        technologies: ["React", "FIGMA", "GCP"],
    },
    {
        title: "Fitness & Health",
        description: "Implemented a secure data storage system using Firebase to protect user information, resulting in an increase in user trust and engagement by 20%. Utilized Google API to integrate location retrieval functionality into the Android application, allowing users to track their workouts, activities, and macronutrients accurately.",
        image: "/path/to/image1.jpg",
        //link: "https://project1.com",
        technologies: ["Android Studio", "Java", "SQL", "GCP"],
    },
    {
        title: "Car Rental",
        description: "GUI-based application to allow users to check available units from within a database.",
        image: "/path/to/image1.jpg",
        //link: "https://project1.com",
        technologies: ["Python", "SQL"],
    },
    /*
    {
        title: "Project 1",
        description: "Description of project 1",
        image: "/path/to/image1.jpg",
        link: "https://project1.com",
        technologies: ["React", "TypeScript", "Tailwind"],
    },
    */
];

export const GRID_LAYOUTS = {
    THREE_OR_SIX: "lg:grid-cols-3",
    DEFAULT: "lg:grid-cols-2",
} as const;

export const CARD_ANIMATION = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.15 },
    },
    exit: {
        opacity: 0,
        transition: { delay: 0.2, duration: 0.15 },
    },
} as const;