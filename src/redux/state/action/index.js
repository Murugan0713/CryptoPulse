export const cryptocurrency = (currency) => {
  return {
    type: "Cryptocurrency",
    payload: currency,
  };
};

export const currencyOfCountry = (currency) => {
  return {
    type: "CountryCurrency",
    payload: currency,
  };
};

export const numberOfDays = (days) => {
  return {
    type: "NumberOfDays",
    payload: days,
  };
};

export const myChartType = (chart) => {
  return {
    type: "chartType",
    payload: chart,
  };
};

export const networkError = (error) => {
  return {
    type: "NetwokError",
    payload: error,
  };
};
