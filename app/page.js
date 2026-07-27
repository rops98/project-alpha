import Header from "../components/Header";
import AIInsight from "../components/AIInsight";
import AlphaScore from "../components/AlphaScore";
import AlphaRadar from "../components/AlphaRadar";

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
          🔥 Alpha Radar
        </h2>


        <div>
          <strong>
            NVIDIA
          </strong>

          <p>
            AI skoor: 91/100 🟢
          </p>
        </div>


        <div>
          <strong>
            Bitcoin
          </strong>

          <p>
            AI skoor: 85/100 🟡
          </p>
        </div>


        <div>
          <strong>
            Microsoft
          </strong>

          <p>
            AI skoor: 88/100 🟢
          </p>
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
