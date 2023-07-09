import { TrendingDown, TrendingUp } from "../icons/icons";
const TickerMarket = ({ ticker, tickerPrice, tickerPriceChange, tickerVolume }) => {
    return (
      <>
        <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-1 rounded border-gray-300 border-b hover:bg-gray-100">
          <div className="flex items-center gap-1 w-full">
            <p>{ticker.name}</p>
            <span className = "text-xs">({ticker.ticker})</span>
          </div>
          <span className = "w-full text-center">${tickerPrice}</span>
          <span className = {`flex gap-1 ${tickerPriceChange < 0 ? 'text-red-600' : 'text-green-600'}`}>
            {tickerPriceChange < 0 ? < TrendingDown /> : < TrendingUp />}
            %{tickerPriceChange}
          </span>
          <div className = "hidden sm:block">
            <p className = "font-semibold">Volume</p>
            <span>{tickerVolume}</span>
          </div>
        </div>
      </>
    );
  };
  
  export default TickerMarket;
  