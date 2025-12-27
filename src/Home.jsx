import React from 'react';
import { Phone, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://customer-assets.emergentagent.com/job_hair-pro-maakaz/artifacts/9jh7vc6e_image.png"
            alt="Maakaz Hair Salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ihr Stil.<br />
            <span className="text-red-500">Unsere Leidenschaft.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Professionelle Friseurdienstleistungen im Herzen von Nürnberg
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:09116608295">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-0">
                <Phone className="w-5 h-5 mr-2" />
                Jetzt anrufen
              </Button>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Pirckheimerstra%C3%9Fe+68,+90408+N%C3%BCrnberg" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                <MapPin className="w-5 h-5 mr-2" />
                Route anzeigen
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Willkommen bei<br />
                <span className="text-red-600">Maakaz Hair</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Seit Jahren sind wir Ihre erste Adresse für professionelle Friseurdienstleistungen in Nürnberg. Unser erfahrenes Team verbindet traditionelles Handwerk mit modernen Styling-Trends.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Bei uns steht Ihre Zufriedenheit im Mittelpunkt. Wir nehmen uns Zeit für Sie und Ihre individuellen Wünsche.
              </p>
              <Link to="/about">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white font-medium transition-all duration-300 hover:shadow-lg">
                  Mehr über uns
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_hair-pro-maakaz/artifacts/b03l5bfn_image.png"
                alt="Maakaz Hair Salon Interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-sm font-semibold">4.6 von 5 Sternen</p>
                <p className="text-xs">94 Google Bewertungen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kontakt</h3>
              <p className="text-gray-600 mb-4">Rufen Sie uns an oder besuchen Sie uns direkt</p>
              <a href="tel:09116608295" className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-300">
                0911 6608295 →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Standort</h3>
              <p className="text-gray-600 mb-4">Pirckheimerstraße 68, 90408 Nürnberg</p>
              <Link to="/contact" className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-300">
                Zur Karte →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bewertungen</h3>
              <p className="text-gray-600 mb-4">Überzeugen Sie sich von unserer Qualität</p>
              <Link to="/reviews" className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-300">
                Bewertungen ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;