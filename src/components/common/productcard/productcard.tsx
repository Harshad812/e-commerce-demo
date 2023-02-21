import { BedIcon } from "../../../assets/icon/bed";
import { FavoriteIcon } from "../../../assets/icon/favorite";
import { LocationIcon } from "../../../assets/icon/location";
import { SquareIcon } from "../../../assets/icon/square";
import "./../../../assets/css/productcard.css";

export interface ProductCardProps {
  data: {
    image: string;
    title: string;
    price: string;
    tag: string;
    address: string;
    beds: string;
    possession: string;
    measure: string;
    city: string;
  };
}

export const ProductCard = (props: ProductCardProps) => {
  const { title, beds, address, image, price, tag, measure, possession, city } =
    props.data;
  return (
    <div className="product-card-container">
      <div className="image-section">
        <div className="chip">
          <span>{tag}</span>
        </div>
        <div className="icon">
          <FavoriteIcon stroke="currentColor" strokeWidth={2} />
        </div>
        <div className="label">{title}</div>
        <div className="card-image">
          <img src={image} alt="test" />
        </div>
      </div>
      <div className="details-sections">
        <div className="details-item">
          <div className="icon">
            <LocationIcon />
          </div>
          <span>{`${address}, ${city}`}</span>
        </div>
        <div className="details-item">
          <div className="icon">
            <SquareIcon />
          </div>
          <span>{measure}</span>
        </div>
        <div className="details-item">
          <div className="icon">
            <BedIcon />
          </div>
          <span>{beds}</span>
        </div>
        <div className="details-item">
          <span>{`Possession: ${possession}`}</span>
        </div>
      </div>
      <div className="price-section">
        <div className="price-label">Starting Price</div>
        <div className="price-tag">{`INR ${price} Cr`}</div>
      </div>
    </div>
  );
};
