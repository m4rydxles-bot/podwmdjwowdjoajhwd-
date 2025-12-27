import React from 'react';
import { Award, Users, Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Über <span className="text-red-600">Uns</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Seit Jahren Ihre erste Adresse für professionelle Friseurdienstleistungen in Nürnberg
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://customer-assets.emergentagent.com/job_hair-pro-maakaz/artifacts/cv3tcjpx_image.png"
                alt="Maakaz Hair Salon"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professionell. Erfahren. Kundenorientiert.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Bei Friseur Saloon Maakaz steht der Kunde im Mittelpunkt. Unser erfahrenes Team aus professionellen Friseuren verbindet langjährige Expertise mit einem Gespür für aktuelle Trends und individuelle Wünsche.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Wir nehmen uns Zeit für Sie und Ihre Bedürfnisse. Ob klassischer Herrenschnitt, modernes Styling für Damen oder eine kreative Typveränderung – bei uns sind Sie in besten Händen.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unser Salon in der Pirckheimerstraße verbindet eine angenehme Atmosphäre mit modernster Ausstattung. Qualität, Präzision und Kundenservice sind für uns nicht nur Versprechen, sondern gelebte Praxis.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Erfahrung</h3>
              <p className="text-gray-600">
                Langjährige Expertise und professionelles Handwerk für perfekte Ergebnisse
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kundenorientiert</h3>
              <p className="text-gray-600">
                Ihre Zufriedenheit und individuellen Wünsche stehen bei uns an erster Stelle
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern</h3>
              <p className="text-gray-600">
                Aktuelle Trends und Techniken kombiniert mit zeitlosen Klassikern
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leidenschaft</h3>
              <p className="text-gray-600">
                Mit Herzblut und Engagement für jeden einzelnen Kunden da
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Überzeugen Sie sich selbst
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Besuchen Sie uns in der Pirckheimerstraße 68 und erleben Sie professionelles Handwerk und herzliche Atmosphäre.
          </p>
          <a href="tel:09116608295" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Jetzt Termin vereinbaren
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;