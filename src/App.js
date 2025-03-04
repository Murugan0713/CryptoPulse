import { useSelector } from "react-redux";
import CoinExchange from "./components/CoinExchange/CoinExchange";
import CurrencySelector from "./components/CurrencyType/CurrencySelector";
import MainGraph from "./components/MainGraphContainer/MainGraph";
import MarketCap from "./components/MarketCap/MarketCap";
import NavBar from "./components/NavigationSection/NavBar";
import Portfolio from "./components/Portfollio/Portfolio";
import SearchBox from "./components/SearchSection/SearchBox";
import { toast } from "react-toastify";


function App() {
  const networkError = useSelector((state) => state.NetworkErrorHandler);
  if (networkError) {
    toast.error("Please Check Your Internet Connection !!");
  } else {
    console.log("No Error");
  }

  return (
    <div className="bg-orange-100 h-full">
      <NavBar />
      <div className="max-sm:p-2 p-4 flex max-lg:flex-col">
        <div className="lg:w-9/12 mt-[70px]">
          <div className="flex max-lg:flex-col gap-4">
            <CurrencySelector />
            <SearchBox />
          </div>
          <MainGraph />
          <div className="mt-4 flex max-lg:flex-col gap-4">
            <Portfolio />
            <CoinExchange />
          </div>
        </div>
        <div className="mt-[70px] lg:w-3/12 lg:ml-4 max-lg:mt-4">
          <MarketCap />
        </div>
      </div>
     
    </div>
  );
}

export default App;
