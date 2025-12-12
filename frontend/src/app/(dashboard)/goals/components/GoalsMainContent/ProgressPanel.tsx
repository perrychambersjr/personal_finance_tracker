import { Goal } from '@/app/types/Goal';
import React from 'react';

const ProgressPanel = ({ goal }: { goal: Goal }) => {
  const pct = (goal.currentAmount / goal.targetAmount) * 100;

  return (
    <div className="p-4 rounded-xl bg-white shadow-sm">
        <div className="flex justify-between font-semibold">
        <span>${goal.currentAmount} saved</span>
        <span>${goal.targetAmount} goal</span>
        </div>

        <div className="h-2 bg-gray-200 rounded-full my-3">
        <div
            className="h-2 bg-[var(--primary)] rounded-full"
            style={{ width: `${pct}%` }}
        />
        </div>

        <div className="flex justify-between text-sm text-gray-500">
        <span>{pct.toFixed(0)}% of goal reached</span>
        <span>${goal.targetAmount - goal.currentAmount} remaining</span>
        </div>
    </div>
  )
}

export default ProgressPanel