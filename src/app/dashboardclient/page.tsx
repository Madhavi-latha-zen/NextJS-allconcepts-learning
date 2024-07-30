"use client";
import { useState } from "react";
export default function Dashboard(){
    const [name,setName] = useState("");
    return(
        <div>
            <h1>Dashboard page for client</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
            <p>Hello,{name}!</p>
        </div>
    )
}