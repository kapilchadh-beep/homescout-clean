import React, { useState } from 'react';

// Sample data for property listings
const PROPERTIES = [
  { id: 1, title: "Modern Auckland Villa", price: "$1,250,000", beds: 4, baths: 2, image: "https://images.unsplash.com/photo-1580587767303-93663f7362f6?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Wellington City Apartment", price: "$850,000", beds: 2, baths: 1, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Queenstown Alpine Retreat", price: "$2,100,000", beds: 5, baths: 3, image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80" }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-black px-8 py-4 text-white shadow-xl">
        <div className="text-2xl font-black tracking-tighter italic">
          HomeScout<span className="text-emerald-500">NZ</span>
        </div>
        <div className="hidden space-x-8 text-sm font-bold uppercase tracking-widest md:flex">
          <a href="#" className="hover:text-emerald-400 transition">Buy</a>
          <a href="#" className="hover:text-emerald-400 transition">Rent</a>
          <a href="#" className="hover:text-emerald-400 transition">Agents</a>
          <a href="#" className="rounded bg-emerald-600 px-4 py-2 hover:bg-emerald-500">Contact Us</a>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative bg-black py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-4 text-5xl font-extrabold md:text-6xl">
            Scouting the Best of <span className="text-emerald-500">New Zealand</span>
          </h1>
          <p className="mb-10 text-xl text-slate-400">
            Professional property solutions for buyers, sellers, and investors.
          </p>
          
          {/* Search Bar */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:bg-white md:p-2 md:rounded-full md:shadow-2xl">
            <input 
              type="text" 
              placeholder="Search by city or suburb..." 
              className="w-full rounded-full border-none px-6 py-4 text-black focus:ring-0 md:w-auto md:flex-grow"
            />
            <button className="w-full rounded-full bg-emerald-600 px-10 py-4 font-bold transition hover:bg-emerald-500 md:w-auto">
              Search Properties
            </button>
          </div>
        </div>
      </header>

      {/* Property Listings Section */}
      <main className="mx-auto max-w-7xl px-8 py-16">
        <div className="mb-12 flex items-end justify-between border-b border-slate-200 pb-6">
          <div>
            <h2 className="text-3xl font-bold">Featured Listings</h2>
            <p className="text-slate-500">Hand-picked properties across the islands.</p>
          </div>
          <button className="text-emerald-600 font-bold hover:underline">View All &rarr;</button>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {PROPERTIES.map((property) => (
            <div key={property.id} className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 rounded bg-black/70 px-3 py-1 text-sm font-bold text-white backdrop-blur-md">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{property.title}</h3>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
                  <span className="flex items-center gap-1">🛏️ {property.beds} Beds</span>
                  <span className="flex items-center gap-1">🚿 {property.baths} Baths</span>
                </div>
                <button className="mt-6 w-full rounded-lg border-2 border-slate-200 py-3 font-bold transition hover:border-emerald-500 hover:text-emerald-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 text-center text-white">
        <div className="text-xl font-bold italic mb-4">
          HomeScout<span className="text-emerald-500">NZ</span>
        </div>
        <p className="text-slate-500">© {new Date().getFullYear()} HomeScout NZ. Expert Property Scouting.</p>
      </footer>
    </div>
  );
};

export default App;