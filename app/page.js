export default function Home() {
  const investments = [
    {
      name: "NVIDIA",
      score: 91,
      status: "Hea jälgida"
    },
    {
      name: "Bitcoin",
      score: 85,
      status: "Oota võimalust"
    },
    {
      name: "Microsoft",
      score: 88,
      status: "Stabiilne"
    }
  ];

  return (
    <main className="page">

      <header>
        <h1>🧠 Project Alpha</h1>
        <p className="subtitle">
          Tere, Robert 👋
        </p>
        <p className="gray">
          Sinu isiklik AI investeerimisassistent
        </p>
      </header>


      <section className="mainCard">

        <p className="label">
          Portfelli väärtus
        </p>

        <h2>
          100,00 €
        </h2>

        <p className="green">
          +0,00% täna
        </p>

      </section>



      <section className="card">

        <h3>
          🤖 Tänane AI hinnang
        </h3>

        <div className="status">
          🟡 OOTA
        </div>

        <p>
          Hetkel ei näe tugevat ostukohta.
          Jälgin turgu ja ootan paremat võimalust.
        </p>

      </section>



      <section className="grid">

        <div className="card">
          <p className="label">
            Vaba raha
          </p>
          <h3>
            100,00 €
          </h3>
        </div>


        <div className="card">
          <p className="label">
            Investeeritud
          </p>
          <h3>
            0,00 €
          </h3>
        </div>


        <div className="card">
          <p className="label">
            Kasum/kahjum
          </p>
          <h3>
            0,00 €
          </h3>
        </div>

      </section>



      <section className="card">

        <h3>
          🔎 Jälgimisel
        </h3>


        {investments.map((item) => (

          <div className="investment" key={item.name}>

            <div>
              <strong>
                {item.name}
              </strong>

              <p>
                {item.status}
              </p>
            </div>


            <div className="score">
              {item.score}/100
            </div>

          </div>

        ))}

      </section>



      <section className="card">

        <h3>
          🚨 Teavitused
        </h3>

        <p>
          Hetkel aktiivseid hoiatusi ei ole.
        </p>

      </section>


      <style jsx>{`

        .page {
          min-height:100vh;
          background:#f7f8fa;
          color:#111827;
          padding:30px;
          max-width:900px;
          margin:auto;
          font-family:Arial, sans-serif;
        }


        h1 {
          font-size:36px;
          margin-bottom:10px;
        }


        h2 {
          font-size:48px;
          margin:10px 0;
        }


        h3 {
          margin-top:0;
        }


        .subtitle {
          font-size:22px;
          margin-bottom:5px;
        }


        .gray {
          color:#6b7280;
        }


        .label {
          color:#6b7280;
          margin-bottom:5px;
        }


        .mainCard,
        .card {

          background:white;
          border-radius:24px;
          padding:25px;
          margin-top:20px;
          box-shadow:0 8px 25px rgba(0,0,0,0.05);

        }


        .green {
          color:#16a34a;
          font-weight:bold;
        }


        .status {

          display:inline-block;
          background:#fef3c7;
          padding:10px 18px;
          border-radius:30px;
          margin:10px 0;
          font-weight:bold;

        }


        .grid {

          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
          gap:20px;

        }


        .investment {

          display:flex;
          justify-content:space-between;
          align-items:center;
          border-top:1px solid #eee;
          padding:15px 0;

        }


        .investment p {

          margin:5px 0 0;
          color:#6b7280;

        }


        .score {

          font-size:20px;
          font-weight:bold;

        }


        @media(max-width:600px){

          .page {
            padding:20px;
          }


          h1 {
            font-size:30px;
          }


          h2 {
            font-size:40px;
          }

        }

      `}</style>

    </main>
  );
}
