import dataModel from '../models/schemas/dataPeople';


const peoplesController = async (req, res) => {
  await dataModel.find({}, (err, value) => {
    if (err) {
      res.send(err);
    }
    res.json(value);
  });
};

export default peoplesController;
