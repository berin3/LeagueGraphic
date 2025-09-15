import { useState } from "react";
import data from "./data/champions.json";
import RoleSelector from "./components/RoleSelector";
import CategorySection from "./components/CategorySection";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("top");

  const roleData = selectedRole ? data[selectedRole] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 
    to-purple-800 text-white px-4 py-6 flex flex-col items-center">
      <h1 className="text-3xl text-center font-bold mb-6">TGS Champions</h1>
      <button 
        className="bg-gradient-to-r from-green-400 via-orange-400 to-yellow-400 
        max-w-xl px-10 py-2 rounded-full text-xl font-bold cursor-pointer text-white"
        onClick={() => {navigate("/learn")}}
      >
        Champions To Practice
      </button>
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