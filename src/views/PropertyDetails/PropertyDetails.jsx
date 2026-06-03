import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PROPERTIES } from "../data";
import RatingViews from "../../Components/RatingViews/RatingViews";
import "./PropertyDetails.css";

import {
  Home,
  MapPin,
  IndianRupee,
  BedDouble,
  Ruler,
  Building2,
  ShieldCheck,
  Wifi,
  Car,
} from "lucide-react";

function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const found = PROPERTIES.find(
      (item) => item.id === Number(id)
    );

    setProperty(found);

    if (found) {
      setSelectedImage(found.images[0]);
    }
  }, [id]);

  if (!property) {
    return <h2>Property Not Found</h2>;
  }

  return (
    <div className="property-details">

      <h1>
        {property.title}
      </h1>

      <p className="address">
        <MapPin size={18} />
        {property.city}, {property.state}
      </p>

      {/* Gallery */}

      <div className="gallery">

        <img
          src={selectedImage}
          alt="Property"
          className="main-image"
        />

        <div className="thumbnail-container">

          {property.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Property"
              className="thumbnail"
              onClick={() => setSelectedImage(img)}
            />
          ))}

        </div>

      </div>

      {/* Tags */}

      <div className="tags">

        <span>
          <Home size={16} />
          {property.type}
        </span>

        <span>
          <BedDouble size={16} />
          2 BHK
        </span>

        <span>
          <Building2 size={16} />
          Premium Property
        </span>

        <span>
          <IndianRupee size={16} />
          ₹{property.price}
        </span>

        <span>
          <Ruler size={16} />
          1200 Sqft
        </span>

      </div>

      <p className="description">
        {property.description}
      </p>

      <hr />

      <h2>Amenities</h2>

      <div className="amenities">

        {property.amenities.map((item, index) => (
          <div
            key={index}
            className="amenity-chip"
          >
            {item === "WiFi" && (
              <Wifi size={16} />
            )}

            {item === "CCTV" && (
              <ShieldCheck size={16} />
            )}

            {item === "Parking" && (
              <Car size={16} />
            )}

            {item}
          </div>
        ))}

      </div>

      <hr />

      <h2>Nearby Places</h2>

      <div className="nearby-container">

        {property.nearbyPlaces.map(
          (place, index) => (
            <div
              key={index}
              className="nearby-card"
            >
              <h3>{place.name}</h3>

              <p>{place.distance}</p>
            </div>
          )
        )}

      </div>

      <hr />

      <h2>Owner Details</h2>

      <div className="owner-card">

        <h3>{property.ownerName}</h3>

        <p>
          📞 {property.ownerContact}
        </p>

        <p>
          📧 {property.ownerEmail}
        </p>

      </div>

      <hr />

      <h2>Rating & Reviews</h2>

      {property.reviews.map(
        (review, index) => (
          <div
            className="review-card"
            key={index}
          >
            <RatingViews
              rating={review.rating}
            />

            <p>{review.comment}</p>

            <h4>{review.name}</h4>
          </div>
        )
      )}

    </div>
  );
}

export default PropertyDetails;