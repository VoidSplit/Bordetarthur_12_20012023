import "../SideBarCategory/SideBarCategory.css";

import bicycle from '../../assets/sidebarCategoryIcons/bicycle.svg'
import meditation from '../../assets/sidebarCategoryIcons/meditation.svg'
import natation from '../../assets/sidebarCategoryIcons/natation.svg'
import strength from '../../assets/sidebarCategoryIcons/strength.svg'

export default function SideBarCategory({type}) {
    if(type === "bicycle") return (<div className="sidebar-category"> <img src={bicycle} alt="Bicycle" /> </div>)
    if(type === "meditation") return (<div className="sidebar-category"> <img src={meditation} alt="Meditation" /> </div>)
    if(type === "natation") return (<div className="sidebar-category"> <img src={natation} alt="natation" /> </div>)
    if(type === "strength") return (<div className="sidebar-category"> <img src={strength} alt="strength" /> </div>)
};