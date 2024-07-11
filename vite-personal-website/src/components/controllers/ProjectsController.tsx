import FirstProjects from "../../pages/ProjectsPages/FirstProjects";

export interface ProjectCardProps {
    name: string
    tags: string[]
    description: string
    link: string
    thumbnail: string
    images: string[]
}

const projects: any[] = [
    {
        "name": "2D Physics Game",
        "tags": ["C++", "SDL2", "ImGui"],
        "description": "Around half of my coursework has been projects unrelated to web technologies. However, my projects did not show that. So, I decided that I will learn about object oriented programming and design patterns by making a game in C++. Doing this without an existing game engine has obvious challenges, but it has made me a better programmer. I successfully researched and created classes that handle: input, collisions, physics, sprites, animations.",
        
        "thumbnail": "",
        "images": ["/cropped-connor-photo.png", "iit-labs.png", "old-portfolio.gif", "scratch-rockets.gif"]
    },
    {
        "name": "React Portfolio",
        "tags": ["React", "Scss", "React-redux"],
        "description": "Up until this point, the only framework I have used for frontend development has been Angular. So, I decided to refactor my original static portfolio with React, to get a better understanding of another framework. I have bigger plans in the future, but I already feel like I have gained a good understanding of React.",
        "link": "/home",
        "thumbnail": "",
        "images": [""]
    },
    {
        "name": "Troy Waterfront Farmers Market Musician System",
        "tags": ["Angular", "Bootstrap"],
        "description": "Collaborating with a five member team, we were tasked to find a client and deliver them an Information Technology solution for a problem they were facing. After speaking with many clients, we ended up creating a musician booking system for the Troy Waterfront Market. Previously, musicians emailed their availabilities and were scheduled manually. This aimed to reduce that time significantly. Working with a diverse team allowed us to specialize, with myself as the frontend developer.",
        
        "thumbnail": "",
        "images": [""]
    },
    {
        "name": "Music Player Monopoly",
        "tags": ["HTML", "CSS", "JS", "Node", "Express"],
        "description": "For this project, I worked collaboratively with a small team of five members throughout a semester, following approaches outlined by the agile framework Scrum. We integrated Spotify's public API into a web application that allows users to see statistics based on their music listening. In this class we also wrote a lot of software documentation, which I found beneficial to creating a cohesive end product.",
        "link": "http://www.musicplayermonopoly.com/index.html",
        "thumbnail": "MPM.png",
        "images": ["MPM.png"]
    },
    {
        "name": "Contact-Me",
        "tags": ["HTML", "CSS", "JS", "PHP", "MySQL"],
        "description": "In my second web development class at RPI, I was assigned a group to work on a term project with. We created Contact-Me, a web application that exists as a \"virtual business card\". This was the first project where I took a deep dive into backend work, which allowed me to get a stronger understanding of PHP and MySQL.",
        "link": "https://github.com/Group-2-F21-Web-Systems-Development/contact-me",
        "thumbnail": "contact-me.png",
        "images": ["contact-me.png"]
    },
    {
        "name": "NES-media Photography",
        "tags": ["HTML", "CSS", "JS"],
        "description": "After diving more into these web technologies, I was confident enough to work on a project for a client. This gave me experience in working towards someone else's goals, as well as communicating my needs of what can be done in the scope of a project. This project has also allowed me to iteratively improve on something as the clients needs evolve.",
        "link": "https://nes-media.netlify.app/",
        "thumbnail": "NES-media.png",
        "images": ["NES-media.png"]
    },
    {
        "name": "Personal Website",
        "tags": ["HTML", "CSS", "JS"],
        "description": "This was the first personal project I took on. After taking intro to web design in my first semester at RPI, I became intrigued by what I could do with the web. With a lot more research (specifically css) on my own, I came up with this first draft!",
        "link": "https://connor-silloway.netlify.app/",
        "thumbnail": "personal.PNG",
        "images": ["personal.PNG"]
    },
];

const ProjectsController = () => {
    return (
        <>
            <FirstProjects projects={projects} ></FirstProjects>
        </>
    );
}

export default ProjectsController;
