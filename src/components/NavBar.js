import React from "react";

function NavBar() {
  const links = [ "home", "about", "projects" ];
  
  const linkList = links.map( ( link ) =>
  {
    return (
      <a key={ link } href={ "#" + link } >{ link }</a>
      )
  } );

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {/* <a href="#home">home</a>
      <a  href="#about">about</a>
      <a  href="#projects">projects</a> */}

      {linkList}
    </nav>
  );
}

export default NavBar;
