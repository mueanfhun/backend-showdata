"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataPeople = _interopRequireDefault(require("../models/schemas/dataPeople"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const deletePeopleController = async (req, res) => {
  const payload = {
    cardNumber: req.body.cardNumber
  };
  await _dataPeople.default.deleteOne({
    cardNumber: payload.cardNumber
  }, (err, value) => {
    console.log(req.body.cardNumber);

    if (err) {
      res.send(err);
    } else if (req.body.cardNumber === payload.cardNumber) {
      res.status(204).json({
        message: 'delete success.'
      });
    }
  });
};

var _default = deletePeopleController;
exports.default = _default;