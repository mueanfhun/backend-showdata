import dataModel from '../models/schemas/dataPeople';


const deletePeopleController = async (req, res) => {
  const payload = {

    cardNumber: req.body.cardNumber,

  };
  await dataModel.deleteOne({ cardNumber: payload.cardNumber }, (err, value) => {
    console.log(req.body.cardNumber);
    if (err) {
      res.send(err);
    } else if (req.body.cardNumber === payload.cardNumber) {
      res.status(204).json({ message: 'delete success.' });
    }
  });
};

export default deletePeopleController;
