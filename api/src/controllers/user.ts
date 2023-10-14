import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { interUser,getUsers, getUser, updateUser } from "../services/user";

const getOneUser = async ({params}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await getUser(id);
        res.send(response)
    } catch (error) {
      handleHttp(res, "ERROR_GET_USER")
    }
};

const getAllUsers =async (req: Request, res: Response) => {
    try {
        const response = await getUsers()
        res.send(response)
    } catch (error) {
      handleHttp(res, "ERROR_GET_USERS")
    }
};

const updateOneUser = async ({params, body}: Request, res: Response) => {
    try {
      const {id} = params
        const response = await updateUser(id, body)
        res.send(response)
    } catch (error) {
      handleHttp(res, "ERROR_UPDATE_USER")
    }
};

const postUser = async ({body} : Request, res: Response) => {
    try {
        const responseUser = await interUser(body)
        res.send(responseUser)
        
        
    } catch (e) {
      handleHttp(res, "ERROR_POST_USER", e)
    }
};

const deleteUser = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
      handleHttp(res, "ERROR_DELETE_USER")
    }
};

export { getOneUser, getAllUsers, postUser, updateOneUser, deleteUser };
