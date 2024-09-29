import CredentialsProvider from 'next-auth/providers/credentials'
export const authOptions = {
    providers:[
        CredentialsProvider({
            name:"Email",
            credentials:{
                username:{
                    label:"Username", type:"text", placeholder:"username"
                },
                password:{
                    label:"Password", type:"password", placeholder:"Password"
                }
            },
            async authorize(credentials:any){
                return {id:"sdg"};
            }
        })
    ]
}