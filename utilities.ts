type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string;
};


type productSummary = Pick<Product, "id" | "name" | "price">;

type productWithoutStock = Omit<Product, "stock" | "color">;

type requiredProduct = Required<Product>;

const product:requiredProduct ={
    id: 1,
    name: "Laptop",
    price: 999.99,
    stock: 10,
    color: "Silver"
}