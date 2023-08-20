import axios from "axios";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJs } from "chart.js/auto";
ChartJs.register(CategoryScale);
function useChart() {
  //fetching data from the api using useQuery
  return useQuery({
    queryKey: ["Cases"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      return data;
    },
  });
}

const Chart = () => {
  const [chartData, setChartData] = useState<any>([]);

  const { data } = useChart();

  useEffect(() => {
    //categorizing the data according to cases and deaths
    if (data) {
      const chartData = {
        labels: Object.keys(data.cases),
        datasets: [
          {
            label: "Confirmed Cases",
            data: Object.values(data.cases),
            fill: false,
            borderColor: "#f44336",
          },
          {
            label: "Recovered Cases",
            data: Object.values(data.recovered),
            fill: false,
            borderColor: "#4caf50",
          },
          {
            label: "Deaths",
            data: Object.values(data.deaths),
            fill: false,
            borderColor: "#607d8b",
          },
        ],
      };
      setChartData(chartData);
    }
  }, [data]);

  return (
    <div className="my-2 mx-2">
      <div>{chartData.labels && <Line data={chartData} />}</div>
    </div>
  );
};

export default Chart;
