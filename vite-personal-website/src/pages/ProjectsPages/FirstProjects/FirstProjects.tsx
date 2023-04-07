import { Link } from "react-router-dom";
import "./FirstProject.scss";

type projectCardProps = {
    "name": string,
    "tags": string[],
    "description": string,
    "link": string
    "thumbnail": string
    "image": string
}
const projectCard = (props: projectCardProps) => {
    return (
        <div className="bg-secondary projectCard">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <ol>
                {props.tags.map((tag: string) =>
                    <li>{tag}</li>
                )}
            </ol>
            <Link to={props.link}><button>vist</button></Link>
        </div>
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
                    props.projects.map((project: any) => {
                        return projectCard(project);
                    })
                }
            </div>
        </>
    );
}

export default FirstProjects;