export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-yellow-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-sm flex flex-col md:flex-row gap-2">
        <input
          className="w-full rounded-full h-10 py-3 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-700 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black bg-opacity-70 text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium md:px-10 bg-gradient-to-tr from-cyan-500 via-yellow-400 to-purple-400">
          Search
        </button>
      </div>
    </main>
  );
}
