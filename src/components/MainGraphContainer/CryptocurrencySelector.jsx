import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cryptocurrency, networkError } from "../../redux/state/action";
import axios from "axios";

const CryptocurrencySelector = () => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.currentCryptocurrency);
  const [isOpen, setIsOpen] = useState(false);
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);

  // Wrap the function with useCallback to prevent it from being re-created on each render
  const getCryptoCurrencies = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://tusharoxacular09.github.io/cryptocurrency_api/api.json"
      );
      setCryptoCurrencies(data);
    } catch (error) {
      dispatch(networkError(true));
    }
  }, [dispatch]); // Only re-create if dispatch changes

  useEffect(() => {
    getCryptoCurrencies();
  }, [getCryptoCurrencies]); // Now it's included in the dependencies

  return (
    <div className="max-sm:w-10/12 w-5/12 max-lg:w-6/12 max-sm:h-6 h-10 flex rounded-md border hover:text-blue-700 hover:border-blue-500">
      <div className="w-full h-full items-center relative flex rounded-md bg-slate-100 shadow-sm">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full rounded-l-md px-4 max-sm:px-2 py-2 font-medium max-sm:text-xs max-md:text-sm lg:text-base cursor-pointer"
        >
          {`${selectedCurrency}`}
        </div>
        <div onClick={() => setIsOpen((prev) => !prev)} className="h-full relative">
          <button
            type="button"
            className="flex h-full items-center justify-center rounded-r-md border-1 border-gray-10 px-2 hover:bg-gray-200"
          >
            {!isOpen && <img src="./svg-images/drop-down.svg" alt="" />}
            {isOpen && <img src="./svg-images/drop-up.svg" alt="" />}
          </button>
        </div>

        {isOpen && (
          <div className="min-w-[200px] max-h-[250px] absolute max-sm:top-2 top-7 right-0 z-10 mt-4 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg overflow-y-scroll">
            <div>
              {cryptoCurrencies.map((currency, i) => (
                <div
                  key={i}
                  onClick={() => {
                    dispatch(cryptocurrency(currency.name));
                    setIsOpen(false);
                  }}
                  className="flex rounded-lg items-center hover:bg-gray-100 cursor-pointer gap-1 px-4 py-2 max-sm:text-xs text-base text-gray-600 no-underline"
                >
                  {currency.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptocurrencySelector;
