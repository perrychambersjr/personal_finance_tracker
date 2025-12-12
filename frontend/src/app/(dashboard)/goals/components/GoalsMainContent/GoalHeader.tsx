import { Goal } from '@/app/types/Goal';
import React from 'react';

function PeriodButton({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={`px-4 py-1 rounded-full ${
        active ? "bg-[var(--primary)] text-white" : "bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
}

const GoalHeader = ({ goal }: { goal: Goal }) => {
    return (
        <div className="flex justify-between items-center gap-6">
            <div className="flex justify-start flex-col">
                <h1 className="text-lg md:text-xl font-bold">{goal.title}</h1>
                <p className="text-sm text-gray-600">Goal overview and progress</p>
            </div>

            <div className="flex items-center gap-4">
                <button className="border rounded-full px-4 py-2">Export</button>
                <div className="flex gap-2">
                    <PeriodButton label="Weekly" />
                    <PeriodButton label="Monthly" active />
                    <PeriodButton label="Yearly" />
                </div>
            </div>
        </div>
    );
}

export default GoalHeader