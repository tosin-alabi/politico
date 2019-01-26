import db from '../models/db';

const Offices = {
  createOffice(req, res) {
    const newOfficeId = req.body.id;
    const newOfficeType = req.body.type;
    const newOfficeName = req.body.name;

    const newOffice = {
      id: newOfficeId,
      type: newOfficeType,
      name: newOfficeName,
    };
    
    db.addOffice(newOffice);

    return res.json({
      status: 201,
      data: {
        id: newOffice.id,
        type: newOffice.type,
        name: newOffice.name,
      },
    });
  },
};

export default Offices;