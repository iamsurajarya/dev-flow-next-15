import React from "react";

const NavigationDots = ({
  active,
}: {
  active: "home" | "about" | "work" | "skills" | "testimonials" | "contact";
}) => {
  return (
    <div>
      {["home", "about", "work", "skills", "testimonials", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        ></a>
      ))}
    </div>
  );
};

export default NavigationDots;
