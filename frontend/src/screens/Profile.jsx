import React from 'react'
import "../styles/Profile.css";
function Profile() {
    return (
        <div className="profile">
            <h2 className="personal_infor">Personal Information</h2>
            
            <div className="input_section1">
            <h3>Legal name</h3>
            <input className="inputbox" placeholder={"Sahil Verma"}/>

            <h3>Gender</h3>
            <input className="inputbox" placeholder={"Male"}/>

            <h3>Email address</h3>
            <input className="inputbox" placeholder={"sahilverma2k@gmail.com"}/>

            <h3>Phone Number</h3>
            <input className="inputbox" placeholder={"99101912219"}/>

            <h3>Address</h3>
            <input className="inputbox" placeholder={"B3/22 Delhi"}/>
            </div>
            <button className="submit-review">Submit</button>
        </div>
    )
}

export default Profile
