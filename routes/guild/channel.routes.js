import { Router } from "express";
import ChannelController from "#app/controllers/guild/channel.controller.js";

export default () => {
    const api = Router({
        mergeParams: true
    });
    
    api.get("/:_id/channels", ChannelController.getChannels);

    api.post("/:_id/channels", ChannelController.createChannel);

    return api;
}