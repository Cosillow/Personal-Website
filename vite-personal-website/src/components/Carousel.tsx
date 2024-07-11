import { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CarouselViewport: any = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 250px;
`

const ScrollContainer: any = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: row;

    img {
        margin-right: 1em;
        margin-left: 1em;
    }
`

interface CarouselProps {
    images: string[],
    directionLeft?: boolean
}
 
const Carousel: FunctionComponent<CarouselProps> = ({ images, directionLeft = true }) => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [isScrolling, setIsScrolling] = useState(true);


    // looping can be solved by having two/three instances of the images, then plopping them on either side when we go too far

    // TODO: this is by far not seemless, especially with the gifs (no hotswapping will work)

    useEffect(() => {
        const SCROLL_CONTAINER = scrollContainerRef.current;
        if (SCROLL_CONTAINER) {
          const totalScrollWidth = SCROLL_CONTAINER.scrollWidth;
          const containerWidth = SCROLL_CONTAINER.clientWidth;
          const scrollDistance = totalScrollWidth - containerWidth;
    
          const animation = SCROLL_CONTAINER.animate(
            [
              { transform: 'translateX(0)' },
              { transform: `translateX(-${scrollDistance}px)` }
            ],
            {
              duration: 2* images.length * 4000, // 4s per image-ish? (can be adjusted w/ component prop) */
              iterations: Infinity,
            }
          );
    
          return () => {
            animation.cancel();
          };
        }
      }, [images.length]);

    return ( 
        <CarouselViewport>
            <ScrollContainer ref={scrollContainerRef}>
                {images.length && images.map((img, i) => {
                        return <img src={img} key={i} />
                    })}
                {images.length && images.map((img, i) => {
                        return <img src={img} key={i*2} />
                    })}
            </ScrollContainer>
        </CarouselViewport>
    );
}
 
export default Carousel;