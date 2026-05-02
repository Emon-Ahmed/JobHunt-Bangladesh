import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../database/connection";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        await connectDB();

        const result = await Users.findOne({ email: credentials.email }).lean();
        if (!result) {
          throw new Error("No User Found");
        }

        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Email or Password Doesn't Match");
        }

        return {
          id: result._id.toString(),
          name: result.fullname || result.username,
          email: result.email,
          role: result.role,
        };
      },
    }),
  ],
  secret: "YkZUU+Fj+Em8UXqiHSGPBYTQ9fwqxmoDInSH+jQiatM=",
});
