'use client';

import { useEffect } from "react";
import { useDispatch, UseSelector } from "react-redux";
import {fetchHabitsThunk } from "@/features/habit/habitSlice";
import { RootState, AppDispatch } from "@reduxjs/toolkit/query";
import Image from "next/image";
import Habits from "@/app/habits";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const habits = useSelector ((state:RootState) => state.habits);
  useEffect(() => {
    dispatch(fetchHabitsThunk());
  }, [dispatch]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Habits habits={habits}/>
    </div>
  );
}
