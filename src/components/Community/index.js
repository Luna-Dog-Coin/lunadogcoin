import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./index.scss";
import { lunaBlockchainInfoUrl, lunaLpInfoUrl } from "../../data/data.js";

export default function Community() {

  const [hodlers, setHodlers] = useState(0);
  const [lpProviders, setLpProviders] = useState(0);

  useEffect(() => {
    axios.get(lunaBlockchainInfoUrl)
      .then(data => data.data)
      .then(data => {
        setHodlers(data.total)
      })
    axios.get(lunaLpInfoUrl)
      .then(data => data.data)
      .then(data => {
        setLpProviders(data.total)
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
      <div className="count">
        <h2>Hodlers Count</h2>
        <h1>{ hodlers }</h1>
      </div>
      <div className="count">
        <h2>Liquidity Providers Count</h2>
        <h1>{ lpProviders }</h1>
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
        <a href="https://www.reddit.com/r/LunaToken"><img alt="reddit icon" src={process.env.PUBLIC_URL + "/icons/reddit.png"}></img></a>
        <a href="https://discord.gg/ncCnbdjNfM"><img alt="discord icon" src={process.env.PUBLIC_URL + "/icons/discord.png"}></img></a>
        <a href="https://twitter.com/LunaDogCoin"><img alt="twitter icon" src={process.env.PUBLIC_URL + "/icons/twitter.png"}></img></a>
        <a href="mailto:lunadogcoin@gmail.com"><img alt="gmail icon" src={process.env.PUBLIC_URL + "/icons/gmail.png"}></img></a>
        <a href="https://app.ergodex.io/swap"><img alt="ergodex icon" src={process.env.PUBLIC_URL + "/icons/ergodex.png"}></img></a>
        <a href="https://t.me/lunadogcoin"><img alt="telegram icon" src={process.env.PUBLIC_URL + "/icons/telegram.png"}></img></a>
      </div>
      <div className="policy-id">ID: 5a34d53ca483924b9a6aa0c771f11888881b516a8d1a9cdc535d063fe26d065e</div>
    </div>
  </div>
}