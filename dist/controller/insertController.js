"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataPeople = _interopRequireDefault(require("../models/schemas/dataPeople"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const insertController = (req, res) => {
  const payload = {
    cardNumber: req.body.cardNumber,
    name: req.body.name,
    lastname: req.body.lastname,
    birthday: req.body.birthday,
    address: req.body.address
  };

  _dataPeople.default.insertMany(payload, (err, value) => {
    if (err) {
      console.log(err);
      res.status(400).json({
        message: 'Bad request.'
      });
    } else {
      res.status(200).json(value);
    }
  });
};

var _default = insertController;
exports.default = _default;