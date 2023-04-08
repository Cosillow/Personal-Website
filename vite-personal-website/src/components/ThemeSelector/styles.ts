import styled from "styled-components";
import { Color } from "../../util/color";

export const Slider = styled.input<{
  activeColor: string;
}>`
  position: relative;
  z-index: 1;
  appearance: none;
  border-radius: 0.5em;
  height: .8em;
  outline: none;
  border: 1px solid black;

  &:focus {
    outline: none;
  }
  &:active,
  &:hover:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }
  &::-moz-range-track {
    appearance: none;
    opacity: 0;
    outline: none !important;
  }
  &::-ms-track {
    outline: none !important;
    appearance: none;
    opacity: 0;
  }

  &::-webkit-slider-thumb {
    height: 25px;
    width: 25px;
    border-radius: 2em;
    appearance: none;
    background: ${(props) => props.activeColor};
    cursor: pointer;
    cursor: move;
    cursor: grab;
    cursor: -webkit-grab;
    border: 2px solid black;

    &:active,
    &:hover:active {
      cursor: grabbing;
      cursor: -webkit-grabbing;
      transform: scale(0.975);
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  &::-moz-range-thumb {
    height: 25px;
    width: 25px;
    border-radius: 2em;
    appearance: none;
    cursor: pointer;
    cursor: move;
    cursor: grab;
    cursor: -webkit-grab;
    background: ${(props) => props.activeColor};
    &:active,
    &:hover:active {
      cursor: grabbing;
      cursor: -webkit-grabbing;
      transform: scale(0.975);
    }
    &:hover {
      transform: scale(1.1);
    }
  }

  /* height: 44px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  
  :focus {
    outline: none;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #3071A9;
    border-radius: 5px;
    border: 0px solid #000000;
  }
  ::-webkit-slider-thumb {
    box-shadow: 1px 1px 3px #000000;
    border: 1px solid #000000;
    height: 36px;
    width: 36px;
    border-radius: 50px;
    background: ${(props) => props.activeColor};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -13.5px;
  }
  :focus::-webkit-slider-runnable-track {
    background: #3071A9;
  }
  ::-moz-range-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #3071A9;
    border-radius: 5px;
    border: 0px solid #000000;
  }
  ::-moz-range-thumb {
    box-shadow: 1px 1px 3px #000000;
    border: 1px solid #000000;
    height: 36px;
    width: 36px;
    border-radius: 50px;
    background: ${(props) => props.activeColor};
    cursor: pointer;
  }
  ::-ms-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  ::-ms-fill-lower {
    background: #3071A9;
    border: 0px solid #000000;
    border-radius: 10px;
    box-shadow: 0px 0px 0px #000000;
  }
  ::-ms-fill-upper {
    background: #3071A9;
    border: 0px solid #000000;
    border-radius: 10px;
    box-shadow: 0px 0px 0px #000000;
  }
  ::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 3px #000000;
    border: 1px solid #000000;
    height: 36px;
    width: 36px;
    border-radius: 50px;
    background: #75FFB1;
    cursor: pointer;
  }
  :focus::-ms-fill-lower {
    background: #3071A9;
  }
  :focus::-ms-fill-upper {
    background: #3071A9;
  } */
`;

export const LeftRightSlider = styled(Slider)<{
  leftColor: string;
  rightColor: string;
}>`
  background: linear-gradient(
    to right,
    ${(props) => props.leftColor},
    ${(props) => props.rightColor}
  );
`;

export const LeftCenterRightSlider = styled(LeftRightSlider)<{
  centerColor: string;
}>`
  background: linear-gradient(
    to right,
    ${(props) => props.leftColor},
    ${(props) => props.centerColor},
    ${(props) => props.rightColor}
  );
`;

export type Picker = { 
    currentColor: Color; 
    returnSelectedColor: Function 
};
