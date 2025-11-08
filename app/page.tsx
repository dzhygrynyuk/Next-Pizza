import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="All pizzas" size="lg" className="font-extrabold" />
            </Container>

            <TopBar />

            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    {/* Filters */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/* Product List */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList 
                                title="Pizzas"
                                categoryID={1}
                                items={[
                                    {
                                        id: 1,
                                        name: 'American',
                                        imageUrl: 'https://primopizza.com.ua/photos/nomenclature/117-01.jpg',
                                        price: 25,
                                        items: [{price: 25}]
                                    },
                                    {
                                        id: 2,
                                        name: 'Sicilian',
                                        imageUrl: 'https://primopizza.com.ua/photos/nomenclature/26-01.jpg',
                                        price: 30,
                                        items: [{price: 30}]
                                    },
                                    {
                                        id: 3,
                                        name: 'Hawaiian',
                                        imageUrl: 'https://primopizza.com.ua/photos/nomenclature/114-01.jpg',
                                        price: 25,
                                        items: [{price: 25}]
                                    },
                                    {
                                        id: 4,
                                        name: 'Pepperoni',
                                        imageUrl: 'https://primopizza.com.ua/photos/nomenclature/102-01.jpg',
                                        price: 19,
                                        items: [{price: 19}]
                                    },
                                    {
                                        id: 5,
                                        name: 'Caesar',
                                        imageUrl: 'https://primopizza.com.ua/photos/nomenclature/99-01.jpg',
                                        price: 50,
                                        items: [{price: 50}]
                                    },
                                    {
                                        id: 6,
                                        name: 'Carbonara',
                                        imageUrl: 'https://primopizza.com.ua/photos/nomenclature/425-01.jpg',
                                        price: 22,
                                        items: [{price: 22}]
                                    },
                                    {
                                        id: 5,
                                        name: 'Capricious',
                                        imageUrl: 'https://primopizza.com.ua/photos/nomenclature/111-01.jpg',
                                        price: 32,
                                        items: [{price: 32}]
                                    }
                                ]}
                            />
                            <ProductsGroupList 
                                title="Appetizer"
                                categoryID={1}
                                items={[
                                    {
                                        id: 1,
                                        name: 'All at once',
                                        imageUrl: 'https://primopizza.com.ua/photos/nomenclature_desktop/704-01.jpg',
                                        price: 250,
                                        items: [{price: 250}]
                                    },
                                    {
                                        id: 2,
                                        name: 'Chicken wings are tender',
                                        imageUrl: 'https://primopizza.com.ua/photos/nomenclature_desktop/65-01.jpg',
                                        price: 79,
                                        items: [{price: 79}]
                                    },
                                    {
                                        id: 3,
                                        name: 'Chili chicken wings',
                                        imageUrl: 'https://primopizza.com.ua/photos/nomenclature_desktop/64-01.jpg',
                                        price: 85,
                                        items: [{price: 85}]
                                    },
                                    {
                                        id: 4,
                                        name: 'French fries',
                                        imageUrl: 'https://primopizza.com.ua/photos/nomenclature_desktop/60-01.jpg',
                                        price: 20,
                                        items: [{price: 20}]
                                    },
                                    {
                                        id: 5,
                                        name: 'Peasant-style potatoes',
                                        imageUrl: 'https://primopizza.com.ua/photos/nomenclature_desktop/445-01.jpg',
                                        price: 30,
                                        items: [{price: 30}]
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
}
