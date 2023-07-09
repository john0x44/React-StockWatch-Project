import TrendingStocks from "../components/Trending"
import Markets from "../components/Markets"
const Home = () =>{
    return (
        <div className = "wrapper-container">
            <TrendingStocks />
            <Markets />
        </div>
    )
}
export default Home