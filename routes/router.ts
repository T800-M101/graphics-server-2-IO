import { Router, Request, Response } from 'express';
import Server from '../classes/server';
import { GraphicData } from '../classes/graphic';


const router = Router();

const graphic = new GraphicData();



router.get('/graphic', (req: Request, res: Response) => {
    res.json(graphic.getGraphicData());
});


router.post('/graphic', (req: Request, res: Response) => {
   const server = Server.instance;

    const { month, units } = req.body;

    const payload = {
        month,
        units
    }

    graphic.incrementMonthValue(month, Number(units));

    server.io.emit('change-graphic', graphic.getGraphicData());

    res.json(graphic.getGraphicData());
});
 
export default router;