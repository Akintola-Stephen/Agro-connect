import { Button } from "../components/ui/button";
import { Leaf, Search } from "lucide-react";

const Index = () => {
 
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-green-800">
              Local Harvest Explorer
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Discover fresh, locally-grown produce from farmers in your area.
              Support local agriculture and enjoy the freshest ingredients.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-md text-lg">
                Browse Products
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 rounded-md text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Search for fresh produce..."
            />
            <Button className="absolute right-2.5 bottom-2.5 bg-green-600 hover:bg-green-700">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Browse by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {/* {categories.map((category) => (
            <Button
              key={category}
              variant={category === "all" ? "default" : "outline"}
              className={`capitalize text-md px-6 py-2 ${
                category === "all"
                  ? "bg-green-600 hover:bg-green-700"
                  : "border-green-200 hover:bg-green-50"
              }`}
            >
              {category === "all"
                ? "All Products"
                : category.replace("-", " & ")}
            </Button>
          ))} */}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* {filteredItems.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg border-transparent hover:border-green-100"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    Fresh
                  </span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold">
                  <Link
                    to={`/product/${product.id}`}
                    className="hover:text-green-600 transition-colors"
                  >
                    {product.name}
                  </Link>
                </CardTitle>
                <p className="text-sm text-gray-500 flex items-center">
                  <Leaf className="h-3 w-3 mr-1 text-green-500" />
                  {product.farmer}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm line-clamp-2 text-gray-600 mb-3">
                  {product.description}
                </p>
                <p className="font-bold text-xl text-green-700">
                  ${product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 border-gray-200 text-gray-700 hover:bg-gray-50"
                  asChild
                >
                  <Link to={`/product/${product.id}`}>View Details</Link>
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))} */}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Local Harvest?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fresh & Organic</h3>
              <p className="text-gray-600">
                All our products are freshly harvested and grown using organic
                practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Support Local Farmers
              </h3>
              <p className="text-gray-600">
                Your purchase directly supports local family farms and
                sustainable agriculture.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                We deliver within 24 hours of harvest to ensure maximum
                freshness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
