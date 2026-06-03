import { PROPERTIES } from "../data";
import PropertyCard from "../../Components/PropertyCard";
import "./Properties.css";

function Properties() {
  return (
    <div className="properties-container">
      <h1>Properties</h1>

      {PROPERTIES.map((propertyObj) => {
        const {
          id,
          title,
          type,
          city,
          price,
          rating,
          image,
        } = propertyObj;

        return (
          <PropertyCard
            key={id}
            id={id}
            title={title}
            propertyType={type}
            city={city}
            rent={price}
            rating={rating}
           
            image={propertyObj.images[0]}
           
          />
        );
      })}
    </div>
  );
}

export default Properties;