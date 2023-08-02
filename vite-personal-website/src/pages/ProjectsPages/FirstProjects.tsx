import { Link } from "react-router-dom";
import styled from "styled-components";

type ProjectCardProps = {
    "name": string,
    "tags": string[],
    "description": string,
    "link": string
    "thumbnail": string
    "image": string
}

const ProjectCard = styled.article`
    padding: 3em;
    border-radius: 50px;
    & + .projectCard {
        margin-top: 4em;
    }
`


const projectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
    return (
        <ProjectCard className="bg-secondary">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <ol>
                {props.tags.map((tag: string, index: number) =>
                    <li key={index}>{tag}</li>
                )}
            </ol>
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
                <ul>
                    {
                        props.projects.map((project: ProjectCardProps) => {
                            return <li key={project.name}>{ projectCard(project) }</li>;
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default FirstProjects;