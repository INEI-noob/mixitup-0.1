export default function About() {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* About Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20 text-center">
          <h2 className="text-4xl font-extrabold mb-4">About MIXitUP</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            MIXitUP is a revolutionary esports platform designed to provide inclusive tournaments for Counter-Strike enthusiasts. 
            Our goal is to create an environment where players of all backgrounds, especially female and mixed teams, can compete and thrive.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-accent transition">
            Join the Community
          </button>
        </section>
  
        {/* Mission Section */}
        <section className="py-16 px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Our Mission</h3>
          <p className="text-lg text-center max-w-3xl mx-auto">
            We aim to promote diversity and equality in esports. Our platform brings together players from different backgrounds 
            and provides the tools they need to succeed, including detailed player statistics, custom tournaments, and a thriving community.
          </p>
        </section>
  
        {/* Vision Section */}
        <section className="bg-gradient-to-r from-gray-900 to-black py-16 px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Our Vision</h3>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Our vision is to be the leading platform for inclusive and empowering esports experiences. We envision a world where 
            everyone, regardless of gender or background, can compete at the highest level and be recognized for their talent.
          </p>
        </section>
  
        {/* Values Section */}
        <section className="py-16 px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Inclusivity</h4>
              <p>We believe in creating an environment where everyone feels welcome, regardless of their background.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Equality</h4>
              <p>We strive to ensure that every player has the same opportunities to succeed, regardless of gender or identity.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Community</h4>
              <p>We are committed to fostering a strong, supportive community where players can connect, share, and grow together.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  