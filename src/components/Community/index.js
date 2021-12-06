import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./index.scss";
import { lunaBlockchainInfoUrl } from "../../data/data.js";

export default function Community() {

  const [hodlers, setHodlers] = useState(0);

  useEffect(() => {
    axios.get(lunaBlockchainInfoUrl)
      .then(data => data.data)
      .then(data => {
        setHodlers(data.total)
      })
  }, [])

  return <div id="community">
    <div className="container">
      <h1>Community</h1>
      <div className="luna-pict" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/icons/luna.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      </div>
      <div className="hodlers-count">
        <h2>Hodlers Count</h2>
        <h1>{ hodlers }</h1>
      </div>
      <div className="luna-text">
        <p>
          Our community was inspired by the pup you see before you, 
          probably the greatest dog in the world! This former 
          shelter dog loves running and butt scratches. 
        </p>
        <p>
          The LunaDogCoin community was started by a member of 
          the Ergo community and has quickly grown to include 
          an active group of Ergonauts and animal lovers! 
          In a crypto world of rugpulls and scams around 
          every corner, Luna has your back.
        </p>
      </div>
      <div className="icons">
        <a href="https://www.reddit.com/r/LunaToken"><img src={process.env.PUBLIC_URL + "/icons/reddit.png"}></img></a>
        <a href="https://discord.gg/ncCnbdjNfM"><img src={process.env.PUBLIC_URL + "/icons/discord.png"}></img></a>
        <a href="https://twitter.com/LunaDogCoin"><img src={process.env.PUBLIC_URL + "/icons/twitter.png"}></img></a>
        <a href="mailto:lunadogcoin@gmail.com"><img src={process.env.PUBLIC_URL + "/icons/gmail.png"}></img></a>
        <a href="https://app.ergodex.io/swap"><img src={process.env.PUBLIC_URL + "/icons/ergodex.png"}></img></a>
        <a href="https://t.me/lunadogcoin"><img src={process.env.PUBLIC_URL + "/icons/telegram.png"}></img></a>
      </div>
    </div>
  </div>
}