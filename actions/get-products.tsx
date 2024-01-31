import qs from "query-string"

import { Product } from "@/types/types"
import axios from "axios"

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
    categoryId?: string
    colorId?: string
    sizeId?: string
    isFeatured?: boolean
}

const getProducts = async ({categoryId, colorId, sizeId, isFeatured}: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: BASE_URL,
        query: {
            categoryId, colorId, sizeId, isFeatured
        }
    })
    const res = await axios(url)

    return res.data
}

export default getProducts