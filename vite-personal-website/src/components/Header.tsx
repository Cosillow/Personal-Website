import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosSwap } from "react-icons/io";
import { TbPaintFilled } from "react-icons/tb";
import Modal from "./Modal";
import ThemeController from "./controllers/ThemeController";
import useModal from "../hooks/useModal";
import { useThemeController } from "../hooks/useThemeController";

const NAV_LINKS: ({ href: string, label: string })[] = [
    { href: '/projects', label: 'projects' },
    { href: '/home', label: 'home' },
];

export type HEADER_STYLE = {headerHeight: number, background: string}

const CollapsibleHeader = styled.header<HEADER_STYLE>`
        --header-height: ${props => props.headerHeight}px;

        transition: all 1s ease-in-out;

        transform: translateX(0);
        opacity: 1;
        background: ${props => props.background};

        &.collapsed {
            transform: translateX(100%);
            opacity: 0;
        }
        
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: var(--header-height);
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
`
const ButtonLi = styled.li`
    font-size: var(--font-lg);
`

const Header = ({ children }:
    {
        children?: JSX.Element
    }) => {

    const [theme, updateTheme] = useThemeController();
    const headerRef: MutableRefObject<HTMLElement | null> = useRef(null);
    const [open, openModal] = useModal();
    const [headerStyle, setHeaderStyle] = useState<HEADER_STYLE>({headerHeight: 100, background: 'var(--color-primary)'});

    const childChangeHeaderStyle = (style: HEADER_STYLE) => {
        setHeaderStyle(style)
    }

    useEffect(() => {
        window.onscroll = () => {
            const classList = headerRef.current?.classList;
            if (!classList) return;
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                if (!classList.contains('collapsed')) classList.add('collapsed');
            } else {
                if (classList.contains('collapsed')) classList.remove('collapsed');
            }
        };
    }, [])

    return (
        <CollapsibleHeader background={theme.background} headerHeight={theme.headerHeight} ref={headerRef}>
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
                <ThemeController setHeaderStyle={childChangeHeaderStyle} ></ThemeController>
            </Modal>
        </CollapsibleHeader>
    );
}

export default Header;
