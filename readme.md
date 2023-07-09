# StockWatch-App

StockWatch-App is a web application that provides and displays trending and popular stocks. The software utilizes various components to create a modern and user-friendly interface for the clients. It leverages React, Tailwind CSS, and JavaScript for the frontend implementation. The application retrieves stock data through the Morningstar API using Axios.

## Components

### TrendingStocks

The `TrendingStocks` component retrieves trending stock data from the API and displays the stocks in a list. It utilizes the TickerTrending component to render each stock.

### TickerTrending

The `TickerTrending` component represents an individual stock in the trending stocks list. It displays the stock name, ticker symbol, last price, net change, and percentage net change. The styling of the component changes based on whether the net change is positive or negative.

### TickerMarket

The `TickerMarket` component represents a stock in the popular stocks list. It displays the stock name, ticker symbol, last price, net change, and percentage net change. Additionally, it shows the stock's volume. The component also applies styling based on the net change.

### Navbar

The `Navbar` component is responsible for rendering the application's navigation bar. It displays the StockNow logo and provides a visual cue for the user to return to the homepage.

### Markets

The `Markets` component retrieves popular stock data from the API and displays the stocks in a list. It uses the TickerMarket component to render each stock.

## Libraries Utilized

The following libraries were used in this project:

- React
- Tailwind CSS
- Axios

## Demonstration

![StockWatch-App Demo](https://i.gyazo.com/96be5283f1ef1a503b83806775a0c83e.gif)

Please refer to the provided demonstration to get a visual understanding of how the StockWatch-App works.

- The software utilizes icons from the original owner. Credits to the original icon creators.

