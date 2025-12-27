import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const Reviews = () => {
  const ratings = [
    {
      platform: 'Google',
      rating: 4.6,
      totalReviews: 94,
      color: 'bg-blue-500'
    },
    {
      platform: 'FirmenABC Deutschland',
      rating: 4.9,
      totalReviews: 38,
      color: 'bg-green-500'
    }
  ];

  const testimonials = [
    {
      name: 'Michael S.',
      rating: 5,
      text: 'Sehr professioneller Service und freundliches Personal. Ich komme seit Jahren hierher und war noch nie enttäuscht. Die Haarschnitte sind immer perfekt!',
      date: '2 Wochen her'
    },
    {
      name: 'Anna K.',
      rating: 5,
      text: 'Endlich einen Friseur gefunden, der genau weiß, was er tut! Sehr zufrieden mit meinem neuen Schnitt. Die Beratung war ausgezeichnet.',
      date: '1 Monat her'
    },
    {
      name: 'Thomas B.',
      rating: 5,
      text: 'Top Qualität zu fairen Preisen. Schnelle Terminvergabe und keine langen Wartezeiten. Absolut empfehlenswert!',
      date: '3 Wochen her'
    },
    {
      name: 'Sandra M.',
      rating: 5,
      text: 'Sehr angenehme Atmosphäre und kompetente Beratung. Man fühlt sich hier wirklich wohl. Die Stylings sind immer modern und perfekt umgesetzt.',
      date: '1 Monat her'
    },
    {
      name: 'Daniel R.',
      rating: 4,
      text: 'Guter Haarschnitt und freundlicher Service. Das Team nimmt sich Zeit und geht auf individuelle Wünsche ein. Komme gerne wieder!',
      date: '2 Monate her'
    },
    {
      name: 'Julia F.',
      rating: 5,
      text: 'Beste Friseurerfahrung in Nürnberg! Professionell, freundlich und immer ein tolles Ergebnis. Kann ich nur weiterempfehlen.',
      date: '3 Wochen her'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">Bewertungen</span> & Feedback
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sehen Sie, was unsere zufriedenen Kunden über uns sagen
            </p>
          </div>
        </div>
      </section>

      {/* Ratings Overview */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {ratings.map((rating, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${rating.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Star className="w-8 h-8 text-white fill-current" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{rating.platform}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-5xl font-bold text-red-600">{rating.rating}</span>
                    <div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(rating.rating)
                                ? 'text-red-600 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">von 5 Sternen</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Basierend auf <span className="font-semibold">{rating.totalReviews} Rezensionen</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Overall Summary */}
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl shadow-lg">
              <p className="text-2xl font-bold mb-1">Exzellente Bewertungen</p>
              <p className="text-sm">Über 130 positive Kundenbewertungen</p>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Was unsere Kunden sagen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-red-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.date}</p>
                      </div>
                      <Quote className="w-8 h-8 text-red-500 opacity-50" />
                    </div>
                    <div className="flex space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? 'text-red-600 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Werden Sie Teil unserer zufriedenen Kunden
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Überzeugen Sie sich selbst von unserer Qualität und Professionalität.
          </p>
          <a href="tel:09116608295" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Jetzt Termin vereinbaren
          </a>
        </div>
      </section>
    </div>
  );
};

export default Reviews;