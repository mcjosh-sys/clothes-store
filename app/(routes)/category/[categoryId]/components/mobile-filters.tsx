'use client'

import { Button } from "@/components/ui/button"
import IconButton from "@/components/ui/icon-button"
import { Size, Color } from "@/types/types"
import { Dialog } from "@headlessui/react"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import Filter from "./filter"
import { useSearchParams } from "next/navigation"

interface MobileFiltersProps {
  sizes: Size[]
  colors: Color[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false)
  const searchParams = useSearchParams()

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  

  return (
    <>
      <Button onClick={onOpen} variant={searchParams.size ? "default" : "outline"} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={20}/>} onClick={onClose}/>
            </div>
            {/* Filters */}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilters