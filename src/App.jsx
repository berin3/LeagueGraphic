import { useState } from "react";
import data from "./data/data.json";
import RoleSelector from "./components/RoleSelector";
import CategorySection from "./components/CategorySection";

function App() {
  const [selectedRole, setSelectedRole] = useState("top");

  const roleData = selectedRole ? data[selectedRole] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-purple-800 text-white px-4 py-6">
      <h1 className="text-3xl text-center font-bold mb-6">TGS Champions</h1>
      <RoleSelector selected={selectedRole} onSelect={setSelectedRole} />
      {roleData && (
        <div className="max-w-9xl mx-auto">
          <CategorySection title="Comfort" champs={roleData.comfort} />
          <CategorySection title="Specific" champs={roleData.specific} />
          <CategorySection title="Teamcomp" champs={roleData.teamcomp} />
        </div>
      )}
    </div>
  );
}

export default App;