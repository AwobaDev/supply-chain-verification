import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transparent Supply Chain
            <span className="block text-green-300">Verification</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Track every step of your product's journey from origin to consumer with blockchain-powered transparency and trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Track Products
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Register Entity
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Complete Supply Chain Transparency
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Certified Origins</h3>
              <p className="text-gray-600 leading-relaxed">
                Verify the authentic origin of products with blockchain-backed certifications from trusted authorities
              </p>
            </div>
            
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Real-time Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor products throughout their journey with quality checkpoints and custody transfers
              </p>
            </div>
            
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Consumer Verification</h3>
              <p className="text-gray-600 leading-relaxed">
                Empower consumers to verify product authenticity and provide feedback directly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="stat-card">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Verified Products</div>
            </div>
            <div className="stat-card">
              <div className="text-4xl font-bold text-green-600 mb-2">250+</div>
              <div className="text-gray-600">Registered Entities</div>
            </div>
            <div className="stat-card">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Certificates Issued</div>
            </div>
            <div className="stat-card">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Verification Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="step-card text-center">
              <div className="step-number w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Register Entity</h3>
              <p className="text-gray-600">Producers, manufacturers, and distributors register on the platform</p>
            </div>
            
            <div className="step-card text-center">
              <div className="step-number w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Product Registration</h3>
              <p className="text-gray-600">Products are registered with origin certifications and initial checkpoints</p>
            </div>
            
            <div className="step-card text-center">
              <div className="step-number w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Track Journey</h3>
              <p className="text-gray-600">Monitor custody transfers and quality checkpoints throughout the supply chain</p>
            </div>
            
            <div className="step-card text-center">
              <div className="step-number w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4">Consumer Verification</h3>
              <p className="text-gray-600">End consumers verify product authenticity and provide feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Types */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Supported Certifications
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { name: 'Organic', color: 'bg-green-500', icon: '🌱' },
              { name: 'Fair Trade', color: 'bg-blue-500', icon: '🤝' },
              { name: 'Sustainable', color: 'bg-emerald-500', icon: '♻️' },
              { name: 'Non-GMO', color: 'bg-purple-500', icon: '🧬' },
              { name: 'Carbon Neutral', color: 'bg-gray-600', icon: '🌍' }
            ].map((cert, index) => (
              <div key={index} className="certification-badge bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <div className={`${cert.color} text-white py-2 px-4 rounded-full text-sm font-semibold`}>
                  {cert.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of organizations already using our platform to build consumer trust and ensure product authenticity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;