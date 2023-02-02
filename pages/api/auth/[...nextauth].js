import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../database/connection";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectDB().catch((error) => {
          error: "Connection failed";
        });

        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No User Found");
        }
        // compare()
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Email or Password Doesn't Match");
        }
        return result;
      },
    }),
  ],
  secret: "YkZUU+Fj+Em8UXqiHSGPBYTQ9fwqxmoDInSH+jQiatM="
});
