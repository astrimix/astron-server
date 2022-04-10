import { server } from "../main";

const msg = {
  server_start: (addr, port) =>
    `Server running on port ${addr || "*"}:${port}!`,
  server_stop: "Connection terminated.",
  error: "An error has occured on stack: \n\n",
};

export default () => {
  server.on("listening", () =>
    logger.log(
      "HTTP Server",
      "info",
      msg.server_start(server.address().address, server.address().port)
    )
  );
  server.on("close", () =>
    logger.log("HTTP Server", "info", "Connection terminated")
  );
  server.on("error", (error) =>
    logger.log("HTTP Server", "error", `${msg.error}${error}`)
  );
};
