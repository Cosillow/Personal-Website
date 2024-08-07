import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { ProjectCardProps } from "../../components/controllers/ProjectsController";
import React from "react";
import SingleCarousel from "../../components/SingleCarousel";

const ProjectCard = styled.article`
    border-radius: 10px;
    position: relative;
    grid-column: span 1;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    height: fit-content;
`

const TagsLink = styled.div`
    display: flex;
    align-items: flex-end;

    & > *:first-child {
        width: 75%;
        display: flex;
        flex-wrap: wrap;
    }

    & > *:last-child {
        width: 25%;
    }
`

const projectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
    return (
        <ProjectCard key={props.name} className="bg-secondary">
            {props.images && <SingleCarousel images={props.images}></SingleCarousel>}
            <div className="m-t-s p-h-l p-b-l">
                <h2 className="font-l">{props.name}</h2>
                <p className="m-t-xxs font-s grey-1">{props.description}</p>
                <TagsLink className="m-t-xxl">
                    <p className="font-xs grey-2">
                        {props.tags.map((tag, index) => (
                            <React.Fragment key={index}>
                                <span className="m-r-s">{tag}</span>
                                {index < props.tags.length - 1 && <span className="m-r-s">|</span>}
                            </React.Fragment>
                        ))}
                    </p>
                    <div className="row justify-flex-end">
                        {props.link &&
                            <Link target="_blank" className="btn font-xxs" to={props.link}>
                                <FaGithub className="m-r-s"></FaGithub> visit
                            </Link>
                        }
                    </div>
                    
                </TagsLink>
            </div>
        </ProjectCard>
    );
}

const ParallaxBG = styled.div`
    background-image: radial-gradient(rgba(var(--color-accent-rgb), 50%) 1.6500000000000001px, var(--color-primary ) 1.6500000000000001px);
    background-size: 50px 50px; 
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
        /* background: red; */
        display: block;
        width: 120%;
        height: 100%;
        position: absolute;
        left: -10%;
        top: -0%;
        z-index: -1;
        border-radius: 50px;
    }
`;

const ProjectContainer = styled.div`
    padding: clamp(5px, 5px + 3vw, 100px);
    padding-top: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 10px;
    align-items: center;

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, minmax(250px, 1fr));
    }
`

type FirstProjectsProps = {
    projects: any
}
const FirstProjects = (props: FirstProjectsProps) => {
    return (
        <ParallaxBG>
            <BackgroundHeading className="text-center font-xl p-v-xl">My Projects</BackgroundHeading>
            <ProjectContainer>
                {props.projects.map( (project: ProjectCardProps) => projectCard(project) )}
            </ProjectContainer>
        </ParallaxBG>
        
    );
}

export default FirstProjects;