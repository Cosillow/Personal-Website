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
    position: relative;
`



const projectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
    return (
        <ProjectCard key={props.name} className="bg-secondary">
            <h2 className="font-md">{props.name}</h2>
            <p className="font-xs">{props.description}</p>
            <h3 className="font-sm m-v-sm m-l-sm">Skills</h3>
            <ul className="styled font-sm">
                {props.tags.map((tag: string, index: number) =>
                    <li key={index}>{tag}</li>
                )}
            </ul>
            {props.link && <div className="row justify-flex-end"><Link to={props.link}><button className="m-t-lg m-r-xl">vist</button></Link></div>}
        </ProjectCard>
    );
}


type FirstProjectsProps = {
    projects: any
}
const FirstProjects = (props: FirstProjectsProps) => {
    return (
        <>
            <h1 className="text-center font-xl m-v-sm">My Projects</h1>
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