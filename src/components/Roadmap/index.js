import React, { useEffect } from "react";
import "./index.scss";
import data from "../../data/data.js";

export default function Roadmap() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let el = document.getElementById("roadmap")
      let position = el.getBoundingClientRect()

      // checking for partial visibility
      if(position.top < 400) {
        showItems()
      }
    })
  }, [])

  return <div id="roadmap">
    <div className="container">
      <h1>Roadmap</h1>
      <div className="roadmap-path">
        {
          data.projectStages.map((stage, index) => {
            return <div key={index} className={`roadmap-path-item roadmap-${stage.status}`}>
              <div className="indicator"></div>
              { 
                stage.image ? 
                <img alt="stage icon" src={process.env.PUBLIC_URL + "/icons" + stage.image}/> : ""
              } 
              <div className="roadmap-path-item-title">{stage.title}</div>
              <div className="roadmap-path-item-description">{stage.desc}</div>
            </div>
          })
        }
      </div>
    </div>
  </div>
}

const showItems = () => {
  let items = document.getElementsByClassName("roadmap-path-item")
  if (!items.length) return
  let index = 0
  setInterval(() => {
    try {
      items[index].classList.add("roadmap-show")
      index++
    } catch (e) { }
  }, 200);
  window.removeEventListener("scroll", ()=>{})
}