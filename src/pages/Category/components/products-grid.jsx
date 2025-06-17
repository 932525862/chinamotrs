import { products } from '../fake-data/data'
import { ProductCard } from './product-card'

const ProductsGrid = () => {
    return (
        <div className={`grid lg:grid-cols-2 md:grid-cols-2 lg:gap-7 grid-cols-1 sm:gap-4 gap-3`}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsGrid