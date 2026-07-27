export default function Holdings() {

  const holdings = [
    {
      name: "NVIDIA",
      amount: "0 tk",
      value: "0,00 €",
      change: "+0,00%"
    },
    {
      name: "Bitcoin",
      amount: "0 BTC",
      value: "0,00 €",
      change: "+0,00%"
    },
    {
      name: "Vaba raha",
      amount: "",
      value: "100,00 €",
      change: ""
    }
  ];


  return (

    <section className="holdings">


      <div className="holdings-title">
        💼 Minu positsioonid
      </div>


      <p className="holdings-subtitle">
        Sinu aktiivsed investeeringud
      </p>



      <div className="holdings-list">


        {holdings.map((item) => (

          <div 
            className="holding-card"
            key={item.name}
          >


            <div>

              <strong>
                {item.name}
              </strong>


              <p>
                {item.amount}
              </p>

            </div>



            <div className="holding-right">

              <strong>
                {item.value}
              </strong>


              <span>
                {item.change}
              </span>

            </div>


          </div>

        ))}


      </div>


    </section>

  );

}
