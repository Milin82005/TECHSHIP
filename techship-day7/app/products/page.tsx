async function getProducts() {
  const response = await fetch(
    "https://fakestoreapi.com/products"
  );

  return response.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Product Listing
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md p-4"
          >

            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-4"
            />

            <h2 className="font-bold text-lg">
              {product.title}
            </h2>

            <p className="text-green-600 font-semibold mt-2">
              ₹ {product.price}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}