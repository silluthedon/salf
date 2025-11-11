import { useState } from 'react';
import { Gift, Heart, Share2, Volume2, VolumeX } from 'lucide-react';

function App() {
  const [isMuted, setIsMuted] = useState(true);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Happy Birthday, Shubho Al Farooq!',
        text: 'A heartfelt birthday tribute to an amazing mentor and friend!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="confetti-bg"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-16 animate-fade-in">
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-gold-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img
              src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/354424209_10160814882002838_1806854010557776960_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGg4i-VZJTQfiGXpwq5-lH7k3EkmTAOOSaTcSSZMA45JubN5haBpBlpBXel29s0ZCoeIx4Rs2W_cj647dGk_sZp&_nc_ohc=VfbtZzsK0CcQ7kNvwHUlpF9&_nc_oc=AdmA69iy9C5h4bQlBIlqnA_jkmerjK9IHa3osfPrLIGZLyz5PbJQ8Hzf5_fi1a9b9Do&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=F-A9kAESSjTxqtJrblU8iA&oh=00_Afgq0mQkQHV4OiAPiz2eQJvfQXG2j71uvk0NWIDUpby-ng&oe=6919200B"
              alt="Shubho Al Farooq"
              className="relative w-48 h-48 rounded-full border-4 border-gold-400 shadow-2xl object-cover mx-auto animate-scale-in"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-gold-300 to-blue-400 animate-slide-down">
            Happy Birthday,
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gold-300 animate-slide-down animation-delay-200">
            Shubho Al Farooq!
          </h2>
          <p className="text-xl sm:text-2xl text-blue-200 font-light animate-slide-down animation-delay-400">
            A Tribute to My Mentor, Friend, and Uncle
          </p>
        </header>

        <section className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mb-12 shadow-2xl border border-blue-500 border-opacity-30 animate-fade-in-up">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-shadow-glow">
            <Heart className="inline-block mr-3 text-red-400 animate-pulse" />
            Thank You, Uncle Shubho!
          </h3>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-200 text-center max-w-3xl mx-auto">
            To Shubho Al Farooq, my teacher, friend and the uncle who's been like a father to me.
            You've guided me through coding, gifted me a laptop to chase my dreams, supported me in tough times
            and even helped me get into college. Your kindness and belief in me have changed my life.
            As the CEO of Zantrik, you inspire countless others but to me you're family.
            <span className="block mt-4 text-2xl font-semibold text-gold-300">Happy Birthday!</span>
          </p>
        </section>

        <section className="bg-gradient-to-r from-green-600 to-gold-500 rounded-2xl p-8 sm:p-12 mb-12 shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-fade-in-up animation-delay-200">
          <div className="text-center relative">
            <div className="absolute -top-4 -right-4 text-6xl animate-bounce">🎉</div>
            <div className="absolute -top-4 -left-4 text-6xl animate-bounce animation-delay-300">🎊</div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              <Gift className="inline-block mr-3 animate-wiggle" />
              Send Me Your Birthday Treat
            </h3>
            <p className="text-lg sm:text-xl text-white mb-6 opacity-90">
              It's your special day, but how about a little treat for your coding student?
              Send me a birthday treat via bKash so we can celebrate together.
            </p>
            <a
              href="https://shop.bkash.com/abraham-shop01334124050/pay/bdt250/nmqCGW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-700 font-bold text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1"
            >
              Send Treat via bKash 🎁
            </a>
          </div>
        </section>

        <div className="flex justify-center gap-4 mb-8 animate-fade-in-up animation-delay-400">
          <button
            onClick={handleShare}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            <Share2 size={20} />
            Share
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>

        <footer className="text-center text-gray-400 text-sm animate-fade-in-up animation-delay-600">
          <p className="mb-2">
            Made with <Heart className="inline-block w-4 h-4 text-red-400 animate-pulse" /> by Sillu
          </p>
          <p className="text-xs">Powered by sillu the don</p>
        </footer>
      </div>

      {!isMuted && (
        <audio autoPlay loop>
          <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
}

export default App;
