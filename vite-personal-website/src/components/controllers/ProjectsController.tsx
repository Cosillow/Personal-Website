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
        "description": "custom engine cross-platform game with real-time developer tools",
        "images": ["canvas-zoom.gif", "dev_tools.gif", "longrope_collisions.gif", "doritos.gif", "dance_chimp_nobox.gif", "old_rope.gif", "oldest_rope.gif", "rope_attatched_smoothcam.gif", "rope-nocol-long.gif", "sliding_monkey.gif", "smoothcam.gif", "stillcam_level_editor.gif", "stuckcam.gif"]
    },
    {
        "name": "Remote Logging and Monitoring System",
        "tags": ["Angular", "Bootstrap", "Firebase", "gRPC"],
        "description": "custom library for transdisciplinary artist collective",
        "images": ["masary_home.jpg", "masary_dashboard.jpg", "masary_dashboard_detail.jpg"]
    },
    {
        "name": "Personal Portfolio",
        "tags": ["React", "Scss", "Styled-components", "React-redux"],
        "description": "react-based custom web portfolio with design emphasis",
        "link": "/home",
        "images": ["iit-labs.png", "old-portfolio.gif"]
    },
    {
        "name": "Troy Farmers Market Musician System",
        "tags": ["Angular", "Bootstrap"],
        "description": "custom musician booking solution for non-profit org.",
        "images": ["twfm_login.jpg", "twfm_admin.jpg", "twfm_form.jpg"]
    },
    {
        "name": "Music Player Monopoly",
        "tags": ["HTML", "CSS", "JS", "Node", "Express"],
        "description": "statistics tracker and music player for Spotify",
        "link": "http://www.musicplayermonopoly.com/index.html",
        "images": ["MPM-songs.jpg", "MPM-decades.jpg", "/MPM-artists.jpg", "MPM-genre.jpg", "MPM-playlist.jpg"]
    },
    {
        "name": "Contact-Me",
        "tags": ["HTML", "CSS", "JS", "PHP", "MySQL"],
        "description": "social media business card platform for securing relationships at networking events",
        "link": "https://github.com/Group-2-F21-Web-Systems-Development/contact-me",
        "images": ["contact-me.png"]
    },
    {
        "name": "NES-media Portfolio",
        "tags": ["HTML", "CSS", "JS"],
        "description": "wedding videography and photography portfolio for New England artist",
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
