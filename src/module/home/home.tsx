import { Slider } from "./slider";
import "./../../assets/css/home.css";
import HomeImage from "./../../assets/images/home.jpg";
import { Input, Select } from "../../components";
import { Search } from "tabler-icons-react";
import { RoutesMapping } from "../../routes";
import { useNavigate } from "react-router-dom";
import { propertyData } from "./utils/propertyData";
import { useMemo, useState } from "react";

export const Home = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState({
    propertyRange: "",
    propertyCity: "",
    propertyType: "",
  });

  const filterProperties = useMemo(
    () =>
      propertyData.filter((property) => {
        const { propertyCity, propertyRange, propertyType } = filter;
        if (propertyCity && propertyType && propertyRange) {
          return (
            property.price < propertyRange &&
            property.city === propertyCity &&
            property.tag === propertyType
          );
        } else if (propertyCity && propertyType) {
          return (
            property.city === propertyCity && property.tag === propertyType
          );
        } else if (propertyCity && propertyRange) {
          return (
            property.city === propertyCity && property.price < propertyRange
          );
        } else if (propertyType && propertyRange) {
          return (
            property.tag === propertyType && property.price < propertyRange
          );
        } else if (!!propertyCity) {
          return property.city === propertyCity;
        } else if (!!propertyType) {
          return property.tag === propertyType;
        } else if (!!propertyRange) {
          return property.price < propertyRange;
        }

        return null;
      }),
    [filter]
  );

  const handleSubmit = () => {
    navigate(RoutesMapping.Properties, { state: filterProperties });
  };

  const handleChange = useMemo(
    () => (e: any) => {
      setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  return (
    <div className="home-container">
      <div className="filter-section">
        <div className="filter-area">
          <span>Indian Residential Propery Search</span>
          <div className="filter-form">
            <Input placeholder="Serch Property" icon={<Search />} />
            <Select
              name="propertyCity"
              options={["Ahmedabad", "Surat", "Baroda", "Banglore"]}
              label="City/Location"
              onChange={handleChange}
            />
            <Select
              name="propertyType"
              options={["Apartment", "Flat", "Tenament"]}
              label="Property Type"
              onChange={handleChange}
            />
            <Select
              name="propertyRange"
              options={Array.from(Array(10).keys())}
              label="Price Range"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Search Properties</button>
          </div>
        </div>
        <img src={HomeImage} alt="home" />
      </div>

      <div style={{ display: "block" }}>
        <div className="slider">
          <Slider />
        </div>
      </div>
    </div>
  );
};
