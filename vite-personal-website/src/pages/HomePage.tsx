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
  background-image: ${props => props.url};
  background-size: cover;
  background-position: top center;
`

const Subheading = styled.p`
  color: grey;
  margin-bottom: 2em;
`

const HomePage = () => {
  return (
    <>
    <HeroSection>
    <div className="row">
          <InfoHeader className="col-6">
            <div className="wrapper">
              <h1 className="font-lg">Connor Silloway</h1>
              <Subheading>ITWS and CS dual major</Subheading>
              <Link to="/projects">
                <button className="outline">
                  See Projects
                </button>
              </Link>
            </div>
          </InfoHeader>
          <BackgroundImage className="col-6" url='url("/cropped-connor-photo.png")' ></BackgroundImage>
        </div>
    </HeroSection>
    </>
  );
}

export default HomePage;