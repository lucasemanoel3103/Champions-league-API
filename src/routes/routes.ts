import {Router} from 'express';
import * as PlayerController from '../controllers/players-controller';

// Gerenciador de rotas
const router = Router();

router.get("/players", PlayerController.getPlayer);
router.post("/players", PlayerController.postPlayer);

router.get("/players/:id", PlayerController.getPlayerById);


export default router;