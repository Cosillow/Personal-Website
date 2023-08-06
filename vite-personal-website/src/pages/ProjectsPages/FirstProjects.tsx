import { Link } from "react-router-dom";
import styled from "styled-components";

interface ProjectCardProps {
    name: string
    tags: string[]
    description: string
    link: string
    thumbnail: string
    image: string
}

const ProjectCard = styled.article`
    padding: 3em;
    border-radius: 50px;
    margin-bottom: 4em;
`


const projectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
    return (
        <ProjectCard key={props.name} className="bg-secondary">
            <h2 className="font-sm">{props.name}</h2>
            <p>{props.description}</p>
            <h3 className="font-xs m-v-sm">Skills</h3>
            <ul className="styled m-b-lg">
                {props.tags.map((tag: string, index: number) =>
                    <li key={index}>{tag}</li>
                )}
            </ul>
            <Link to={props.link}><button>vist</button></Link>
        </ProjectCard>
    );
}


type FirstProjectsProps = {
    projects: any
}
const FirstProjects = (props: FirstProjectsProps) => {
    return (
        <>
            <h1 className="text-center">My Projects</h1>
            <div className="container">
                    {
                        props.projects.map((project: ProjectCardProps) => {
                            return projectCard(project);
                        })
                    }
            </div>
        </>
    );
}

export default FirstProjects;