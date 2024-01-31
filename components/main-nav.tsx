'use client'
import { cn } from "@/lib/utils"
import { Category } from "@/types/types"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface MainNavProps {
    data: Category[]
}
export const MainNav: React.FC<MainNavProps> = ({ data }) => {
    const pathname = usePathname()

    const routes = data.map(route => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

    return (
        <nav
            className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
            {routes.map(({href, label, active}) => (
                <Link
                    key={href}
                    href={href}
                    className={cn('text-sm font-semibold transition-all hover:text-black',
                    active ? 'text-black border-b-2 border-black':'text-neutral-500')}
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
}
