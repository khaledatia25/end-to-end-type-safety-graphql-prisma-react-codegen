import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import { schema } from "./schema";
const port = Number(process.env.PORT) || 4000;

const yoga = createYoga({
  schema,
  context: (ctx) => ({
    user: {
      id: Number.parseInt(ctx.request.headers.get("x-user-id") ?? "1", 10),
    },
  }),
});

const server = createServer(yoga);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
