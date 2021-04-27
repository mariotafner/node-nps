import {Router} from 'express'
import {UserController} from './controllers/UserController'

/*
    GET => Busca
    POST => Salvar
    PUT => Alterar
    DELETE => Deletar
    PATCH => Alteração específica
*/

const router = Router()

const userControler = new UserController

router.post("/users", userControler.create);

export {router}