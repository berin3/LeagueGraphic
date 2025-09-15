import { useNavigate } from "react-router-dom";
import data from "../data/learn.json";

export default function Learn() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 
    to-purple-800 text-white px-4 py-6 flex flex-col items-center">
            <h1 className="text-3xl text-center font-bold mb-6">Champions To Practice</h1>
            <button 
                className="bg-gradient-to-r from-green-400 via-orange-400 to-yellow-400 
                max-w-xl px-10 py-2 rounded-full text-xl font-bold cursor-pointer text-white"
                onClick={() => {navigate("/")}}
            >
                TGS Champions
            </button>
            {data &&
                <div className="p-6 space-y-6">
                {Object.entries(data).map(([key, values]) => (
                    <div key={key} className="bg-white/10 shadow-md p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">{key}:</h3>
                    <div className="flex flex-wrap gap-4">
                        {values.map((value, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <img
                            src={`/icons/${value}.png`}
                            alt={value}
                            className="w-20 h-20 object-contain rounded-full"
                            />
                        </div>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            }
        </div>
    );
}