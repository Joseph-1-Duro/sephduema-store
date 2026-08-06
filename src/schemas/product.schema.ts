import { z } from "zod";

export const ProductImageSchema = z.object({
  url: z.url(),
  altText: z.string().optional(),
  width: z.number().optional(),
  height: z.number().optional()
})

// add slug
export const ProductSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  description: z.string(),
  inStock: z.boolean(),
  price: z.number().positive(),
  images: z.array(ProductImageSchema).nonempty().max(5),
})