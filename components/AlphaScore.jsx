export default function AlphaScore() {

  return (

    <section className="alpha-score">


      <div className="alpha-title">
        🧠 Alpha Score
      </div>


      <div className="score-wrapper">

        <span className="score-number">
          82
        </span>

        <span className="score-total">
          /100
        </span>

      </div>



      <div className="positive">
        🟢 Positiivne turuseis
      </div>



      <div className="metric">

        <div className="metric-header">
          <span>Turu võimalused</span>
          <span>80%</span>
        </div>


        <div className="bar">
          <div className="bar-blue"></div>
        </div>

      </div>




      <div className="metric">

        <div className="metric-header">
          <span>Riskitase</span>
          <span>45%</span>
        </div>


        <div className="bar">
          <div className="bar-yellow"></div>
        </div>

      </div>


    </section>

  );
}
