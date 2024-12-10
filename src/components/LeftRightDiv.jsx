import SewingMachine from "../assets/LeftRightDiv/Location Cheese big picture 1.png";
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
              <li>
                <img src={Table2} alt="" />
              </li>
              <li>
                <img src={Table3} alt="" />
              </li>
              <li>
                <img src={Table4} alt="" />
              </li>
            </ul>
          </div>
          <div id="SewingMachineImg">
            <img src={SewingMachine} alt="" />
          </div>
        </div>





        <div id="Right-div">
          <div id="below-rightdiv">
            <h2>Cheese – appareil à raclette 1/2 roue</h2>
            <HeartButton id="heart-button" />
          </div>
          <span id="below-cheese">
            <h2>
              39,50€ <span>/piece</span>
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
                  50<sup>cm</sup>
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
            Location appareil à raclette - Raclette traditionnelle 1/2 roue<br/>
            Réglable en hauteur<br/>
            Appareil à raclette professionnel<br/>
            Boîtier de chauffe horizontal réglable en hauteur<br/>
            <br/>
            220V<br/>
            900W
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
                Ajoute Au Panier
              </div>
          </div>

        </div>
       
      </div>

      <div id="description-left-div">
        <div id="description-left-div-upperdiv">
        <h3>Description Produit</h3>
        <p>
          Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
          pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour
          votre mariage, une fête d'anniversaire ou du personnel, ce produit a
          fait l'objet d'une sélection rigoureuse par notre équipe. Il est en
          location chez nous sous la référence "VAJGC". Nous sommes à votre
          disposition pour que les événements de nos clients, même en
          last-minute, soient toujours une réussite. Vous pourrez trouver tout
          une série d'autre produit à louer de ce type dans la catégorie "Art de
          la Table".
        </p>
        </div>
        <div>
          <BelowCheese title="LIVRAISONS" className="description-left-div-customcomponent"/>
          <BelowCheese title="QUESTIONS" className="description-left-div-customcomponent"/>
        </div>
  
      </div>
    </>
  );
}
