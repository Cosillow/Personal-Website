import { IoCopyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Color } from "../../util/color";
import ColorPicker from "../ThemeSelector/HSLPicker";
import HexPicker from "../ThemeSelector/HexPicker";
import { useDispatch, useSelector } from "react-redux";
import { THEME_VARIABLES, ColorScheme, setColor, setColorScheme, useTheme, setThemeColor, setThemeColors } from "../../redux/slices/themeSlice";

const DisplayColorDiv = styled.div<{
    background: string;
}>`
    width: 100%;
    height: 50px;
    background: rgb(${props => props.background});
`
/*
    useColorControls

    - setTheme
    - setColor
    - 

    theme state redux
    - keep track of 
        - user selected colorScheme
        - my page layout
            - my (default) colorScheme

        !?- some way to distinguish if the page the user is on is able to have a theme change/color change
        ?- Page theme
 
 */

const ThemeController = () => {

    const [selectedProperty, setSelectedProperty] = useState<string>('primary');
    const stateTheme: ColorScheme = useTheme();
    const dispatch = useDispatch();

    useEffect(()=>{
        setThemeColors(dispatch, getRootColorScheme());
    },[]);

    const userPickedColor = (color: Color) => {
        // user is changing the current active theme based on the selectedProperty
        setThemeColor(dispatch, selectedProperty, color);
    }

    const getRootColorScheme = (): ColorScheme => {
        return THEME_VARIABLES.reduce((acc: any, color: string) => {
            acc[color] = new Color(getComputedStyle(document.body).getPropertyValue(`--color-${color}`));
            return acc;
        }, {});
    };

    const userSelectedProperty = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // user plans to change the color of an variable
        e.preventDefault();
        setSelectedProperty(e.target.value);
    };

    const copyStyling = async (): Promise<boolean> => {
        // turn theme into string
        let text: string = ":root {\n";
        for (const [key, value] of Object.entries(stateTheme)) {
            text += `\t--color-${key}: rgb(${value.toList()});\n`;
        }
        text += `}\n`;

        // copy string to clipboard
        if (!navigator.clipboard) {
            console.log(text);
            return false;
        } else {
            try {
                await navigator.clipboard.writeText(text);
                return true;
            } catch {
                console.log(text);
                return false;
            }
        }
    }

    return (
        <>
            <select className="m-v-md" onChange={userSelectedProperty} value={selectedProperty} name="proprtySelection">
                {
                    THEME_VARIABLES.map((color: string) => (
                        <option key={color} value={color}>{color}</option>
                    ))
                }
            </select>
            <button onClick={copyStyling} className="clear">
                <IoCopyOutline></IoCopyOutline>
            </button>

            {/* <DisplayColorDiv background={stateTheme[selectedProperty as keyof ColorScheme].toList()}></DisplayColorDiv> */}
            <ColorPicker currentColor={stateTheme[selectedProperty as keyof ColorScheme]} returnSelectedColor={userPickedColor}></ColorPicker>
            {/* <HexPicker currentColor={stateTheme[selectedProperty as keyof ColorScheme]} returnSelectedColor={userPickedColor}></HexPicker> */}
        </>
    );
}

export default ThemeController; 
