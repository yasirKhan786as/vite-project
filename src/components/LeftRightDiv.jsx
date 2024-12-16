import SewingMachine from "../assets/Shoes/pexels-chuck-3261068.jpg";
import Table from "../assets/LeftRightDiv/Table ronde 165cm Festi 2.png";
import Table2 from "../assets/LeftRightDiv/Group 98.png";
import Table3 from "../assets/LeftRightDiv/Group 97.png";
import Table4 from "../assets/LeftRightDiv/Group 96.png";
import Scale from "../assets/LeftRightDiv/scale.png";
import Circle from "../assets/LeftRightDiv/circle.png";
import HeartButton from "./HearButton";


import { useState } from "react";
import BelowCheese from "./BelowCheese";

export default function LeftRightDiv() {

  const [ count , setCount] = useState(0);
  
  function handleAdd(){
   setCount(count +1)
  
  }
  console.log(count)
  function handleSubtract(){ 
    if(count>0){
      setCount(count-1)
    }
  }
  return (
    <>
      <div id="left-right-flex">
        <div id="Left-div">
          <div id="TableSmallImg">
            <ul>
              {/* <li><img src={Table} alt="image" /></li> */}
              {/* <li>
                <img src={Table2} alt="" />
              </li>
              <li>
                <img src={Table3} alt="" />
              </li>
              <li>
                <img src={Table4} alt="" />
              </li> */}
            </ul>
          </div>
          <div id="SewingMachineImg">
            <img src={SewingMachine} alt="" />
          </div>
        </div>





        <div id="Right-div">
          <div id="below-rightdiv">
            <h2>Nike Air Max 270</h2>
            <HeartButton id="heart-button" />
          </div>
          <span id="below-cheese">
            <h2>
            1799₹ <span>/piece</span>
            </h2>
          </span>

          <hr />
          <div id="below-39">
            <div id="below-39-div">
              <span className="scale">
                <img src={Scale} alt="" />
                <span>
                  20<sup>cm</sup>
                </span>
              </span>
              <span className="scale">
                <img src={Circle} alt="" />
                <span>
                  10<sup>cm</sup>
                </span>
              </span>
            </div>
            <div id="below-39-ref">
              <span>RÉF : VABGN5</span>
            </div>
           
          </div>
          <hr />
          <div id="below-20cm">
            <p>
            The **Nike Air Max 270** is a stylish, lightweight shoe designed for all-day comfort with its breathable mesh upper and the largest Air Max heel unit for exceptional cushioning.<br/>
            Its durable rubber sole provides great tractionr<br/>
            while the sleek design and versatile color options make it perfect for casual wear or light activity.
            <br/>
            Lighter<br/>
            Sleek Design
            </p>
            
          </div>
          <hr id="below-20cm-hr"/>

          <div id="below-20-cm-hr-div">
              <div id="below-20-cm-hr-div-button">
                <button onClick={handleSubtract}>&nbsp;-</button>
                  <p>{count}</p>
                <button onClick={handleAdd}>+&nbsp;</button>
              </div>
              <div id="below-20-cm-hr-div-p">
               Buy Now
              </div>
          </div>

        </div>
       
      </div>

      <div id="description-left-div">
        <div id="description-left-div-upperdiv">
        <h3>Description Product</h3>
        <p>
        The **Nike Air Max 270** is a stylish, lightweight shoe designed for all-day comfort with its breathable mesh upper and the largest Air Max heel unit for exceptional cushioning. Its durable rubber sole provides great traction, while the sleek design and versatile color options make it perfect for casual wear or light activity.
        </p>
        </div>
        <div>
          <BelowCheese title="REVIEWS" className="description-left-div-customcomponent"/>
          <BelowCheese title="QUESTIONS" className="description-left-div-customcomponent"/>
        </div>
  
      </div>
    </>
  );
}
