import { createSlice } from '@reduxjs/toolkit'
import { Color } from '../../util/color';

export interface ColorScheme {
    primary: Color;
    secondary: Color;
    accent: Color;
}

export const THEME_VARIABLES: string[] = 
[
    "primary", 
    "secondary", 
    "accent"
]

const initialState = {
    primary: new Color("#ffffff"),
    secondary: new Color("#ffffff"),
    accent: new Color("#ffffff")
} satisfies ColorScheme

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setColor: (state:any, action:{payload: {colorType:string, color: Color}, type: string}) => {
        document.body.style.setProperty(`--color-${action.payload.colorType}`, `rgb(${action.payload.color.toList()})`);
        state[action.payload.colorType] = action.payload.color;
    },
    setColorScheme: (state:any, action: {
        payload: ColorScheme;
        type: string;
    }) => {
        THEME_VARIABLES.forEach((variable) => {
            document.body.style.setProperty(`--color-${variable}`, `rgb(${action.payload[variable as keyof ColorScheme]})`);
            state[variable] = action.payload[variable as keyof ColorScheme];
        })

        
        
        // state = action.payload;
    },
  },
})

export const { setColorScheme, setColor } = themeSlice.actions

export default themeSlice.reducer
