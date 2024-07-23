import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../../components/ContinuousCarousel";
import { ProjectCardProps } from "../../components/controllers/ProjectsController";
import React from "react";
import ContinuousCarousel from "../../components/ContinuousCarousel";
import SingleCarousel from "../../components/SingleCarousel";

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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 10px;
`

const ProjectCard = styled.article`
    border-radius: 10px;
    position: relative;
    grid-column: span 1;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    height: fit-content;
`

const projectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
    return (
        <ProjectCard key={props.name} className="bg-secondary">
                <SingleCarousel images={props.images}></SingleCarousel>
                <div className="m-t-l p-h-l p-b-l">
                    <h2 className="font-l">{props.name}</h2>
                    <p className="m-t-xs font-s grey-1">{props.description}</p>
                    <div className="m-t-xxl row align-flex-end justify-space-between">
                        <p className="font-xs grey-2 col-8">
                            {props.tags.map((tag, index) => (
                                <React.Fragment key={index}>
                                    {tag}
                                    {index < props.tags.length - 1 && <span className="m-h-s">|</span>}
                                </React.Fragment>
                            ))}
                        </p>
                        {props.link &&
                            <div className="col-4 row justify-flex-end">
                                <Link className="btn" to={props.link}>
                                    vist
                                </Link>
                            </div>
                        }
                    </div>
                </div>
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
                {props.projects.map( (project: ProjectCardProps) => projectCard(project) )}
            </ProjectContainer>
        </ParallaxBG>
        
    );
}

export default FirstProjects;