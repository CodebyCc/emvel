import { supabase } from "./supabase";

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    notFound();
    console.error(error);
  }

  return data;
}

export const getProducts = async function () {
  // const { data, error } = await supabase
  //   .from("products")
  //   .select("id, name,price, description")
  //   .order("name");

  const { data, error } = await supabase.from("products").select("*");

  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return data;
};
