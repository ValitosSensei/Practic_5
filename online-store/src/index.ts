// Крок 1: Створення базових типів для товарів

type BaseProduct = {
    id: number;
    name: string;
    price: number;
    // Додаткові поля можна додавати за необхідністю
  };
  
  type Electronics = BaseProduct & {
    category: 'electronics';
    warrantyPeriod: number; // Поле для електроніки
  };
  
  type Clothing = BaseProduct & {
    category: 'clothing';
    size: string;
    material: string;
  };
  
  type Book = BaseProduct & {
    category: 'book';
    author: string;
    genre: string;
  };
  // Крок 2: Створення функцій для пошуку товарів

const findProduct = <T extends BaseProduct>(products: T[], id: number): T | undefined => {
    return products.find(product => product.id === id);
  };
  
  const filterByPrice = <T extends BaseProduct>(products: T[], maxPrice: number): T[] => {
    return products.filter(product => product.price <= maxPrice);
  };
  // Крок 3: Створення кошика

type CartItem<T> = {
    product: T;
    quantity: number;
  };
  
  const addToCart = <T extends BaseProduct>(
    cart: CartItem<T>[],
    product: T,
    quantity: number
  ): CartItem<T>[] => {
    return [...cart, { product, quantity }];
  };
  
  const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };
  // Крок 4: Використання функцій

const electronics: Electronics[] = [
    {
      id: 1,
      name: "Телефон",
      price: 10000,
      category: 'electronics',
      warrantyPeriod: 24
    }
  ];
  
  const clothing: Clothing[] = [
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
    let cart: CartItem<BaseProduct>[] = [];
    cart = addToCart(cart, phone, 1);
  
    const total = calculateTotal(cart);
    console.log("Загальна вартість:", total); // Повинно вивести загальну вартість
  }
  