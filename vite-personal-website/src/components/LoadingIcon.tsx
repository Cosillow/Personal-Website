import { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";

const leftAnimation = keyframes`
    from, to  {
        transform: translateX(calc(-1* ( (var(--ball-size) / 2) * ( var(--ball-width) - 1 ) )));
        scale: 1;
        z-index: 50;
    }
    25%  {
        scale: 1.5;
        z-index: 50;
    }
    50%  {
        transform: translateX(calc(( (var(--ball-size) / 2) * ( var(--ball-width) - 1 ) )));
        scale: 1;
        z-index: 25;
    }
    75% {
        scale: 0.5;
        z-index: 25;
    }
`

const rightAnimation = keyframes`
    from, to  {
        transform: translateX(calc(( (var(--ball-size) / 2) * ( var(--ball-width) - 1 ) )));
        z-index: 1;
    }
    25%  {
        scale: 0.5;
        z-index: 1;
    }
    50%  {
        transform: translateX(calc(-1* ( (var(--ball-size) / 2) * ( var(--ball-width) - 1 ) )));
        scale: 1;
        z-index: 100;
    }
    75% {
        scale: 1.5;
        z-index: 100;
    }
`

const PlusDots = styled.div<{
    verticalCSSVar: string,
    horizontalCSSVar: string
}>`
    --ball-size: .75em;
    --ball-width: 3;
    --vertical-balls: var(${props=> props.verticalCSSVar});
    --horizontal-balls: var(${props=> props.horizontalCSSVar});
    --horizontal-spin-time: 1.5s;
    --vertical-spin-time: 1.5s;
  
  
    width: calc(var(--ball-size)*var(--ball-width));
    height: calc(var(--ball-size)*var(--ball-width));  
  
  .spinning-dot:first-child {
    --ball-color: var(--vertical-balls);
    --spin-time: var(--vertical-spin-time);
    
    transform-origin: center;
    transform: rotate(90deg);
  }
  
  .spinning-dot:last-child {
    --ball-color: var(--horizontal-balls);
    --spin-time: var(--horizontal-spin-time);
  }
  
    .spinning-dot {
      width: calc(var(--ball-size)*var(--ball-width));
      height: var(--ball-size);
      position: absolute;
      margin: auto;
      inset: 0;
      text-align: center;

      > * {
        padding: 0;
        margin: 0;
        position: absolute;
        width: var(--ball-size);
        height: var(--ball-size);
        display: block;
        border-radius: 50%;
        opacity: 1;
        position: absolute;
        margin: auto;
        inset: 0;
        text-align: center;
        
        // opacity: 0.7;
        
        &:first-child {
          background: var(--ball-color);
          animation: ${leftAnimation} var(--spin-time) linear infinite;
        }
        &:last-child {
          background: var(--ball-color);
          animation: ${rightAnimation} var(--spin-time) linear infinite;
          // animation-delay: calc(var(--spin-time) / 4);
        }
      }
  }
`

interface LoadingIconProps {
    verticalCSSVar: string,
    horizontalCSSVar: string
}

const LoadingIcon: FunctionComponent<LoadingIconProps>  = ({verticalCSSVar, horizontalCSSVar}) => {
    return ( 
        <PlusDots verticalCSSVar={verticalCSSVar} horizontalCSSVar={horizontalCSSVar}>
            <div className="spinning-dot">
                <span className="left"></span>
                <span className="right"></span>
            </div>

            <div className="spinning-dot">
                <span className="left"></span>
                <span className="right"></span>
            </div>
        </PlusDots>
    );
}
 
export default LoadingIcon;