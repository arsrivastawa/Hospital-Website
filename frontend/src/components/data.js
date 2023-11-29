export const admin = {
  name: "Aditya Ranjan",
  acc_num: 123456789123,
  status: "active",
};

const hospitalData = {
  HospitalDetail: {
    name: "something",
    govtID: "126381fkjg",
    contactno: "0123456789",
    email: "abcd@example.com",
  },
  AddressDetail: {
    line1: "Hostel 26",
    line2: "BIT Sindri",
    state: "Jharkhand",
    district: "Dhanbad",
    pin: "828122",
    coordinates: {
      lati: "23.381923",
      longi: "34.323433",
    },
  },
  SPOCDetail: {
    firstname: "Aditya",
    lastname: "Ranjan",
    mobile: "9999999999",
    email: "arsrivastawa2710@gmail.com",
  },
  password: "qwertyui.gfdrtHBHGRTYT^7Re45yF",
  salt: "qwertyui.",
  DoctorDetail: [
    {
      firstname: "Shashank",
      lastname: "Shekhar",
      mobile: "8888888887",
      email: "doctor@gmail.com",
      specialization: "Nephrologist",
      medicalLicenseNo: "NMCXMCI3179",
      address: {
        line1: "Ganja Gali",
        line2: "Kasayin Muhalla",
        district: "Dhanabad",
        state: "Jharkhand",
        pin: "826001",
      },
      arrivingTime: new Date(1, 1, 2023, 9, 30),
      departingTime: new Date(1, 1, 2023, 22, 15),
      presence: true,
    },
  ],
};

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const reciept = [
  {
    name: "Syed Adnan Ahmed",
    dateFrom: new Date(2023, 7, 25, 8, 30),
    dateTo: new Date(2023, 7, 25, 21, 15),
    tran_id: "XOKJOJKFDTDFVOX",
    amnt: 10000.0,
  },
  {
    name: "Shashank Shekhar",
    dateFrom: new Date(2023, 7, 25, 8, 30),
    dateTo: new Date(2023, 7, 25, 21, 15),
    tran_id: "XOKJOJKBFHRTCHAX",
    amnt: 15000.0,
  },
  {
    name: "Aditya Ranjan",
    dateFrom: new Date(2023, 7, 25, 8, 30),
    dateTo: new Date(2023, 7, 25, 21, 15),
    tran_id: "XOKJOJKFDTJGHTX",
    amnt: 11200.0,
  },
];
export const payments = [
  {
    date: new Date(2023, 7, 16, 21, 52),
    tran_id: "XOKJOJKFDTDFVOX",
    amnt: 9000.0,
  },
  {
    date: new Date(2023, 7, 21, 10, 39),
    tran_id: "XOKJOJKBFHRTCHAX",
    amnt: 8100.0,
  },
  {
    date: new Date(2023, 6, 22, 17, 13),
    tran_id: "XOKJOJKFDTJGHTX",
    amnt: 6000.0,
  },
];
