function setDoctorData(
  Fname,
  Lname,
  Mob,
  Email,
  Spec,
  MedLic,
  L1,
  L2 = null,
  Dist,
  State,
  PIN,
  ArrTime,
  DepTime,
  Presence
) {
  const DoctorDetail = {
    firstname: Fname,
    lastname: Lname,
    mobile: Mob,
    email: Email,
    specialization: Spec,
    medicalLicenseNo: MedLic,
    address: {
      line1: L1,
      line2: L2,
      district: Dist,
      state: State,
      pin: PIN,
    },
    arrivingTime: ArrTime,
    departingTime: DepTime,
    presence: Presence,
  };
}

module.exports = setDoctorData;
