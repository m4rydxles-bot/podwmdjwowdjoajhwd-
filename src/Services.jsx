import React from 'react';
import { Scissors, Sparkles, Palette, Wind } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Herrenhaarschnitte',
      description: 'Klassische und moderne Herrenschnitte, präzise ausgeführt von erfahrenen Profis',
      features: [
        'Klassische Herrenschnitte',
        'Moderne Fades und Undercuts',
        'Bart-Styling und -Pflege',
        'Konturen und Finishing'
      ]
    },
    {
      icon: Sparkles,
      title: 'Damenhaarschnitte',
      description: 'Individuelle Schnitte und Styles für jede Haarlänge und jeden Typ',
      features: [
        'Langhaarschnitte',
        'Bob und Kurzhaarschnitte',
        'Stufenschnitte',
        'Pony-Schnitte und Styling'
      ]
    },
    {
      icon: Palette,
      title: 'Styling & Pflege',
      description: 'Professionelle Stylings und Pflegebehandlungen für gesundes, glänzendes Haar',
      features: [
        'Föhnen und Styling',
        'Haarpflege-Behandlungen',
        'Kopfhautmassage',
        'Styling für besondere Anlässe'
      ]
    },
    {
      icon: Wind,
      title: 'Modern & Klassisch',
      description: 'Zeitlose Klassiker und aktuelle Trends – perfekt auf Sie abgestimmt',
      features: [
        'Trendige Haarschnitte',
        'Klassische Styles',
        'Individuelle Beratung',
        'Typgerechte Empfehlungen'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Unsere <span className="text-red-600">Leistungen</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Von klassischen Schnitten bis zu modernen Trends – wir bieten professionelle Friseurdienstleistungen für Damen und Herren
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 border-gray-100 hover:border-red-500 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Qualität und Präzision in jedem Schnitt
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Bei Friseur Saloon Maakaz verwenden wir ausschließlich hochwertige Produkte und modernste Techniken. Jeder Haarschnitt wird mit größter Sorgfalt und Präzision ausgeführt. Unser Team bildet sich regelmäßig fort, um Ihnen stets die besten und aktuellsten Friseur-Dienstleistungen anbieten zu können.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Egal ob Sie einen neuen Look ausprobieren oder Ihren bewährten Style pflegen möchten – wir beraten Sie gerne individuell und finden gemeinsam die perfekte Lösung für Ihren Typ.
              </p>
            </div>
            <div>
              <img
                src="https://customer-assets.emergentagent.com/job_hair-pro-maakaz/artifacts/evkimxww_image.png"
                alt="Maakaz Hair Professional Service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für Ihren neuen Look?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Vereinbaren Sie noch heute einen Termin und lassen Sie sich von unserer Professionalität überzeugen.
          </p>
          <a href="tel:09116608295" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Jetzt anrufen: 0911 6608295
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;