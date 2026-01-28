import type { Request, Response } from 'express';
import { prisma } from './db';
import express from 'express';
// import { chatController } from './controllers/chat.controller';
// import { reviewController } from './controllers/review.controller';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
   res.send('Hello World!');
});

router.get('/api/hello', (req: Request, res: Response) => {
   res.json({ message: 'Hello World! This is the backend' });
});

router.get('/api/products/:id/reviews', async (req: Request, res: Response) => {
   const productId = Number(req.params.id);

   if (isNaN(productId)) {
      res.status(400).json({ error: 'Invalid product ID' });
      return;
   }

   const reviews = await prisma.review.findMany({
      where: { productId },
      orderBy: { createAt: 'desc' },
   });

   res.json(reviews);
});

// router.post('/api/chat', chatController.sendMessage);

// router.get('/api/products/:id/reviews', reviewController.getReviews);
// router.post(
//    '/api/products/:id/reviews/summarize',
//    reviewController.summarizeReviews
// );

export default router;
