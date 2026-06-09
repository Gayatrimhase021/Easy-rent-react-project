import { useState } from "react";
import { PROPERTIES } from "../data";
import PropertyCard from "../../Components/PropertyCard";
import Input from "../../Components/Input/Input";
import "./Properties.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Properties() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = PROPERTIES.filter((propertyObj) =>
    propertyObj.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="properties-container">

      {/* Navbar */}
      <Navbar />

      <h1>Properties</h1>

      {/* Filters */}
      <div className="filters">
        <Input
          placeholder="Search Properties"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select className="filter-select">
          <option>Select City</option>
          <option>Mumbai</option>
          <option>Pune</option>
          <option>Nashik</option>
          <option>Nagpur</option>
        </select>

        <select className="filter-select">
          <option>2 BHK</option>
          <option>1 BHK</option>
          <option>3 BHK</option>
          <option>4 BHK</option>
        </select>

        <select className="filter-select">
          <option>Select Type</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Plot</option>
        </select>
      </div>

      {/* Property List */}
      <div className="properties-list">
        {filteredProperties.map((propertyObj) => (
          <PropertyCard
            key={propertyObj.id}
            id={propertyObj.id}
            title={propertyObj.title}
            propertyType={propertyObj.type}
            city={propertyObj.city}
            rent={propertyObj.price}
            rating={propertyObj.rating}
            image={propertyObj.images[0]}
          />
        ))}
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Properties;