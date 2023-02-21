import { Slider } from "./slider";
import "./../../assets/css/home.css";
import HomeImage from "./../../assets/images/home.jpg";
import { Input, Select } from "../../components";
import { Search } from "tabler-icons-react";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="filter-section">
        <div className="filter-area">
          <span>Indian Residential Propery Search</span>
          <div className="filter-form">
            <Input placeholder="Serch Property" icon={<Search />} />
            <Select options={["one", "two", "three"]} label="select" />
            <Select options={["one", "two", "three"]} label="select" />
            <Select options={["one", "two", "three"]} label="select" />
            <button>Search Properties</button>
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
