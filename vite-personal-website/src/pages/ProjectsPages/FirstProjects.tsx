import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../../components/Carousel";
import { ProjectCardProps } from "../../components/controllers/ProjectsController";

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

const ProjectCard = styled.article`
    padding: 3em;
    border-radius: 50px;
    margin-bottom: 4em;
    position: relative;
`

const projectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
    return (
        <ProjectCard key={props.name} className="bg-secondary">
            <h2 className="font-m">{props.name}</h2>
            <p className="font-xs">{props.description}</p>
            <h3 className="font-s m-v-s m-l-s">Technologies:</h3>
            <ul className="styled font-s">
                {props.tags.map((tag: string, index: number) =>
                    <li key={index}>{tag}</li>
                )}
            </ul>
            {props.link && <div className="row justify-flex-end"><Link className="m-t-l m-r-xl" to={props.link}><button className="m-s">vist</button></Link></div>}
            <Carousel images={props.images}></Carousel>
        </ProjectCard>
    );
}

type FirstProjectsProps = {
    projects: any
}
const FirstProjects = (props: FirstProjectsProps) => {
    return (
        <ParallaxBG>
            <BackgroundHeading className="text-center font-xl p-v-s">My Projects</BackgroundHeading>
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