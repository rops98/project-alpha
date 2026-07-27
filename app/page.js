import Header from "../components/Header";
import PortfolioOverview from "../components/PortfolioOverview";
import Holdings from "../components/Holdings";
import DailyBrief from "../components/DailyBrief";
import AlphaRadar from "../components/AlphaRadar";
import Alerts from "../components/Alerts";
import PortfolioChart from "../components/PortfolioChart";


export default function Home() {

  return (

    <main className="container">


      <Header />


      <PortfolioOverview />


      <Holdings />


      <DailyBrief />


      <AlphaRadar />


      <Alerts />


      <PortfolioChart />


    </main>

  );

}
