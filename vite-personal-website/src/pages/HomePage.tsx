import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { HEADER_HEIGHT } from "../components/Header";

const HeroSection = styled.section`
  height: calc(100dvh - ${HEADER_HEIGHT}px);
`;

const InfoHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .wrapper {
    width: 75%;
  }
`

interface BackgroundImageProps {
  url: string;
}

const BackgroundImage = styled.div<BackgroundImageProps>`
  position: relative;
  width: clamp(30%, 55%, 100%);
  height: clamp(30%, 75%, 100%);
  background-size: cover;
  background-position: top center;
  background-image: ${props => props.url};
  border-bottom: 15px solid var(--color-accent);
`;


const Subheading = styled.p`
  color: grey;
`

const HomePage = () => {
  return (
    <>
    <HeroSection>
      <div className="row">
        <InfoHeader className="col-6">
          <div className="wrapper">
            <h1 className="font-xl">Connor Silloway</h1>
            <Subheading className="font-m">ITWS and CS dual major</Subheading>
            <Link className="btn outline m-t-xxl" to="/projects">
                See Projects
            </Link>
          </div>
        </InfoHeader>
        <div className="col-6 center-child">
          <BackgroundImage url='url("/cropped-connor-photo.png")'></BackgroundImage>
        </div>
      </div>
    </HeroSection>
    </>
  );
}

export default HomePage;