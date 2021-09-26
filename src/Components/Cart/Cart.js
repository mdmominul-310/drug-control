import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart}=props;
    console.log(cart);
    let totalSalary=0;
    for(const member of cart){
        totalSalary=totalSalary+member.salary;
     
    }
    return (
        <div className="cart-item">
            <h2><i class="fas fa-cart-plus"></i> Cart Summary</h2>
            <p> <i class="fas fa-user-plus"></i> Total add member: {cart.length} </p>
            
           {
               cart.map(member=> <h3 className="member-name"><i class="fas fa-user"></i> {member.name} </h3>)
           }
            <p>Total salary: {totalSalary} </p>

        </div>
    );
};

export default Cart;