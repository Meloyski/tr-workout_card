import React from "react";
import Container from "./Components/Container";
import WorkoutCard from "./Components/WorkoutCard";
import "./Style/style.scss";

function App() {
  return (
    <div className="App">
      <Container>
        <WorkoutCard
          zonetype="Sweetspot"
          title="Carson"
          hour="01"
          min="00"
          sec="00"
          tss={80}
          int={76}
          cal={511}
        />
      </Container>
    </div>
  );
}

export default App;
