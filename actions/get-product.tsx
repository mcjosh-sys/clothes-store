import qs from "query-string"

import { Product } from "@/types/types"
import axios from "axios"

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async (id: string): Promise<Product> => {
    const res = await axios(`${BASE_URL}/${id}`)

    return res.data
}

export default getProduct