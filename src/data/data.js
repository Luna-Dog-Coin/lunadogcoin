module.exports = {
  tokenomics: {
    labels: ['Community Building', 'Initial Liquidity', 'Treasury', 'Celebrations', 'Founder'],
    datasets: [
      {
        label: 'Token Distribution',
        data: [37.5, 22.5, 20, 10, 10],
        color: "#000000",
        backgroundColor: [
          '#7400b8',
          '#5e60ce',
          '#4ea8de',
          '#64dfdf',
          '#80ffdb',
        ],
        borderWidth: 0,
      },
    ],
  },
  projectStages: [
    {
      desc: "Coin Minted on the Ergo Network with a Supply of 20,000,000",
      status: "done",
      image: "/ergo_logo.png",
    },
    {
      desc: "LunaDog Added to the Ergo Tipper Bot on r/ergonauts",
      status: "done",
      image: "/ergotipperbot.png",
    },
    {
      desc: "Community Subreddit, Telegram, and Discord Kicked Off",
      status: "done",
      image: "/reddit_and_discord.png",
    },
    {
      desc: "Addition of LunaDog to ErgoDex",
      status: "done",
      image: "/ergodex.png",
    },
    {
      desc: "CoinMarketCap and CoinGecko Listings",
      status: "no"
    },
    {
      desc: "Marketing, SEO, and Brand Expansion",
      status: "no"
    }
  ],
  lunaBlockchainInfoUrl: "https://api.ergoplatform.com/api/v1/boxes/unspent/byTokenId/5a34d53ca483924b9a6aa0c771f11888881b516a8d1a9cdc535d063fe26d065e"
}