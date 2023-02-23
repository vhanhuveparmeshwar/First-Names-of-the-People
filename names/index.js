const getPeopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (getPeopleNames) => {
  return getFirstNames(getPeopleNames);
};

module.exports = getPeopleInCity;
