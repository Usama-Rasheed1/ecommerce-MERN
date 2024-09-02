import { LineChart } from "../../../components/admin/Charts";
import Sidebar from "../../../components/admin/Sidebar";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LineCharts = () => {
  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="chartContainer">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[200, 444, 343, 556, 778, 455, 990, 455, 945, 545, 573, 348]}
            label="Users"
            labels={months}
            backgroundColor="rgb(53, 162, 255, 0.5)"
            borderColor="rgb(53, 162, 255)"
          />

          <h2>Active Users</h2>
        </section>
        <section>
          <LineChart
            data={[40, 60, 144, 100, 143, 120, 41, 47, 50, 56, 32]}
            label="Products"
            labels={months}
            backgroundColor={"hsl(269, 80%, 40%, 0.4)"}
            borderColor={"hsl(269, 80%, 40%)"}
          />

          <h2>Total Products (SKU)</h2>
        </section>
        <section>
          <LineChart
            data={[
              24000, 14444, 24343, 34556, 20778, 25455, 44990, 99455, 14945,
              100545, 11573, 120000,
            ]}
            label="Revenue"
            labels={months}
            backgroundColor={"hsl(129, 80%, 40%, 0.4)"}
            borderColor={"hsl(129, 80%, 40%)"}
          />

          <h2>Total Revenue</h2>
        </section>
        <section>
          <LineChart
            data={[
              9000, 12000, 12000, 9000, 1000, 5000, 4100, 1200, 1100, 1500,
              2000, 5000,
            ]}
            label="Discount"
            labels={months}
            backgroundColor={"hsl(29, 80%, 40%, 0.4)"}
            borderColor={"hsl(29, 80%, 40%)"}
          />

          <h2>Discount Allotted</h2>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;
