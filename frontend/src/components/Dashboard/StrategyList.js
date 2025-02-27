import React from 'react';

const StrategyList = ({ strategies }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Trading Strategies</h2>
      <div className="space-y-4">
        {strategies.map((strategy) => (
          <div
            key={strategy.id}
            className="border p-4 rounded hover:bg-gray-50"
          >
            <h3 className="font-bold">{strategy.name}</h3>
            <p className="text-gray-600">{strategy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyList;