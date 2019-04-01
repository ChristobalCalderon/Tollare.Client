import * as React from "react";
import "./App.css";
import Tollare from "./components/Tollare";
import Solna from "./components/Solna";

function App() {
  const [tabIndex, setTabIndex] = React.useState(1);

  function onSelect(e: any) {
    debugger;
    setTabIndex(1);
  }
  let tabFirst = tabIndex === 1 ? "item active" : "item";
  let tabSecond = tabIndex === 2 ? "item active" : "item";
  let tabThird = tabIndex === 3 ? "item active" : "item";

  return (
    <div>
      <div className="ui top attached tabular menu" onSelect={onSelect}>
        <a className={tabFirst} data-tab="first" onSelect={onSelect}>
          Tollare
        </a>
        <a className={tabSecond} data-tab="second" onSelect={onSelect}>
          Torsplan
        </a>
        <a className={tabThird} data-tab="third" onSelect={onSelect}>
          Solna
        </a>
      </div>
      <div
        className="ui bottom attached tab segment active"
        data-tab="first"
        onSelect={onSelect}
      >
        <Tollare />
      </div>
      <div className="ui bottom attached tab segment" data-tab="second">
        Torsplan
      </div>
      <div className="ui bottom attached tab segment" data-tab="third">
        <Solna />
      </div>
    </div>
  );
}

export default App;
