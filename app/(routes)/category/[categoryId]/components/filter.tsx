"use client"

import { useRouter, useSearchParams } from "next/navigation"
import qs from 'query-string'

import { Button } from "@/components/ui/button"
import { Color, Size } from "@/types/types"

interface FilterProps {
    valueKey: string
    name: string
    data: (Size | Color)[]
}

const Filter: React.FC<FilterProps> = ({ valueKey, name, data }) => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const selectedValue = searchParams.get(valueKey)

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString())

        const query = {
            ...current,
            [valueKey]: id
        }

        if (current[valueKey] === id) query[valueKey] = null

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true })

        router.push(url)
    }

    return (
        <div className="mb-8">
            <div className="text-lg font-semibold">
                {name}
                <hr className="my-4" />
                <div className="flex flex-wrap gap-2">
                    {data.map(filter => (
                        <div key={filter.id} className="flex items-center">
                            <Button
                                variant={selectedValue === filter.id ? "default" : "outline"} className="rounded-md text-sm p-2 border-gray-300"
                                onClick={() => onClick(filter.id)}
                            >
                                {filter.name}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter