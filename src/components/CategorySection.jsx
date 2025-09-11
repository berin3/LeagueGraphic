import ChampCard from "./ChampCard";

export default function CategorySection({ title, champs }) {
  return (
    <div className="my-3">
      <h2 className="text-xl font-semibold text-white mb-2 width-full text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(champs).map(([champName, positives]) => (
          <ChampCard key={champName} champ={champName} positives={positives} />
        ))}
      </div>
    </div>
  );
}