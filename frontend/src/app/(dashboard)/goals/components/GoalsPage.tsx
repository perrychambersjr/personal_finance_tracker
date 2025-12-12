"use client";
import { useGoalStore } from '@/app/store';
import React, { useEffect } from 'react';
import GoalHeader from './GoalsMainContent/GoalHeader';
import ProgressPanel from './GoalsMainContent/ProgressPanel';
import SummaryMetricsGrid from './GoalsMainContent/SummaryMetricsGrid';
import AddGoalButton from './GoalsSidebar/AddGoalButton';
import GoalCard from './GoalsSidebar/GoalCard';
import GoalCardList from './GoalsSidebar/GoalCardList';

const summaryMetrics = [
  { label: "Last Month", value: "$42,678", sub: "Previous balance" },
  { label: "Expenses", value: "$1,798", sub: "Monthly outflow" },
  { label: "Taxes", value: "$255.25", sub: "Estimated liability" },
  { label: "Debt", value: "$365,478", sub: "Total outstanding" },
];

const walletData = [
  { label: "First Bank", amount: 250, color: "bg-yellow-500" },
  { label: "Cash App", amount: 100, color: "bg-green-600" },
  { label: "Capital One", amount: 175, color: "bg-red-700" },
];

const transactions = [
  {
    date: "29 Feb 2024",
    wallet: "Visa",
    description: "Down Payment",
    amount: 5000,
    fee: 12.36,
    type: "credit",
  },
  {
    date: "15 Feb 2024",
    wallet: "Bank Transfer",
    description: "Savings Contribution",
    amount: 2000,
    fee: 0,
    type: "credit",
  },
  {
    date: "01 Feb 2024",
    wallet: "Cash",
    description: "Part-time Job",
    amount: 3000,
    fee: 12.36,
    type: "credit",
  },
];

const GoalsPage = () => {
  const { goals, fetchGoals, activeGoal } = useGoalStore();
    
  useEffect(() => {
    fetchGoals();
  }, [fetchGoals]);

  return (
    <div className="flex gap-6 p-6">
      {/* Left sidebar */}
        <aside className="w-80 space-y-4">
            <GoalCardList goals={goals} />
            <AddGoalButton />
        </aside>

        {/* Right main content */}
        <main className="flex-1 space-y-6">
          <GoalHeader goal={activeGoal || goals[0]}/>
          <ProgressPanel goal={activeGoal || goals[0]}/>

          <SummaryMetricsGrid metrics={summaryMetrics} />
        </main>
    </div>
  )
}

export default GoalsPage