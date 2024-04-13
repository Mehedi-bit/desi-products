import ProductList from "./ProductList";


const Desiproducts = () => {
    return (
        <div className="mt-12 mb-40">
            <h1 className="text-center text-3xl font-extrabold text-green-500">Desi products list</h1>

            {/* categories */}
            <ProductList />
        
        </div>
    );
};

export default Desiproducts;