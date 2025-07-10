import { useState } from "react";

export default function History({ histories }) {
  return (
    <div className="w-3/4 h-1/4 overflow-y-auto border border-gray-400 rounded p-2 flex flex-col justify-start items-center">
      <h2 className="text-lg font-bold mb-2">History</h2>
      <ul className="flex flex-col gap-1">
        {histories.length === 0 ? (
          <li className="text-gray-500">No moves yet.</li>
        ) : (
          histories.slice().reverse().map((move, index) => (
            <li
              key={index}
              className="w-full px-2 py-1 bg-gray-200 rounded text-center"
            >
              {move}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
