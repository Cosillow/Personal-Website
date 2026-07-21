import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { HEADER_HEIGHT } from "../components/Header";

const HeroSection = styled.section`
  min-height: calc(100dvh - ${HEADER_HEIGHT}px);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: hidden;

  & > * {
    flex: 1 1 50%;
    min-width: 0;
  }

  @media (max-width: 790px) {
    flex-direction: column-reverse;
    justify-content: flex-end;

    & > * {
      flex: 0 0 auto;
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
  width: min(400px, 100%);
  aspect-ratio: 403 / 619;
  max-height: min(70vh, 100%);
  background-size: cover;
  background-position: top center;
  background-image: ${props => props.url};
  border-bottom: 15px solid var(--color-accent);
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
        <div className="center-child w-100 p-h-xxl">
          <BackgroundImage url='url("/cropped-connor-photo.png")'></BackgroundImage>
        </div>
    </HeroSection>
    </>
  );
}

export default HomePage;