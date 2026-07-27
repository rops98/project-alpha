
export default function PortfolioChart() {

  const points = [
    100,
    101,
    100.5,
    103,
    105,
    104,
    108,
    112,
    110,
    115
  ];


  return (

    <section className="portfolio-chart">


      <div className="chart-title">
        📈 Portfelli areng
      </div>


      <p className="chart-subtitle">
        Simuleeritud 30 päeva tootlus
      </p>



      <div className="chart-area">

        {points.map((point, index) => (

          <div
            key={index}
            className="chart-point"
            style={{
              height: `${point - 90}%`
            }}
          />

        ))}

      </div>



      <div className="chart-footer">

        <span>
          Algus 100,00 €
        </span>


        <strong>
          115,00 €
        </strong>

      </div>


    </section>

  );

}
