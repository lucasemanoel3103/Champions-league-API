import {Router} from 'express';
import { getPlayer } from '../controllers/players-controller';

// Gerenciador de rotas
const router = Router();


router.get("/players", getPlayer);


export default router;