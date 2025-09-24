"use client";
function TodoFilter({ setFilter }: any) {
  return (
    <div className="flex items-center gap-2 mt-3">
      <span className="text-xs text-gray-400 mr-1">Filter:</span>
      <button
        onClick={() => setFilter("all")}
        className="rounded-lg px-3 py-1 text-xs border border-gray-300 hover:bg-gray-50"
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className="rounded-lg px-3 py-1 text-xs border border-gray-300 hover:bg-gray-50"
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className="rounded-lg px-3 py-1 text-xs border border-gray-300 hover:bg-gray-50"
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilter;
