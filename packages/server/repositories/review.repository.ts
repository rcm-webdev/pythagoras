import { prisma } from '../db';
import type { Review } from '../generated/prisma/client';

export const reviewRepository = {
   async getReviews(productId: number): Promise<Review[]> {
      return prisma.review.findMany({
         where: { productId },
         orderBy: { createAt: 'desc' },
      });
   },
};
