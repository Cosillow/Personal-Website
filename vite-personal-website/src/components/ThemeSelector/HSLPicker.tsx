import { Color } from "../../util/color";
import styled from "styled-components";
import {
  LeftCenterRightSlider,
  LeftRightSlider,
  Picker,
  Slider,
} from "./styles";

const SliderStack = styled.div`
  display: flex;
  flex-direction: column;

  & > * + *{
    margin-top: 2em;
  }
  
`

const HueSlider = styled(Slider)`
  background: linear-gradient(
    to right,
    rgb(255, 0, 0),
    rgb(255, 255, 0),
    rgb(0, 255, 0),
    rgb(0, 255, 255),
    rgb(0, 0, 255),
    rgb(255, 0, 255),
    rgb(255, 0, 0)
  );
`;

const HSLPicker = ({ currentColor, returnSelectedColor }: Picker) => {
  const userChangeSlider = (event: any, type: string) => {
    const val: number = event.target.value;

    const h: number = type === "h" ? val : currentColor.hsl.h;
    const s: number = type === "s" ? val : currentColor.hsl.s;
    const l: number = type === "l" ? val : currentColor.hsl.l;
    returnSelectedColor(new Color(`hsl(${h}, ${s}%, ${l}%)`));
  };

  return (
    <>
      <SliderStack>
        <HueSlider
          activeColor={new Color(`hsl(${currentColor.hsl.h}, 100%, 50%)`).hex}
          min="0"
          max="360"
          value={currentColor.hsl.h}
          onChange={(e) => {
            userChangeSlider(e, "h");
          }}
          name="hue"
          type="range"
          id="hue"
        />
        <LeftRightSlider
          leftColor={new Color(`hsl(${currentColor.hsl.h}, 0%, 50%)`).hex}
          rightColor={new Color(`hsl(${currentColor.hsl.h}, 100%, 50%)`).hex}
          activeColor={
            new Color(`hsl(${currentColor.hsl.h}, ${currentColor.hsl.s}%, 50%)`)
              .hex
          }
          min="0"
          max="100"
          value={currentColor.hsl.s}
          onChange={(e) => {
            userChangeSlider(e, "s");
          }}
          name="saturation"
          type="range"
          id="saturation"
        />
        <LeftCenterRightSlider
          leftColor={new Color(`hsl(${currentColor.hsl.h}, 0%, 50%)`).hex}
          centerColor={
            new Color(`hsl(${currentColor.hsl.h}, ${currentColor.hsl.s}%, 50%)`)
              .hex
          }
          rightColor={new Color(`#ffffff`).hex}
          activeColor={`hsl(${currentColor.hsl.h}, ${currentColor.hsl.s}%, ${currentColor.hsl.l}%)`}
          min="0"
          max="100"
          value={currentColor.hsl.l}
          onChange={(e) => {
            userChangeSlider(e, "l");
          }}
          name="lightness"
          type="range"
          id="lightness"
        />
      </SliderStack>
    </>
  );
};

export default HSLPicker;
