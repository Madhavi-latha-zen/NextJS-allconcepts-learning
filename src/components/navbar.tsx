import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";
// import { useState } from "react";
export const Navbar =() =>{
    console.log(`navbar rendered`);
    // const [search,setsearch] = useS   tate("")
    return(
        <div>
            <NavLinks/>
            <NavSearch/>
        </div>
    )
}