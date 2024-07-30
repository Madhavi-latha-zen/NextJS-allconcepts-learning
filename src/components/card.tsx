const Card=({children}:{children:React.ReactNode})=>{
    const CardStyle={
        padding:"20px",
        margin:"10px",
        border:"1px solid orange",
        
    };
    return(
      <div style={CardStyle}>{children}</div>
    )
}
export default Card;