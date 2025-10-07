import React, { useState, useEffect } from 'react';

const GameHubDashboard: React.FC = () => {
  const [balance, setBalance] = useState(9692043.00);
  const [dailyFlecenium, setDailyFlecenium] = useState(9692043.00);
  const [monthlyLimit, setMonthlyLimit] = useState(50000000.00);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { icon: '💰', label: 'Deposit', color: 'from-green-500 to-emerald-500' },
    { icon: '📤', label: 'Withdraw', color: 'from-red-500 to-pink-500' },
    { icon: '🔄', label: 'Internal', color: 'from-blue-500 to-cyan-500' },
    { icon: '👑', label: 'Membership', color: 'from-yellow-500 to-amber-500' },
    { icon: '📲', label: 'Transfer', color: 'from-purple-500 to-indigo-500' },
    { icon: '⬆️', label: 'Upgrade', color: 'from-orange-500 to-red-500' },
  ];

  const quickActions = [
    { label: 'Family #1', value: 'USDT', color: 'text-cyan-400' },
    { label: 'Service', value: 'Annual Yield', color: 'text-green-400' },
    { label: '9 cx*** recharge', value: 'Participate Now', color: 'text-yellow-400' },
  ];

  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                CRYPBYU
              </span>
            </div>
            
            {/* Title */}
            <div className="text-center">
              <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                GAMEHUB TOKEN
              </h1>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center space-x-2">
              <button className="text-xs md:text-sm bg-white/10 hover:bg-white/20 px-2 md:px-3 py-1 rounded-lg transition-colors duration-200">
                Home
              </button>
              <button className="text-xs md:text-sm bg-white/10 hover:bg-white/20 px-2 md:px-3 py-1 rounded-lg transition-colors duration-200">
                Trade
              </button>
              <button className="text-xs md:text-sm bg-white/10 hover:bg-white/20 px-2 md:px-3 py-1 rounded-lg transition-colors duration-200">
                Account
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* User Greeting */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-light mb-2">Hi, Khalil 👋</h2>
          <p className="text-gray-300">Welcome to your GameHub dashboard</p>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {/* Available Balance */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-gray-300 text-sm mb-2">Available Balance</h3>
            <div className="text-2xl md:text-3xl font-bold text-cyan-400">
              {formatCurrency(balance)} USDT
            </div>
            <div className="text-green-400 text-xs mt-2">↑ +2.5% today</div>
          </div>

          {/* Daily Flecenium */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
            <h3 className="text-gray-300 text-sm mb-2">Daily Flecenium</h3>
            <div className="text-2xl md:text-3xl font-bold text-green-400">
              {formatCurrency(dailyFlecenium)} USDT
            </div>
            <div className="text-cyan-400 text-xs mt-2">🔄 Updates daily</div>
          </div>

          {/* Monthly Limit */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300">
            <h3 className="text-gray-300 text-sm mb-2">Monthly Receiving Limit</h3>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400">
              {formatCurrency(monthlyLimit)} USDT
            </div>
            <div className="text-gray-400 text-xs mt-2">Resets in 15 days</div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mb-8">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-3 md:p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 group"
            >
              <div className={`text-xl md:text-2xl mb-1 md:mb-2 transform group-hover:scale-110 transition-transform duration-200`}>
                {item.icon}
              </div>
              <div className="text-xs md:text-sm font-medium">{item.label}</div>
            </button>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="text-gray-300 text-sm mb-2">{action.label}</div>
              <div className={`text-lg md:text-xl font-semibold ${action.color}`}>
                {action.value}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Footer Info */}
        {isMobile && (
          <div className="mt-8 text-center text-gray-400 text-xs">
            <p>GameHub Token v1.0 • Built for Mobile</p>
            <p>CRYPBYU Platform • Secure Crypto Gaming</p>
          </div>
        )}
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #1e1b4b 0%, #1e40af 50%, #3730a3 100%);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
      `}</style>
    </div>
  );
};

export default GameHubDashboard;
