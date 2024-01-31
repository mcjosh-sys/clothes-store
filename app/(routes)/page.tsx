import getBillboards from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import { Billboard } from "@/components/billboard"
import { Container } from "@/components/ui/container"
import { ProductList } from "@/components/product-list"

export const revalidate = 0

const HomePage = async () => {

  const billboard = await getBillboards("51a0067c-65c6-4879-9a80-3a5168737883")
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage