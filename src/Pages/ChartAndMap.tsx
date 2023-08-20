import { CategoryScale, Chart as ChartJs } from "chart.js/auto";
import Map from "../Components/Map";
import Chart from "../Components/Chart";
ChartJs.register(CategoryScale);
//charts and maps screen
const ChartAndMap = () => {
  return (
    <div className="my-5">
      <div>
        <Chart />
        <Map />
      </div>
    </div>
  );
};

export default ChartAndMap;
