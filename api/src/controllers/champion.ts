import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const getChampion = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
      handleHttp(res, "ERROR_GET_CHAMPION")
    }
};

const getChampions = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
      handleHttp(res, "ERROR_GET_CHAMPION")
    }
};

const updateChampion = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
      handleHttp(res, "ERROR_UPDATE_CHAMPION")
    }
};

const postChampion = ({body} : Request, res: Response) => {
    try {
        res.send(body)
    } catch (error) {
      handleHttp(res, "ERROR_POST_CHAMPION")
    }
};

const deleteChampion = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
      handleHttp(res, "ERROR_DELETE_CHAMPION")
    }
};

export { getChampion, getChampions, postChampion, updateChampion, deleteChampion };
