import { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SINGLE_CAROUSEL_TRANSITION_TIME = 1;

const Container: any = styled.div<{
    containerWidth: number,
    directionLeft: boolean
}>`
    position: relative;
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        position: absolute;
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
        object-position: center;

        transition: ${SINGLE_CAROUSEL_TRANSITION_TIME}s ease-in-out;

        &.right {
            transform: translateX(${props => props.containerWidth}px);
            ${props => props.directionLeft && "transition: none;"}
        }
        &.left {
            transform: translateX(-${props => props.containerWidth}px);
            ${props => !props.directionLeft && "transition: none;"}
        }
    }
`

interface SingleCarouselProps {
    images: string[],
    directionLeft?: boolean
}
 
const SingleCarousel: FunctionComponent<SingleCarouselProps> = ({ images, directionLeft = true }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const ImgRef1 = useRef<HTMLImageElement | null>(null);
    const ImgRef2 = useRef<HTMLImageElement | null>(null);
    const imageObjectsRef = useRef<HTMLImageElement[]>([]);
    const [containerWidth, setContainerWidth] = useState<number>(0);

    useEffect(() => {
        // Preload images and store the Image objects
        imageObjectsRef.current = images.map(src => {
            const IMG = new Image();
            IMG.src = src;
            return IMG;
        });

        restartGIF();

        const handleResize = ()=> {
            if (!containerRef.current) return;
            setContainerWidth(containerRef.current.clientWidth);
        }

        handleResize();


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [images]);

    const restartGIF = ()=> {
        if (!ImgRef1.current) return;
        ImgRef1.current.src = "";
        ImgRef1.current.src = imageObjectsRef.current[images.length-1].src;

        if (!ImgRef2.current) return;
        ImgRef2.current.src = "";
        ImgRef2.current.src = imageObjectsRef.current[images.length-1].src;
    }

    const cycle = ()=> {
        if (!ImgRef1.current || !ImgRef2.current) return;

        const START_DIR = directionLeft ? "right" : "left";
        const END_DIR = directionLeft ? "left" : "right";

        if (ImgRef2.current.classList.contains(START_DIR)) {
            ImgRef2.current.classList.remove(START_DIR);
            ImgRef1.current.classList.add(END_DIR);

            setTimeout(()=> {
                ImgRef1.current!.classList.remove(END_DIR);
                ImgRef1.current!.classList.add(START_DIR);
            }, SINGLE_CAROUSEL_TRANSITION_TIME * 1000)
        } else if (ImgRef1.current.classList.contains(START_DIR)) {
            ImgRef1.current.classList.remove(START_DIR);
            ImgRef2.current.classList.add(END_DIR);

            setTimeout(()=> {
                ImgRef2.current!.classList.remove(END_DIR);
                ImgRef2.current!.classList.add(START_DIR);
            }, SINGLE_CAROUSEL_TRANSITION_TIME * 1000)
        } else {
            alert("whops");
        }
    }

    return ( 
        <Container ref={containerRef} containerWidth={containerWidth} directionLeft={directionLeft}>
            <img onClick={cycle} ref={ImgRef1} />
            <img className={directionLeft ? 'right' : 'left'} onClick={cycle} ref={ImgRef2} />
        </Container>
    );
}
 
export default SingleCarousel;