import { User, UserCredential } from "../../dtos/dtos";

export interface UserRepository {
   getUser():Promise<User>
   deleteUser():Promise<boolean>
   updateUser():Promise<boolean>
   sendEmailVerification():Promise<void>
   isEmailVerified():Promise<true>
   reload():Promise<void>
   createUser(credential:UserCredential):Promise<boolean>
   authUser(credential:UserCredential):Promise<boolean>
}