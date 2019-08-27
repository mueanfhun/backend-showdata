import dataModel from '../models/schemas/dataPeople';
import dataPeoples from '../datapeople.json';

const insertController = (req, res) => {
  const payload = {

    cardNumber: req.body.cardNumber,
    name: req.body.name,
    lastname: req.body.lastname,
    birthday: req.body.birthday,
    address: req.body.address,
  };
  dataModel.insertMany(payload, (err, value) => {
    if (err) {
      console.log(err);
      res.status(400).json({ message: 'Bad request.' });
    } else {
      res.status(200).json(value);
    }
  });
};

export default insertController;
