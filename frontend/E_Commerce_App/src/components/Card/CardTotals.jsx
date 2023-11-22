import { useState } from "react";
import { useCardContext } from "../../context/CardProvider";
import Checkbox from '@mui/material/Checkbox';

const CardTotals = () => {
  const {cardItems}=useCardContext();
  const[fastCargoChecked,setFastCargoChecked]=useState(false)
  
  const cardItemsTotal=cardItems.map((item)=>{
    const itemTotal=item.productItem.price*item.quantity;
    return itemTotal 
  })
  const subTotals=cardItemsTotal.reduce((previousValue,currentValue)=>{
    return previousValue+currentValue;
  },0)//reduce ile toplama yapıldı ve başlangıç değeri 0 verildi
  const cargoFee=15
  const cardTotals=fastCargoChecked ? (cargoFee+subTotals).toFixed(2) : subTotals.toFixed(2)
  console.log("total:",cardTotals)
  
  console.log("subtotal:",subTotals)
  console.log("cardTotal",cardItemsTotal)
  console.log("fastcargo:",fastCargoChecked)
    return (
      <div className="card-totals">
        <h2>Cart totals</h2>
        <table>
          <tbody>
            <tr className="card-subtotal">
              <th>Subtotal</th>
              <td>
                <span id="subtotal">${subTotals.toFixed(2)}</span>
              </td>
            </tr>
            <tr>
              <th>Shipping</th>
              <td>
                <ul>
                  <li>
                    <label>
                      Fast Cargo: $15.00
                      
                      <Checkbox  checked={fastCargoChecked} onChange={()=>setFastCargoChecked(!fastCargoChecked)}  id="fast-cargo"  />
                    </label>
                  </li>
                  <li>
                    <a href="#">Change Address</a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td>
                <strong id="card-total">${cardTotals}</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="checkout">
          <button className="btn btn-lg">Proceed to checkout</button>
        </div>
      </div>
    );
  };
  
  export default CardTotals;