import React from 'react';
import { TrendingUp, TrendingDown } from '../icons/icons';

const TickerTrending = ({ ticker, index}) => {
  const tickerPos = index + 1;
  
  return (
    <>
      <div className="font-light mb-1 p-1 border-gray-200 border-1 rounded hover:bg-gray-50">
        <div className="flex items-center gap-1">
          <span className="font-semibold">{tickerPos + '. '}</span>
          <p>{ticker.name}</p>
          <small className="text-xs">({ticker.name})</small>
        </div>
        <span className = "w-full text-center">${ticker.lastPrice}</span>
          <span className = {`flex gap-1 ${ticker.netChange < 0 ? 'text-red-600' : 'text-green-600'}`}>
            {ticker.netChange < 0 ? < TrendingDown /> : < TrendingUp />}
            %{ticker.netChange}
          </span>
      </div>
    </>
  );
};

export default TickerTrending;
