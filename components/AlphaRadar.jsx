export default function AlphaRadar() {

  const assets = [
    {
      name: "NVIDIA",
      score: 91,
      status: "Tugev trend",
      risk: "Keskmine",
      color: "green"
    },
    {
      name: "Bitcoin",
      score: 85,
      status: "Jälgi võimalust",
      risk: "Kõrgem",
      color: "yellow"
    },
    {
      name: "Microsoft",
      score: 88,
      status: "Stabiilne kasv",
      risk: "Madal",
      color: "green"
    },
    {
      name: "Tesla",
      score: 72,
      status: "Oota",
      risk: "Kõrge",
      color: "gray"
    }
  ];


  return (

    <section className="alpha-radar">


      <div className="radar-title">
        🔥 Alpha Radar
      </div>


      <p className="radar-subtitle">
        AI poolt jälgitavad võimalused
      </p>



      <div className="radar-assets">


        {assets.map((asset) => (

          <div 
            className="radar-card"
            key={asset.name}
          >


            <div className="radar-header">


              <strong>
                {asset.name}
              </strong>


              <span className={`score ${asset.color}`}>
                {asset.score}
              </span>


            </div>



            <div className="radar-bar">

              <div
                className={`radar-progress ${asset.color}`}
                style={{
                  width: `${asset.score}%`
                }}
              />

            </div>



            <div className="radar-info">

              <span>
                {asset.status}
              </span>

              <span>
                Risk: {asset.risk}
              </span>

            </div>


          </div>


        ))}


      </div>


    </section>

  );

}
