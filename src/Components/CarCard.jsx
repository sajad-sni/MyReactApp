import './CarCard.css';

function CarCard({ car }) {
  return (
    <div className="car-card">

      {/* Image + overlay title */}
      <div className="car-card__image-wrap">
        <img src={car.image} alt={car.title} />
        <div className="car-card__image-overlay">
          <p className="car-card__title">{car.title}</p>
          <p className="car-card__subtitle">{car.subtitle}</p>
        </div>
      </div>

      {/* Price */}
      <div className="car-card__price">
        <span className="car-card__price-amount">{car.price}</span>
        <span className="car-card__price-note">{car.priceNote}</span>
      </div>

      {/* Specs grid */}
      <div className="car-card__specs">

        <div className="spec-item">
          <i className="ti ti-road spec-item__icon" aria-hidden="true"></i>
          <div>
            <p className="spec-item__label">Mileage</p>
            <p className="spec-item__value">{car.specs.mileage}</p>
          </div>
        </div>

        <div className="spec-item">
          <i className="ti ti-settings spec-item__icon" aria-hidden="true"></i>
          <div>
            <p className="spec-item__label">Transmission</p>
            <p className="spec-item__value">{car.specs.transmission}</p>
          </div>
        </div>

        <div className="spec-item">
          <i className="ti ti-bolt spec-item__icon" aria-hidden="true"></i>
          <div>
            <p className="spec-item__label">Engine</p>
            <p className="spec-item__value">{car.specs.engine}</p>
          </div>
        </div>

        <div className="spec-item">
          <i className="ti ti-steering-wheel spec-item__icon" aria-hidden="true"></i>
          <div>
            <p className="spec-item__label">Drivetrain</p>
            <p className="spec-item__value">{car.specs.drivetrain}</p>
          </div>
        </div>

        <div className="spec-item">
          <i className="ti ti-droplet spec-item__icon" aria-hidden="true"></i>
          <div>
            <p className="spec-item__label">Fuel Type</p>
            <p className="spec-item__value">{car.specs.fuelType}</p>
          </div>
        </div>

        <div className="spec-item">
          <i className="ti ti-car spec-item__icon" aria-hidden="true"></i>
          <div>
            <p className="spec-item__label">Body Style</p>
            <p className="spec-item__value">{car.specs.bodyStyle}</p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="car-card__footer">
        <div className="car-card__location">
          <i className="ti ti-map-pin" aria-hidden="true"></i>
          {car.location}
        </div>
        <button className="car-card__btn">View Details</button>
      </div>

    </div>
  );
}

export default CarCard;
