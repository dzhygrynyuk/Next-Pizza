export const categories = [
    {
        name: "Pizzas",
    },
    {
        name: "Combo",
    },
    {
        name: "Appetizer",
    },
    {
        name: "Burgers",
    },
    {
        name: "Salads",
    },
    {
        name: "Desserts",
    },
    {
        name: "Coffee",
    },
    {
        name: "Drinks",
    }
];

export const ingredients = [
    {
        name: "Cheese board",
        price: 45,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/579-01.jpg",
    },
    {
        name: "Red onion",
        price: 15,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/255-01.jpg",
    },
    {
        name: "Chicken fillet",
        price: 30,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/247-01.jpg",
    },
    {
        name: "Bell pepper",
        price: 15,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/253-01.jpg",
    },
    {
        name: "French fries",
        price: 30,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/249-01.jpg",
    },
    {
        name: "Salami",
        price: 15,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/242-01.jpg",
    },
    {
        name: "Mushrooms",
        price: 15,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/251-01.jpg",
    },
    {
        name: "Tomatoes",
        price: 15,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/252-01.jpg",
    },
    {
        name: "Chili pepper",
        price: 15,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/254-01.jpg",
    },
    {
        name: "Corn",
        price: 15,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/257-01.jpg",
    },
    {
        name: "Ham",
        price: 15,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/244-01.jpg",
    },
    {
        name: "Gorgonzola",
        price: 20,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/240-01.jpg",
    },
    {
        name: "Parmesan",
        price: 35,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/239-01.jpg",
    },
    {
        name: "Brinza cheese",
        price: 30,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/669-01.jpg",
    },
    {
        name: "Mozzarella",
        price: 30,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/238-01.jpg",
    },
    {
        name: "Hunting sausages",
        price: 20,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/245-01.jpg",
    },
    {
        name: "Pineapple",
        price: 20,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/260-01.jpg",
    },
    {
        name: "Bacon",
        price: 25,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/695-01.jpg",
    },
    {
        name: "Pear",
        price: 20,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/241-01.jpg",
    },
    {
        name: "Balyk",
        price: 25,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/243-01.jpg",
    },
    {
        name: "Iceberg lettuce",
        price: 15,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/261-01.jpg",
    },
    {
        name: "Salmon",
        price: 45,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/670-01.jpg",
    },
    {
        name: "Olives",
        price: 15,
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/256-01.jpg",
    }
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
    {
        name: "Burgerbox",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/1088-01.jpg",
        categoryId: 2,
    },
    {
        name: "Caesarbox",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/1047-01.jpg",
        categoryId: 2,
    },
    {
        name: "Shawarmabox",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/1050-01.jpg?c=5205",
        categoryId: 2,
    },
    {
        name: "Mixbox",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/1048-01.jpg?c=4811",
        categoryId: 2,
    },
    {
        name: "Fullbox",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/1159-01.png?c=4951",
        categoryId: 2,
    },
    {
        name: "3 pizzas",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/584-01.jpg",
        categoryId: 2,
    },
    {
        name: "All at once",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/704-01.jpg",
        categoryId: 3,
    },
    {
        name: "Tender chicken wings",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/65-01.jpg",
        categoryId: 3,
    },
    {
        name: "Chili chicken wings",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/64-01.jpg",
        categoryId: 3,
    },
    {
        name: "French fries",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/60-01.jpg",
        categoryId: 3,
    },
    {
        name: "Peasant-style potatoes",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/445-01.jpg",
        categoryId: 3,
    },
    {
        name: "Chicken strips",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/63-01.jpg",
        categoryId: 3,
    },
    {
        name: "Caesar Burger",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/466-01.jpg",
        categoryId: 4,
    },
    {
        name: "Hawaii Burger",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/770-01.jpg",
        categoryId: 4,
    },
    {
        name: "Cheeseburger",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/470-01.jpg",
        categoryId: 4,
    },
    {
        name: "New York Burger",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/467-01.jpg",
        categoryId: 4,
    },
    {
        name: "Double burger",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/1039-01.jpg",
        categoryId: 4,
    },
    {
        name: "Caesar with chicken",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/1174-01.png",
        categoryId: 5,
    },
    {
        name: "Nicoise with tuna",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/1175-01.png",
        categoryId: 5,
    },
    {
        name: "Greek",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/30-01.jpg",
        categoryId: 5,
    },
    {
        name: "Churros",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/411-01.png",
        categoryId: 6,
    },
    {
        name: "Americano",
        imageUrl: "https://www.bakenroll.az/en/image/americano.jpg",
        categoryId: 7,
    },
    {
        name: "Espresso",
        imageUrl: "https://www.bakenroll.az/en/image/espresso.jpg",
        categoryId: 7,
    },
    {
        name: "Cappuccino",
        imageUrl: "https://www.bakenroll.az/en/image/cappuccino.jpg",
        categoryId: 7,
    },
    {
        name: "Latte",
        imageUrl: "https://www.bakenroll.az/en/image/latte.jpg",
        categoryId: 7,
    },
    {
        name: "Coca-Cola",
        imageUrl: "https://primopizza.com.ua/photos/nomenclature/348-01.jpg",
        categoryId: 8,
    },
    {
        name: "Fanta",
        imageUrl: "https://if.smaki-maki.com/image/cache/catalog/Напої/fanta_apelsyn2-700x700-500x500.jpg",
        categoryId: 8,
    },
    {
        name: "Sprite",
        imageUrl: "https://if.smaki-maki.com/image/cache/catalog/Напої/photo_2022-05-30_11-27-06-1-700x797-500x500.jpg",
        categoryId: 8,
    },
];