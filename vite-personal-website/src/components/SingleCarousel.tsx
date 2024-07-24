import { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ImageGifs } from "./controllers/ProjectsController";
import LoadingIcon from "./LoadingIcon";

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
    images: ImageGifs,
    directionLeft?: boolean,
    defaultDuration?: number
}
 
const SingleCarousel: FunctionComponent<SingleCarouselProps> = ({ images, directionLeft = true, defaultDuration = (10 + SINGLE_CAROUSEL_TRANSITION_TIME) }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const ImgRef1 = useRef<HTMLImageElement | null>(null);
    const ImgRef2 = useRef<HTMLImageElement | null>(null);
    const imageObjectsRef = useRef<HTMLImageElement[]>([]);
    const imageDurationsRef = useRef<number[]>([]);
    const imgIndex = useRef<number>(0);

    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        imageObjectsRef.current = images.map(src => {
            // Preload images and store the Image objects
            let img = new Image();
            
            if (typeof(src) === 'string') {
                img.src = src;
            } else {
                img.src = src.image;
            }
            return img;
        });

        imageDurationsRef.current = images.map(src => {           
            if (typeof(src) !== 'string') {
                return src.duration;
            } else {
                const MAX = SINGLE_CAROUSEL_TRANSITION_TIME;
                const MIN = MAX * (-1)
                const JITTER = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
                return defaultDuration + JITTER;
            }
        });

        Promise.all(imageObjectsRef.current.map((img) => new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
        }))).then(() => setLoading(false));
        
        const HandleResize = ()=> {
            if (!containerRef.current) return;
            setContainerWidth(containerRef.current.clientWidth);
        }
        
        HandleResize();
        window.addEventListener('resize', HandleResize);

        return () => {
            window.removeEventListener('resize', HandleResize);
        };
    }, [images]);

    useEffect(() => {
        if (loading) return;
        
        if (ImgRef1.current) {
            ImgRef1.current.src = imageObjectsRef.current[imgIndex.current].src;
        }
        StartCycle();
    }, [loading]);

    const StartCycle = ()=> { 
        const timeout = setTimeout(() => {
            CycleCarousel();
            StartCycle();
        }, (imageDurationsRef.current[imgIndex.current] - SINGLE_CAROUSEL_TRANSITION_TIME)* 1000);
    }

    const CycleCarousel = ()=> {
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

            // grab img from memory right before it comes into view (good for gifs; start at the first frame)
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
            {loading ? <LoadingIcon verticalCSSVar="--color-primary" horizontalCSSVar="--color-accent"></LoadingIcon> : 
            // <>
            //     <img ref={ImgRef1} />
            //     <img ref={ImgRef2} className={directionLeft ? 'right' : 'left'} />
            // </>
            <LoadingIcon verticalCSSVar="--color-primary" horizontalCSSVar="--color-accent"></LoadingIcon>
            }
        </Container>
    );
}
 
export default SingleCarousel;