function setHospitalData(Name, GovtID, ContactNo, Email) {
  const HospitalDetail = {
    name: Name,
    govtID: GovtID,
    contactno: ContactNo,
    email: Email,
  };
  return HospitalDetail;
}

module.exports = setHospitalData;
