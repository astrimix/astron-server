import { httpEv, mongooseEv, socketEv } from "../events/index.js";

export default {
  listen() {
    httpEv();
    mongooseEv();
    socketEv();
  },
};
