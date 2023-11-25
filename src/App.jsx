import React from "react";
import Home from "./screens/Home";
import Footer from "./screens/Footer";
import Luxuryrooms from "./screens/Luxuryrooms";
import Feature from "./screens/Feature";
import Facility from "./screens/Facility";
import Accommodations from "./screens/Accommodation";

function App() {
  return (
    <>
      <Home />
      <Accommodations/>
      <Luxuryrooms/>
      {/* <Facility/> */}
      <Feature/>
      {/* <Blogs/> */}
      <Footer/>
      </>
  );
}

export default App;
