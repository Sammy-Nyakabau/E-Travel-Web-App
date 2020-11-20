import React from 'react'

function Profile() {
    return (
        <div className="profile">
            <h2>Personal Info</h2>
            
            <h3>Legal name</h3>
            <input placeholder={"Your name"}/>

            <h3>Gender</h3>
            <input placeholder={"Gender"}/>

            <h3>Email address</h3>
            <input placeholder={""}/>

            <h3>Phone Number</h3>
            <input placeholder={""}/>

            <h3>Address</h3>
            <input placeholder={""}/>
        </div>
    )
}

export default Profile
