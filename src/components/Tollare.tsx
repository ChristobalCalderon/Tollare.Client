import * as React from "react";

export interface Bus {
  lineNumber: string;
  destination: string;
  displayTime: string;
}

export default function Tollare() {
  const [buses, setBuses] = React.useState([{} as Bus]);

  React.useEffect(() => {
    let init: RequestInit = {
      headers: {
        Accept: "*/**",
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*"
      },
      method: "GET"
    };

    fetch("https://localhost:44365/api/TrafikLab", init)
      .then((response: any) => {
        return response.json();
      })
      .then((response: any) => {
        console.log(response);
        let buses: Bus[] = [];
        for (let bus of response.responseData.buses) {
          buses.push({
            lineNumber: bus.lineNumber,
            destination: bus.destination,
            displayTime: bus.displayTime
          } as Bus);
        }
        setBuses(buses);
      })
      .catch((error: any) => {});
  }, []);

  let busesElement: JSX.Element[] = [];

  for (let bus of buses) {
    busesElement.push(
      <tr key={}>
        <td data-label="Destination">{bus.destination}</td>
        <td data-label="Linje">{bus.lineNumber}</td>
        <td data-label="Tid">{bus.displayTime}</td>
      </tr>
    );
  }

  return (
    <div>
      <table className="ui selectable inverted table">
        <thead>
          <tr>
            <th>Destination</th>
            <th>Linje</th>
            <th>Tid</th>
          </tr>
        </thead>
        <tbody>{busesElement}</tbody>
      </table>
    </div>
  );
}
