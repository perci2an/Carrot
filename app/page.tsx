export default function Home() {
  return (
    <main className="main-class">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-sm flex flex-col gap-3">
        <div className="group flex flex-col">
          <input
            className="bg-gray-100 w-full"
            placeholder="Write your email"
          />
          <span className="group-focus-within:block hidden">
            Make sure it is a valid email...
          </span>
          <button>Submit</button>
        </div>
      </div>
    </main>
  );
}
