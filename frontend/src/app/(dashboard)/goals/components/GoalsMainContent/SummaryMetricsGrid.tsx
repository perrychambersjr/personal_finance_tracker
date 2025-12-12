import React from 'react';

const SummaryMetricsGrid = ({ metrics }: { metrics: { label: string; value: string; sub: string }[] }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {metrics.map((m, i) => (
        <div key={i} className="p-4 bg-white rounded-xl shadow-sm">
          <div className="text-sm text-gray-500">{m.label}</div>
          <div className="text-xl font-bold">{m.value}</div>
          <div className="text-gray-500 text-sm">{m.sub}</div>
        </div>
      ))}
    </div>
  )
}

export default SummaryMetricsGrid