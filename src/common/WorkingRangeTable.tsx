"use client";
import React from "react";

type WorkingRangeItem = {
  load: string;
  projection: string;
  height: string;
};

type Props = {
  leftTable: WorkingRangeItem[];
  rightTable: WorkingRangeItem[];
};

export default function WorkingRangeTable({ leftTable, rightTable }: Props) {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-center text-lg font-semibold mb-4">Working Range</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[leftTable, rightTable].map((table, index) => (
          <div key={index} className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#e2d6cf] text-sm text-gray-700">
                  <th className="border px-4 py-2 text-left font-medium">
                    Load
                  </th>
                  <th className="border px-4 py-2 text-left font-medium">
                    Projection
                  </th>
                  <th className="border px-4 py-2 text-left font-medium">
                    Height
                  </th>
                </tr>
              </thead>
              <tbody>
                {table.map((row, idx) => (
                  <tr key={idx} className="text-sm text-gray-800">
                    <td className="border px-4 py-2">{row.load}</td>
                    <td className="border px-4 py-2">{row.projection}</td>
                    <td className="border px-4 py-2">{row.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
