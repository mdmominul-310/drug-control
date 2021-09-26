import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Member.css'
import Profile from './Profile/Profile';

const Member = () => {
    const[members,setMembers]=useState([]);
    const[cart,SetCart]=useState([]);
    useEffect(()=>{
        fetch('./members.json')
        .then(res=>res.json())
        .then(data=>setMembers(data));
    },[]);
    const handleCart=(member)=>{
        const newCart=[...cart,member];
        SetCart(newCart);
    }
    return (
        <div className="member-main">
                 <div className="banner">
                    <h2>Members List</h2>
                </div>
            <div className="member-list">
                <div className="profiles">
                     {
                         members.map(member=><Profile handleCart={handleCart} key={member.name} member={member}></Profile>)
                     }
                 </div>
                 <div className="cart">
                     <Cart cart={cart}></Cart>
                </div>
            </div>
           

        </div>
    );
};

export default Member;