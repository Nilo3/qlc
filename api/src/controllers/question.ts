import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const getQuestion = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
      handleHttp(res, "ERROR_GET_QUESTION")
    }
};

const getQuestions = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
      handleHttp(res, "ERROR_GET_QUESTION")
    }
};

const updateQuestion = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
      handleHttp(res, "ERROR_UPDATE_QUESTION")
    }
};

const postQuestion = ({body} : Request, res: Response) => {
    try {
        res.send(body)
    } catch (error) {
      handleHttp(res, "ERROR_POST_QUESTION")
    }
};

const deleteQuestion = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
      handleHttp(res, "ERROR_DELETE_QUESTION")
    }
};

export { getQuestion, getQuestions, postQuestion, updateQuestion, deleteQuestion };
