import { valueColors } from "../styles/valueColors";

export default function ChampCard({ champ, positives }) {
  const sortedValues = Object.values(positives).sort();

  return (
    <div className="bg-white/10 p-4 rounded-xl text-white shadow-md min-w-45">
      <img
        src={`/icons/${champ}.png`}
        alt={champ}
        className="w-20 h-20 object-cover mx-auto rounded-md mb-3"
      />
      <div className="space-y-2">
        {sortedValues.map((val, idx) => (
          <div
            key={idx}
            className="text-sm text-center px-3 py-1 rounded-full"
            style={{
              backgroundColor: valueColors[val] || "#6b7280", // default gray
            }}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  );
}