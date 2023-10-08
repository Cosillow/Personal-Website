import { Link } from "react-router-dom";
import styled from "styled-components";
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
  width: clamp(30%, 55%, 100%);
  height: clamp(30%, 75%, 100%);
  background-image: ${props => props.url};
  background-size: cover;
  background-position: top center;
`

const Wave = styled.div`
  --size: 50px;
  background: blue;
  mask: radial-gradient(var(--size) at 50% 0%, #0000 99%, red 101%) 
    50% var(--size)/calc(4 * var(--size)) 100% repeat-x;
`

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
          <BackgroundImage url='url("/cropped-connor-photo.png")' ></BackgroundImage>
          <Wave></Wave>
        </div>
      </div>
    </HeroSection>
    </>
  );
}

export default HomePage;