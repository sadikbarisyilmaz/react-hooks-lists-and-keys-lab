import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, i) => {
        return (
          <a key={i} href={"#" + link}>
            {link}
          </a>
        );
      })}
    </nav>
  );
}

export default NavBar;
