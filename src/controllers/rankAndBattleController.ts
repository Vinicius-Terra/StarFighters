import { Request, Response } from 'express';
import * as rankService from '../services/rankService';
import * as battleService from '../services/battleService';

export function rank(req: Request, res: Response) {

  const resultado = rankService.selectRank();

  res.status(200).send({resultado});
}

export function battle(req: Request, res: Response) {

  const nome1: string = req.body.firstUser;
  const nome2: string = req.body.firstUser;

  const resultado = battleService.battle(nome1, nome2);

  res.status(200).send({resultado});
}