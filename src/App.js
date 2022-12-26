import "./App.css";
import allCountryScores from "./scores";

function App() {
  let objs;
  let allScores = allCountryScores.sort((a,b) => (a.name > b.name ? 1: -1));
  return (
    <div className="App">
      <h1>High Scores Per Country</h1>
      {allScores.map((score) => {
        objs = score.scores.sort((a, b) => (a.s < b.s ? 1 : -1));
        return (
          <div className="country">
            <h2>HIGH SCORES: {score.name}</h2>
            <div className="table-div">
              <table rules="columns">
                {/* <thead>
                  <tr>
                    <th></th>
                  </tr>
                </thead> */}

                {objs.map((obj, key) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{obj["n"].toUpperCase()}</td>
                        <td id="score">{obj["s"]}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        );
        
})}
      ;
    </div>
  );
}

export default App;
