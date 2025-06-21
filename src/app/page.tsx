import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome</h1>
        <Link 
          href="/phone-input"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
