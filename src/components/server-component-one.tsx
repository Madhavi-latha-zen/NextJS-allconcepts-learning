import fs from "fs";
import { ServerComponentTwo } from "./server-component-two";

export const ServerComponentOne=()=>{
    fs.readFileSync("src/components/server-component-one.tsx","utf-8")
    return(
        <div>
            <h1>server component one</h1>
            <ServerComponentTwo/>
        </div>
    )
}