const allParties = [
  {
    id: 1,
    name: 'Action Peoples Congress',
    hqAddress: 'Wuse Zone II, Abuja, Nigeria',
    logoUrl: '../assets/images/apc.png',
  },
  {
    id: 2,
    name: 'All Democratic Congress',
    hqAddress: 'Wuse Zone I, Abuja, Nigeria',
    logoUrl: '../assets/images/adc.png',
  },
  {
    id: 3,
    name: 'Alliance for Democracy Party',
    hqAddress: 'Gwarinpa, Abuja, Nigeria',
    logoUrl: '../assets/images/adp.jpg',
  },
  {
    id: 4,
    name: 'All Peoples Grand Alliance',
    hqAddress: 'Garki, Abuja, Nigeria',
    logoUrl: '../assets/images/adc.png',
  },
];

const Parties = {
  viewParties(req, res) {
    return res.json({
      status: 200,
      data: allParties,
    });
  },
};

export default Parties;
