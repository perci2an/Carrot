export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-yellow-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-sm flex flex-col md:flex-row gap-2 *:outline-none ring ring-transparent transition-shadow *:md:text-red-100 has-[:invalid]:bg-red-100 has-[:invalid]:ring">
        <input
          className="w-full rounded-full h-10 py-3 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="email"
          required
          placeholder="Email address"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required
        </span>
        <button className="bg-black bg-opacity-70 text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium md:px-10 bg-black">
          Login in
        </button>
      </div>
    </main>
  );
}
