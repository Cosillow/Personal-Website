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

    // all images must be loaded before the JS animation starts to get an accurate width
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        if (!imagesLoaded) return;
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

        const ANIMATION = SCROLL_CONTAINER.animate(
            KEYFRAMES,
        {
            duration: images.length * 4000, // 4s per image-ish? (can be adjusted w/ component prop) */
            iterations: Infinity,
        }
        );

        ANIMATION.addEventListener('finish', () => {
            console.log(images)
        });
        
    
        return () => {
            ANIMATION.cancel();
        };
    
      }, [imagesLoaded]);

    const handleImageLoad = () => {
        if (!scrollContainerRef.current) return;
        const images = scrollContainerRef.current.querySelectorAll('img');
        if (Array.from(images).every((img) => img.complete)) {
            setImagesLoaded(true);
        } else setImagesLoaded(false);
    };

    return ( 
        <CarouselViewport ref={viewportRef}>
            <ScrollContainer ref={scrollContainerRef}>
                {images.length && images.map((img, i) => <img src={img} key={i} onLoad={handleImageLoad} /> )}
            </ScrollContainer>
        </CarouselViewport>
    );
}
 
export default Carousel;