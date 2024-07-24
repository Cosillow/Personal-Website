import FirstProjects from "../../pages/ProjectsPages/FirstProjects";

export interface ProjectCardProps {
    name: string
    tags: string[]
    description: string
    link: string
    images?: ImageGifs
}

export type ImageGifs = (string | {image: string, duration: number})[];

const projects: any[] = [
    {
        "name": "2D Physics Game",
        "tags": ["C++", "SDL2", "ImGui"],
        "description": "custom engine cross-platform game with real-time developer tools",
        "images": [{image: "doritos.gif", duration: 6.53}, {image: "sliding_monkey.gif", duration: 8.88}, {image: "oldest_rope.gif", duration: 5}, {image: "old_rope.gif", duration: 5}, {image: "canvas-zoom.gif", duration: 9.93}, {image: "dance_chimp_nobox.gif", duration: 8.81}, {image: "stillcam_level_editor.gif", duration: 22.99}, {image: "dev_tools.gif", duration: 26.02}, {image: "stuckcam.gif", duration: 8.01}, {image: "smoothcam.gif", duration: 9.57}, {image: "rope_attatched_smoothcam.gif", duration: 8.8}, {image: "rope-nocol-long.gif", duration: 6.49}, {image: "longrope_collisions.gif", duration: 10.99}]
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
        "images": ["iit-labs.png", {image: "old-portfolio.gif", duration: 23.8}]
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
        // "images": []
    },
    {
        "name": "NES-media Portfolio",
        "tags": ["HTML", "CSS", "JS"],
        "description": "wedding videography and photography portfolio for New England artist",
        "link": "https://nes-media.netlify.app/",
        "images": ["NES_home.jpg", "NES_wedding.jpg", "NES_photo.jpg"]
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
