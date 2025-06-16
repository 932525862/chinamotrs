import { products } from '../fake-data/data'
import { ProductCard } from './product-card'

const ProductsGrid = (sub = false) => {
    return (
        <div className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${sub && "px-10"}`}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsGrid