import React from "react";

const Fallback = () => {
  return (
    <main className="relative w-full h-auto py-24">
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">No Data Available</h1>
        <p>
          We are sorry, but we couldn't load the about page information at this
          moment. Please try again later.
        </p>
        <br />
        <br />
      </div>
    </main>
  );
};

export default Fallback;
