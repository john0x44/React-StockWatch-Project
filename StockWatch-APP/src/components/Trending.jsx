import useAxios from "../hooks/useAxios"
import TickerTrending from "./TickerTrending"
const TrendingStocks = () => {
    const { response } = useAxios('securities/movers?dataPoints=exchange,name,ticker,lastPrice,netChange,percentNetChange,performanceId,volume','v2')

    return (
        <div className="mt-8">
            <h1 className="text-xl mb-2">Trending Stocks</h1>
            {response && response.actives.map((ticker, index) => (
                <TickerTrending key={ticker.ticker} ticker={ticker} index={index} />
            ))}
        </div>
    )
}
export default TrendingStocks;
