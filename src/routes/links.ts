import { Router } from 'express';

import linksController from '../controllers/links';
import AppError from '../errors/AppError';

const router = Router();

router.post('/links', async (request, response) => {
  const link = await linksController.postLink(request.body);

  if (!link.id) {
    throw new AppError('Falha ao cadastrar o Link', 400);
  }

  response.status(201).json(link);
});

router.get('/links/:code', async (request, response) => {
  const code = request.params.code as string;

  const link = await linksController.hitLink(code);

  if (!link) {
    throw new AppError('Link não encontrado', 404);
  }

  response.json(link);
});

router.get('/links/:code/status', async (request, response) => {
  const code = request.params.code as string;

  const link = await linksController.getLink(code);

  if (!link) {
    throw new AppError('Link não encontrado', 404);
  }

  response.json(link);
});

export default router;
