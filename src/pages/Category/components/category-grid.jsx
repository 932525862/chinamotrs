import { products } from '../fake-data/data'
import { CategoryCard } from './category-card'
const CategoryGrid = () => {
    return (
        <div className={`grid lg:grid-cols-4 md:grid-cols-3 lg:gap-7 grid-cols-2 sm:gap-4 gap-3`}>
            {products.map((product) => (
                <CategoryCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default CategoryGrid