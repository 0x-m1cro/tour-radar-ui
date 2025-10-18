export interface Tour {
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  durationDays: number;
  price: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  operator: string;
  category: string;
  description: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  maxGroupSize: number;
  minAge: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';
  physicalRating: number;
}

export const mockTours: Tour[] = [
  {
    id: '1',
    title: 'Incredible India: Golden Triangle Adventure',
    destination: 'India',
    country: 'India',
    duration: '8 Days',
    durationDays: 8,
    price: 1299,
    rating: 4.8,
    reviews: 342,
    imageUrl: '/tours/india.jpg',
    operator: 'Asian Adventures',
    category: 'Cultural',
    description: 'Explore the iconic cities of Delhi, Agra, and Jaipur on this classic Golden Triangle tour. Experience the rich culture, stunning architecture, and vibrant colors of India.',
    highlights: [
      'Visit the magnificent Taj Mahal at sunrise',
      'Explore the historic Red Fort in Delhi',
      'Discover the Pink City of Jaipur',
      'Experience local markets and street food',
      'Stay in comfortable heritage hotels',
    ],
    included: [
      '7 nights accommodation',
      'Daily breakfast and 4 dinners',
      'Airport transfers',
      'Professional English-speaking guide',
      'All monument entrance fees',
      'Air-conditioned transportation',
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities',
      'Visa fees',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        description: 'Welcome to India! Transfer to your hotel and evening orientation meeting.',
      },
      {
        day: 2,
        title: 'Delhi City Tour',
        description: 'Full day exploring Old and New Delhi including Red Fort, Jama Masjid, and India Gate.',
      },
      {
        day: 3,
        title: 'Delhi to Agra',
        description: 'Drive to Agra and visit Agra Fort in the afternoon.',
      },
      {
        day: 4,
        title: 'Taj Mahal and Jaipur',
        description: 'Early morning visit to Taj Mahal, then continue to Jaipur.',
      },
      {
        day: 5,
        title: 'Jaipur Exploration',
        description: 'Visit Amber Fort, City Palace, and Hawa Mahal.',
      },
      {
        day: 6,
        title: 'Jaipur to Delhi',
        description: 'Return to Delhi with stops at local villages and markets.',
      },
      {
        day: 7,
        title: 'Free Day in Delhi',
        description: 'Optional activities or shopping in Delhi markets.',
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Transfer to airport for your onward journey.',
      },
    ],
    maxGroupSize: 16,
    minAge: 12,
    difficulty: 'Easy',
    physicalRating: 2,
  },
  {
    id: '2',
    title: 'Machu Picchu & Amazon Rainforest Explorer',
    destination: 'Peru',
    country: 'Peru',
    duration: '12 Days',
    durationDays: 12,
    price: 2499,
    rating: 4.9,
    reviews: 428,
    imageUrl: '/tours/peru.jpg',
    operator: 'South America Explorers',
    category: 'Adventure',
    description: 'Journey through Peru from the ancient ruins of Machu Picchu to the biodiverse Amazon Rainforest. This adventure combines cultural exploration with wildlife encounters.',
    highlights: [
      'Trek to Machu Picchu',
      'Explore the Amazon Rainforest',
      'Visit Lake Titicaca floating islands',
      'Experience local Peruvian cuisine',
      'Wildlife spotting in the jungle',
    ],
    included: [
      '11 nights accommodation',
      'All meals during trek',
      'Professional guides',
      'National park fees',
      'Domestic flights',
      'River cruise in Amazon',
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Additional activities',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Lima',
        description: 'Welcome to Peru! Orientation and city tour.',
      },
      {
        day: 2,
        title: 'Lima to Cusco',
        description: 'Flight to Cusco and acclimatization.',
      },
      {
        day: 3,
        title: 'Sacred Valley',
        description: 'Explore Pisac and Ollantaytambo ruins.',
      },
      {
        day: 4,
        title: 'Machu Picchu',
        description: 'Train to Aguas Calientes and visit Machu Picchu.',
      },
      {
        day: 5,
        title: 'Return to Cusco',
        description: 'Morning at Machu Picchu, return to Cusco.',
      },
      {
        day: 6,
        title: 'Cusco to Puerto Maldonado',
        description: 'Flight to Amazon and boat to lodge.',
      },
      {
        day: 7,
        title: 'Amazon Exploration',
        description: 'Jungle walks and wildlife spotting.',
      },
      {
        day: 8,
        title: 'Amazon Adventures',
        description: 'Canopy walk and night safari.',
      },
      {
        day: 9,
        title: 'Return to Lima',
        description: 'Flight back to Lima.',
      },
      {
        day: 10,
        title: 'Lima to Puno',
        description: 'Journey to Lake Titicaca.',
      },
      {
        day: 11,
        title: 'Lake Titicaca',
        description: 'Visit floating Uros islands.',
      },
      {
        day: 12,
        title: 'Departure',
        description: 'Transfer to airport.',
      },
    ],
    maxGroupSize: 12,
    minAge: 16,
    difficulty: 'Moderate',
    physicalRating: 3,
  },
  {
    id: '3',
    title: 'African Safari: Kenya & Tanzania',
    destination: 'Kenya & Tanzania',
    country: 'Kenya',
    duration: '14 Days',
    durationDays: 14,
    price: 3899,
    rating: 5.0,
    reviews: 567,
    imageUrl: '/tours/africa.jpg',
    operator: 'Safari Adventures Co',
    category: 'Wildlife',
    description: 'Experience the ultimate African safari across Kenya and Tanzania. Witness the Great Migration, spot the Big Five, and immerse yourself in local Maasai culture.',
    highlights: [
      'Witness the Great Migration',
      'Spot the Big Five',
      'Visit Serengeti and Masai Mara',
      'Ngorongoro Crater exploration',
      'Meet Maasai warriors',
    ],
    included: [
      '13 nights accommodation',
      'All meals',
      'Game drives',
      'Professional safari guide',
      'Park fees',
      '4x4 safari vehicle',
    ],
    excluded: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Drinks',
      'Tips',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Nairobi',
        description: 'Welcome to Kenya! Evening briefing.',
      },
      {
        day: 2,
        title: 'Nairobi to Masai Mara',
        description: 'Drive to Masai Mara, afternoon game drive.',
      },
      {
        day: 3,
        title: 'Masai Mara Safari',
        description: 'Full day game drives in the Mara.',
      },
      {
        day: 4,
        title: 'Masai Mara',
        description: 'Morning and evening game drives.',
      },
      {
        day: 5,
        title: 'Lake Nakuru',
        description: 'Transfer to Lake Nakuru for flamingo viewing.',
      },
      {
        day: 6,
        title: 'To Serengeti',
        description: 'Cross into Tanzania, arrive in Serengeti.',
      },
      {
        day: 7,
        title: 'Serengeti Safari',
        description: 'Full day exploring Serengeti.',
      },
      {
        day: 8,
        title: 'Serengeti',
        description: 'More game drives in different areas.',
      },
      {
        day: 9,
        title: 'Ngorongoro Crater',
        description: 'Drive to Ngorongoro Conservation Area.',
      },
      {
        day: 10,
        title: 'Crater Tour',
        description: 'Full day in Ngorongoro Crater.',
      },
      {
        day: 11,
        title: 'Tarangire National Park',
        description: 'Visit Tarangire, known for elephants.',
      },
      {
        day: 12,
        title: 'Tarangire Safari',
        description: 'Another day exploring Tarangire.',
      },
      {
        day: 13,
        title: 'Return to Nairobi',
        description: 'Drive back to Nairobi.',
      },
      {
        day: 14,
        title: 'Departure',
        description: 'Transfer to airport.',
      },
    ],
    maxGroupSize: 8,
    minAge: 10,
    difficulty: 'Easy',
    physicalRating: 1,
  },
  {
    id: '4',
    title: 'European Highlights: Paris to Rome',
    destination: 'Europe',
    country: 'France',
    duration: '10 Days',
    durationDays: 10,
    price: 2199,
    rating: 4.7,
    reviews: 298,
    imageUrl: '/tours/europe.jpg',
    operator: 'Euro Tours Ltd',
    category: 'Cultural',
    description: 'Discover the best of Europe on this whirlwind tour from Paris to Rome, visiting iconic cities and landmarks along the way.',
    highlights: [
      'Eiffel Tower and Louvre Museum',
      'Swiss Alps scenery',
      'Venice canals and gondola ride',
      'Florence art and architecture',
      'Ancient Rome and Vatican City',
    ],
    included: [
      '9 nights accommodation',
      'Daily breakfast',
      'High-speed train tickets',
      'City tours in each location',
      'Museum entries',
    ],
    excluded: [
      'Flights',
      'Lunches and dinners',
      'Travel insurance',
      'Personal expenses',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Paris Arrival',
        description: 'Welcome to Paris! Evening Seine River cruise.',
      },
      {
        day: 2,
        title: 'Paris Sightseeing',
        description: 'Eiffel Tower, Louvre, and Notre-Dame.',
      },
      {
        day: 3,
        title: 'Paris to Switzerland',
        description: 'Train to Interlaken via Basel.',
      },
      {
        day: 4,
        title: 'Swiss Alps',
        description: 'Jungfraujoch excursion.',
      },
      {
        day: 5,
        title: 'To Venice',
        description: 'Scenic train to Venice.',
      },
      {
        day: 6,
        title: 'Venice Exploration',
        description: 'Walking tour and gondola ride.',
      },
      {
        day: 7,
        title: 'Florence',
        description: 'Train to Florence, Uffizi Gallery.',
      },
      {
        day: 8,
        title: 'Florence Day',
        description: 'Duomo, Ponte Vecchio, David statue.',
      },
      {
        day: 9,
        title: 'Rome',
        description: 'Train to Rome, Colosseum visit.',
      },
      {
        day: 10,
        title: 'Rome & Departure',
        description: 'Vatican City tour, then departure.',
      },
    ],
    maxGroupSize: 20,
    minAge: 18,
    difficulty: 'Easy',
    physicalRating: 2,
  },
  {
    id: '5',
    title: 'Thailand Island Hopping Adventure',
    destination: 'Thailand',
    country: 'Thailand',
    duration: '9 Days',
    durationDays: 9,
    price: 1599,
    rating: 4.6,
    reviews: 412,
    imageUrl: '/tours/thailand.jpg',
    operator: 'Southeast Asia Tours',
    category: 'Beach & Island',
    description: 'Explore Thailand\'s most beautiful islands, from bustling Bangkok to the pristine beaches of Phuket and Phi Phi Islands.',
    highlights: [
      'Bangkok temples and markets',
      'Phuket beaches',
      'Phi Phi Islands snorkeling',
      'James Bond Island',
      'Beach parties and nightlife',
    ],
    included: [
      '8 nights accommodation',
      'Daily breakfast',
      'Island transfers',
      'Snorkeling equipment',
      'Bangkok city tour',
    ],
    excluded: [
      'International flights',
      'Meals not mentioned',
      'Travel insurance',
      'Water activities',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Bangkok Arrival',
        description: 'Transfer to hotel, evening at leisure.',
      },
      {
        day: 2,
        title: 'Bangkok Temples',
        description: 'Grand Palace, Wat Pho, river cruise.',
      },
      {
        day: 3,
        title: 'To Phuket',
        description: 'Flight to Phuket, beach time.',
      },
      {
        day: 4,
        title: 'Phi Phi Islands',
        description: 'Day trip to Phi Phi for snorkeling.',
      },
      {
        day: 5,
        title: 'James Bond Island',
        description: 'Phang Nga Bay tour.',
      },
      {
        day: 6,
        title: 'Phuket Free Day',
        description: 'Optional activities or relaxation.',
      },
      {
        day: 7,
        title: 'To Krabi',
        description: 'Transfer to Krabi, Railay Beach.',
      },
      {
        day: 8,
        title: 'Krabi Exploration',
        description: 'Four Islands tour.',
      },
      {
        day: 9,
        title: 'Departure',
        description: 'Transfer to airport.',
      },
    ],
    maxGroupSize: 16,
    minAge: 18,
    difficulty: 'Easy',
    physicalRating: 1,
  },
  {
    id: '6',
    title: 'Iceland Ring Road Adventure',
    destination: 'Iceland',
    country: 'Iceland',
    duration: '7 Days',
    durationDays: 7,
    price: 2799,
    rating: 4.9,
    reviews: 234,
    imageUrl: '/tours/iceland.jpg',
    operator: 'Nordic Explorers',
    category: 'Adventure',
    description: 'Circle Iceland on the famous Ring Road, discovering waterfalls, glaciers, hot springs, and the Northern Lights.',
    highlights: [
      'Blue Lagoon hot springs',
      'Golden Circle tour',
      'Glacier hiking',
      'Black sand beaches',
      'Northern Lights viewing',
    ],
    included: [
      '6 nights accommodation',
      'Daily breakfast',
      'Rental vehicle',
      'All activities',
      'National park fees',
    ],
    excluded: [
      'Flights',
      'Meals',
      'Fuel',
      'Travel insurance',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Reykjavik Arrival',
        description: 'Pick up rental car, evening in Reykjavik.',
      },
      {
        day: 2,
        title: 'Golden Circle',
        description: 'Thingvellir, Geysir, Gullfoss.',
      },
      {
        day: 3,
        title: 'South Coast',
        description: 'Seljalandsfoss, Skogafoss, Vik.',
      },
      {
        day: 4,
        title: 'Glacier Lagoon',
        description: 'Jokulsarlon, diamond beach.',
      },
      {
        day: 5,
        title: 'East Fjords',
        description: 'Scenic coastal drive.',
      },
      {
        day: 6,
        title: 'North Iceland',
        description: 'Lake Myvatn, whale watching.',
      },
      {
        day: 7,
        title: 'Return & Departure',
        description: 'Blue Lagoon, return car, fly home.',
      },
    ],
    maxGroupSize: 6,
    minAge: 21,
    difficulty: 'Moderate',
    physicalRating: 3,
  },
];

export const getFilteredTours = (filters?: {
  category?: string;
  destination?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  duration?: string;
}) => {
  let filtered = [...mockTours];

  if (filters?.category) {
    filtered = filtered.filter(tour => 
      tour.category.toLowerCase().includes(filters.category!.toLowerCase())
    );
  }

  if (filters?.destination) {
    filtered = filtered.filter(tour => 
      tour.destination.toLowerCase().includes(filters.destination!.toLowerCase()) ||
      tour.country.toLowerCase().includes(filters.destination!.toLowerCase())
    );
  }

  if (filters?.minPrice) {
    filtered = filtered.filter(tour => tour.price >= filters.minPrice!);
  }

  if (filters?.maxPrice) {
    filtered = filtered.filter(tour => tour.price <= filters.maxPrice!);
  }

  if (filters?.minRating) {
    filtered = filtered.filter(tour => tour.rating >= filters.minRating!);
  }

  if (filters?.duration) {
    filtered = filtered.filter(tour => tour.duration === filters.duration);
  }

  return filtered;
};

export const getTourById = (id: string) => {
  return mockTours.find(tour => tour.id === id);
};
