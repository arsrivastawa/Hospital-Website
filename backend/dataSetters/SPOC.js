function setSPOCData(Fname, Lname, Mob, Email) {
  const SPOCDetail = {
    firstname: Fname,
    lastname: Lname,
    mobile: Mob,
    email: Email,
  };
  return SPOCDetail;
}

module.exports = setSPOCData;
