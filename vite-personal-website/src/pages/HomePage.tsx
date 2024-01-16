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
const fadeInOut = keyframes`
  0%, 100% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(20%);
  }
`;

const BackgroundImage = styled.div<BackgroundImageProps>`
  position: relative;
  width: clamp(30%, 55%, 100%);
  height: clamp(30%, 75%, 100%);
  background-size: cover;
  background-position: top center;
  background-image: ${props => props.url};
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, var(--color-accent) -20%, rgba(255, 255, 255, 0.0) 30%);
    /* opacity: 0; */
    animation: ease-in-out ${fadeInOut} 3s infinite; /* Adjust duration as needed */
  }
`;


const Subheading = styled.p`
  color: grey;
  /* margin-bottom: 2em; */
`

const HomePage = () => {
  return (
    <>
    <HeroSection>
      <div className="row">
        <InfoHeader className="col-6">
          <div className="wrapper">
            <h1 className="font-xl">Connor Silloway</h1>
            <Subheading className="font-md m-b-sm">ITWS and CS dual major</Subheading>
            <Link to="/projects">
              <button className="outline">
                See Projects
              </button>
            </Link>
          </div>
        </InfoHeader>
        <div className="col-6 center-child">
          <BackgroundImage url='url("/cropped-connor-photo.png")' >
            
          </BackgroundImage>
        </div>
      </div>
    </HeroSection>
    </>
  );
}

export default HomePage;