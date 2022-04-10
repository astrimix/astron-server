const CONSTANTS = {
  server_start: (addr, port) =>
    `Server running on port ${addr || "*"}:${port}!`,
  server_stop: "Connection terminated.",
  mongoose_accept: "Connection accepted!",
  mongoose_close: "Connection closed!",
  mongoose_error: (error) => `Connection error on stack: \n\n ${error}`,
  error: (error) => `An error has occured on stack:\n\n ${error}`,
  socket_connect: "A new client has connected",
};

export default CONSTANTS;