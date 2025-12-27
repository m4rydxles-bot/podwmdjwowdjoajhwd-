import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">Kontakt</span> & Anfahrt
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Besuchen Sie uns oder vereinbaren Sie telefonisch einen Termin
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <Card className="border-2 border-gray-100 hover:border-red-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Telefon</h3>
                <a href="tel:09116608295" className="text-lg text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium">
                  0911 6608295
                </a>
                <p className="text-sm text-gray-500 mt-2">Rufen Sie uns an</p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="border-2 border-gray-100 hover:border-red-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Adresse</h3>
                <p className="text-lg text-gray-600 font-medium">
                  Pirckheimerstraße 68<br />
                  90408 Nürnberg
                </p>
                <a href="https://www.google.com/maps/search/?api=1&query=Pirckheimerstra%C3%9Fe+68,+90408+N%C3%BCrnberg" target="_blank" rel="noopener noreferrer" className="text-sm text-red-600 hover:text-red-700 mt-2 inline-block transition-colors duration-300">
                  Route anzeigen →
                </a>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-2 border-gray-100 hover:border-red-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Öffnungszeiten</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Dienstag</span>
                    <span className="text-gray-900 font-semibold">09:00-19:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Mittwoch</span>
                    <span className="text-gray-900 font-semibold">09:00-19:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Donnerstag</span>
                    <span className="text-gray-900 font-semibold">09:00-19:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Freitag</span>
                    <span className="text-gray-900 font-semibold">09:00-19:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Samstag</span>
                    <span className="text-gray-900 font-semibold">09:00-16:00</span>
                  </div>
                  <div className="flex justify-between items-center opacity-60">
                    <span className="text-gray-600 font-medium">Sonntag</span>
                    <span className="text-gray-400">Geschlossen</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Anfahrt</h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.8493756!2d11.0653!3d49.4621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f57a7b4a4a7b7%3A0x1!2sPirckheimerstra%C3%9Fe%2068%2C%2090408%20N%C3%BCrnberg!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Friseur Saloon Maakaz Standort"
              ></iframe>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Parkplätze in der Umgebung verfügbar | Gute Anbindung an öffentliche Verkehrsmittel
            </p>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Terminvereinbarung</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Sie können gerne ohne Termin vorbeikommen oder im Voraus anrufen, um Wartezeiten zu vermeiden. Unser freundliches Team steht Ihnen während der Öffnungszeiten zur Verfügung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:09116608295" className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Pirckheimerstra%C3%9Fe+68,+90408+N%C3%BCrnberg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <MapPin className="w-5 h-5 mr-2" />
                  Route planen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;