import { Size } from "@/types/types"
import axios from "axios"

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async (): Promise<Size[]> => {
    const res = await axios(BASE_URL)

    return res.data
}

export default getSizes