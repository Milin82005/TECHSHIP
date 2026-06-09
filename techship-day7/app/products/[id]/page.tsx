export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const response = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const product = await response.json();

  return (
    <div className="p-8">

      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">

        <img
          src={product.image}
          alt={product.title}
          className="h-60 w-full object-contain mb-4"
        />

        <h1 className="text-2xl font-bold">
          {product.title}
        </h1>

        <p className="text-green-600 text-xl font-semibold mt-2">
          ₹ {product.price}
        </p>

        <p className="mt-4 text-gray-700">
          {product.description}
        </p>

        <p className="mt-4">
          Category: {product.category}
        </p>

      </div>

    </div>
  );
}