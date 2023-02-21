import { ProductCard } from "../../components";
import { popertyData } from "../home/utils/propertyData";

export const Properties = () => {
  const data = popertyData;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        paddingBlock: "8px",
        paddingInline: "8px",
      }}
    >
      {data.map((property, i) => (
        <ProductCard key={i} data={property} />
      ))}
    </div>
  );
};
