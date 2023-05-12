import React from "react";
import './Menu.css';
import { NavLink } from "react-router-dom";

export default function Menu(){
    const menuName =[
        {
            id:1,
            to:'/Home',
            name:'Home'
        },
        {
            id:2,
            to:'/AboutPage',
            name:"About"
        },
        {
            id:3,
            to:"/Contact",
            name:"Contact"
        },
        {
            id:4,
            to:'/Jokes',
            name:'Jokes'
        },
        {
            id:5,
            to:'/Register',
            name:'Register'
        }
    ]
    return(
        <div id="nav">
            <ul id="ul">
                {menuName.map((e)=>(
                    <NavLink key={e.id} to={e.to} className={({isActive})=>(isActive ? "Li1" : "Li2")}><li>{e.name}</li></NavLink>
                ))}
                {/* <NavLink to="/Home" className={({isActive})=>(isActive ? "Li1" : "Li2")}><li>Home</li></NavLink>
                <NavLink to="/AboutPage" className={({isActive})=>(isActive ? "Li1" : "Li2")}><li>About</li></NavLink>
                <NavLink to="/Contact" className={({isActive})=>(isActive ? "Li1" : "Li2")}><li>Contact</li></NavLink>
                <NavLink to="/Corona" className={({isActive})=>(isActive ? "Li1" : "Li2")}><li>Corona</li></NavLink>
                <NavLink to="/Register" className={({isActive})=>(isActive ? "Li1" : "Li2")}><li>Register</li></NavLink> */}
            </ul>
        </div>
    )
}

// NavLink-kanchvum e react-router-dom ic ayn katarum e a tegi gorcoxutyuny hrefi
// poxaren aystex ashxatum e to hatkutyuny  NavLink-y uni isActive hatkutyun kam parametr vory  irenic nerkayacnum e erb sexmel enq tvyal elementi vra ayn darnum e activ u karoxenq tal erku klas