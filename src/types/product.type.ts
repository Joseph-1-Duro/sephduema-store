import { z } from "zod";
import { ProductImageSchema, ProductSchema } from "@/schemas/product.schema";

export type ProductType = z.infer<typeof ProductSchema>;
// TODO refactor later
export type ProductImageType = z.infer<typeof ProductImageSchema>;

export type CartItem = Pick<ProductType, "id" | "name" | "price"> & {
  quantity: number;
  selectedSize?: string; 
};