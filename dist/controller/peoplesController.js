"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataPeople = _interopRequireDefault(require("../models/schemas/dataPeople"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const peoplesController = async (req, res) => {
  await _dataPeople.default.find({}, (err, value) => {
    if (err) {
      res.send(err);
    }

    res.json(value);
  });
};

var _default = peoplesController;
exports.default = _default;