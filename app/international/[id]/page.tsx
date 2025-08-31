import Image from 'next/image';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import PlaceCard from '@/components/cards/PlaceCard';
import { getDestinationById, internationalDestinations } from '@/data/destinations';
import ClientMotion from './ClientMotion';

export async function generateStaticParams() {
  return internationalDestinations.map((destination) => ({
    id: destination.id,
  }));
}

export default async function InternationalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const destination = getDestinationById(id);

  if (!destination) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
          <Link href="/international" className="text-blue-600 hover:underline">
            Back to International Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <ClientMotion>
        <section className="relative h-[60vh] min-h-[400px]">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container mx-auto">
              <Link
                href="/international"
                className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Destinations</span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {destination.name}
              </h1>
              
              <p className="text-xl md:text-2xl max-w-3xl">
                {destination.description}
              </p>
            </div>
          </div>
        </section>

        {destination.highlights && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div>
                <h2 className="text-3xl font-bold mb-6">Key Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-3"
                    >
                      <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {destination.places && destination.places.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Popular Places in{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {destination.name}
                  </span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {destination.places.map((place, index) => (
                    <PlaceCard key={place.id} place={place} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {destination.price && (
          <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-4">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Ready to Explore {destination.name}?</h3>
                <p className="text-3xl font-bold mb-6">{destination.price}</p>
                <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                  Book Your Trip
                </button>
              </div>
            </div>
          </section>
        )}
      </ClientMotion>
    </div>
  );
}