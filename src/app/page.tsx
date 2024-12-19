export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white text-center py-20">
        <h2 className="text-4xl font-extrabold mb-4">Join the Future of Esports</h2>
        <p className="text-lg mb-6">Your gateway to inclusive Counter-Strike tournaments and events.</p>
        <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-accent transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">Why MIXitUP?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h4 className="text-xl font-bold mb-4">Inclusive Tournaments</h4>
            <p>Compete in events designed for female and mixed teams, fostering equality in esports.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h4 className="text-xl font-bold mb-4">Advanced Stats</h4>
            <p>Analyze detailed player stats and performance metrics to improve your game.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h4 className="text-xl font-bold mb-4">Community Leaderboards</h4>
            <p>Track your rankings and climb the leaderboards with your team.</p>
          </div>
        </div>
      </section>

      {/* Community Highlights Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-16 px-8 text-center">
        <h3 className="text-3xl font-bold text-white mb-8">Our Community</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-4xl font-bold text-accent">500+</h4>
            <p>Active Players</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-accent">100+</h4>
            <p>Teams Competing</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-accent">50+</h4>
            <p>Tournaments Hosted</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-8 text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to Join?</h3>
        <p className="mb-8">Create an account and dive into the action. Whether you're a player or a team, MIXitUP has something for you.</p>
        <button className="bg-gradient-to-r from-primary to-accent text-black font-semibold py-3 px-8 rounded-full hover:scale-105 transition">
          Sign Up Now
        </button>
      </section>
    </div>
  );
}
