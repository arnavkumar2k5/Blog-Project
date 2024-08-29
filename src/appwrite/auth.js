import Conf from '../Conf/Conf'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(Conf.appwriteUrl)
        .setProject(Conf.appwriteProjectID)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get() 
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }
    }

    async logout(){
        try {
            // return await this.account.deleteSession('current')) //THIS DELETE ONE PARTICULAR SESSIONS

            return await this.account.deleteSessions() //THIS DELETE ALL THE SESSIONS
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }
}

const authService = new AuthService();

export default authService;