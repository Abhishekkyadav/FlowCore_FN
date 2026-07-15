export default function SearchBar({search, setSearch}) {
  return (
    <div className="relative w-96">
      <input
        type="text"
        placeholder="Search workflow..."
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        className="w-full h-11 pl-11 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <span className="absolute left-4 top-3.5 text-gray-400">
        🔍
      </span>
    </div>
  );
}