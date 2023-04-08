import { useEffect, useState } from "react";
import styled from "styled-components";
import { Color } from "../../util/color";
import ColorPicker from "../ThemeSelector/HSLPicker";
import HexPicker from "../ThemeSelector/HexPicker";

const DisplayColorDiv = styled.div<{
    background: string;
}>`
    width: 100%;
    height: 50px;
    background: rgb(${props => props.background});
`
type Theme = {
    primary: Color;
    secondary: Color;
    accent: Color;
}

const ThemeController = () => {
    const [color, setColor] = useState<Color>(new Color("#000000"));
    const [selectedColor, setSelectedColor] = useState<string>('primary');
    const [activeTheme, setActiveTheme] = useState<Theme>({}as Theme);

    const themeVariables: string[] = ["primary", "secondary", "accent"];

    useEffect(() => {
        const theme = getRootTheme();
        setActiveTheme(theme);
        setColor(theme.primary);
    }, []);

    const userSelectedVariable = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // user plans to change the color of an variable
        setSelectedColor(e.target.value);
        setColor(activeTheme[e.target.value as keyof Theme]);
    };

    const userPickedColor = (color: Color) => {
        // user is changing the current active theme based on the selectedColor
        setColor(color)
        setActiveTheme({...activeTheme, [selectedColor]: color });
        document.body.style.setProperty(`--color-${selectedColor}`, `rgb(${color.toList()})`);
    }

    const getRootTheme = (): Theme => {
       return themeVariables.reduce((acc:any, color:string) => {
            acc[color] = new Color(getComputedStyle(document.body).getPropertyValue(`--color-${color}`));
            return acc;
        }, {});
    };

    return ( 
        <>
            <label htmlFor="colors">Choose a variable</label>
            <select onChange={userSelectedVariable} value={selectedColor} name="colors" id="colors">
                {
                themeVariables.map((color:string) => (
                    <option key={color} value={color}>{color}</option>
                ))
                }    
            </select>

            <DisplayColorDiv background={color.toList()}></DisplayColorDiv>
            <ColorPicker currentColor={color} returnSelectedColor={userPickedColor}></ColorPicker>
            <HexPicker currentColor={color} returnSelectedColor={userPickedColor}></HexPicker>
        </>
    );
}
 
export default ThemeController; 