import conf from "@/conf/conf";
import { Client, Account, ID } from "appwrite";

type CreateUserAcount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

const appwriteClient = new Client();

appwriteClient  
  .setEndpoint(conf.appwwriteurl) 
  .setProject(conf.appwriteprojectid);

export const account = new Account(appwriteClient);

export class AppwriteService {
  async ceateUserAcount({ email, password, name }: CreateUserAcount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }: LoginUserAccount) { 
                try {
                  return await account.createEmailPasswordSession(email , password)
                } catch (error:any) {
                    throw error 
                }
  }   
  async isLoggedin():Promise<boolean>{   
        try { 
          const data = await this.getCurrentUser() ; 
          return Boolean(data) 
            
        } catch (error:any) {
                    throw error 
        }


    return false  ;
}
async getCurrentUser(){ 
    try {
                  return   account.get()
    } catch (error:any) {
                console.log("getcurrentuser error", error)
    }   
    return null ;
} 
async logout(){ 
    try{
            return await account.deleteSession("current")
    }catch(error:any){
        console.log("logout error" , error)
    }
}
}
 
 const appwriteService =   new AppwriteService() ; 
 export default appwriteService ; 