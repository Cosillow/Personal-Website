import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../../components/Carousel";
import { ProjectCardProps } from "../../components/controllers/ProjectsController";

const ParallaxBG = styled.div`
    background-image: radial-gradient(var(--color-accent) 1.6500000000000001px, var(--color-primary ) 1.6500000000000001px);
    background-size: 33px 33px; 
    background-attachment: fixed;
    background-position: center;
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
        width: 140%;
        height: 120%;
        position: absolute;
        left: -20%;
        top: -10%;
        z-index: -1;
        border-radius: 50px;
    }
`;

const ProjectContainer = styled.div`
    padding: clamp(25px, 5vw, 5vw);
    width: 100%;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: center; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    gap: 10px;
`

const ProjectCard = styled.article`
    padding: 3em;
    border-radius: 10px;
    /* margin-bottom: 4em; */
    position: relative;
    
    grid-column: span 1;
`

const projectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
    return (
        <ProjectCard key={props.name} className="bg-secondary">
            <Carousel images={props.images}></Carousel>
            <h2 className="font-m">{props.name}</h2>
            <p className="font-xs">{props.description}</p>
            <h3 className="font-s m-v-s m-l-s">Technologies:</h3>
            <ul className="styled font-s">
                {props.tags.map((tag: string, index: number) =>
                    <li key={index}>{tag}</li>
                )}
            </ul>
            {props.link && <div className="row justify-flex-end"><Link className="m-t-l m-r-xl" to={props.link}><button className="m-s">vist</button></Link></div>}
        </ProjectCard>
    );
}

type FirstProjectsProps = {
    projects: any
}
const FirstProjects = (props: FirstProjectsProps) => {
    return (
        <ParallaxBG>
            <BackgroundHeading className="text-center font-xl p-v-s m-t-xxl">My Projects</BackgroundHeading>
            <ProjectContainer>
                    {
                        props.projects.map((project: ProjectCardProps) => {
                            return projectCard(project);
                        })
                    }
            </ProjectContainer>
        </ParallaxBG>
        
    );
}

export default FirstProjects;