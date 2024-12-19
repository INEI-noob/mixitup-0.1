import "./globals.css"; // Import global styles
import Header from "./components/Header";
import Footer from "./components/Footer";
import SessionProviderWrapper from "./components/SessionProviderWrapper"; // Import directly

export const metadata = {
  title: "MIXitUP - Inclusive Esports Platform",
  description: "Your gateway to inclusive Counter-Strike tournaments and events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Wrap everything inside SessionProviderWrapper */}
        <SessionProviderWrapper>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="min-h-[calc(100vh-136px)]">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
