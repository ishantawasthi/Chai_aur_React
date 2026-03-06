 
   //  making a services  -->  same code use  for future appwrite projects  and  also  for  future  projects  which  use appwrite as backend
 
 
 import { Client, Account, ID } from "appwrite";
 import conf from "../conf/config.js";

export class AuthService {

    client = new Client();
    account;

    constructor() {

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }


    async createAccount({ email, password, name }) {

        try {

            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if (userAccount) {

                // Auto login after signup
                return this.login({ email, password });

            } else {

                return userAccount;

            }

        } catch (error) {

            console.log("Appwrite service :: createAccount :: error", error);

        }

    }


    async login({ email, password }) {

        try {

            await this.account.createSession(email, password);

            return this.getCurrentUser();

        } catch (error) {

            console.log("Appwrite service :: login :: error", error);

        }

    }


    async getCurrentUser() {

        try {

            return await this.account.get();

        } catch (error) {

            console.log("Appwrite service :: getCurrentUser :: error", error);

        }

        return null;

    }


    async logout() {

        try {

            await this.account.deleteSession("current");

        } catch (error) {

            console.log("Appwrite service :: logout :: error", error);

        }

    }

}

const authService = new AuthService();

export default authService;