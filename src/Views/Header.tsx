
import { headerLogo } from "../assets";
import { Input } from "../Components/Common";
const Header=()=>
{
    return(
        <div className="header-container">
            <div>
            <img  src={headerLogo}/>
            </div>
            <div>
            
            <Input  type="text"  />
            </div>
            
        </div>
    )
}
export default Header;