import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="w-full py-6 px-8 bg-white shadow-sm">
      <div className="max-w-7xl flex items-center">
        <div className="text-xl font-bold pr-12">Your Brand</div>
        <Navigation />
      </div>
    </header>
  )
} 