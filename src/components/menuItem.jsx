export const MenuItem=({name, price, onOrder})=>{
    const spanStyles={
        margin:"5px",
        padding:"3px 6px"
    }
    return(
        <div>
            <span style={spanStyles}>{name}</span>
            <span style={spanStyles}>{price}</span>
            <button onClick={()=>onOrder(name, price)}>order</button>
        </div>
    )
}