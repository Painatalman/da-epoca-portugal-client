import { Product } from "../../generated/graphql";

export type PartialProduct = Pick<
  Product,
  "name" | "name_en" | "type" | "photo" | "inEndOfSeason" | "newInSeason"
>;
