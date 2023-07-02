import React from "react";
import { Link } from "react-router-dom";

//top navbar
import NavbarComp from "../components/Navbar";

export default function Home() {
  return (
    <div>
      {/**top navbar */}
      <NavbarComp />
      <br/><br/>
      <div className="text-center">
      <h1>Welcome</h1>
        <h1 style={{color:"Black"}} className=" mt-5 ">Connect with your friends</h1>

        <button
          type="button"
          class="btn btn-outline-secondary btn-lg btn-block mt-3 "
        >
          <Link to="/chat" style={{ textDecoration: "none", color: "black"}}>
             Chat
          </Link>
        </button>
      </div>
    </div>
  );
}
