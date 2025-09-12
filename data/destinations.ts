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
    image: 'https://images.pexels.com/photos/3974036/pexels-photo-3974036.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        image: 'https://images.pexels.com/photos/14374647/pexels-photo-14374647.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'pahalgam',
        name: 'Pahalgam',
        description: 'Valley of Shepherds with scenic beauty',
        image: 'https://images.pexels.com/photos/7562495/pexels-photo-7562495.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'sonamarg',
        name: 'Sonamarg',
        description: 'Meadow of Gold with glaciers and lakes',
        image: 'https://images.pexels.com/photos/2439787/pexels-photo-2439787.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    description: 'Land of Gods with majestic Himalayas, adventure sports, and spiritual retreats',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww',
    type: 'domestic',
    highlights: ['Manali', 'Shimla', 'Dharamshala', 'Spiti Valley'],
    places: [
      {
        id: 'manali',
        name: 'Manali',
        description: 'Adventure hub with snow activities and scenic beauty',
        image: 'https://images.pexels.com/photos/939714/pexels-photo-939714.jpeg?auto=compress&cs=tinysrgb&w=800'
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
        image: 'https://images.pexels.com/photos/26382825/pexels-photo-26382825.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'spiti',
        name: 'Spiti Valley',
        description: 'Cold desert mountain valley with Buddhist monasteries',
        image: 'https://images.pexels.com/photos/31756521/pexels-photo-31756521.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    description: 'Beach paradise with Portuguese heritage, vibrant nightlife, and water sports',
    image: 'https://images.pexels.com/photos/4428289/pexels-photo-4428289.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'domestic',
    highlights: ['Beaches', 'Churches', 'Water Sports', 'Nightlife'],
    places: [
      {
        id: 'north-goa',
        name: 'North Goa',
        description: 'Vibrant beaches with happening nightlife',
        image: 'https://images.pexels.com/photos/33788031/pexels-photo-33788031.jpeg?auto=compress&cs=tinysrgb&w=800'
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
        image: 'https://images.pexels.com/photos/6320394/pexels-photo-6320394.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'dudhsagar',
        name: 'Dudhsagar Falls',
        description: 'Spectacular four-tiered waterfall',
        image: 'https://images.pexels.com/photos/1236906/pexels-photo-1236906.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    description: 'Gods Own Country with backwaters, beaches, and ayurvedic wellness',
    image: 'https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/10/kerala-weekend-yaari.jpeg?fit=1280%2C853&ssl=1',
    type: 'domestic',
    highlights: ['Munnar', 'Alleppey', 'Kochi', 'Thekkady'],
    places: [
      {
        id: 'munnar',
        name: 'Munnar',
        description: 'Tea plantations and misty mountains',
        image: 'https://images.pexels.com/photos/13691356/pexels-photo-13691356.jpeg?auto=compress&cs=tinysrgb&w=800'
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
        image: 'https://images.unsplash.com/photo-1602094395895-fb8070114e38?w=800'
      },
      {
        id: 'wayanad',
        name: 'Wayanad',
        description: 'Green paradise with wildlife and waterfalls',
        image: 'https://images.pexels.com/photos/27728557/pexels-photo-27728557.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'thekkady',
        name: 'Thekkady',
        description: 'Wildlife sanctuary with elephant rides and spice plantations',
        image: 'https://images.pexels.com/photos/6444290/pexels-photo-6444290.jpeg?auto=compress&cs=tinysrgb&w=800'
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
        image: 'https://images.pexels.com/photos/33867657/pexels-photo-33867657.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'new-delhi',
        name: 'New Delhi',
        description: 'Modern capital with India Gate and government buildings',
        image: 'https://images.pexels.com/photos/3233266/pexels-photo-3233266.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'connaught-place',
        name: 'Connaught Place',
        description: 'Commercial hub with shopping and dining',
        image: 'https://images.pexels.com/photos/4819654/pexels-photo-4819654.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'qutub-minar',
        name: 'Qutub Minar',
        description: 'UNESCO World Heritage minaret and victory tower built in 1193',
        image: 'https://images.pexels.com/photos/28993608/pexels-photo-28993608.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'humayuns-tomb',
        name: "Humayun's Tomb",
        description: 'Magnificent Mughal architecture and garden tomb complex',
        image: 'https://images.pexels.com/photos/2046487/pexels-photo-2046487.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'red-fort',
        name: 'Red Fort',
        description: 'Iconic Mughal fortress and symbol of India\'s independence',
        image: 'https://images.pexels.com/photos/33597243/pexels-photo-33597243.jpeg?auto=compress&cs=tinysrgb&w=800'
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
        image: 'https://images.pexels.com/photos/8034398/pexels-photo-8034398.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'marine-drive',
        name: 'Marine Drive',
        description: 'Queen\'s Necklace with stunning sea views',
        image: 'https://images.pexels.com/photos/17929155/pexels-photo-17929155.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'haji-ali-dargah',
        name: 'Haji Ali Dargah',
        description: 'Iconic mosque and dargah located on an islet in the Arabian Sea',
        image: 'https://t3.ftcdn.net/jpg/01/90/18/18/360_F_190181832_uYnioyUDNzdtsTzA4Vk63oE20O3OcifM.webp'
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
    places: [
      {
        id: 'sinhagad-fort',
        name: 'Sinhagad Fort',
        description: 'Ancient hill fortress with panoramic views and trekking trails',
        image: 'https://images.pexels.com/photos/11314994/pexels-photo-11314994.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
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
        image: 'https://images.pexels.com/photos/19595163/pexels-photo-19595163.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'golconda',
        name: 'Golconda Fort',
        description: 'Historic fortress with acoustic marvels',
        image: 'https://images.pexels.com/photos/29221924/pexels-photo-29221924.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'salar-jung-museum',
        name: 'Salar Jung Museum',
        description: 'One of India\'s largest museums with rich cultural artifacts',
        image: 'https://images.pexels.com/photos/1365225/pexels-photo-1365225.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    places: [
      {
        id: 'marina-beach',
        name: 'Marina Beach',
        description: 'India\'s longest urban beach with vibrant local life',
        image: 'https://images.pexels.com/photos/12125084/pexels-photo-12125084.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'fort-st-george',
        name: 'Fort Saint George',
        description: 'First British fortress in India with museum and St. Mary\'s Church',
        image: 'https://images.pexels.com/photos/31612560/pexels-photo-31612560.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'santhome-cathedral',
        name: 'Santhome Cathedral Basilica',
        description: 'Neo-Gothic cathedral built over St. Thomas the Apostle\'s tomb',
        image: 'https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
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
        image: 'https://images.pexels.com/photos/33824432/pexels-photo-33824432.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'bangalore-palace',
        name: 'Bangalore Palace',
        description: 'Tudor-style palace with royal heritage',
        image: 'https://images.pexels.com/photos/23973679/pexels-photo-23973679.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    highlights: ['Jaipur', 'Udaipur', 'Jaisalmer', 'Mount Abu'],
    places: [
      {
        id: 'jaipur',
        name: 'Jaipur',
        description: 'Pink City with palaces, forts and vibrant culture',
        image: 'https://images.pexels.com/photos/784885/pexels-photo-784885.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'udaipur',
        name: 'Udaipur',
        description: 'City of Lakes with romantic palaces and scenic beauty',
        image: 'https://images.pexels.com/photos/18526644/pexels-photo-18526644.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'jaisalmer',
        name: 'Jaisalmer',
        description: 'Golden City with desert safaris and sand dunes',
        image: 'https://images.pexels.com/photos/31648803/pexels-photo-31648803.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'mount-abu',
        name: 'Mount Abu',
        description: 'Hill station with cool climate and Dilwara Temples',
        image: 'https://images.pexels.com/photos/12080704/pexels-photo-12080704.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'jawai',
        name: 'Jawai',
        description: 'Leopard hills with wildlife safaris and granite rocks',
        image: 'https://images.pexels.com/photos/30788733/pexels-photo-30788733.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    id: 'lucknow',
    name: 'Lucknow',
    description: 'City of Nawabs - Mughal heritage with refined culture and cuisine',
    image: 'https://images.pexels.com/photos/33798560/pexels-photo-33798560.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'domestic',
    highlights: ['Bara Imambara', 'Chota Imambara', 'Rumi Darwaza', 'Hazratganj'],
    places: [
      {
        id: 'bara-imambara',
        name: 'Bara Imambara',
        description: 'Architectural marvel with mysterious labyrinth',
        image: 'https://images.pexels.com/photos/18479867/pexels-photo-18479867.jpeg?auto=compress&cs=tinysrgb&w=800'
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
        image: 'https://images.pexels.com/photos/23973679/pexels-photo-23973679.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    description: 'Ancient ghats, spiritual experiences, rich culture, and timeless traditions',
    image: 'https://images.pexels.com/photos/8112552/pexels-photo-8112552.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'domestic',
    highlights: ['Kashi Vishwanath Temple', 'Dashashwamedh Ghat', 'Sarnath', 'Ganga Aarti'],
    places: [
      {
        id: 'kashi-vishwanath',
        name: 'Kashi Vishwanath Temple',
        description: 'One of the most sacred Hindu temples dedicated to Lord Shiva',
        image: 'https://images.pexels.com/photos/30854355/pexels-photo-30854355.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'dashashwamedh-ghat',
        name: 'Dashashwamedh Ghat',
        description: 'Main ghat famous for the spectacular Ganga Aarti ceremony every evening',
        image: 'https://images.pexels.com/photos/18435639/pexels-photo-18435639.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'sarnath',
        name: 'Sarnath',
        description: 'Ancient Buddhist site where Buddha gave his first sermon, featuring the Dhamek Stupa',
        image: 'https://images.pexels.com/photos/32814738/pexels-photo-32814738.jpeg?auto=compress&cs=tinysrgb&w=800'
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
        image: 'https://images.pexels.com/photos/33861338/pexels-photo-33861338.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'neil-island',
        name: 'Neil Island',
        description: 'Tranquil island with coral reefs and natural bridges',
        image: 'https://images.pexels.com/photos/14313849/pexels-photo-14313849.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    image: 'https://images.pexels.com/photos/3037435/pexels-photo-3037435.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'domestic',
    highlights: ['Gangtok', 'Tsomgo Lake', 'Nathula Pass', 'Pelling'],
    places: [
      {
        id: 'gangtok',
        name: 'Gangtok',
        description: 'Capital city with monasteries and mountain views',
        image: 'https://images.pexels.com/photos/6592571/pexels-photo-6592571.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'tsomgo-lake',
        name: 'Tsomgo Lake',
        description: 'Glacial lake with stunning reflections and yak rides',
        image: 'https://images.pexels.com/photos/11752865/pexels-photo-11752865.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'pelling',
        name: 'Pelling',
        description: 'Hill station with Kanchenjunga views and skywalk',
        image: 'https://images.pexels.com/photos/13524697/pexels-photo-13524697.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    description: 'Land of High Passes with rugged landscapes, Buddhist monasteries, and pristine beauty',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
    type: 'domestic',
    highlights: ['Pangong Lake', 'Nubra Valley', 'Magnetic Hills', 'Tso Moriri'],
    places: [
      {
        id: 'pangong-lake',
        name: 'Pangong Lake',
        description: 'Crystal blue lake at high altitude with changing colors',
        image: 'https://images.pexels.com/photos/33792550/pexels-photo-33792550.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'nubra-valley',
        name: 'Nubra Valley',
        description: 'Valley of flowers with sand dunes and double-humped camels',
        image: 'https://images.pexels.com/photos/2735739/pexels-photo-2735739.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'magnetic-hills',
        name: 'Magnetic Hills',
        description: 'Gravity-defying hills with optical illusion phenomenon',
        image: 'https://images.pexels.com/photos/14095829/pexels-photo-14095829.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'tso-moriri',
        name: 'Tso Moriri Lake',
        description: 'High altitude lake surrounded by snow-capped mountains',
        image: 'https://images.pexels.com/photos/5784210/pexels-photo-5784210.jpeg?auto=compress&cs=tinysrgb&w=800'
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
        image: 'https://images.pexels.com/photos/1724926/pexels-photo-1724926.jpeg?auto=compress&cs=tinysrgb&w=800'
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
        image: 'https://images.pexels.com/photos/870799/pexels-photo-870799.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'krakow',
        name: 'Krakow, Poland',
        description: 'Medieval square, Jewish quarter, and rich history',
        image: 'https://images.pexels.com/photos/1674432/pexels-photo-1674432.jpeg?auto=compress&cs=tinysrgb&w=800'
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
        image: 'https://images.unsplash.com/photo-1618811308896-d279d72fdf4d?w=800'
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