import express from 'express';
import increaseController from './controller/insertController';
import peoplesController from './controller/peoplesController';
import deletePeoplesController from './controller/deletePeopleController';
import editDataController from './controller/editDataController';

const router = express.Router();


router.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});
router.post('/addpeople', increaseController);
router.get('/people', peoplesController);
router.put('/updatepeople', editDataController);
router.delete('/deletepeople', deletePeoplesController);

export default router;
