import { Category, User } from "../../dtos/dtos";
import { CategoryRepository } from "./categoryRepository";

class CategoryRepositoryImpl implements CategoryRepository {
    constructor(){

    }
    search(uuid: string, user: User): Promise<Category[]> {
        throw new Error("Method not implemented.");
    }
    getCategory(uuid: string): Promise<Category> {
        throw new Error("Method not implemented.");
    }
    getCategories(userUuid: string): Promise<Category[]> {
        throw new Error("Method not implemented.");
    }
    deleteCategory(userUuid: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    addCategory(category: Category): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateCategory(uuid: string, category: Category): boolean {
        throw new Error("Method not implemented.");
    }
}