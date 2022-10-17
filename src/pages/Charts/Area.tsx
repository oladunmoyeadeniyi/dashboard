import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryYAxis,
  areaPrimaryXAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:text-gray-400 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Inflation Rate in Percentage" />
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={{
          valueType: "DateTime",
          labelFormat: "y",
          majorGridLines: { width: 0 },
          intervalType: "Years",
          edgeLabelPlacement: "Shift",
          labelStyle: { color: "gray" },
        }}
        primaryYAxis={{
          labelFormat: "{value}%",
          lineStyle: { width: 0 },
          maximum: 4,
          interval: 1,
          majorTickLines: { width: 0 },
          minorTickLines: { width: 0 },
          labelStyle: { color: "gray" },
        }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#FFFFFF"}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
