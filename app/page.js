export default function Home() {
  const investments = [
    {
      name: "NVIDIA",
      score: 91,
      status: "Hea jälgida",
    },
    {
      name: "Bitcoin",
      score: 85,
      status: "Oota võimalust",
    },
    {
      name: "Microsoft",
      score: 88,
      status: "Stabiilne",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        color: "#111827",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1>🧠 Project Alpha</h1>

      <h2>Tere, Robert 👋</h2>

      <p style={{ color: "#64748b" }}>
        Sinu isiklik AI investeerimisassistent
      </p>


      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "25px",
        }}
      >
        <p>Portfelli väärtus</p>
        <h1>100,00 €</h1>
        <b style={{ color: "green" }}>
          +0,00% täna
        </b>
      </div>


      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >
        <h2>🤖 Tänane AI hinnang</h2>

        <h3>🟡 OOTA</h3>

        <p>
          Hetkel ei näe tugevat ostukohta.
          Jälgin turgu ja ootan paremat võimalust.
        </p>
      </div>


      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        <Box title="Vaba raha" value="100,00 €" />

        <Box title="Investeeritud" value="0,00 €" />

        <Box title="Kasum/kahjum" value="0,00 €" />

      </div>


      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >

        <h2>🔎 Jälgimisel</h2>

        {investments.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #eee",
              padding: "15px 0",
            }}
          >

            <div>
              <b>{item.name}</b>
              <div>{item.status}</div>
            </div>

            <strong>
              {item.score}/100
            </strong>

          </div>
        ))}

      </div>


      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >

        <h2>🚨 Teavitused</h2>

        <p>
          Hetkel aktiivseid hoiatusi ei ole.
        </p>

      </div>


    </main>
  );
}


function Box({ title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <p style={{ color: "#64748b" }}>
        {title}
      </p>

      <h2>
        {value}
      </h2>

    </div>
  );
}
