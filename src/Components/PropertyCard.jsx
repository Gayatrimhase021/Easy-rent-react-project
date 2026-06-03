import "./PropertyCard.css";
import Button from "./Button/Button";

import {
  Building2,
  Star,
  MapPin,
  IndianRupee,
} from "lucide-react";

function PropertyInfo({ icon, label }) {
  return (
    <div className="property-info">
      {icon}
      <span className="property-info-label">{label}</span>
    </div>
  );
}

function PropertyCard({
  id,
  title,
  propertyType,
  city,
  rating,
  rent,
  image,
}) {
  return (
    <div className="property-card">

      <img
        src={image}
        alt={title}
        className="property-image"
      />

      <div className="rating">
        ⭐ {rating}
      </div>

      <h2 className="property-title">
        {title}
      </h2>

      <PropertyInfo
        icon={<Building2 size={18} />}
        label={`Type: ${propertyType}`}
      />

      <PropertyInfo
        icon={<MapPin size={18} />}
        label={`City: ${city}`}
      />

      <PropertyInfo
        icon={<IndianRupee size={18} />}
        label={`Price: ₹${rent}`}
      />

      <PropertyInfo
        icon={<Star size={18} />}
        label={`Rating: ${rating}`}
      />

      <div className="card-actions">
        <Button
          title="Know More"
          onClick={() => {
            window.location.href = `/properties/${id}`;
          }}
        />
      </div>

    </div>
  );
}

export default PropertyCard;