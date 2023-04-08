import { useEffect, useState } from "react";
import { Color } from "../../util/color";
import { Picker } from "./styles";

const HexPicker = ({currentColor, returnSelectedColor}: Picker) => {
    const [userEnteredColor, setUserEnteredColor] = useState<string>(currentColor.hex);

    useEffect(() => {
        setUserEnteredColor(currentColor.hex);
    }, [currentColor]);
    

    const userEnteredHex = (event: any) => {
        event.preventDefault();
        if (Color.isColor(userEnteredColor)) {
            console.log("is color",new Color(userEnteredColor));
            returnSelectedColor(new Color(userEnteredColor));
        } else {
            console.log("current color:", currentColor);
            setUserEnteredColor(currentColor.hex);
        }
        
      };

    
    
    return ( 
        <>
            <form action="submit" onSubmit={userEnteredHex}>
            <input type="text" onChange={(e)=>setUserEnteredColor(e.target.value)} value={userEnteredColor} name="HexPicer" id="HexPicker" />
            <button className="outline" type="submit">submit</button>
            </form>
            
        </>
     );
}
 
export default HexPicker;