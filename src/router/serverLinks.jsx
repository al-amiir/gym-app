// const BASE = process.env.BASE;
// process.env has an issue so it mocked here ( it is forbidden for security to be here i know)
const BASE = "http://3.65.32.166/";
const storefront = "api/v2/storefront/";

const product = {
  list: (page, per_page, sub_product_type, taxons) =>
    `${BASE}${storefront}products?page=${page}&per_page=${per_page}&filter[sub_product_type]=${sub_product_type}&filter[taxons]=${taxons}`,
  details: (id) => `${BASE}${storefront}products/${id}`,
};

export default {
  product,
};
