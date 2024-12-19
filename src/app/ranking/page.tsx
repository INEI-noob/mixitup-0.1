export default function Ranking() {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Ranking Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Ranking</h2>
          <p className="text-lg mb-6">Track your rankings and see the top players and teams in our community.</p>
        </section>
  
        {/* Ranking Table */}
        <section className="py-16 px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 rounded-lg">
              <thead>
                <tr className="text-white">
                  <th className="py-3 px-6 text-left">Rank</th>
                  <th className="py-3 px-6 text-left">Player</th>
                  <th className="py-3 px-6 text-left">Team</th>
                  <th className="py-3 px-6 text-left">Points</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Rows */}
                <tr className="text-white">
                  <td className="py-3 px-6">1</td>
                  <td className="py-3 px-6">Player One</td>
                  <td className="py-3 px-6">Team A</td>
                  <td className="py-3 px-6">1200</td>
                </tr>
                <tr className="text-white">
                  <td className="py-3 px-6">2</td>
                  <td className="py-3 px-6">Player Two</td>
                  <td className="py-3 px-6">Team B</td>
                  <td className="py-3 px-6">1100</td>
                </tr>
                <tr className="text-white">
                  <td className="py-3 px-6">3</td>
                  <td className="py-3 px-6">Player Three</td>
                  <td className="py-3 px-6">Team C</td>
                  <td className="py-3 px-6">1050</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
  
        {/* Call-to-Action Section */}
        <section className="py-16 px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Want to Climb the Ranking?</h3>
          <p className="mb-8">Join our community and start competing to increase your ranking and make it to the top!</p>
          <button className="bg-gradient-to-r from-primary to-accent text-black font-semibold py-3 px-8 rounded-full hover:scale-105 transition">
            Get Started
          </button>
        </section>
      </div>
    );
  }
  