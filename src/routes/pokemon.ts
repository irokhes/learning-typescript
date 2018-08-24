import { Request, Response } from 'express';

import * as pokemons from '../db.json';

const resource = '/pokemons';

export class Pokemons {
    public routes(app): void {
        app.route(resource)
            .get((req: Request, res: Response) => {
                res.status(200).send(pokemons);
            });
        app.route(`${resource}/:id`)
            .get((req: Request, res: Response) => {
                let id = req.params.id;
                res.status(200).send(pokemons[id]);
            });
    }
}