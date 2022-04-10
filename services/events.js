import { httpEv, mongooseEv, socketEv } from "../events/index.js";

export default {
  mongo: {
    listen: () => mongooseEv(),
  },

  http: {
    listen: (httpServer) => httpEv(httpServer),
  },
  socket: {
    listen: (ioServer) => socketEv(ioServer),
  },
};
