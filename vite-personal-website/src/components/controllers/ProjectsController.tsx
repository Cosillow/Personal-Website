import FirstProjects from "../../pages/ProjectsPages/FirstProjects";

const projects: any[] = [
    {
        "name": "Music Player Monopoly",
        "tags": ["HTML", "CSS", "JS", "Node", "Express"],
        "description": "For this project, I worked collaboratively with a small team of five members throughout a semester, following approaches outlined by the agile framework Scrum. We integrated Spotify's public API into a web application that allows users to see statistics based on their music listening. In this class we also wrote a lot of software documentation, which I found beneficial to creating a cohesive end product.",
        "link": "http://www.musicplayermonopoly.com/index.html",
        "thumbnail": "images/MPM.png",
        "image": "images/MPM.png"
    },
    {
        "name": "Contact-Me",
        "tags": ["HTML", "CSS", "JS", "PHP", "MySQL"],
        "description": "In my second web development class at RPI, I was assigned a group to work on a term project with. We created Contact-Me, a web application that exists as a \"virtual business card\". This was the first project where I took a deep dive into backend work, which allowed me to get a stronger understanding of PHP and MySQL.",
        "link": "https://github.com/Group-2-F21-Web-Systems-Development/contact-me",
        "thumbnail": "images/contact-me.png",
        "image": "images/contact-me.png"
    },
    {
        "name": "NES-media Photography",
        "tags": ["HTML", "CSS", "JS"],
        "description": "After diving more into these web technologies, I was confident enough to work on a project for a client. This gave me experience in working towards someone else's goals, as well as communicating my needs and what can be done in the scope of a project.",
        "link": "https://nes-media.netlify.app/",
        "thumbnail": "images/NES-media.png",
        "image": "images/NES-media.png"
    },
    {
        "name": "Personal Website",
        "tags": ["HTML", "CSS", "JS"],
        "description": "This was the first personal project I took on. After taking intro to web design in my first semester at RPI, I became intrigued by what I could do with the web. With a lot more research (specifically css) on my own, I came up with this first draft!",
        "link": "https://connor-silloway.netlify.app/",
        "thumbnail": "images/personal.PNG",
        "image": "images/personal.PNG"
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