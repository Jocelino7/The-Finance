import { Category, User } from "../../dtos/dtos"

export interface CategoryRepository {
    getCategory(uuid:string):Promise<Category>
    getCategories(userUuid:string):Promise<Category[]>
    deleteCategory(userUuid:string):Promise<boolean>
    addCategory(category:Category):Promise<boolean>
    updateCategory(uuid:string,category:Category):boolean,
    search(uuid:string,user:User):Promise<Category[]>
}