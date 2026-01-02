import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-black px-6 py-4 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tighter text-white">
            HomeScout<span className="text-emerald-500">NZ</span>
          </h1>
          <div className="space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-emerald-400">Search</a>
            <a href="#" className="hover:text-emerald-400">Listings</a>
            <a href="#" className="hover:text-emerald-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="mb-6 text-5xl font-extrabold leading-tight">
              Find Your Perfect <br />
              <span className="text-emerald-500 underline decoration-white/20 underline-offset-8">New Zealand Home.</span>
            </h2>
            <p className="mb-8 text-lg text-gray-400">
              Professional property solutions and scouting services across New Zealand. We find the hidden gems so you don't have to.
            </p>
            <button className="rounded-full bg-emerald-500 px-8 py-3 font-bold text-black transition hover:bg-emerald-400">
              Explore Listings
            </button>
          </div>
        </div>
      </header>

      {/* Features/Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-4xl font-bold text-emerald-600">500+</h3>
            <p className="text-gray-600 mt-2">Properties Scouted</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-emerald-600">100%</h3>
            <p className="text-gray-600 mt-2">Local Expertise</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-emerald-600">24/7</h3>
            <p className="text-gray-600 mt-2">Premium Support</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} HomeScout NZ. Professional Real Estate Solutions.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;