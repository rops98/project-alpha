export default function AlphaScore() {

  return (

    <section className="alpha-score">

      <div className="alpha-header">
        🧠 Alpha Score
      </div>


      <div className="score-number">
        82
      </div>


      <div className="score-label">
        / 100
      </div>


      <div className="positive">
        🟢 Positiivne turuseis
      </div>


      <div className="metrics">

        <div>
          <span>
            Turu võimalused
          </span>

          <div className="bar">
            <div className="bar-fill opportunity"></div>
          </div>

        </div>



        <div>

          <span>
            Riskitase
          </span>

          <div className="bar">
            <div className="bar-fill risk"></div>
          </div>

        </div>


      </div>


    </section>

  );

}
