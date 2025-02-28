import express from 'express'
import { addGame , getAllGames , updatedGame , deleteGame} from '../controllers/gameController.js';



const router = express.Router();


router.get('/all-games' , getAllGames)
router.route('/add-game').post(addGame);
router.put('/update-game/:id' ,  updatedGame);
router.delete('/delete-game/:id' , deleteGame)




export default router;
