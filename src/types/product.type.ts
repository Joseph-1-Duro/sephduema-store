import { z } from "zod";
import { ProductImageSchema, ProductSchema } from "@/schemas/product.schema";

// TODO refactor both later
export type ProductType = z.infer<typeof ProductSchema>;
export type ProductImageType = z.infer<typeof ProductImageSchema>;

export type CartItem = Pick<ProductType, "id" | "name" | "price"> & {
  quantity: number;
  // selectedSize?: string; 
  // selectedColor?: string;
};