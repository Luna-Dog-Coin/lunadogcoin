import React, { useEffect, useLayoutEffect } from "react";
import "./index.scss";
import data from "../../data/data.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const options = {
  plugins: {
    legend: {
      display: true,
      labels: {
        color: "#42174b"
      }
    },
  }
}

export default function Tokenomics() {

  return <div id="tokenomics">
    <div className="container">
      <h1>Tokenomics</h1>
      <div className="text-container">
        <div className="left">
          <div className="chart-title">Token Distribution (%)</div>
          <Pie
            data={data.tokenomics}
            options={options}
          ></Pie>
        </div>
        <div className="right">
          <p>
            Only 20 Million Luna Dog Coins (“LDC”) will ever exist. 
            Such a low supply relative to other currencies makes each 
            token more valuable, like a collectible. 
          </p>
          <p>
            Around 1/4 of the total supply has been airdropped 
            to early adopters and will be provided as liquidity 
            on exchanges. The community"s involvement is intended 
            to ensure that no one person will have the ability 
            to manipulate the liquidity pool.
          </p>
          <p>
            The remaining supply will be used in the future 
            to incentivize liquidity and help grow the community 
            and project. It is a very early stage for this 
            fantastic project, so be sure you check out all 
            the ways to get involved by joining our <a href="#community">community</a>
          </p>
        </div>
      </div>
    </div>
  </div>
}