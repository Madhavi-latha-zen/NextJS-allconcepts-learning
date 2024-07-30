"use client";

import { ServerSideFunction } from "@/utils/server-utils"

export default function Clientroutepage(){
    console.log("Client route");
    const result = ServerSideFunction();
    return (
        <div><h1>ClientRoutePage</h1>
        <p>{result}</p>
        </div>
    )
}