"use strict";
// Крок 1: Створення базових типів для товарів
// Крок 2: Створення функцій для пошуку товарів
const findProduct = (products, id) => {
    return products.find(product => product.id === id);
};
const filterByPrice = (products, maxPrice) => {
    return products.filter(product => product.price <= maxPrice);
};
const addToCart = (cart, product, quantity) => {
    return [...cart, { product, quantity }];
};
const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};
// Крок 4: Використання функцій
const electronics = [
    {
        id: 1,
        name: "Телефон",
        price: 10000,
        category: 'electronics',
        warrantyPeriod: 24
    }
];
const clothing = [
    {
        id: 2,
        name: "Куртка",
        price: 5000,
        category: 'clothing',
        size: "L",
        material: "Бавовна"
    }
];
// Тестування функцій
const phone = findProduct(electronics, 1);
if (phone) {
    let cart = [];
    cart = addToCart(cart, phone, 1);
    const total = calculateTotal(cart);
    console.log("Загальна вартість:", total); // Повинно вивести загальну вартість
}
