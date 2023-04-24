import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaUserCheck, 
    FaUserTie,
    FaUser,
    FaShoppingBag,
    FaUserGraduate,
    FaHome,
    FaFileAlt
}from "react-icons/fa";
import { Settings} from '@material-ui/icons'

import './slidebar.css'
import { NavLink } from 'react-router-dom';

 
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/accueil",
            name:"Session",
            icon:<FaTh/>
        },
        {
            path:"/Client",
            name:"Client",
            icon:<FaUserAlt/>
        },
        {
            path:"/Formateur",
            name:"Formateur",
            icon:<FaUserGraduate/>
        },
        {
            path:"/utilisateur",
            name:"Nos collaborateurs",
            icon:<FaUserTie/>
        },
        {
            path:"/financeur",
            name:"Financeur",
            icon:<FaUser/>
        },
        {
            path:"/prospect",
            name:"Prospect",
            icon:<FaUserCheck/>
        },
        {
            path:"/formation",
            name:"Formation",
            icon:<FaShoppingBag/>
        },
        {
            path:"/location",
            name:"Salle de formation",
            icon:<FaHome/>
        },
        {
            path:"/Bilan",
            name:"Bilan",
            icon:<FaFileAlt/>
           
        },
        {
            path:"/parametre",
            name:"Parametre",
            icon:<Settings/>
           
        }
    ]
    return (
        <div className="slidebar">
           <div style={{width: isOpen ? "450px" : "70px"}} className="sidebar">
               <div className="top_section">
                   <img style={{display: isOpen ? "block" : "none"}} className="logo" alt="logo" src="../logo_victis.png"/>
                   <div style={{marginLeft: isOpen ? "200px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               { 
                   menuItem.map((item, index)=>( 
                       <NavLink to={item.path} key={index}   className={(navData) => (navData.isActive ? "active link" : 'link')}> 
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;