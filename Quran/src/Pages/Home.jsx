import React from "react";
import Nav from "../Components/Nav";
import Logo from '../assets/main.svg'

export default function Home() {
  return (
  <>
    <Nav/>
      
    <div className="h-[80vh] w-full bg-center bg-cover bg-no-repeat max-sm:h-96" 
      style={{backgroundImage: `url(${Logo})`}}>
      hi
    </div>
  </>);
}
