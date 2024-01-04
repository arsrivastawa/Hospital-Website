function setAddressData(L1, L2 = null, State, Dist, PIN, Coord) {
  const AddressDetail = {
    line1: L1,
    line2: L2,
    state: State,
    district: Dist,
    pin: PIN,
    coordinates: {
      lati: Coord.lati,
      longi: Coord.longi,
    },
  };
  return AddressDetail;
}

module.exports = setAddressData;
