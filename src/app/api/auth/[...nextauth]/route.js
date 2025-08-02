import NextAuth from "next-auth";
import {Auth0Provider} from "next-auth/providers/auth0"

const authOptions = {
    provider : [
        Auth0Provider({
            
        })
    ],
    session : {
        strategy : 'jwt'
    },
    secret : ''
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}