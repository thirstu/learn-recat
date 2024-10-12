import conf from "../conf/conf.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client=new Client();
    account;
    constructor(){

        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwritePROJECT_ID);

        this.account=new Account(this.client);
        console.log(this.client);
        console.log(this.account);
    }
    async createAccount({email, password,name}){
        try {
        console.log(email, password,name);

            const userAccount=await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                //////call another method
            return this.login({ email, password });
            }else{
                return userAccount;
            }
        } catch (err) {
            console.error(" createAccount",err)
            throw err
        }
    }

    async login({email, password}){
        try {
        console.log("login",email, password);
        const emailPasswordSession=await this.account.createEmailPasswordSession(email, password);
        console.log("login",emailPasswordSession);


            return emailPasswordSession?emailPasswordSession:null;
        } catch (err) {
            console.error("login",err);
            throw err;
        }

    }
    async getCurrentUser(navigate){
        try {
            console.log("getCurrentUser-navigate",navigate);
            const session = await this.account.getSession('current');  // Check if session exists
            console.log("getCurrentUser-session",session);
            if (!session) {
                console.log("No active session found. User is not logged in.",session);
                navigate('/login');
                return null;  // Return early if no session
            }
        console.log("getCurrentUser-this.account",this.account);

            const currentUser=await this.account.get();
            console.log("43getCurrentUser",currentUser);
            if (currentUser) {
                return currentUser
            } else {
                return null;
            }
        } catch (err) {
            console.error("Error fetching current user:", err);
            if (err.code === 401) {
                console.log("Unauthorized: No session found, redirecting to login.");
                navigate('/login');  // Redirect to login if unauthorized
            }else {
                // Log any other unexpected errors for debugging purposes
                console.error("Unexpected error:", err);
            }
            // throw err;
        };

        return null;

    }

    async logout(){
        try {
        console.log("logout-this.account",this.account);
            const logoutUser = await this.account.deleteSessions("current");
            if (logoutUser) {
                return logoutUser
            } else {
                return null;
            }
        } catch (err) {
            console.error("logout",err);
            throw err;
        }
    }
};

const authService=new AuthService()

export default authService;