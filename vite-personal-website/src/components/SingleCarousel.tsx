import { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SINGLE_CAROUSEL_TRANSITION_TIME = 1;

const Container: any = styled.div<{
    containerWidth: number,
    directionLeft: boolean
}>`
    position: relative;
    height: ${props => props.containerWidth / (16/9) }px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: top;
    overflow: hidden;

    img {
        position: absolute;
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
        object-position: cover;

        transform: translateX(0);
        opacity: 1;
        transition: ${SINGLE_CAROUSEL_TRANSITION_TIME}s ease-in-out;

        &.right {
            transform: translateX(${props => props.containerWidth}px);
            opacity: 0;
            ${props => props.directionLeft && "transition: none;"}
        }
        &.left {
            transform: translateX(-${props => props.containerWidth}px);
            opacity: 0;
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
    const imgIndex = useRef<number>(0);

    const [containerWidth, setContainerWidth] = useState<number>(0);

    useEffect(() => {
        // Preload images and store the Image objects
        imageObjectsRef.current = images.map(src => {
            const IMG = new Image();
            IMG.src = src;
            return IMG;
        });

        if (ImgRef1.current) {
            ImgRef1.current.src = imageObjectsRef.current[imgIndex.current].src;
        }
        
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

    const cycle = ()=> {
        if (!ImgRef1.current || !ImgRef2.current) return;

        const START_SIDE = directionLeft ? "right" : "left";
        const END_SIDE = directionLeft ? "left" : "right";

        const sendImgBack = (img: HTMLImageElement|null)=> {
            if (!img) return;
            img.classList.remove(END_SIDE);
            img.classList.add(START_SIDE);
        }

        const rotateNewImg = (newImg: HTMLImageElement|null, oldImg: HTMLImageElement|null)=> {
            if (!newImg || !oldImg) return;

            // grab img from memory right before it comes into view (good for gifs, start at the first frame)
            imgIndex.current = (imgIndex.current + 1) % (images.length);
            const IMG_SRC = imageObjectsRef.current[imgIndex.current].src;
            newImg.src = "";
            newImg.src = IMG_SRC;

            const SRC_SPLIT = IMG_SRC.split('/');
            newImg.alt = `carousel-image: ${SRC_SPLIT[SRC_SPLIT.length-1].split('.')[0].split(/[-_]/).join(" ")}`;
            
            newImg.classList.remove(START_SIDE);
            oldImg.classList.add(END_SIDE);
        }

        if (ImgRef2.current.classList.contains(START_SIDE)) {
            rotateNewImg(ImgRef2.current, ImgRef1.current)
            setTimeout(()=> sendImgBack(ImgRef1.current), SINGLE_CAROUSEL_TRANSITION_TIME * 1000)
        } else if (ImgRef1.current.classList.contains(START_SIDE)) {
            rotateNewImg(ImgRef1.current, ImgRef2.current)
            setTimeout(()=> sendImgBack(ImgRef2.current), SINGLE_CAROUSEL_TRANSITION_TIME * 1000)
        }
    }

    return ( 
        <Container ref={containerRef} containerWidth={containerWidth} directionLeft={directionLeft}>
            <img onClick={cycle} ref={ImgRef1} alt="carousel image" />
            <img className={directionLeft ? 'right' : 'left'} onClick={cycle} ref={ImgRef2} />
        </Container>
    );
}
 
export default SingleCarousel;