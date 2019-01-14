import * as http from "http";
import * as sendJson from "send-data/json";

const { PORT = 3000 } = process.env;

const server = http.createServer((req, res) => {
  sendJson(req, res, {
    body: {
      "status": "ok",
      "url": req.url
    },
    statusCode: 200
  });
});

server.listen(PORT);

export default server;
