import { Category } from "@/types/types"
import axios from "axios"

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
    const res = await axios(BASE_URL)

    return res.data
}

export default getCategories