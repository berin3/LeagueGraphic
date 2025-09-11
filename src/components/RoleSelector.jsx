const roles = ["top", "jungle", "mid", "bot", "support"];

export default function RoleSelector({ selected, onSelect }) {
  return (
    <div className="flex justify-center gap-4 my-6">
      {roles.map((role) => (
        <button
          key={role}
          onClick={() => onSelect(role)}
          className={`w-16 h-16 rounded-full transition-transform transform hover:scale-110 ${
            selected === role ? "ring-4 ring-white" : ""
          }`}
        >
          <img src={`/icons/${role}.png`} alt={role} className="w-full h-full object-cover rounded-full" />
        </button>
      ))}
    </div>
  );
}