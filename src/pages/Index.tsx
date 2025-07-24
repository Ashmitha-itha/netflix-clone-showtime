import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieRow from "@/components/MovieRow";
import movie1 from "@/assets/movie1.jpg";
import movie2 from "@/assets/movie2.jpg";
import movie3 from "@/assets/movie3.jpg";
import movie4 from "@/assets/movie4.jpg";
import movie5 from "@/assets/movie5.jpg";
import movie6 from "@/assets/movie6.jpg";

const Index = () => {
  const trendingMovies = [
    { id: 1, title: "Shadow Detective", image: movie1 },
    { id: 2, title: "Ocean's Secrets", image: movie2 },
    { id: 3, title: "Midnight Café", image: movie3 },
    { id: 4, title: "Forest Legends", image: movie4 },
    { id: 5, title: "Tech Revolution", image: movie5 },
    { id: 6, title: "Desert Storm", image: movie6 },
  ];

  const actionMovies = [
    { id: 7, title: "Desert Storm", image: movie6 },
    { id: 8, title: "Tech Revolution", image: movie5 },
    { id: 9, title: "Shadow Detective", image: movie1 },
    { id: 10, title: "Forest Legends", image: movie4 },
    { id: 11, title: "Ocean's Secrets", image: movie2 },
    { id: 12, title: "Midnight Café", image: movie3 },
  ];

  const dramaMovies = [
    { id: 13, title: "Midnight Café", image: movie3 },
    { id: 14, title: "Ocean's Secrets", image: movie2 },
    { id: 15, title: "Forest Legends", image: movie4 },
    { id: 16, title: "Shadow Detective", image: movie1 },
    { id: 17, title: "Tech Revolution", image: movie5 },
    { id: 18, title: "Desert Storm", image: movie6 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <div className="space-y-8 pb-16">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Action & Adventure" movies={actionMovies} />
        <MovieRow title="Drama & Romance" movies={dramaMovies} />
        <MovieRow title="New Releases" movies={trendingMovies.slice().reverse()} />
      </div>
    </div>
  );
};

export default Index;