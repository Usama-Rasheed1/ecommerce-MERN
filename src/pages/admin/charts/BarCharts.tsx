import { Charts } from "../../../components/admin/Charts";
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
const BarCharts = () => {
  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="chartContainer">
        <h1>Bar Charts</h1>
        <section>
          <Charts
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260, 50%, 30%)`}
            bgColor_2={`hsl(360, 90%, 90%)`}
          />

          <h2>Top Selling Products & Top Customers</h2>
        </section>
        <section>
          <Charts
            horizontal={true}
            data_1={[
              200, 444, 343, 556, 778, 455, 990, 464, 120, 455, 1125, 456,
            ]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(180, 40%, 50%)`}
            bgColor_2=""
            labels={months}
          />

          <h2>Orders Throughout The Year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
