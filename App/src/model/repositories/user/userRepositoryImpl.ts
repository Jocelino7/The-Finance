import { User, UserCredential } from "../../dtos/dtos";
import { UserRepository } from "./userRepository";

class UserRepositoryImpl implements UserRepository {
    getUser(): Promise<User> {
        throw new Error("Method not implemented.");
    }
    deleteUser(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateUser(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    sendEmailVerification(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    isEmailVerified(): Promise<true> {
        throw new Error("Method not implemented.");
    }
    reload(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    createUser(credential: UserCredential): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    authUser(credential: UserCredential): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}