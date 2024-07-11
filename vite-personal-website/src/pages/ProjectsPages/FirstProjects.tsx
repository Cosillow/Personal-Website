import { Link } from "react-router-dom";
import styled from "styled-components";

const ParallaxBG = styled.div`
    background-image: radial-gradient(var(--color-accent) 1.6500000000000001px, var(--color-primary ) 1.6500000000000001px);
    background-size: 33px 33px;    
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    // Set stacking context (without this, the before on BackgroundHeading doesn't show)
    position: relative;
    z-index: 1;
`

const BackgroundHeading = styled.h1`
    width: fit-content;
    position: relative;
    background: transparent;

    &::before {
        content: '';
        background: var(--color-primary);
        display: block;
        width: 120%;
        height: 60%;
        position: absolute;
        left: -10%;
        top: 20%;
        z-index: -1;
        border-radius: 50px;
    }
`;

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
            <h3 className="font-sm m-v-sm m-l-sm">Technologies:</h3>
            <ul className="styled font-sm">
                {props.tags.map((tag: string, index: number) =>
                    <li key={index}>{tag}</li>
                )}
            </ul>
            {props.link && <div className="row justify-flex-end"><Link className="m-t-lg m-r-xl" to={props.link}><button className="m-sm">vist</button></Link></div>}
        </ProjectCard>
    );
}


type FirstProjectsProps = {
    projects: any
}
const FirstProjects = (props: FirstProjectsProps) => {
    return (
        <ParallaxBG>
            <BackgroundHeading className="text-center font-xl p-v-sm">My Projects</BackgroundHeading>
            <div className="container">
                    {
                        props.projects.map((project: ProjectCardProps) => {
                            return projectCard(project);
                        })
                    }
            </div>
        </ParallaxBG>
        
    );
}

export default FirstProjects;