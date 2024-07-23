import FirstProjects from "../../pages/ProjectsPages/FirstProjects";

export interface ProjectCardProps {
    name: string
    tags: string[]
    description: string
    link: string
    images?: string[]
}

const projects: any[] = [
    {
        "name": "2D Physics Game",
        "tags": ["C++", "SDL2", "ImGui"],
        "description": "Custom engine cross-platform game with real-time developer tools",
        "images": ["canvas-zoom.gif", "dev_tools.gif", "longrope_collisions.gif", "doritos.gif", "dance_chimp_nobox.gif", "old_rope.gif", "oldest_rope.gif", "rope_attatched_smoothcam.gif", "rope-nocol-long.gif", "sliding_monkey.gif", "smoothcam.gif", "stillcam_level_editor.gif", "stuckcam.gif"]
    },
    {
        "name": "Personal Portfolio",
        "tags": ["React", "Scss", "React-redux"],
        "description": "React-based custom web portfolio with design emphasis",
        "link": "/home",
        "images": ["iit-labs.png", "old-portfolio.gif"]
    },
    {
        "name": "Troy Waterfront Farmers Market Musician System",
        "tags": ["Angular", "Bootstrap"],
        "description": "Real-world client custom musician booking solution",
        "images": [""]
    },
    {
        "name": "Music Player Monopoly",
        "tags": ["HTML", "CSS", "JS", "Node", "Express"],
        "description": "Spotify statistics tracker and music player",
        "link": "http://www.musicplayermonopoly.com/index.html",
        "images": ["MPM-songs.jpg", "MPM-decades.jpg", "/MPM-artists.jpg", "MPM-genre.jpg", "MPM-playlist.jpg"]
    },
    {
        "name": "Contact-Me",
        "tags": ["HTML", "CSS", "JS", "PHP", "MySQL"],
        "description": "Social media (business card) platform based on securing relationships made at networking events",
        "link": "https://github.com/Group-2-F21-Web-Systems-Development/contact-me",
        "images": ["contact-me.png"]
    },
    {
        "name": "NES-media Photography",
        "tags": ["HTML", "CSS", "JS"],
        "description": "Photography and wedding videography portfolio for artist in New England",
        "link": "https://nes-media.netlify.app/",
        "images": ["NES-media.png"]
    }
];

const ProjectsController = () => {
    return (
        <>
            <FirstProjects projects={projects} ></FirstProjects>
        </>
    );
}

export default ProjectsController;
