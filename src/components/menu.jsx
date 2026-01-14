import {MenuItem} from './menuItem';

export const Menu= ()=>{
    function orderHandler(name, price){
        alert(`order ${name} that costs ${price} will be ready soon`);
    }

    return(
        <div>
            <h2 className="error">Orders Menu</h2>
            <MenuItem name="burger" price={35} onOrder={orderHandler}></MenuItem>
            <MenuItem name="pizza" price={65} onOrder={orderHandler}></MenuItem>
            <MenuItem name="kebab" price={84} onOrder={orderHandler}></MenuItem>
        </div>
    )
}