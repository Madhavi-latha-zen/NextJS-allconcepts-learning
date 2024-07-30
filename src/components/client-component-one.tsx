"use client";

import { useState } from "react";

export const ClientComponentOne=()=>{
    const[name,setname] = useState("batman");
    return(
        <h1>client component one</h1>
    )
}