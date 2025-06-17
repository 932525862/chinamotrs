import { products } from '../fake-data/data'
import { CategoryCard } from './category-card'
const CategoryGrid = () => {
    return (
        <div className={`grid lg:grid-cols-3 md:grid-cols-2 lg:gap-7 grid-cols-1 sm:gap-4 gap-3`}>
            {products.map((product) => (
                <CategoryCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default CategoryGrid