import Products from "@/components/UI/Products";

const HomePage = async () => {
  const data = await fetch('http://localhost:5000/watches', {
    cache: 'force-cache',
    next: {
      revalidate:5
    }
  })
  const watches = await data.json()
  
  // console.log(watches)
  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {
          watches.map(product =>
            <>
              <Products key={product.id} product={product}/>
            </>
          )
        }
      </div>
    </div>
  );
};

export default HomePage;
