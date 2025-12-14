import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, ingredients, products } from "./seed-tada";

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'Test1 User',
                email: 'test1@ts.ts',
                password: hashSync('12345', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin User',
                email: 'admin@ts.ts',
                password: hashSync('12345', 10),
                verified: new Date(),
                role: 'ADMIN',
            }
        ]
    });

    await prisma.category.createMany({
        data: categories
    });

    await prisma.ingredient.createMany({
        data: ingredients
    });

    await prisma.product.createMany({
        data: products
    });

    // Pizzas

    const pizzaAmerican = await prisma.product.create({
        data: {
            name: 'American',
            imageUrl: 'https://primopizza.com.ua/photos/nomenclature/117-01.jpg',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 5),
            }
        }
    });

    const pizzaSicilian = await prisma.product.create({
        data: {
            name: 'Sicilian',
            imageUrl: 'https://primopizza.com.ua/photos/nomenclature/26-01.jpg',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(5, 11),
            }
        }
    });

    const pizzaHawaiian = await prisma.product.create({
        data: {
            name: 'Hawaiian',
            imageUrl: 'https://primopizza.com.ua/photos/nomenclature/114-01.jpg',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(4, 13),
            }
        }
    });

    const pizzaPepperoni = await prisma.product.create({
        data: {
            name: 'Pepperoni',
            imageUrl: 'https://primopizza.com.ua/photos/nomenclature/102-01.jpg',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(12, 20),
            }
        }
    });

    const pizzaCaesar = await prisma.product.create({
        data: {
            name: 'Caesar',
            imageUrl: 'https://primopizza.com.ua/photos/nomenclature/99-01.jpg',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(10, 19),
            }
        }
    });

    const pizzaCarbonara = await prisma.product.create({
        data: {
            name: 'Carbonara',
            imageUrl: 'https://primopizza.com.ua/photos/nomenclature/425-01.jpg',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(8, 17),
            }
        }
    });

    const pizzaCapricious = await prisma.product.create({
        data: {
            name: 'Capricious',
            imageUrl: 'https://primopizza.com.ua/photos/nomenclature/111-01.jpg',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(7, 18),
            }
        }
    });

    // Pizza Items and Products
    await prisma.productItem.createMany({
        data: [
            // American
            { productId: pizzaAmerican.id, pizzaType: 1, price: 50, size: 25 },
            { productId: pizzaAmerican.id, pizzaType: 2, price: 60, size: 30 },
            { productId: pizzaAmerican.id, pizzaType: 2, price: 40, size: 25 },
            // Sicilian
            { productId: pizzaSicilian.id, pizzaType: 1, price: 40, size: 25 },
            { productId: pizzaSicilian.id, pizzaType: 1, price: 50, size: 30 },
            { productId: pizzaSicilian.id, pizzaType: 1, price: 50, size: 40 },
            { productId: pizzaSicilian.id, pizzaType: 2, price: 39, size: 25 },
            // Hawaiian
            { productId: pizzaHawaiian.id, pizzaType: 1, price: 38, size: 25 },
            { productId: pizzaHawaiian.id, pizzaType: 1, price: 40, size: 30 },
            { productId: pizzaHawaiian.id, pizzaType: 1, price: 42, size: 40 },
            { productId: pizzaHawaiian.id, pizzaType: 2, price: 45, size: 25 },
            { productId: pizzaHawaiian.id, pizzaType: 2, price: 48, size: 30 },
            { productId: pizzaHawaiian.id, pizzaType: 2, price: 50, size: 40 },
            // Pepperoni
            { productId: pizzaPepperoni.id, pizzaType: 1, price: 35, size: 25 },
            { productId: pizzaPepperoni.id, pizzaType: 1, price: 46, size: 30 },
            { productId: pizzaPepperoni.id, pizzaType: 2, price: 40, size: 30 },
            { productId: pizzaPepperoni.id, pizzaType: 2, price: 42, size: 40 },
            // Caesar
            { productId: pizzaCaesar.id, pizzaType: 1, price: 50, size: 25 },
            { productId: pizzaCaesar.id, pizzaType: 1, price: 52, size: 30 },
            { productId: pizzaCaesar.id, pizzaType: 1, price: 55, size: 40 },
            { productId: pizzaCaesar.id, pizzaType: 2, price: 56, size: 25 },
            { productId: pizzaCaesar.id, pizzaType: 2, price: 58, size: 30 },
            // Carbonara
            { productId: pizzaCarbonara.id, pizzaType: 1, price: 33, size: 30 },
            { productId: pizzaCarbonara.id, pizzaType: 1, price: 35, size: 40 },
            { productId: pizzaCarbonara.id, pizzaType: 2, price: 34, size: 30 },
            { productId: pizzaCarbonara.id, pizzaType: 2, price: 36, size: 40 },
            // Capricious
            { productId: pizzaCapricious.id, pizzaType: 1, price: 47, size: 25 },
            { productId: pizzaCapricious.id, pizzaType: 1, price: 48, size: 30 },
            { productId: pizzaCapricious.id, pizzaType: 1, price: 49, size: 40 },
            { productId: pizzaCapricious.id, pizzaType: 2, price: 51, size: 25 },
            { productId: pizzaCapricious.id, pizzaType: 2, price: 52, size: 30 },
            { productId: pizzaCapricious.id, pizzaType: 1, price: 53, size: 40 },

            // Simple Product
            { productId: 1, price: 10 },
            { productId: 2, price: 15 },
            { productId: 3, price: 12 },
            { productId: 4, price: 25 },
            { productId: 5, price: 30 },
            { productId: 6, price: 65 },
            { productId: 7, price: 50 },
            { productId: 8, price: 25 },
            { productId: 9, price: 20 },
            { productId: 10, price: 15 },
            { productId: 11, price: 7 },
            { productId: 12, price: 10 },
            { productId: 13, price: 15 },
            { productId: 14, price: 16 },
            { productId: 15, price: 18 },
            { productId: 16, price: 17 },
            { productId: 17, price: 25 },
            { productId: 18, price: 20 },
            { productId: 19, price: 21 },
            { productId: 20, price: 22 },
            { productId: 21, price: 7 },
            { productId: 22, price: 5 },
            { productId: 23, price: 7 },
            { productId: 24, price: 8 },
            { productId: 25, price: 10 },
            { productId: 26, price: 5 },
            { productId: 27, price: 5 },
            { productId: 28, price: 5 },
        ],
    });

    // Test Cart
    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '43wewdfsdg22311',
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '$43sdfsdg223323',
            },
        ]
    });

    await prisma.cartItem.create({
        data: {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            ingredients: {
                connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
            }
        }
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
} 

async function main() {
    try{
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
} 

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });