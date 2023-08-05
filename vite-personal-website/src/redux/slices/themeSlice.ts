import { AnyAction, Dispatch, createSlice } from '@reduxjs/toolkit'
import { Color } from '../../util/color';
import { useSelector } from 'react-redux';

/*
This theme slice stores all of the theme information as strings
However, the rest of the application uses the theme data as if it is a Color object
I already wrote the logic in the other components using Color objects, and ran into non-serlializable value errors
So, I went with this solution allowing to keep my logic throughout the app
*/

export interface ThemeData {
    primary: string;
    secondary: string;
    accent: string;
}

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

export const useTheme = (): ColorScheme => {
    return useSelector((state: any) => dataToColorScheme(state.theme));
};


export const setThemeColor = (dispatch: Dispatch, colorType: string, color: Color) => {
    // allow the user to use a reducer with the custom `Color` class
    dispatch(setColor({ colorType, color: color.toList() }));
};

export const setThemeColors = (dispatch: Dispatch, colorScheme: ColorScheme) => {
    // allow the user to use a reducer with the custom `Color` class
    dispatch(setColorScheme(colorSchemeToData(colorScheme)));
};

const dataToColorScheme = (data: ThemeData): ColorScheme => {
    return Object.entries(data).reduce((acc, [key, value]) => {
        acc[key as keyof ColorScheme] = new Color(`rgb(${value})`);
        return acc;
    }, {} as ColorScheme);
};


const colorSchemeToData = (scheme: ColorScheme): ThemeData => {
    return Object.entries(scheme).reduce((data, [key, value]) => {
        data[key as keyof ThemeData] = value.toList();
        return data;
    }, {} as ThemeData);
};


const initialState: ThemeData = {
    primary: "255,255,255",
    secondary: "255,255,255",
    accent: "255,255,255"
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setColor: (state: any, action: { payload: { colorType: string, color: string }, type: string }) => {
            document.body.style.setProperty(`--color-${action.payload.colorType}`, `rgb(${action.payload.color})`);
            state[action.payload.colorType] = action.payload.color;
        },
        setColorScheme: (state: any, action: {
            payload: ThemeData;
            type: string;
        }) => {
            THEME_VARIABLES.forEach((variable) => {
                document.body.style.setProperty(`--color-${variable}`, `rgb(${action.payload[variable as keyof ColorScheme]})`);
                state[variable] = action.payload[variable as keyof ColorScheme];
            })
        },
    },
})

export const { setColorScheme, setColor } = themeSlice.actions

export default themeSlice.reducer
