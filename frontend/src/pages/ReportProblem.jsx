import React from "react";
import Map from "../components/Map";
import ProblemForm from "../components/ProblemForm";

export default function ReportProblem() {
  const handleSubmitProblem = async (problemData) => {
    // Send it to your backend using fetch or axios:
    // e.g. await axios.post("/api/problems", { ...problemData, coords: selectedLocation });
    console.log("Submitted problem:", problemData);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Report a Problem</h1>
      <div className="mb-4">
        <Map 
          markers={[]} 
          onMapClick={(coords) => console.log("Map clicked at:", coords)} 
        />
      </div>
      <ProblemForm onSubmit={handleSubmitProblem} />
    </div>
  );
}