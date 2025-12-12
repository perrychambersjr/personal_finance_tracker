import { useGoalStore } from '@/app/store';
import { Goal } from '@/app/types/Goal';
import React from 'react';

const GoalCard = ({ goal }: { goal: Goal }) => {
  const pct = (goal.currentAmount / goal.targetAmount) * 100;
  const { setActiveGoal } = useGoalStore();

  return (
    <div className="p-4 rounded-xl border shadow-sm cursor-pointer space-y-2"       
     onClick={() => setActiveGoal(goal)}>

        <div className="font-semibold">
            {goal.title}
        </div>

        <div>
            ${goal.currentAmount} / ${goal.targetAmount}
        </div>

        <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-[var(--primary)] rounded-full"
            style={{ width: `${pct}%` }}
            >

            </div>
        </div>

        <div>{pct.toFixed(2)}% on track</div>
    </div>
  )
}

export default GoalCard