import { BedIcon } from "../../../assets/icon/bed";
import { FavoriteIcon } from "../../../assets/icon/favorite";
import { LocationIcon } from "../../../assets/icon/location";
import { SquareIcon } from "../../../assets/icon/square";
import "./../../../assets/css/productcard.css";

export const ProductCard = () => {
  return (
    <div className="product-card-container">
      <div className="image-section">
        <div className="chip">
          <span>Aprtments</span>
        </div>
        <div className="icon">
          <FavoriteIcon stroke="currentColor" strokeWidth={2} />
        </div>
        <div className="label">TARC Tirupundra</div>
        <div className="card-image">
          <img src="https://picsum.photos/id/237/200/300" alt="test" />
        </div>
      </div>
      <div className="details-sections">
        <div className="details-item">
          <div className="icon">
            <LocationIcon />
          </div>
          <span>Bijwasan Road near St Froebel Senior Secondery s...</span>
        </div>
        <div className="details-item">
          <div className="icon">
            <SquareIcon />
          </div>
          <span>2,2800 sqft - 3,115 sqft</span>
        </div>
        <div className="details-item">
          <div className="icon">
            <BedIcon />
          </div>
          <span>3,4</span>
        </div>
        <div className="details-item">
          <span>Possession: Aug 2025</span>
        </div>
      </div>
      <div className="price-section">
        <div className="price-label">Starting Price</div>
        <div className="price-tag">INR 3.97 Cr</div>
      </div>
    </div>
  );
};
