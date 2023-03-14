import "./styles.css";
import { FaAlignJustify } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
const Menu = () => {
    return (<div className="Menubar">
        <div className="logocontainer">
            <i><FaAlignJustify /></i>
        
        </div>
        <div className="searchbar">
            <input type="text" placeholder="search"/>
            <div className="searchicon">
            
               <BiSearchAlt></BiSearchAlt>

            </div>
            
        </div>
          <div className="menulist">
            <ul><b>
                <li>Inspiration</li>
                <li>Find Work</li>
                <li>Learn Design</li>
                <li>Go Pro</li>
                <li>Hire Design</li>
          </b></ul>
          </div>
        </div>);
};
 
export default Menu ;

