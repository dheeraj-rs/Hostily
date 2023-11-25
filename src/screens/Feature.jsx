import React from "react";
import feature1 from "../assets/feature-1.jpg";
import feature2 from "../assets/feature-2.jpg";
import feature3 from "../assets/feature-3.jpg";
import feature4 from "../assets/feature-4.jpg";
import Featuecard from "../components/feature";
const Feature = () => {
  const items = [
    {
      id: 1,
      subTitle: "Our Food",
      title: "Restaurant silo",
      image: feature1,
      description:
        "  Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
    },
    {
      id: 2,
      subTitle: "Read Our Book",
      title: "The Library",
      image: feature2,
      description:
        "  Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
    },
    {
      id: 3,
      subTitle: "Fitness Equipment",
      title: "Exercise equipment",
      image: feature3,
      description:
        "  Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
    },
    {
      id: 4,
      subTitle: "Experiences",
      title: " Swimming Pool",
      image: feature4,
      description:
        "  Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
    },
  ];

  return (
    <div className=" h-auto px-3 py-20 flex flex-col gap-10">
      {items.map((item,index) => (
        <Featuecard
        index={index}
          key={item.id}
          subTitle={item.subTitle}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Feature;
