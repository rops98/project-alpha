export default function AlphaRadar() {

  const assets = [
    {
      name: "NVIDIA",
      score: 91,
      status: "Tugev trend",
      signal: "🟢"
    },
    {
      name: "Bitcoin",
      score: 85,
      status: "Jälgi võimalust",
      signal: "🟡"
    },
    {
      name: "Microsoft",
      score: 88,
      status: "Stabiilne kasv",
      signal: "🟢"
    },
    {
      name: "Tesla",
      score: 72,
      status: "Oota",
      signal: "⚪"
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



      <div className="radar-list">


        {assets.map((asset) => (

          <div className="radar-item" key={asset.name}>


            <div className="asset-top">

              <strong>
                {asset.signal} {asset.name}
              </strong>


              <span>
                {asset.score}/100
              </span>

            </div>



            <div className="radar-bar">

              <div
                className="radar-fill"
                style={{
                  width: `${asset.score}%`
                }}
              />

            </div>



            <p>
              {asset.status}
            </p>


          </div>

        ))}


      </div>


    </section>

  );
}
