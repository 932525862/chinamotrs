// Mock data for products
export const products = [
    {
        id: 1,
        name: "Premium Whey Protein",
        brand: "SportMix Pro",
        price: 89.99,
        originalPrice: 109.99,
        rating: 4.8,
        reviews: 234,
        image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Protein",
        inStock: true,
        isNew: true,
        discount: 18
    },
    {
        id: 2,
        name: "BCAA Energy Boost",
        brand: "FitMax",
        price: 45.99,
        originalPrice: null,
        rating: 4.6,
        reviews: 156,
        image: "https://images.pexels.com/photos/4162588/pexels-photo-4162588.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Amino Acids",
        inStock: true,
        isNew: false,
        discount: 0
    },
    {
        id: 3,
        name: "Creatine Monohydrate",
        brand: "PowerLift",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.9,
        reviews: 89,
        image: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Creatine",
        inStock: false,
        isNew: false,
        discount: 25
    },
    {
        id: 4,
        name: "Pre-Workout Extreme",
        brand: "EnergyMax",
        price: 54.99,
        originalPrice: null,
        rating: 4.7,
        reviews: 312,
        image: "https://images.pexels.com/photos/4162590/pexels-photo-4162590.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Pre-Workout",
        inStock: true,
        isNew: true,
        discount: 0
    },
    {
        id: 5,
        name: "Mass Gainer 5000",
        brand: "BulkUp",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.5,
        reviews: 178,
        image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Mass Gainers",
        inStock: true,
        isNew: false,
        discount: 20
    },
    {
        id: 6,
        name: "Multivitamin Complex",
        brand: "VitalHealth",
        price: 34.99,
        originalPrice: null,
        rating: 4.4,
        reviews: 267,
        image: "https://images.pexels.com/photos/4162453/pexels-photo-4162453.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Vitamins",
        inStock: true,
        isNew: false,
        discount: 0
    }
];

export const categories = [
    { name: "Protein", count: 45 },
    { name: "Amino Acids", count: 23 },
    { name: "Creatine", count: 18 },
    { name: "Pre-Workout", count: 31 },
    { name: "Mass Gainers", count: 12 },
    { name: "Vitamins", count: 28 },
    { name: "Fat Burners", count: 19 },
    { name: "Post-Workout", count: 15 }
];

export const productData = {
    title: 'Виниловый гантель STARFIT 1кг',
    category: 'Гантели',
    price: '279 000',
    currency: 'сум',
    rating: 5,
    reviews: 0,
    description: 'Профессиональный виниловый гантель STARFIT весом 1кг. Идеально подходит для домашних тренировок, фитнеса и реабилитации. Виниловое покрытие обеспечивает комфортный хват и защищает поверхность от повреждений.',
    features: [
        'Вес: 1 кг',
        'Материал: винил',
        'Цвет: красный',
        'Удобная эргономичная форма',
        'Антискользящее покрытие'
    ],
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=800'
};