"use client";
import React from 'react';

export default function AddButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transition-colors"
    >
      <span className="text-base font-bold">+</span> Add Document Configuration
    </button>
  );
}