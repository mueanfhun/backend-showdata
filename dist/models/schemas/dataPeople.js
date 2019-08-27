"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dataSchema = new _mongoose.default.Schema([{
  cardNumber: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}]);

const peoples = _mongoose.default.model('peoples', dataSchema);

var _default = peoples;
exports.default = _default;