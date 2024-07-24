import { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CarouselViewport: any = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
`

const ScrollContainer: any = styled.div`
    position: relative;
    left: 100%;
    display: grid;
    grid-auto-flow: column;
    width: max-content;
    height: 100%;

    div {
        height: 100%;
        margin-right: 1em;
        margin-left: 1em;
        display: flex;
        flex-direction: column;

        img {
            height: 30vh;
        }
    }
`

interface CarouselProps {
    images: string[],
    directionLeft?: boolean
}
 
const ContinuousCarousel: FunctionComponent<CarouselProps> = ({ images, directionLeft = true }) => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<Animation | null>(null);

    // all images must be loaded before the JS animation starts to get an accurate width
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            pauseAnimation();
            updateAnimation();
            playAnimation();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        updateAnimation();
        
        return () => {
            if (!animationRef.current) return;
            animationRef.current.cancel();
        };
    }, [imagesLoaded]);

    const updateAnimation = () => {
        if (!scrollContainerRef.current || !viewportRef.current) return;

        const SCROLL_CONTAINER = scrollContainerRef.current;
        const VIEWPORT = viewportRef.current;

        const SCROLL_DISTANCE = SCROLL_CONTAINER.clientWidth + VIEWPORT.clientWidth;
        const KEYFRAMES = directionLeft
            ? [
                { transform: 'translateX(0)' },
                { transform: `translateX(-${SCROLL_DISTANCE}px)` },
            ]
            : [
                { transform: `translateX(-${SCROLL_DISTANCE}px)` },
                { transform: 'translateX(0)' },
            ];

        const ANIMATION = SCROLL_CONTAINER.animate(
            KEYFRAMES,
            {
                duration: images.length * 10000, // 10s per image-ish? (can be adjusted w/ component prop)
                iterations: Infinity,
            }
        );

        if (animationRef.current) {
            animationRef.current.cancel();
        }

        animationRef.current = ANIMATION;
    };

    const playAnimation = () => {
        if (animationRef.current) {
            animationRef.current.play();
        }
    };

    const pauseAnimation = () => {
        if (animationRef.current) {
            animationRef.current.pause();
        }
    };

    const handleImageLoad = () => {
        if (!scrollContainerRef.current) return;
        const images = scrollContainerRef.current.querySelectorAll('img');
        if (Array.from(images).every((img) => img.complete)) {
            setImagesLoaded(true);
        } else setImagesLoaded(false);
    };

    return ( 
        <CarouselViewport ref={viewportRef} onTouchStart={pauseAnimation} onTouchEnd={playAnimation} 
        onMouseEnter={pauseAnimation} onMouseLeave={playAnimation}>
            <ScrollContainer ref={scrollContainerRef}>
                {images.length && images.map((img, i) => 
                    <div key={i}>
                        <img src={img} onLoad={handleImageLoad} />
                        <p className="m-t-xs">testing!</p>
                    </div>
                )}
            </ScrollContainer>
        </CarouselViewport>
    );
}
 
export default ContinuousCarousel;