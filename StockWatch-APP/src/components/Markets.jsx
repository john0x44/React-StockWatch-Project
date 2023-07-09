import useAxios from "../hooks/useAxios";
import TickerMarket from "./TickerMarket";


const Markets = () => {
  const { response: tickerResponse } = useAxios('securities/search?securityIds=0P00002D7X,0P0000OQN8,0P00002D82,0P000002CH,0P000003RE,0P000002HD,0P000000GY,0P000000B7,0P0000W3KZ,0P00016CGN,0P000003UP', 'v1');
  const { response: priceResponse } = useAxios('securities/0P00002D7X,0P0000OQN8,0P00002D82,0P000002CH,0P000003RE,0P000002HD,0P000000GY,0P000000B7,0P0000W3KZ,0P00016CGN,0P000003UP/realtime?dataPoints=lastPrice,netChange,volume', 'v2');

  const getTickerPrice = (tickerId) => {
    return priceResponse && priceResponse[tickerId] && priceResponse[tickerId].lastPrice.value;
  };
  const getTickerPriceChange = (tickerId) =>{
    return priceResponse && priceResponse[tickerId] && priceResponse[tickerId].netChange.value;
  };

  const getTickerVolume = (tickerId) =>{
    return priceResponse && priceResponse[tickerId] && priceResponse[tickerId].volume.value;
  }

  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2">Popular Stocks</h1>
      {tickerResponse && tickerResponse.map(ticker => (
        <TickerMarket
          key={ticker.performanceId}
          ticker={ticker}
          tickerPrice={getTickerPrice(ticker.performanceId)}
          tickerPriceChange={getTickerPriceChange(ticker.performanceId)}
          tickerVolume={getTickerVolume(ticker.performanceId)}
        />
      ))}
    </section>
  );
};

export default Markets;
