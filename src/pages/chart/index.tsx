import React, { useState } from "react";
import BarChart from "../../components/charts/BarChart";
import { UserData } from "../../services/userData";
import LineChart from "../../components/charts/LineChart";
import PieChart from "../../components/charts/PieChart";
import DoughnutChart from "../../components/charts/DoughnutChart";
import { Typography } from "antd";

const Chart: React.FC = () => {
    const { Title } = Typography;

    const colorOne: string[] = [
        "rgba(75,192,192,1)",
        "rgba(575,700,192,0.4)",
        "#ecf0f1",
        "#50AF95",
        "#2a71d0",
    ];

    // const colorTwo: string[] = [
    //     "rgba(75,2,192,0.2)",
    //     "rgba(752,5,192,0.2)",
    //     "rgba(715,88,192,0.2)",
    //     "rgba(175,999,192,0.2)",
    //     "rgba(575,700,192,0.2)",
    // ];

  const [userDataConst, _setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.userGain),
          backgroundColor: colorOne,
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    });

  return (
    <>
        <section>
            <Title level={2} style={{display: "flex", justifyContent: "center"}} title=""> Data Kenaikan Pengguna</Title>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: 20 }}>
            <div style={{width: 500, border: "2px solid black", borderRadius: 20, padding: 40, backgroundColor: "rgb(239 243 245)", margin: "auto"}}>
                <BarChart chartData={userDataConst} />
            </div>
            <div style={{width: 500, border: "2px solid black", borderRadius: 20, padding: 40, backgroundColor: "rgb(239 243 245)", margin: "auto"}}>
                <LineChart chartData={userDataConst} />
            </div>
            <div style={{width: 500, border: "2px solid black", borderRadius: 20, padding: 40, backgroundColor: "rgb(239 243 245)", margin: "auto"}}>
                <PieChart chartData={userDataConst} />
            </div>
            <div style={{width: 500, border: "2px solid black", borderRadius: 20, padding: 40, backgroundColor: "rgb(239 243 245)", margin: "auto"}}>
                <DoughnutChart chartData={userDataConst} />
            </div>
        </section>
    </>
  );
};

export default Chart;
