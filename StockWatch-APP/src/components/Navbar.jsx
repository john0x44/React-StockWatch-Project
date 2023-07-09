import {StockIcon} from "../icons/icons"

const Navbar = ()=>{
    return (
        <div className="bg-gray-900 text-white h-8 flex items-center">
            <div className="wrapper-container w-full">
                <div className="flex items-center gap-1 cursor-pointer">
                    <StockIcon/>
                    <p className="text-xl">
                    <p className="font-mono">
                    <p><span>StockNow</span></p>
                    </p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Navbar 