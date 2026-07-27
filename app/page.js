import Header from "../components/Header";
import AIInsight from "../components/AIInsight";
import AlphaScore from "../components/AlphaScore";
import AlphaRadar from "../components/AlphaRadar";
import DailyBrief from "../components/DailyBrief";


export default function Home() {

  return (

    <main className="container">


      <Header />


      <section className="portfolio">

        <p>
          Portfelli väärtus
        </p>


        <h1>
          100,00 €
        </h1>


        <span>
          +0,00% täna
        </span>


      </section>



      <AIInsight />



      <AlphaScore />



      <AlphaRadar />



      <DailyBrief />



      <section className="stats">


        <div>

          <p>
            Vaba raha
          </p>

          <b>
            100,00 €
          </b>

        </div>



        <div>

          <p>
            Investeeritud
          </p>

          <b>
            0,00 €
          </b>

        </div>



        <div>

          <p>
            Kasum / kahjum
          </p>

          <b>
            0,00 €
          </b>

        </div>


      </section>



      <section className="card">


        <h2>
          🚨 Teavitused
        </h2>


        <p>
          Hetkel aktiivseid hoiatusi ei ole.
        </p>


      </section>



    </main>

  );

}
