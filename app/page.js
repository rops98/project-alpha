export default function Home() {
  const assets = [
    { name: "Bitcoin", score: 85, action: "WATCH" },
    { name: "NVIDIA", score: 91, action: "WATCH" },
    { name: "S&P 500 ETF", score: 78, action: "HOLD" },
    { name: "Ethereum", score: 82, action: "WATCH" },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b0f19",
      color: "white",
      padding: "30px",
      fontFamily: "Arial"
    }}>

      <h1 style={{fontSize:"36px"}}>
        🧠 Project Alpha
      </h1>

      <p style={{color:"#9ca3af"}}>
        AI Investment Assistant
      </p>


      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px",
        marginTop:"30px"
      }}>

        <Card title="Portfolio">
          €100.00
          <small>Starting balance</small>
        </Card>

        <Card title="Today">
          +0.00%
          <small>No positions yet</small>
        </Card>

        <Card title="Risk">
          Medium
          <small>20% loss tolerance</small>
        </Card>

      </div>


      <section style={{
        marginTop:"30px",
        background:"#111827",
        padding:"25px",
        borderRadius:"20px"
      }}>

        <h2>
          🤖 AI Market Status
        </h2>

        <h3 style={{color:"#facc15"}}>
          🟡 WAIT
        </h3>

        <p style={{color:"#cbd5e1"}}>
          System is monitoring opportunities.
          No strong entry signal detected yet.
        </p>

      </section>



      <section style={{marginTop:"30px"}}>

        <h2>
          ⭐ Watchlist
        </h2>

        {assets.map((asset)=>(
          <div key={asset.name}
          style={{
            background:"#111827",
            marginTop:"12px",
            padding:"18px",
            borderRadius:"15px",
            display:"flex",
            justifyContent:"space-between"
          }}>

            <div>
              <b>{asset.name}</b>
              <br/>
              AI Score: {asset.score}/100
            </div>

            <strong>
              {asset.action}
            </strong>

          </div>
        ))}

      </section>



      <section style={{
        marginTop:"30px",
        background:"#111827",
        padding:"25px",
        borderRadius:"20px"
      }}>

        <h2>
          🚨 Alerts
        </h2>

        <p>
          No active alerts.
        </p>

      </section>


    </main>
  );
}


function Card({title, children}) {
  return (
    <div style={{
      background:"#111827",
      padding:"25px",
      borderRadius:"20px"
    }}>
      <p style={{color:"#94a3b8"}}>
        {title}
      </p>

      <h2>
        {children}
      </h2>

    </div>
  );
}
