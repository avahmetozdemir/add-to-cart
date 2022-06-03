import React from "react";
import Itemcard from "./Itemcard";
import data from "./data";
function Home() {
  return (
    <>
      <div>
        <h1 className="text-center mt-3">All Items</h1>
        <section className="py-4 container">
          <div className="row justify-content-center">
            {data.map((item) => {
              return (
                <Itemcard
                  img={item.image}
                  title={item.title}
                  price={item.price}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
