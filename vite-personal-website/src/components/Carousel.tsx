import { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CarouselViewport: any = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 250px;
`

const ScrollContainer: any = styled.div`
    position: relative;
    left: 100%;
    display: grid;
    grid-auto-flow: column;
    width: max-content;
    height: 250px;

    img {
        height: 250px;
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
    const viewportRef = useRef<HTMLDivElement | null>(null);

    // looping can be solved by having two/three instances of the images, then plopping them on either side when we go too far

    // TODO: this is by far not seemless, especially with the gifs (no hotswapping will work)
    
    // TODO: 

    useEffect(() => {
        const SCROLL_CONTAINER = scrollContainerRef.current;
        const VIEWPORT = viewportRef.current;
        if (!SCROLL_CONTAINER || !VIEWPORT) return;
    
        const SCROLL_DISTANCE = SCROLL_CONTAINER.clientWidth + VIEWPORT.clientWidth;
        const KEYFRAMES = directionLeft ?
        [
            { transform: 'translateX(0)' },
            { transform: `translateX(-${SCROLL_DISTANCE}px)` },
        ]
        : 
        [
            { transform: `translateX(-${SCROLL_DISTANCE}px)` },
            { transform: 'translateX(0)' },
        ];

        const animation = SCROLL_CONTAINER.animate(
            KEYFRAMES,
        {
            duration: images.length * 4000, // 4s per image-ish? (can be adjusted w/ component prop) */
            iterations: Infinity,
        }
        );

        animation.addEventListener('finish', () => {
            console.log(images)
        });
        
    
        return () => {
        animation.cancel();
        };
    
      }, []);

    return ( 
        <CarouselViewport ref={viewportRef}>
            <ScrollContainer ref={scrollContainerRef}>
                {images.length && images.map((img, i) => {
                        return <img src={img} key={i} />
                    })}
            </ScrollContainer>
        </CarouselViewport>
    );
}
 
export default Carousel;