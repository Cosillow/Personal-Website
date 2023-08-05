import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosSwap } from "react-icons/io";
import { TbPaintFilled } from "react-icons/tb";
import Modal from "./Modal";
import ThemeController from "./controllers/ThemeController";
import useModal from "../hooks/useModal";

const NAV_LINKS: ({ href: string, label: string })[] = [
    { href: '/projects', label: 'projects' },
    { href: '/home', label: 'home' },
];

const HEADER_HEIGHT: number = 100;

const HeaderOffset = styled.div`
    background: var(--color-primary);
    display: block;
    height: ${HEADER_HEIGHT}px;
`


const CollapsibleHeader = styled.header`
    background: var(--color-secondary);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${HEADER_HEIGHT}px;
    display: flex;
    flex-direction: row;
    align-items: center;

    nav {
        margin-left: auto;
        margin-right: 3em;

        ul {
            display: flex;
            flex-direction: row;
            align-items: center;

            li + li {
                margin-left: 2em;
            }
        }
    }

    transform-origin: top;
    transform: scaleY(1);
    opacity: 1;
    transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
    &.collapsed {
        transform: scaleY(0);
        opacity: 0;
    }
`
const ButtonLi = styled.li`
    font-size: var(--font-lg);
`

const Header = ({ children }:
    {
        children?: JSX.Element
    }) => {
        const headerRef: MutableRefObject<HTMLElement | null> = useRef(null);
        const [open, openModal] = useModal();
        // use ref instead of state, so that the component does not reload
        const prevScrollPosRef: MutableRefObject<number> = useRef(0);
        const scrollingUpRef: MutableRefObject<boolean> = useRef(false);
        const collapsedRef: MutableRefObject<boolean> = useRef(false);
    
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            scrollingUpRef.current = currentScrollPos < prevScrollPosRef.current;
            prevScrollPosRef.current = currentScrollPos;
    
            if (currentScrollPos <= HEADER_HEIGHT/2 || scrollingUpRef.current) {
                collapsedRef.current = false;
            } else {
                collapsedRef.current = true;
            }
    
            if (headerRef.current) {
                headerRef.current.classList.toggle('collapsed', collapsedRef.current);
            }
        };
    
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

    return (
        <>
            <CollapsibleHeader ref={headerRef}>
                <nav>
                    <ul>
                        {NAV_LINKS.map((link) =>
                            <li key={link.label}>
                                <Link to={link.href}>{link.label}</Link>
                            </li>
                        )}
                        {children !== undefined && <ButtonLi>{children}</ButtonLi>}
                    </ul>
                </nav>
                <button onClick={openModal} className="clear">
                    <TbPaintFilled></TbPaintFilled><IoIosSwap></IoIosSwap>
                </button>
                <Modal open={open}>
                    <ThemeController ></ThemeController>
                </Modal>
            </CollapsibleHeader>
            <HeaderOffset></HeaderOffset>
        </>
    );
}

export default Header;
