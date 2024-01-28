import { builder } from "../builder";
import prisma from "../db";
builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    messages: t.relation("messages"),
  }),
});

/*
    type User {
        id: ID!
        name: String!
        messages: [Message!]!
    }
*/
builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    resolve: async (query, root, args, ctx, info) => {
      return await prisma.user.findMany({ ...query });
    },
  })
);
