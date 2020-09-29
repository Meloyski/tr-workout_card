import * as React from "react";

const WorkoutChart = () => {
  return (
    <>
      <svg width="381" height="254" version="1.1">
        <polyline
          points="0,127 381,127"
          style={{ fill: "none", stroke: "#FFFFFF", strokeWidth: 1 }}
        />
        <polyline
          points="0,190.5 12.7,190.5 12.7,165.1 31.75,165.1 31.75,139.7 44.45,139.7 44.45,203.2 76.2,203.2 76.2,142.24 107.95,142.24 107.95,203.2 120.65,203.2 120.65,140.97 152.4,140.97 152.4,203.2 165.1,203.2 165.1,139.7 203.2,139.7 203.2,203.2 215.9,203.2 215.9,134.62 254,134.62 254,203.2 266.7,203.2 266.7,142.24 311.15,142.24 311.15,203.2 323.85,203.2 323.85,137.16 368.3,137.16 368.3,203.2 381,215.9"
          style={{
            fill: "none",
            stroke: "#27A9E0",
            strokeWidth: 1,
            strokeLinejoin: "bevel",
          }}
        />
        <polyline
          points="381,254 0,254"
          style={{
            fill: "none",
            stroke: "#27A9E0",
            strokeWidth: 1,
            strokeLinejoin: "bevel",
          }}
        />
        <polygon
          points="381,254 0,254 0,190.5 12.7,190.5 12.7,165.1 31.75,165.1 31.75,139.7 44.45,139.7 44.45,203.2 76.2,203.2 76.2,142.24 107.95,142.24 107.95,203.2 120.65,203.2 120.65,140.97 152.4,140.97 152.4,203.2 165.1,203.2 165.1,139.7 203.2,139.7 203.2,203.2 215.9,203.2 215.9,134.62 254,134.62 254,203.2 266.7,203.2 266.7,142.24 311.15,142.24 311.15,203.2 323.85,203.2 323.85,137.16 368.3,137.16 368.3,203.2 381,215.9"
          style={{ fill: "#27A9E0", stroke: "none" }}
        />
        <polygon
          points="0,0 381,0 381,254 0,254"
          style={{ fill: "none", stroke: "black", strokeWidth: 0 }}
        />
      </svg>
    </>
  );
};

export default WorkoutChart;
