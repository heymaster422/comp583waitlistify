import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import { useState } from 'react';
import Nav from "../Nav/Nav";

const Profile = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [check, setCheck] = useState('true');


  return (
    <>
      <Nav isColorBlind = {check}/>
      <div className="profile">
        <div className="p-4 box mt-3 text-center">
          Hello Welcome <br />
          {user && user.email}
        </div>
        <div className="d-grid gap-2">
          <Button variant="primary" style={check ? { backgroundColor: "#D22030" } : { backgroundColor: "#886627" }} onClick={handleLogout}>
          
            Log out
          </Button>
        </div>
        <div>
        <Button primary onClick={() => setCheck((prevCheck) => !prevCheck)}>ColorBlind Mode</Button>
        </div>
      </div>
    </>
  );
};

export default Profile;