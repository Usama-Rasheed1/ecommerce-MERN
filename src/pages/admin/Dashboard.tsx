import { FaRegBell } from "react-icons/fa";
import Sidebar from "../../components/admin/Sidebar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../../assets/data.json";
import { Charts, DoughnutChart } from "../../components/admin/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../../components/admin/DashboardTable";

const userImg =
  "data:image/png;base64,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";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <Sidebar />

      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>

        <section className="widgetContainer">
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgba(0, 115, 255)"
          />
          <WidgetItem
            percent={-15}
            value={400}
            heading="Users"
            color="rgba(0, 198, 202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transactions"
            color="rgba(255, 196, 0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgba(75, 0, 255)"
          />
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            {/* Graph Here */}
            <Charts 
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            data_2={[300, 144, 433, 655, 237, 755, 190]} 
            title_1="Revenue"
            title_2="Transaction"
            bgColor_1="rgb(0, 155, 255)"
            bgColor_2="rgb(53, 162, 235, 0.8)"
            /> 
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i)=>(
                <CategoryItem key={i.heading} heading={i.heading} value={i.value} color={`hsl(${i.value*5}, ${i.value}%, 50%)`} />
              ))}
            </div>
          </div>
        </section>

        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>

            {/* Chart */}
            <DoughnutChart labels={["Male", "Female"]} data={[19, 12]} backgroundColor={["rgba(53, 162, 235, 0.8)", "hsl(340, 82%, 56%)" ]} cutout={90}/>

            <p><BiMaleFemale/></p>

          </div>

          {/* Table */}
          <Table data={data.transaction} />


        </section>

      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount=false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%
        </span>
      )}
    </div>

    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(${color} ${
          (Math.abs(percent) / 100) * 360
        }deg, rgb(255, 255, 255) 0deg)`,
      }}
    >
      <span style={{color}}>{percent}%</span>
    </div>
  </article>
);


interface CategoryItemProps{
  heading:string;
  color:string;
  value:number;
}
const CategoryItem = ({heading, color, value}:CategoryItemProps)=>(
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor:color,
        width:`${value}%`
      }}></div>
    </div>
    <span>{value}%</span>

  </div>
);

export default Dashboard;
