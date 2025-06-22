import { ProductCard } from './product-card';

const ProductsGrid = ({ products }) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4">
            {products && products?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsGrid;
