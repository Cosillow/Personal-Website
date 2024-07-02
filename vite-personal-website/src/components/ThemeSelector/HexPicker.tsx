import { MutableRefObject, useEffect, useRef } from "react";
import { Color } from "../../util/color";
import { Picker } from "./styles";

const HexPicker = ({currentColor, returnSelectedColor}: Picker) => {
    const ref: MutableRefObject<HTMLInputElement | null> = useRef(null);

    useEffect(() => {
        ref.current!.value = currentColor.hex;
    }, [currentColor]);

    const userEnteredHex = (event: any) => {
        event.preventDefault();
        if (Color.isColor(ref.current!.value)) {
            returnSelectedColor(new Color(ref.current!.value));
        } else {
            ref.current!.value = currentColor.hex;
        }
      };
    
    return ( 
        <>
            <form action="submit" onSubmit={userEnteredHex}>
            <input type="text" ref={ref} name="HexPicer" id="HexPicker" />
            <button className="outline" type="submit">submit</button>
            </form>
            
        </>
    );
}
 
export default HexPicker;
