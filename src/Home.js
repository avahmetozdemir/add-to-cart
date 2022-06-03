import React from "react";
import Itemcard from "./Itemcard";
function Home() {
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <Itemcard img="" title="title" description="Description" />
        </div>
      </section>
    </>
  );
}

export default Home;
