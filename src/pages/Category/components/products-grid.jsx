import { useEffect, useState } from 'react';
import { ProductCard } from './product-card';

const ProductsGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const getProducts = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/products`);
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            setProducts(data?.data);
            console.log(data?.data)
        } catch (err) {
            console.error("Error fetching products:", err);
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {products && products?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsGrid;
