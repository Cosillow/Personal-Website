import { DiReact } from "react-icons/di";
import { HiPaintBrush } from "react-icons/hi2";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ColorPicker from "../components/ThemeSelector/HSLPicker";
import { Color } from "../util/color";

const marginBottom: string = '8em'

const AntsySection = styled.section`
  transform: translateY(calc(-1* ${marginBottom}));
  /* background: #ea5c5c71; */
`

const HeroSection = styled.section`
  height: 100dvh;
  padding-bottom: ${marginBottom};
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
    <HeroSection className="bg-primary">
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
          <BackgroundImage className="col-6" url='url("/cropped.jpg")' ></BackgroundImage>
        </div>
    </HeroSection>
    <AntsySection className="text-center">
    <h2>How Did I Do It?</h2>
        <div className="row font-md">
          <article className="col-12-xs col-4">
            <HiPaintBrush></HiPaintBrush>
            <h3>Structured Styling</h3>
          </article>
          <article className="col-12-xs col-4 ">
            <DiReact></DiReact>
            <h3>Strong Framework</h3>
          </article>
          <article className="col-12-xs col-4">
            
            <h3></h3>
          </article>
        </div>
    </AntsySection>
    </>
  );
}

export default HomePage;