import hearImg from "../assets/OtherImages/heart.svg";
import RedHeartImg from "../assets/OtherImages/RedHeart.svg"
import { useState } from "react";

export default function HeartButton({...props}) {
 


  const [color, setColor] = useState(false)
  function toggle(){
    setColor((prevState) => !prevState)
  }

  const toggledImg = color ? hearImg : RedHeartImg

    return(
    <button onClick={toggle}  {...props} style={{
      transform: color ? "scale(1.5)" : "scale(1)", // Scale effect
      transition: "transform 0.3s ease", // Smooth transition
    }}>
    <img src={toggledImg} alt="" />
  </button>
    )
}