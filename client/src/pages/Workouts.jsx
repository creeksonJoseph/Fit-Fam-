import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const Workouts = () => {
  const [allExercises, setAllExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [displayedExercises, setDisplayedExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_PAGE = 20;

  const BASE_URL = 'https://fit-fam-server.onrender.com';

  // Fallback data for when API is unavailable
  const fallbackExercises = [
    {
      id: '1',
      name: 'push up',
      bodyPart: 'chest',
      equipment: 'body weight',
      target: 'pectorals',
      gifUrl: 'https://v2.exercisedb.io/image/BQSKkc-9nul0Cg',
      instructions: ['Start in plank position', 'Lower body to ground', 'Push back up']
    },
    {
      id: '2',
      name: 'squat',
      bodyPart: 'legs',
      equipment: 'body weight',
      target: 'quadriceps',
      gifUrl: 'https://v2.exercisedb.io/image/BQSKkc-9nul0Cg',
      instructions: ['Stand with feet apart', 'Lower into squat', 'Return to standing']
    },
    {
      id: '3',
      name: 'plank',
      bodyPart: 'core',
      equipment: 'body weight',
      target: 'abs',
      gifUrl: 'https://v2.exercisedb.io/image/BQSKkc-9nul0Cg',
      instructions: ['Hold plank position', 'Keep body straight', 'Breathe steadily']
    }
  ];

  const fallbackBodyParts = ['chest', 'legs', 'core', 'back', 'shoulders', 'arms', 'cardio'];

  const fetchAllExercises = async () => {
    // Check localStorage first
    const cachedExercises = localStorage.getItem('exercises');
    const cachedTimestamp = localStorage.getItem('exercises_timestamp');
    const ONE_DAY = 24 * 60 * 60 * 1000;
    
    if (cachedExercises && cachedTimestamp) {
      const isExpired = Date.now() - parseInt(cachedTimestamp) > ONE_DAY;
      if (!isExpired) {
        console.log('📦 Using cached exercises from localStorage');
        const exercises = JSON.parse(cachedExercises);
        return exercises;
      }
    }
    
    console.log('🚀 Fetching ALL exercises from API...');
    try {
      console.log('📡 Making request to:', `${BASE_URL}/exercises`);
      
      const response = await fetch(`${BASE_URL}/exercises`);
      
      console.log('📊 Response status:', response.status);
      
      if (response.status === 429) {
        console.warn('⚠️ API rate limit reached, using fallback data');
        return fallbackExercises;
      }
      
      if (!response.ok) {
        console.error('❌ API response not ok:', response.status);
        return fallbackExercises;
      }
      
      const data = await response.json();
      console.log('✅ Fetched', data.length, 'exercises from API');
      console.log('📋 Sample exercise data:', data[0]);
      console.log('🔍 Response headers:', Object.fromEntries(response.headers.entries()));
      
      const exercises = Array.isArray(data) ? data.map(exercise => ({
        id: exercise.exerciseId,
        name: exercise.name,
        bodyPart: exercise.bodyParts?.[0] || 'unknown',
        equipment: exercise.equipments?.[0] || 'unknown',
        target: exercise.targetMuscles?.[0] || 'unknown',
        gifUrl: exercise.gifUrl,
        instructions: exercise.instructions || []
      })) : fallbackExercises;
      
      // Cache in localStorage
      localStorage.setItem('exercises', JSON.stringify(exercises));
      localStorage.setItem('exercises_timestamp', Date.now().toString());
      console.log('💾 Cached exercises to localStorage');
      
      return exercises;
    } catch (error) {
      console.error('🔥 Network error:', error.message);
      return fallbackExercises;
    }
  };

  const fetchBodyParts = async () => {
    console.log('🚀 Starting to fetch body parts from API...');
    try {
      console.log('📡 Making request to:', `${BASE_URL}/bodyparts`);
      
      const response = await fetch(`${BASE_URL}/bodyparts`);
      
      console.log('📊 Body parts response status:', response.status);
      console.log('📊 Body parts response ok:', response.ok);
      
      if (response.status === 429) {
        console.warn('⚠️ API rate limit reached (429) for body parts, using fallback data');
        setBodyParts(fallbackBodyParts);
        return;
      }
      
      if (!response.ok) {
        console.error('❌ Body parts API response not ok:', response.status, response.statusText);
        setBodyParts(fallbackBodyParts);
        return;
      }
      
      const data = await response.json();
      console.log('✅ Successfully fetched body parts:', data);
      
      const bodyPartNames = Array.isArray(data) ? data.map(bp => bp.name) : fallbackBodyParts;
      setBodyParts(bodyPartNames);
    } catch (error) {
      console.error('🔥 Network/Fetch error for body parts:', error.name, error.message);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        console.error('🌐 This appears to be a network connectivity issue');
      }
      setBodyParts(fallbackBodyParts);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      // Clear cache for testing
      localStorage.removeItem('exercises');
      localStorage.removeItem('exercises_timestamp');
      console.log('🧹 Cleared cache for fresh fetch');
      
      const exercises = await fetchAllExercises();
      await fetchBodyParts();
      console.log('🎯 Setting allExercises with', exercises.length, 'exercises');
      console.log('📋 First 3 exercises:', exercises.slice(0, 3));
      setAllExercises(exercises);
      setLoading(false);
    };
    loadData();
  }, []);

  // Filter exercises based on search and body part
  useEffect(() => {
    console.log('🔍 Filtering with allExercises.length:', allExercises.length);
    let filtered = allExercises;
    if (selectedBodyPart !== 'all') {
      filtered = filtered.filter(exercise => exercise.bodyPart?.toLowerCase() === selectedBodyPart.toLowerCase());
    }
    if (searchTerm) {
      filtered = filtered.filter(exercise => 
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    console.log('📋 Filtered exercises count:', filtered.length);
    setFilteredExercises(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [allExercises, selectedBodyPart, searchTerm]);
  
  // Paginate filtered exercises
  useEffect(() => {
    const startIndex = 0;
    const endIndex = currentPage * ITEMS_PER_PAGE;
    const paginatedExercises = filteredExercises.slice(startIndex, endIndex);
    
    setDisplayedExercises(paginatedExercises);
    setHasMore(endIndex < filteredExercises.length);
  }, [filteredExercises, currentPage]);
  
  // Infinite scroll with intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCurrentPage(prev => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    const sentinel = document.getElementById('scroll-sentinel');
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [hasMore]);

  if (loading) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display">
        <AppHeader />
        <div className="flex min-h-screen">
          <Sidebar activeTab="workouts" />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-background-dark dark:text-background-light">Loading exercises...</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="workouts" />
        <main className="flex-1 p-3 sm:p-6 lg:p-8 pb-24 lg:pb-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 sm:mb-16 text-center">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-background-dark dark:text-background-light">Explore Exercises</h1>
              <p className="mt-3 sm:mt-6 text-sm sm:text-lg text-background-dark/60 dark:text-background-light/60">
                Find the perfect workout for your fitness goals. Browse our extensive library of exercises, categorized by body part and equipment.
              </p>
            </div>
            
            <div className="relative mb-6 sm:mb-10">
              <svg className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-background-dark/40 dark:text-background-light/40" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input 
                className="w-full h-12 sm:h-16 pl-10 sm:pl-16 pr-4 sm:pr-6 rounded-lg bg-background-light dark:bg-background-dark border border-background-dark/10 dark:border-background-light/10 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow text-sm sm:text-lg placeholder:text-background-dark/40 dark:placeholder:text-background-light/40" 
                placeholder="Search exercises, e.g. 'bicep curl'" 
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-16">
              <button 
                onClick={() => setSelectedBodyPart('all')}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full transition-colors ${
                  selectedBodyPart === 'all' 
                    ? 'bg-primary text-black' 
                    : 'bg-background-dark/5 dark:bg-background-light/10 text-background-dark dark:text-background-light hover:bg-background-dark/10 dark:hover:bg-background-light/20'
                }`}
              >
                All
              </button>
              {Array.isArray(bodyParts) && bodyParts.slice(0, 7).map((bodyPart) => (
                <button 
                  key={bodyPart}
                  onClick={() => setSelectedBodyPart(bodyPart)}
                  className={`px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full transition-colors capitalize ${
                    selectedBodyPart === bodyPart 
                      ? 'bg-primary text-black' 
                      : 'bg-background-dark/5 dark:bg-background-light/10 text-background-dark dark:text-background-light hover:bg-background-dark/10 dark:hover:bg-background-light/20'
                  }`}
                >
                  {bodyPart}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
              {Array.isArray(displayedExercises) && displayedExercises.map((exercise) => (
                <div key={exercise.id} className="group flex flex-col bg-white dark:bg-background-dark/80 border border-background-dark/5 dark:border-background-light/10 rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-full aspect-video bg-background-dark/5 dark:bg-background-light/5 flex items-center justify-center">
                    <img 
                      src={exercise.gifUrl} 
                      alt={exercise.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTA1LjUyMyA3MCAxMTAgNzQuNDc3IDExMCA4MFY5MEMxMTAgOTUuNTIzIDEwNS41MjMgMTAwIDEwMCAxMDBDOTQuNDc3IDEwMCA5MCA5NS41MjMgOTAgOTBWODBDOTAgNzQuNDc3IDk0LjQ3NyA3MCAxMDAgNzBaIiBmaWxsPSIjOUI5QjlCIi8+CjxwYXRoIGQ9Ik04MCA1MEg5MFY2MEg4MFY1MFoiIGZpbGw9IiM5QjlCOUIiLz4KPHA+dGggZD0iTTExMCA1MEgxMjBWNjBIMTEwVjUwWiIgZmlsbD0iIzlCOUI5QiIvPgo8cGF0aCBkPSJNNzAgMTEwSDEzMFYxMjBINzBWMTEwWiIgZmlsbD0iIzlCOUI5QiIvPgo8dGV4dCB4PSIxMDAiIHk9IjE0NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzlCOUI5QiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj5FeGVyY2lzZTwvdGV4dD4KPHN2Zz4=';
                        e.target.style.objectFit = 'contain';
                        e.target.style.padding = '20px';
                      }}
                    />
                  </div>
                  <div className="p-3 sm:p-5 flex-grow flex flex-col">
                    <h3 className="font-bold text-lg sm:text-xl text-background-dark dark:text-background-light capitalize">{exercise.name}</h3>
                    <p className="text-xs sm:text-sm text-background-dark/50 dark:text-background-light/50 capitalize">{exercise.bodyPart}</p>
                    <div className="flex items-center justify-between gap-2 mt-2 sm:mt-3">
                      <span className="inline-flex items-center text-xs sm:text-sm font-medium text-background-dark/60 dark:text-background-light/60 min-w-0 flex-1">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                        <span className="truncate capitalize">{exercise.equipment}</span>
                      </span>
                      <Link to={`/workout-detail/${exercise.id}`} className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors flex-shrink-0">
                        Grind
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredExercises.length === 0 && (
              <div className="text-center py-12">
                <p className="text-background-dark/60 dark:text-background-light/60">No exercises found. Try adjusting your search or filter.</p>
              </div>
            )}
            
            {hasMore && displayedExercises.length > 0 && (
              <div id="scroll-sentinel" className="text-center py-8">
                <div className="animate-pulse flex items-center justify-center gap-2 text-background-dark/60 dark:text-background-light/60">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <span className="ml-2 text-sm">Loading more exercises...</span>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workouts;