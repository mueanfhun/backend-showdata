import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema(

  [
    {
      cardNumber: { type: String, required: true },
      name: { type: String, required: true },
      lastname: { type: String, required: true },
      birthday: { type: String, required: true },
      address: { type: String, required: true },
    },
  ],
);

const peoples = mongoose.model('peoples', dataSchema);

export default peoples;
