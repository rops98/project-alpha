import Header from "../components/Header";
import PortfolioOverview from "../components/PortfolioOverview";
import PortfolioChart from "../components/PortfolioChart";
import DailyBrief from "../components/DailyBrief";
import AlphaRadar from "../components/AlphaRadar";
import Alerts from "../components/Alerts";


export default function Home() {

  return (

    <main className="container">


      <Header />


      <PortfolioOverview />


      <DailyBrief />


      <AlphaRadar />


      <Alerts />


      <PortfolioChart />


    </main>

  );

}
