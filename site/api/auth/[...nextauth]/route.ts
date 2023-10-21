import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

console.log(process.env.GITHUB_ID);
console.log(process.env.GITHUB_SECRET);

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
});

export { handler as GET, handler as POST };
