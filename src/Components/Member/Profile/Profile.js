import React from 'react';
import './Profile.css'
const Profile = (props) => {
    const{name,role,year,address,salary,qualification,url}=props.member;
    return (
        <div className="profile-container">
            <div className="profile-wrapper"> 
             <img src={url} alt="" />
            <h2>Name: {name}</h2>
            <p><small>Role: {role} </small></p>
            <h3>Year: {year} </h3>
            <h3>Salary: {salary} </h3>
            <h3>Educational Qualification: {qualification} </h3>
            <p>Address: {address} </p>
            <button className="btn-cart" onClick={()=>{props.handleCart(props.member)}}><i class="fas fa-cart-plus"></i> Add To Cart</button>
            </div>
            </div>
    );
};

export default Profile;