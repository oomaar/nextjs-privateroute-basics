import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: "bc9f60152972805ec59f",
            clientSecret: "23ba663c71f24c38273e7853be3ecab43a7b1cce"
        })
    ]
});