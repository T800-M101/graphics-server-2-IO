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

    const { question, value } = req.body;

    const payload = {
        question,
        value
    }

    graphic.incrementQuestionsAnswers(Number(question), Number(value));

    server.io.emit('change-graphic', graphic.getGraphicData());

    res.json(graphic.getGraphicData());
});
 
export default router;