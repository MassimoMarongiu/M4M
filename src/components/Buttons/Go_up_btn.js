import React from "react";
import "./go_up_btn.css";

function Go_up_btn() {
  
  
  window.onclick = function(){
    scrollToTop();
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return <button className="go_up_btn" onclick={scrollToTop}>^</button>;
}

export default Go_up_btn;
