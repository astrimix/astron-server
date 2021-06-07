import { Router } from "express";
import memberController from "../../controllers/guild/member.controller.js";

export default () => {
    const api = Router({
        mergeParams: true
    });
    
    

    return api;
}