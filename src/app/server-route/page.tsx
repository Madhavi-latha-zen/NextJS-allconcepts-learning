import { ServerSideFunction } from "@/utils/server-utils"

export default function Serverroutepage(){
    console.log("server route");
    const result = ServerSideFunction();
    return (
        <div><h1>ServerRoutePage</h1>
        <p>{result}</p>
        </div>
    )
}