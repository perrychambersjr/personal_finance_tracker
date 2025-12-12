"use client"
import { useGoalStore } from '@/app/store';
import React, { useEffect } from 'react';
import { useStore } from 'zustand';
import GoalCard from './GoalCard';
import { Goal } from '@/app/types/Goal';

const GoalCardList = ({ goals }: { goals: Goal[] }) => {

  return (
    goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
    ))
  )
}

export default GoalCardList