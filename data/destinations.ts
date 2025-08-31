export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  type: 'domestic' | 'international';
  region?: string;
  places?: Place[];
  highlights?: string[];
  price?: string;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const domesticDestinations: Destination[] = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    description: 'Paradise on Earth with snow-capped mountains, pristine lakes, and beautiful valleys',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800',
    type: 'domestic',
    highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
    price: 'Starting from ₹25,000',
    places: [
      {
        id: 'srinagar',
        name: 'Srinagar',
        description: 'The summer capital with beautiful gardens and houseboats',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800'
      },
      {
        id: 'gulmarg',
        name: 'Gulmarg',
        description: 'Skiing paradise and meadow of flowers',
        image: 'https://images.unsplash.com/photo-1614116685364-cf0ed36e9d2b?w=800'
      },
      {
        id: 'pahalgam',
        name: 'Pahalgam',
        description: 'Valley of Shepherds with scenic beauty',
        image: 'https://images.unsplash.com/photo-1598977123118-4e30ba0c7ea8?w=800'
      },
      {
        id: 'sonamarg',
        name: 'Sonamarg',
        description: 'Meadow of Gold with glaciers and lakes',
        image: 'https://images.unsplash.com/photo-1581791532176-afcef38f17a0?w=800'
      }
    ]
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    description: 'Land of Gods with majestic Himalayas, adventure sports, and spiritual retreats',
    image: 'https://images.unsplash.com/photo-1597167241121-16d0668d8ce0?w=800',
    type: 'domestic',
    highlights: ['Manali', 'Shimla', 'Dharamshala', 'Spiti Valley'],
    price: 'Starting from ₹20,000',
    places: [
      {
        id: 'manali',
        name: 'Manali',
        description: 'Adventure hub with snow activities and scenic beauty',
        image: 'https://images.unsplash.com/photo-1593181629936-7f555869c7b0?w=800'
      },
      {
        id: 'shimla',
        name: 'Shimla',
        description: 'Queen of Hills with colonial architecture',
        image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800'
      },
      {
        id: 'dharamshala',
        name: 'Dharamshala',
        description: 'Home of Dalai Lama with Tibetan culture',
        image: 'https://images.unsplash.com/photo-1585134040852-dc8665f84e39?w=800'
      },
      {
        id: 'spiti',
        name: 'Spiti Valley',
        description: 'Cold desert mountain valley with Buddhist monasteries',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415c76c65?w=800'
      }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    description: 'Gods Own Country with backwaters, beaches, and ayurvedic wellness',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc869928?w=800',
    type: 'domestic',
    highlights: ['Munnar', 'Alleppey', 'Kochi', 'Wayanad'],
    price: 'Starting from ₹18,000',
    places: [
      {
        id: 'munnar',
        name: 'Munnar',
        description: 'Tea plantations and misty mountains',
        image: 'https://images.unsplash.com/photo-1596392927852-2a18c336d911?w=800'
      },
      {
        id: 'alleppey',
        name: 'Alleppey',
        description: 'Venice of the East with backwaters',
        image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800'
      },
      {
        id: 'kochi',
        name: 'Kochi',
        description: 'Queen of Arabian Sea with Chinese fishing nets',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
      },
      {
        id: 'wayanad',
        name: 'Wayanad',
        description: 'Green paradise with wildlife and waterfalls',
        image: 'https://images.unsplash.com/photo-1596123068616-9057516a0831?w=800'
      }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    description: 'Beach paradise with Portuguese heritage, vibrant nightlife, and water sports',
    image: 'https://images.unsplash.com/photo-1587922347119-f6beb6f18d5f?w=800',
    type: 'domestic',
    highlights: ['Beaches', 'Churches', 'Water Sports', 'Nightlife'],
    price: 'Starting from ₹15,000',
    places: [
      {
        id: 'north-goa',
        name: 'North Goa',
        description: 'Vibrant beaches with happening nightlife',
        image: 'https://images.unsplash.com/photo-1614082730020-5e4b01ba1ac3?w=800'
      },
      {
        id: 'south-goa',
        name: 'South Goa',
        description: 'Serene beaches with luxury resorts',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800'
      },
      {
        id: 'old-goa',
        name: 'Old Goa',
        description: 'UNESCO heritage churches and monuments',
        image: 'https://images.unsplash.com/photo-1587974928054-e80ec8a0d7f1?w=800'
      },
      {
        id: 'dudhsagar',
        name: 'Dudhsagar Falls',
        description: 'Spectacular four-tiered waterfall',
        image: 'https://images.unsplash.com/photo-1626196089187-85e80a24aa9a?w=800'
      }
    ]
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    description: 'Devbhoomi with spiritual sites, hill stations, and adventure activities',
    image: 'https://images.unsplash.com/photo-1609920658632-31b2a4d2b913?w=800',
    type: 'domestic',
    highlights: ['Rishikesh', 'Mussoorie', 'Nainital', 'Jim Corbett'],
    price: 'Starting from ₹22,000'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    description: 'Land of legends with Rann of Kutch, heritage sites, and wildlife',
    image: 'https://images.unsplash.com/photo-1524492514090-27caa7cf4596?w=800',
    type: 'domestic',
    highlights: ['Rann of Kutch', 'Gir Forest', 'Somnath', 'Dwarka'],
    price: 'Starting from ₹16,000'
  }
];

export const internationalDestinations: Destination[] = [
  {
    id: 'asia',
    name: 'Asia',
    description: 'Diverse cultures, ancient temples, modern cities, and tropical beaches',
    image: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=800',
    type: 'international',
    region: 'asia',
    highlights: ['Thailand', 'Singapore', 'Bali', 'Dubai'],
    places: [
      {
        id: 'thailand',
        name: 'Thailand',
        description: 'Land of Smiles with beaches, temples, and street food',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800'
      },
      {
        id: 'singapore',
        name: 'Singapore',
        description: 'Modern city-state with Gardens by the Bay',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800'
      },
      {
        id: 'bali',
        name: 'Bali, Indonesia',
        description: 'Island of Gods with beaches and rice terraces',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800'
      },
      {
        id: 'dubai',
        name: 'Dubai, UAE',
        description: 'City of Gold with modern architecture',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
      },
      {
        id: 'maldives',
        name: 'Maldives',
        description: 'Tropical paradise with overwater villas',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800'
      },
      {
        id: 'vietnam',
        name: 'Vietnam',
        description: 'Ha Long Bay and rich cultural heritage',
        image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800'
      }
    ]
  },
  {
    id: 'europe',
    name: 'Europe',
    description: 'Historical monuments, art museums, scenic countrysides, and romantic cities',
    image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?w=800',
    type: 'international',
    region: 'europe',
    highlights: ['Paris', 'Rome', 'London', 'Switzerland'],
    places: [
      {
        id: 'paris',
        name: 'Paris, France',
        description: 'City of Love with Eiffel Tower',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800'
      },
      {
        id: 'rome',
        name: 'Rome, Italy',
        description: 'Eternal City with ancient history',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800'
      },
      {
        id: 'london',
        name: 'London, UK',
        description: 'Royal capital with Big Ben',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800'
      },
      {
        id: 'switzerland',
        name: 'Switzerland',
        description: 'Alpine paradise with mountains and lakes',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800'
      },
      {
        id: 'greece',
        name: 'Greece',
        description: 'Ancient civilization and island hopping',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800'
      },
      {
        id: 'spain',
        name: 'Spain',
        description: 'Flamenco, beaches, and architecture',
        image: 'https://images.unsplash.com/photo-1543785734-4b6e564642f8?w=800'
      }
    ]
  },
  {
    id: 'africa',
    name: 'Africa',
    description: 'Wildlife safaris, ancient pyramids, and stunning landscapes',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
    type: 'international',
    region: 'africa',
    highlights: ['Kenya Safari', 'Egypt Pyramids', 'South Africa', 'Morocco']
  },
  {
    id: 'americas',
    name: 'Americas',
    description: 'From New York skylines to Amazon rainforests',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800',
    type: 'international',
    region: 'americas',
    highlights: ['USA', 'Canada', 'Brazil', 'Peru']
  }
];

export const getAllDestinations = () => [...domesticDestinations, ...internationalDestinations];
export const getDomesticDestinations = () => domesticDestinations;
export const getInternationalDestinations = () => internationalDestinations;
export const getDestinationById = (id: string) => getAllDestinations().find(d => d.id === id);