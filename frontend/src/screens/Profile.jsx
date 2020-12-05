import React, { useState } from "react";
import { useStateValue } from "../reducer/StateProvider";
import { useHistory } from "react-router-dom";
import { updateUser } from "../services/userService";
import "../styles/Profile.css";

function Profile() {

  const history = useHistory();
  const [{ user }, dispatch] = useStateValue("");
  const [email, setEmail] = useState(user?.email || "");
  const [username, setUsername] = useState(user?.username || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [phone, setPhone] = useState(user?.phoneNumber || "");
  const [address, setAddress] = useState(user?.address || "");

  const updateDetails = async (e) => {
    e.preventDefault();
    try {
      const { data: updated } = await updateUser(user._id, username, email, address, gender, phone);
      dispatch({
        type: "SET_USER",
        user: updated,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile">
      <h2 className="personal_infor">Personal Information</h2>

      <div className="input_section1">
        <h3>Username</h3>
        <input
          className="inputbox"
          placeholder={"Type your name here"}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <h3>Gender</h3>
        <input className="inputbox" placeholder={"Type your gender here"} 
         onChange={(e) => setGender(e.target.value)}
         value={gender}
         />

        <h3>Email address</h3>
        <input className="inputbox" placeholder={"Type your email here"} 
         onChange={(e) => setEmail(e.target.value)}
         value={email}
         />

        <h3>Phone Number</h3>
        <input className="inputbox" placeholder={"Type your phone number here"} 
         onChange={(e) => setPhone(e.target.value)}
         value={phone}
         />

        <h3>Address</h3>
        <input className="inputbox" placeholder={"Type your address here"} 
         onChange={(e) => setAddress(e.target.value)}
         value={address}/>

        
      </div>
      <button className="submit-review" onClick={updateDetails}>Submit</button>
    </div>
  );
}

export default Profile;
