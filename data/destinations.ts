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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMav2U0VD558HPbl7nP4xos_pIpx9Np-3Ig&s',
    type: 'domestic',
    highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
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
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
    type: 'domestic',
    highlights: ['Manali', 'Shimla', 'Dharamshala', 'Spiti Valley'],
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
    image: 'https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/10/kerala-weekend-yaari.jpeg?fit=1280%2C853&ssl=1',
    type: 'domestic',
    highlights: ['Munnar', 'Alleppey', 'Kochi', 'Wayanad'],
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
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    description: 'Land of legends with Rann of Kutch, heritage sites, and wildlife',
    image: 'https://images.unsplash.com/photo-1524492514090-27caa7cf4596?w=800',
    type: 'domestic',
    highlights: ['Rann of Kutch', 'Gir Forest', 'Somnath', 'Dwarka'],
  },
  {
    id: 'delhi',
    name: 'Delhi',
    description: 'Capital city with historic monuments, vibrant markets, and diverse cuisine',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    type: 'domestic',
    highlights: ['Red Fort', 'India Gate', 'Qutub Minar', 'Lotus Temple'],
    places: [
      {
        id: 'old-delhi',
        name: 'Old Delhi',
        description: 'Historic heart with Red Fort and Chandni Chowk',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800'
      },
      {
        id: 'new-delhi',
        name: 'New Delhi',
        description: 'Modern capital with India Gate and government buildings',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800'
      },
      {
        id: 'connaught-place',
        name: 'Connaught Place',
        description: 'Commercial hub with shopping and dining',
        image: 'https://images.unsplash.com/photo-1545126178-862cdb469409?w=800'
      }
    ]
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    description: 'City of Dreams - Financial capital with Bollywood, beaches, and colonial architecture',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800',
    type: 'domestic',
    highlights: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Juhu Beach'],
    places: [
      {
        id: 'gateway-india',
        name: 'Gateway of India',
        description: 'Iconic monument overlooking the Arabian Sea',
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800'
      },
      {
        id: 'marine-drive',
        name: 'Marine Drive',
        description: 'Queen\'s Necklace with stunning sea views',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800'
      }
    ]
  },
  {
    id: 'pune',
    name: 'Pune',
    description: 'Oxford of the East - Educational hub with pleasant weather and IT industry',
    image: 'https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=800',
    type: 'domestic',
    highlights: ['Shaniwar Wada', 'Aga Khan Palace', 'Sinhagad Fort', 'Osho Ashram'],
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    description: 'City of Pearls - Tech hub with historic sites and famous biryani',
    image: 'https://images.unsplash.com/photo-1576906755392-95c8e2280e86?w=800',
    type: 'domestic',
    highlights: ['Charminar', 'Golconda Fort', 'Hussain Sagar', 'Ramoji Film City'],
    places: [
      {
        id: 'charminar',
        name: 'Charminar',
        description: 'Iconic monument and symbol of Hyderabad',
        image: 'https://images.unsplash.com/photo-1584466990234-04e2757d863c?w=800'
      },
      {
        id: 'golconda',
        name: 'Golconda Fort',
        description: 'Historic fortress with acoustic marvels',
        image: 'https://images.unsplash.com/photo-1611664786164-090201f7703f?w=800'
      }
    ]
  },
  {
    id: 'chennai',
    name: 'Chennai',
    description: 'Gateway to South India - Cultural capital with temples, beaches, and classical arts',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
    type: 'domestic',
    highlights: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George', 'Mahabalipuram'],
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    description: 'Silicon Valley of India - IT capital with gardens, breweries, and pleasant climate',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800',
    type: 'domestic',
    highlights: ['Lalbagh Gardens', 'Bangalore Palace', 'Cubbon Park', 'Nandi Hills'],
    places: [
      {
        id: 'lalbagh',
        name: 'Lalbagh Gardens',
        description: 'Historic botanical garden with glass house',
        image: 'https://images.unsplash.com/photo-1580643825938-2adfeb4a5e42?w=800'
      },
      {
        id: 'bangalore-palace',
        name: 'Bangalore Palace',
        description: 'Tudor-style palace with royal heritage',
        image: 'https://images.unsplash.com/photo-1603025832268-1144c06546a9?w=800'
      }
    ]
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    description: 'City of Joy - Cultural capital with colonial heritage, literature, and arts',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800',
    type: 'domestic',
    highlights: ['Victoria Memorial', 'Howrah Bridge', 'Mother Teresa House', 'Indian Museum'],
    places: [
      {
        id: 'victoria-memorial',
        name: 'Victoria Memorial',
        description: 'White marble monument with museum',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800'
      },
      {
        id: 'howrah-bridge',
        name: 'Howrah Bridge',
        description: 'Iconic cantilever bridge over Hooghly river',
        image: 'https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?w=800'
      }
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    description: 'Land of Kings - Royal heritage with magnificent palaces, forts, and desert',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800',
    type: 'domestic',
    highlights: ['Hawa Mahal', 'Amber Fort', 'City Palace', 'Jantar Mantar'],
    places: [
      {
        id: 'hawa-mahal',
        name: 'Hawa Mahal',
        description: 'Palace of Winds with unique facade',
        image: 'https://images.unsplash.com/photo-1524230616393-d494d0a54ca0?w=800'
      },
      {
        id: 'amber-fort',
        name: 'Amber Fort',
        description: 'Hilltop fortress with stunning architecture',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800'
      }
    ]
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    description: 'The Planned City - Modern architecture with gardens and urban design',
    image: 'https://images.unsplash.com/photo-1609751816804-01d704b47e05?w=800',
    type: 'domestic',
    highlights: ['Rock Garden', 'Sukhna Lake', 'Rose Garden', 'Capitol Complex'],
  },
  {
    id: 'bhopal',
    name: 'Bhopal',
    description: 'City of Lakes - Historic sites with natural beauty and cultural heritage',
    image: 'https://images.pexels.com/photos/19160092/pexels-photo-19160092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'domestic',
    highlights: ['Upper Lake', 'Taj-ul-Masajid', 'Van Vihar', 'Bhimbetka Caves'],
  },
  {
    id: 'indore',
    name: 'Indore',
    description: 'Food Capital of India - Commercial hub with street food and palaces',
    image: 'https://images.pexels.com/photos/10928705/pexels-photo-10928705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'domestic',
    highlights: ['Rajwada Palace', 'Lal Bagh Palace', 'Sarafa Bazaar', 'Khajrana Temple'],
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    description: 'Heritage City - UNESCO sites with textile industry and Gujarati culture',
    image: 'https://images.pexels.com/photos/672642/pexels-photo-672642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'domestic',
    highlights: ['Sabarmati Ashram', 'Kankaria Lake', 'Sidi Saiyyed Mosque', 'Adalaj Stepwell'],
    places: [
      {
        id: 'sabarmati-ashram',
        name: 'Sabarmati Ashram',
        description: 'Gandhi\'s historic home and independence movement center',
        image: 'https://images.unsplash.com/photo-1606121210096-fba9ec90054e?w=800'
      }
    ]
  },
  {
    id: 'surat',
    name: 'Surat',
    description: 'Diamond City - Textile and diamond hub with beaches and historic sites',
    image: 'https://images.unsplash.com/photo-1622471778399-037c9e8c77e7?w=800',
    type: 'domestic',
    highlights: ['Dumas Beach', 'Dutch Garden', 'Surat Castle', 'Science Centre'],
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    description: 'City of Nawabs - Mughal heritage with refined culture and cuisine',
    image: 'https://images.unsplash.com/photo-1609349093802-d0fdbc100010?w=800',
    type: 'domestic',
    highlights: ['Bara Imambara', 'Chota Imambara', 'Rumi Darwaza', 'Hazratganj'],
    places: [
      {
        id: 'bara-imambara',
        name: 'Bara Imambara',
        description: 'Architectural marvel with mysterious labyrinth',
        image: 'https://images.unsplash.com/photo-1587295654753-ad7f31a44cee?w=800'
      }
    ]
  },
  {
    id: 'agra',
    name: 'Agra',
    description: 'City of Taj - Home to the symbol of love and Mughal architecture',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800',
    type: 'domestic',
    highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh'],
    places: [
      {
        id: 'taj-mahal',
        name: 'Taj Mahal',
        description: 'Seventh wonder of the world - monument of love',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800'
      },
      {
        id: 'agra-fort',
        name: 'Agra Fort',
        description: 'UNESCO World Heritage Mughal fortress',
        image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=800'
      }
    ]
  },
  {
    id: 'andaman',
    name: 'Andaman & Nicobar',
    description: 'Tropical paradise with pristine beaches, coral reefs, and water sports',
    image: 'https://images.unsplash.com/photo-1621418650709-b5db1b316fd0?w=800',
    type: 'domestic',
    highlights: ['Radhanagar Beach', 'Cellular Jail', 'Ross Island', 'Scuba Diving'],
    places: [
      {
        id: 'havelock',
        name: 'Havelock Island',
        description: 'Paradise island with pristine beaches and diving spots',
        image: 'https://images.unsplash.com/photo-1616892571111-5bb426566317?w=800'
      },
      {
        id: 'neil-island',
        name: 'Neil Island',
        description: 'Tranquil island with coral reefs and natural bridges',
        image: 'https://images.unsplash.com/photo-1582967788606-a171e71080cb?w=800'
      },
      {
        id: 'port-blair',
        name: 'Port Blair',
        description: 'Capital city with historical sites and museums',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?w=800'
      }
    ]
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    description: 'Himalayan state with monasteries, rhododendrons, and mountain views',
    image: 'https://images.unsplash.com/photo-1558437348-ff9c2c117010?w=800',
    type: 'domestic',
    highlights: ['Gangtok', 'Tsomgo Lake', 'Nathula Pass', 'Pelling'],
    places: [
      {
        id: 'gangtok',
        name: 'Gangtok',
        description: 'Capital city with monasteries and mountain views',
        image: 'https://images.unsplash.com/photo-1569949237615-3304befcf5d1?w=800'
      },
      {
        id: 'tsomgo-lake',
        name: 'Tsomgo Lake',
        description: 'Glacial lake with stunning reflections and yak rides',
        image: 'https://images.unsplash.com/photo-1626621331169-fd42e36c8f36?w=800'
      },
      {
        id: 'pelling',
        name: 'Pelling',
        description: 'Hill station with Kanchenjunga views and skywalk',
        image: 'https://images.unsplash.com/photo-1566205246638-fc3c82368945?w=800'
      }
    ]
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
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800'
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
        image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800'
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
    highlights: ['Paris', 'Rome', 'London', 'Switzerland', 'Amsterdam', 'Barcelona', 'Prague', 'Vienna'],
    places: [
      {
        id: 'paris',
        name: 'Paris, France',
        description: 'City of Love with Eiffel Tower, Louvre, and charming cafés',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800'
      },
      {
        id: 'rome',
        name: 'Rome, Italy',
        description: 'Eternal City with Colosseum, Vatican, and ancient ruins',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800'
      },
      {
        id: 'london',
        name: 'London, UK',
        description: 'Royal capital with Big Ben, Tower Bridge, and Buckingham Palace',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800'
      },
      {
        id: 'switzerland',
        name: 'Switzerland',
        description: 'Alpine paradise with Matterhorn, Jungfrau, and pristine lakes',
        image: 'https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?w=800'
      },
      {
        id: 'santorini',
        name: 'Santorini, Greece',
        description: 'Stunning sunsets, white-washed buildings, and blue-domed churches',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800'
      },
      {
        id: 'barcelona',
        name: 'Barcelona, Spain',
        description: 'Gaudi architecture, Las Ramblas, and Mediterranean beaches',
        image: 'https://images.unsplash.com/photo-1543785734-4b6e564642f8?w=800'
      },
      {
        id: 'amsterdam',
        name: 'Amsterdam, Netherlands',
        description: 'Canals, tulips, museums, and charming bicycle culture',
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800'
      },
      {
        id: 'prague',
        name: 'Prague, Czech Republic',
        description: 'Fairy-tale city with medieval architecture and Charles Bridge',
        image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800'
      },
      {
        id: 'vienna',
        name: 'Vienna, Austria',
        description: 'Imperial palaces, classical music, and coffee house culture',
        image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800'
      },
      {
        id: 'venice',
        name: 'Venice, Italy',
        description: 'Romantic canals, gondolas, and Renaissance architecture',
        image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800'
      },
      {
        id: 'budapest',
        name: 'Budapest, Hungary',
        description: 'Thermal baths, Danube views, and grand architecture',
        image: 'https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=800'
      },
      {
        id: 'lisbon',
        name: 'Lisbon, Portugal',
        description: 'Colorful tiles, historic trams, and hilltop views',
        image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800'
      },
      {
        id: 'dublin',
        name: 'Dublin, Ireland',
        description: 'Literary heritage, Guinness brewery, and Irish charm',
        image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800'
      },
      {
        id: 'edinburgh',
        name: 'Edinburgh, Scotland',
        description: 'Medieval castle, Royal Mile, and Scottish heritage',
        image: 'https://images.unsplash.com/photo-1551871812-10ecc21ffa2f?w=800'
      },
      {
        id: 'copenhagen',
        name: 'Copenhagen, Denmark',
        description: 'Little Mermaid, colorful Nyhavn, and Nordic design',
        image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800'
      },
      {
        id: 'stockholm',
        name: 'Stockholm, Sweden',
        description: 'Old Town Gamla Stan, Nobel Museum, and archipelago',
        image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800'
      },
      {
        id: 'oslo',
        name: 'Oslo, Norway',
        description: 'Fjords, Viking ships, and modern Scandinavian culture',
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800'
      },
      {
        id: 'reykjavik',
        name: 'Reykjavik, Iceland',
        description: 'Northern lights, Blue Lagoon, and dramatic landscapes',
        image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800'
      },
      {
        id: 'berlin',
        name: 'Berlin, Germany',
        description: 'Historical sites, vibrant nightlife, and cultural diversity',
        image: 'https://images.unsplash.com/photo-1546726747-421c6d69c929?w=800'
      },
      {
        id: 'munich',
        name: 'Munich, Germany',
        description: 'Oktoberfest, beer gardens, and Bavarian culture',
        image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800'
      },
      {
        id: 'brussels',
        name: 'Brussels, Belgium',
        description: 'Grand Place, Belgian chocolates, and EU headquarters',
        image: 'https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?w=800'
      },
      {
        id: 'krakow',
        name: 'Krakow, Poland',
        description: 'Medieval square, Jewish quarter, and rich history',
        image: 'https://images.unsplash.com/photo-1559553156-2e97137af16f?w=800'
      },
      {
        id: 'florence',
        name: 'Florence, Italy',
        description: 'Renaissance art, Duomo cathedral, and Tuscan cuisine',
        image: 'https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=800'
      },
      {
        id: 'madrid',
        name: 'Madrid, Spain',
        description: 'Royal Palace, Prado Museum, and vibrant tapas culture',
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800'
      },
      {
        id: 'monaco',
        name: 'Monaco',
        description: 'Luxury casinos, yacht harbor, and Formula 1 Grand Prix',
        image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=800'
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
    highlights: ['Kenya Safari', 'South Africa', 'Morocco', 'Cape Town'],
    places: [
      {
        id: 'kenya-safari',
        name: 'Kenya Safari',
        description: 'Experience the Great Migration and Big Five',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800'
      },
      {
        id: 'cape-town',
        name: 'Cape Town',
        description: 'Where mountains meet the ocean in spectacular fashion',
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800'
      },
      {
        id: 'morocco',
        name: 'Morocco',
        description: 'Exotic souks, desert adventures, and imperial cities',
        image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800'
      },
      {
        id: 'victoria-falls',
        name: 'Victoria Falls',
        description: 'The smoke that thunders - world\'s largest waterfall',
        image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=800'
      },
      {
        id: 'serengeti',
        name: 'Serengeti',
        description: 'Endless plains and incredible wildlife encounters',
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800'
      }
    ]
  },
  {
    id: 'americas',
    name: 'Americas',
    description: 'From New York skylines to Amazon rainforests',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800',
    type: 'international',
    region: 'americas',
    highlights: ['USA', 'Canada', 'Brazil', 'Peru', 'Amazon Forest'],
    places: [
      {
        id: 'new-york',
        name: 'New York City',
        description: 'The city that never sleeps with iconic landmarks',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800'
      },
      {
        id: 'amazon-forest',
        name: 'Amazon Rainforest',
        description: 'The lungs of Earth with incredible biodiversity',
        image: 'https://images.unsplash.com/photo-1584134239909-eb4800257d6a?w=800'
      },
      {
        id: 'machu-picchu',
        name: 'Machu Picchu',
        description: 'Lost city of the Incas in the Peruvian Andes',
        image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800'
      },
      {
        id: 'niagara-falls',
        name: 'Niagara Falls',
        description: 'Spectacular waterfalls on the US-Canada border',
        image: 'https://images.unsplash.com/photo-1533094602577-198d3beab8ea?w=800'
      },
      {
        id: 'patagonia',
        name: 'Patagonia',
        description: 'Dramatic landscapes at the end of the world',
        image: 'https://images.unsplash.com/photo-1545559054-d037389f36f7?w=800'
      },
      {
        id: 'cancun',
        name: 'Cancun',
        description: 'Caribbean beaches and Mayan ruins',
        image: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=800'
      }
    ]
  }
];

export const getAllDestinations = () => [...domesticDestinations, ...internationalDestinations];
export const getDomesticDestinations = () => domesticDestinations;
export const getInternationalDestinations = () => internationalDestinations;
export const getDestinationById = (id: string) => getAllDestinations().find(d => d.id === id);