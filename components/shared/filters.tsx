'use client';

import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFilterGroup } from "./checkbox-filter-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { on } from "events";
import { useSet } from "react-use";

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients();
    const [prices, setPrice] = React.useState<PriceProps>({ priceFrom: 0, priceTo: 1000 });
    const [sizes, { toggle: togleSizes }] = useSet(new Set<string>([]));
    const [pizzaTypes, { toggle: toglePizzaType }] = useSet(new Set<string>([]));

    const items  = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value
        });
    };

    return(
        <div className={className}>
            <Title text="Filters" size="sm" className="mb-5 font-bold" />

            {/* Pizza sizes */}
            <CheckboxFilterGroup 
                title="Type of dough"
                name="pizzaType"
                className="mb-5"
                onClickCheckbox={toglePizzaType}
                selected={pizzaTypes}
                items={[
                    { text: 'Thin', value: '1' },
                    { text: 'Thick', value: '2' },
                ]}
            />
            
            {/* Pizza sizes */}
            <CheckboxFilterGroup
                title="Sizes"
                name="sizes"
                className="mb-5"
                onClickCheckbox={togleSizes}
                selected={sizes}
                items={[
                    { text: '25 sm', value: '25' },
                    { text: '30 sm', value: '30' },
                    { text: '40 sm', value: '40' },
                ]}
            />

            {/* Prices Range */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Price from to</p>
                <div className="flex gap-3 mb-5">
                    <Input 
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        value={String(prices.priceFrom)}
                        onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
                    />
                    <Input 
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        value={String(prices.priceTo)}
                        onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
                    />
                </div>
                <RangeSlider 
                    min={0}
                    max={1000}
                    step={10}
                    value={[prices.priceFrom, prices.priceTo]}
                    onValueChange={([from, to]) => setPrice({ priceFrom: from, priceTo: to})}
                />
            </div>

            {/* Ingredients for pizza */}
            <CheckboxFilterGroup 
                title="Ingredients"
                name="ingredients"
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={onAddId}
                selected={selectedIngredients}
            />
        </div>
    );
}