function App() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <h1 className="text-3xl font-bold">Pesatrak</h1>
        <h1 className="pb-5 text-2xl text-gray-700 font-bold">
          Welcome Back
        </h1>

        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-3 rounded border px-6 py-2">
            <img className="h-7 w-7" src="/G.svg" alt="Google" />
            Continue with Google
          </button>

          <button className="flex justify-center gap-3 rounded border px-6 py-2">
             <img className="h-7 w-7" src="/Apple.svg" alt="Apple" />
            Continue with Apple
          </button>
          <hr className="text-gray-200"/>
        </div>
      </div>
    </div>
  )
}

export default App