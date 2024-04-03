import React, { useState } from "react";

const Social = () => {

  const[theme,setTheme]=useState(false);

  // const [theme, setTheme] = useState(localStorage.getItem('theme')==='false');
  // useEffect(()=>{
  //   document.documentElement.classList.toggle("dark", theme);
  //   localStorage.setItem('theme',theme)
  // })

  
  document.documentElement.classList.toggle("dark", theme);
  const HandleClick = () => {
    setTheme(!theme);
  };


  return (
    <div className="home__social">
      <a
        href="https://linkedin.com/in/sanjai2002"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/sanjai0812"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a className="home__social-icon">
        <i
          onClick={HandleClick}
          className={!theme ? "uil uil-sunset" : "uil uil-moonset"}
        ></i>
      </a>
    </div>
  );
};

export default Social;
