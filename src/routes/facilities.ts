import { Router } from 'express';
import getFacilities from "../services/facilities/getFacilities";


const router = Router();
router.route('/').get(getFacilities);
export default router;
