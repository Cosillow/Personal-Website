import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { HEADER_HEIGHT } from "../components/Header";

const HeroSection = styled.section`
  height: calc(100dvh - ${HEADER_HEIGHT}px);
  display: flex;
  flex-direction: row;
  width: 100vw;
  flex-wrap: nowrap;
  overflow-x: hidden;

  & > * {
    flex-basis: 50%;
    flex-shrink: 1;
  }

  @media (max-width: 790px) {
    flex-direction: column-reverse;

    & > * {
      flex-basis: 20%;
      flex-shrink: 1;
      flex-grow: 1;
    }
  }
`;

const InfoHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const BackgroundImage = styled.div<{
  url: string;
}>`
  position: relative;
  width: 400px;
  height: clamp(30%, 75%, 100%);
  background-size: cover;
  background-position: top center;
  background-image: ${props => props.url};
  border-bottom: 15px solid var(--color-accent);

  @media (max-width: 790px) {
    height: 100%;
  }
`;

const HomePage = () => {
  return (
    <>
    <HeroSection className="p-v-l">
        <InfoHeader className="p-h-xxl">
          <h1 className="font-xxl">Connor Silloway</h1>
          <p className="font-m grey-1">ITWS and CS dual major</p>
          <Link className="btn outline m-t-xxl" to="/projects">
              See Projects
          </Link>
        </InfoHeader>
        <div className="center-child w-100">
          <BackgroundImage className="m-h-xxl" url='url("/cropped-connor-photo.png")'></BackgroundImage>
        </div>
    </HeroSection>
    </>
  );
}

export default HomePage;