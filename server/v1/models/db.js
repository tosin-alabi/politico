let allParties = [
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

const editParty = (partyId, partyName) => {
    for(let i = 0; i < allParties.length; i++) {       
        if (partyId === allParties[i].id) {
          allParties[i].name = partyName;
          
          return true;
        }
    }

    return false;
}

const Db = {
    editParty
}

export default Db;