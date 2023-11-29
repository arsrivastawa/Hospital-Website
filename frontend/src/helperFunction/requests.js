import axios from "axios";

export default function sendSignupDetails(
  hname,
  govtID,
  hContact,
  hEmail = undefined,
  hAdLine1,
  hAdLine2 = undefined,
  hState,
  hDistrict,
  hPin,
  hCoord,
  spocFName,
  spocLName,
  spocMobile,
  spocEmail,
  password,
  warning
) {
  if (
    !(
      hname &&
      govtID &&
      hContact &&
      hAdLine1 &&
      hState &&
      hDistrict &&
      hPin &&
      hCoord &&
      spocFName &&
      spocLName &&
      spocMobile &&
      spocEmail &&
      password
    )
  ) {
    warning("Please fill all the Details");
    setTimeout(() => {
      warning("");
    }, 5000);
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(hEmail)) {
    }
    /* axios
      .post(`http://localhost:3000/aiseHi`, {
        hname,
        govtID,
        hContact,
        hEmail,
        hAdLine1,
        hAdLine2,
        hState,
        hDistrict,
        hPin,
        hCoord,
        spocFName,
        spocLName,
        spocMobile,
        spocEmail,
        password,
        warning,
      })
      .then((res) => console.log(res.data.done)); */
  }
}
