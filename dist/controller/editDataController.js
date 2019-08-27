"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataPeople = _interopRequireDefault(require("../models/schemas/dataPeople"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const peoplesController = async (req, res) => {
  const payload = {
    cardNumber: req.body.cardNumber,
    name: req.body.name,
    lastname: req.body.lastname,
    birthday: req.body.birthday,
    address: req.body.address
  };
  await _dataPeople.default.updateOne({
    cardNumber: payload.cardNumber
  }, payload, (err, value) => {
    console.log('lastname', payload.lastname);

    if (err) {
      res.status(400).json({
        message: 'Bad request.'
      });
    }

    res.status(204).json({
      message: 'update success.'
    });
  });
};

var _default = peoplesController;
exports.default = _default;