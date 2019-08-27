"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _insertController = _interopRequireDefault(require("./controller/insertController"));

var _peoplesController = _interopRequireDefault(require("./controller/peoplesController"));

var _deletePeopleController = _interopRequireDefault(require("./controller/deletePeopleController"));

var _editDataController = _interopRequireDefault(require("./controller/editDataController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});
router.post('/addpeople', _insertController.default);
router.get('/people', _peoplesController.default);
router.put('/updatepeople', _editDataController.default);
router.delete('/deletepeople', _deletePeopleController.default);
var _default = router;
exports.default = _default;