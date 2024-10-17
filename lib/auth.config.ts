import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Username",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          console.log("user not found");
          return null;
        }
        const existingUser = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
          select: {
            email: true,
            password: true,
            id: true,
            name: true,
          },
        });
        const orgs = await prisma.organization.findMany({
          where:{
            creatorId:existingUser?.id
          },
          select:{
            id:true
          }
        })
        console.log("orgs",orgs);
        const orgIds = orgs.map(org=>org.id);
        if (
          orgs&&
          existingUser &&
          existingUser.password &&
          (await bcrypt.compare(credentials.password, existingUser.password))
        ) {
          console.log("user found with correct credentials");
          return {
            id: existingUser.id,
            organizationId:orgIds,
            email: existingUser.email,
            name: existingUser.name,
          };
        }
        console.log("user not found");
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.userId = user.id || token.sub; 
        token.orgIds = user.orgIds
      }
      console.log("JWT Token:", token);
      return token;
    },
    session: ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.userId;
        session.user.orgIds = token.orgIds;
      }
      console.log("aman",session)
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
};