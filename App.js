import React, { useState } from 'react';
import { Dumbbell, Calendar, Info, PlayCircle, ChevronRight } from 'lucide-react';

const FitnessApp = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [month, setMonth] = useState('Septembre');

  const program = [
    {
      title: "Séance 1 : Dos & Épaules",
      color: "border-pink-500",
      exercises: [
        { name: "Tirage Vertical", machine: "Lat Pulldown", tip: "Ne cherche pas à toucher la poitrine si tes bras sont trop longs, arrête-toi au menton.", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
        { name: "Tirage Horizontal", machine: "Seated Row", tip: "Utilise une prise neutre. Ne laisse pas tes épaules partir trop en avant.", video: "https://www.youtube.com/embed/GZbfZ033f74" },
        { name: "Développé Épaules", machine: "Shoulder Press", tip: "Coudes légèrement vers l'avant (pas à 180°) pour protéger tes longues clavicules.", video: "https://www.youtube.com/embed/qEwK6jnz8ms" }
      ]
    },
    {
      title: "Séance 2 : Pectoraux & Biceps",
      color: "border-green-500",
      exercises: [
        { name: "Vertical Press", machine: "Chest Press Matrix", tip: "Règle le siège pour que les poignées soient au milieu des pecs. Pas d'amplitude excessive au début.", video: "https://www.youtube.com/embed/VmBW739X0pE" },
        { name: "Butterfly", machine: "Pec Deck", tip: "Garde les coudes légèrement fléchis. Tes longs bras font un bras de levier énorme !", video: "https://www.youtube.com/embed/O-LVEW_osB4" },
        { name: "Curls Haltères", machine: "Haltères", tip: "Stabilité totale du buste. Ne balance pas pour compenser la longueur des bras.", video: "https://www.youtube.com/embed/ykJgrLQnK0w" }
      ]
    },
    {
      title: "Séance 3 : Jambes & Triceps",
      color: "border-blue-500",
      exercises: [
        { name: "Presse 45°", machine: "Leg Press Matrix", tip: "PIEDS HAUTS sur le plateau pour protéger tes genoux et utiliser tes longs fémurs.", video: "https://www.youtube.com/embed/yZmx_7_V6fM" },
        { name: "Leg Extension", machine: "Leg Extension", tip: "Dossier réglé au max vers l'arrière pour caler tes fémurs.", video: "https://www.youtube.com/embed/m0OIB6UasYI" },
        { name: "Extension Triceps", machine: "Poulie Haute", tip: "Reste proche de la poulie. Ne laisse pas tes coudes s'écarter.", video: "https://www.youtube.com/embed/6Fzep104f0s" }
      ]
    }
  ];

  const cycles = {
    "Septembre": "4 séries x 15 reps (Endurance)",
    "Octobre": "Pyramidal (12-10-8-6 reps)",
    "Novembre": "5 séries x 10 reps (Force/Volume)"
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans text-gray-900">
      <header className="mb-6 bg-white p-4 rounded-2xl shadow-sm border-b-4 border-yellow-400">
        <h1 className="text-2xl font-black italic uppercase tracking-tighter">Mon Plan Basic-Fit</h1>
        <p className="text-sm text-gray-500">Optimisé pour grands segments 📏</p>
      </header>

      {/* Selecteur de mois */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {Object.keys(cycles).map((m) => (
          <button 
            key={m}
            onClick={() => setMonth(m)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${month === m ? 'bg-black text-white' : 'bg-white text-gray-400 border'}`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 mb-6 rounded-r-lg">
        <div className="flex items-center gap-2 font-bold text-yellow-800 text-sm">
          <Calendar size={16} /> Objectif : {cycles[month]}
        </div>
      </div>

      {/* Tabs Séances */}
      <div className="grid grid-cols-3 gap-2 mb-6 text-center">
        {program.map((s, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`p-3 rounded-xl font-bold text-xs uppercase ${activeTab === idx ? 'bg-white shadow-md border-b-2 ' + s.color : 'text-gray-400'}`}
          >
            S {idx + 1}
          </button>
        ))}
      </div>

      {/* Liste exercices */}
      <div className="space-y-4">
        {program[activeTab].exercises.map((ex, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg">{ex.name}</h3>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{ex.machine}</span>
              </div>
              <a href={ex.video.replace('embed/', 'watch?v=')} target="_blank" className="text-blue-500">
                <PlayCircle size={28} />
              </a>
            </div>
            
            <div className="flex items-start gap-2 bg-blue-50 p-2 rounded-lg mb-3">
              <Info size={16} className="text-blue-500 mt-1 shrink-0" />
              <p className="text-xs text-blue-800 italic leading-relaxed">{ex.tip}</p>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden bg-gray-200">
                <iframe className="w-full h-full" src={ex.video} title={ex.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessApp;
