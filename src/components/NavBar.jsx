export default function NavBar({ScrollToShoes, ScrollToJeans, ScrollToShirts, ScrollToPants, ScrollToTShirts}) {
    return(
        <div id="navBar">
            <ul>
               <button onClick={ScrollToShoes}><li>Shoes</li></button>
                <button onClick={ScrollToShirts}><li>Shirts</li></button>
                <button onClick={ScrollToJeans}><li>Jeans</li></button>
          
                <button onClick={ScrollToTShirts}><li>T-Shirts</li></button>
                
               
            </ul>
        </div>
    )
}