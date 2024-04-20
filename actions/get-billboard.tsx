import { Billboard } from "@/types/types"
import axios from "axios"

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboards = async (): Promise<Billboard[]> => {
    const res = await axios(BASE_URL)

    return res.data
}

export default getBillboards