import search from "../assets/search-lg.svg";
import weFrame from "../assets/Group.jpg"
import bulb from "../assets/Icon.svg"
import heart from "../assets/heart.svg"
import Cart from "../assets/Frame 179.jpg"
import lastButton from "../assets/Avatar & Icons.png"
export default function Header() {
    return(
        <>
        <div id="header">
            <ul>
                <div className="header-div">
                <li><img src={weFrame} alt="" /></li>
                <li><input type="text" name="query" placeholder="Rechercher un Produit" /><img src={search} alt="" /> </li>
                </div>
                <div className="header-div">
                <li><img src={bulb} alt="" /><span>Inspiration</span></li>
                <li><img src={heart} alt="" /><span>Mes favoris</span></li>
                <li><img src={Cart} alt="" /></li>
                {/* <li><img src={lastButton} alt="" /></li> */}
                </div>
            </ul>
        </div>
        </>
    )
}