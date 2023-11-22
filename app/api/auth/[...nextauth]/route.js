import { verifyPassword } from "@/app/utilities/auth";
import db from "@/app/utilities/db/db";
import Users from "@/app/utilities/db/models/Users";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await db.connect();

        const dbuser = await Users.findOne({
          username: credentials.username,
        });

        if (!dbuser) {
          await db.disconnect();
          throw new Error("نام کاربری وجود ندارد.");
        }

        const isValid = await verifyPassword(
          credentials.password,
          dbuser.password
        );

        if (!isValid) {
          await db.disconnect();
          throw new Error("رمزعبور اشتباه است.");
        }

        await db.disconnect();

        const user = {
          username: dbuser.username,
          firstName: dbuser.firstName,
          lastName: dbuser.lastName,
          role: dbuser.role,
          sizes: dbuser.sizes,
        };

        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    //signOut: "/auth/signout",
    //error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});

export { handler as GET, handler as POST };
