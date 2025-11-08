import { Container, Filters, Title, TopBar } from "@/components/shared";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="All pizzas" size="lg" className="font-extrabold" />
            </Container>

            <TopBar />

            <div className="pb-14">
                <div className="flex gap-[60px]">
                    {/* Filters */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/* Product List */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">Product list</div>
                    </div>
                </div>
            </div>

        </>
    );
}
