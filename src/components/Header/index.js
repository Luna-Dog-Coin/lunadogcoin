import React from "react";
import "./index.scss";

export default function Header() {

  return (
    <div className="full-container" id="header" onMouseMove={followCursor} onMouseOut={resetLogo}>
      <div className="logo-container">
        <img id="logo" src={ process.env.PUBLIC_URL + "/icons/logo.png" } alt="logo of luna dog coin"></img>
        <span className="title">The Luna Dog Coin</span>
        <span className="subtitle">"Bring a little fun and levity to the often overly serious crypto world."</span>
        <div className="button-container abs">
          <a href="#tokenomics"><button>Tokenomics</button></a>
          <a href="#roadmap"><button>Roadmap</button></a>
          <a href="#community"><button>Community</button></a>
          <a href="https://app.ergodex.io/swap" target="_blank"><button>How to buy</button></a>
          <button onClick={openWhitepaper}>Whitepaper</button>
        </div>
      </div>
    </div>
  )
}

const resetLogo = () => {
  const logo = document.getElementById("logo")
  logo.style.transform = `rotateX(0deg) rotateY(0deg)`
}

const followCursor = (e) => {
  const logo = document.getElementById("logo")
  const logoPos = logo.getBoundingClientRect()
  const logoPosX = logoPos.x + logo.clientWidth / 2
  const logoPosY = logoPos.y + logo.clientWidth / 2
  const maxRotate = 15

  let cursorX = (e.clientX)
  let cursorY = (e.clientY)

  let rotateX = e.clientY > logoPosY ? -getDegree(logoPosY, cursorY, maxRotate) : getDegree(logoPosY, cursorY, maxRotate);
  let rotateY = e.clientX > logoPosX ? getDegree(logoPosX, cursorX, maxRotate) : -getDegree(logoPosX, cursorX, maxRotate);
  logo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

const getDegree = (logoPos, mousePos, maxRotate) => {
  let dist = Math.abs(logoPos - mousePos)
  let maxDist = 100
  if (dist <= maxDist) {
    return Math.floor((dist/maxDist) * maxRotate)
  }
  return maxRotate
}

const openWhitepaper = () => {
  window.open(process.env.PUBLIC_URL + "/files/whitepaper.pdf")
}