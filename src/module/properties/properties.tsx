import { useMemo } from "react";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { ProductCard, ProductCardProps } from "../../components";
import { RoutesMapping } from "../../routes";
import "./../../assets/css/properties.css";

export const Properties = () => {
  const location: Location = useLocation();
  const navigate = useNavigate();

  const FilterData: ProductCardProps[] = useMemo(
    () => location && location.state,
    [location]
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          paddingBlock: "8px",
          paddingInline: "8px",
        }}
      >
        {!FilterData.length && <h1>No Data Found</h1>}
        {FilterData &&
          FilterData.map((property: any, i) => (
            <ProductCard key={i} data={property} />
          ))}
      </div>
      <button
        className="back-button"
        onClick={() => navigate(RoutesMapping.Home)}
      >
        Back
      </button>
    </>
  );
};
