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
            {data.map((item, index) => {
              return (
                <Itemcard
                  img={item.image}
                  title={item.title}
                  price={item.price}
                  item={item}
                  key={index}
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
