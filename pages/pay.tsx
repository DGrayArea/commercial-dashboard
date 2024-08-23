export default function Home() {
  const coins = [
    {
      name: "Bitcoin",
      logo: "/btc.png",
      symbol: "BTC",
    },
    {
      name: "Ethereum",
      logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
      symbol: "ETH",
    },
    {
      name: "Litecoin",
      logo: "/ltc.png",
      symbol: "LTC",
    },
    {
      name: "Dai",
      logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
      symbol: "DAI",
    },
    {
      name: "USD Coin",
      logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
      symbol: "USDC",
    },
    {
      name: "Tether",
      logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
      symbol: "USDT",
    },
  ];
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="font-bold flex flex-row justify-between w-full text-2xl">
        <div>Total</div>
        <div>$300</div>
      </div>
      <div className="w-full flex justify-center items-center text-center text-xl">
        <input
          className="w-[550px] border-none outline-none bg-none mx-0 font-bold block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          value="0x6ce60ed682a30f6b3ba83b9f19081c5c8a09c737"
        />
      </div>
      <div className="w-full text-2xl font-medium">
        {" "}
        Express Checkout
        <button className="w-full bg-blue-600 text-white rounded-3xl py-2 px-4 text-xl mt-6 font-semibold">
          Pay With ETH
        </button>
      </div>
      Select a cryptocurrency to pay with another wallet
      <div className="grid space-x-3 space-y-2 grid-cols-3">
        {coins.map((coin) => (
          <div
            className={`flex flex-row items-center justify-between px-2 py-2 ${
              coin.symbol === "ETH" ? "bg-gray-400" : "bg-gray-100"
            } rounded-3xl w-60 text-sm`}
            key={coin.name}
          >
            <div className="flex flex-row items-center">
              <div>
                <img
                  className={`${
                    coin.symbol === "BTC" ? "w-7" : "w-8"
                  } rounded-full`}
                  src={coin.logo}
                />
              </div>
              <div className="ml-2">{coin.name}</div>
            </div>

            <div className="text-gray-400 text-sm font-bold">{coin.symbol}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
