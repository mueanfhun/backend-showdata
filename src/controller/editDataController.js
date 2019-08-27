import dataModel from '../models/schemas/dataPeople';

const peoplesController = async (req, res) => {
  const payload = {
    cardNumber: req.body.cardNumber,
    name: req.body.name,
    lastname: req.body.lastname,
    birthday: req.body.birthday,
    address: req.body.address,
  };

  await dataModel.updateOne({ cardNumber: payload.cardNumber }, payload, (err, value) => {
    console.log('lastname', payload.lastname);
    if (err) {
      res.status(400).json({ message: 'Bad request.' });
    }
    res.status(204).json({ message: 'update success.' });
  });
};

export default peoplesController;
