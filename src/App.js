import React, { useState } from 'react';

const TournamentApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const ADMIN_PASSWORD = 'tournament2026';

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPassword('');
    } else {
      alert('Incorrect password');
      setAdminPassword('');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff' }}>
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', background: '#1a1a1a', borderBottom: '3px solid #BFFF00', padding: '1rem', zIndex: 50 }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
            <div style={{ fontSize: '2rem' }}>⚽</div>
            <span style={{ fontWeight: '900', color: '#BFFF00' }}>CUP OF NATIONS 2026</span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Home</button>
            <button onClick={() => setCurrentPage('schedule')} style={{ background: 'none', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Schedule</button>
            <button onClick={() => setCurrentPage('standings')} style={{ background: 'none', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Standings</button>
            <button onClick={() => setCurrentPage('topscorers')} style={{ background: 'none', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Top Scorers</button>
            {isAdmin ? (
              <button onClick={() => setIsAdmin(false)} style={{ background: 'none', border: 'none', color: '#FF00FF', fontWeight: 'bold', cursor: 'pointer' }}>Logout</button>
            ) : (
              <button onClick={() => setShowAdminLogin(true)} style={{ background: 'none', border: 'none', color: '#999', cursor: 'pointer', fontSize: '0.875rem' }}>Admin</button>
            )}
          </div>
        </div>
      </nav>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ borderRadius: '0.5rem', padding: '2rem', maxWidth: '28rem', width: '100%', background: '#1a1a1a', border: '3px solid #BFFF00' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '1.5rem', color: '#BFFF00' }}>ADMIN LOGIN</h2>
            <form onSubmit={handleAdminLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter password"
                autoFocus
                style={{ background: '#333', border: '2px solid #555', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
              />
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button type="submit" style={{ flex: 1, fontWeight: '900', padding: '0.75rem', borderRadius: '0.5rem', border: 'none', background: '#BFFF00', color: '#000', cursor: 'pointer' }}>LOGIN</button>
                <button type="button" onClick={() => setShowAdminLogin(false)} style={{ flex: 1, fontWeight: '900', padding: '0.75rem', borderRadius: '0.5rem', border: 'none', background: '#666', color: '#fff', cursor: 'pointer' }}>CANCEL</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Home Page */}
      {currentPage === 'home' && (
        <div style={{ paddingTop: '6rem', paddingBottom: '2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '60rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem', color: '#BFFF00', lineHeight: 1.1 }}>CUP OF<br />NATIONS</h1>
            <p style={{ fontSize: '1.5rem', fontWeight: '900', color: '#999', marginBottom: '1.5rem' }}>2026</p>
            <p style={{ fontSize: '1.25rem', color: '#BFFF00', marginBottom: '1.5rem', fontWeight: '900' }}>ONE GAME. ONE COMMUNITY. ONE FUTURE.</p>
            <p style={{ color: '#999', marginBottom: '2rem', lineHeight: 1.6 }}>Celebrating the beauty and diversity of Houston. 16 teams. 200 players. One unforgettable weekend.</p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <button onClick={() => setCurrentPage('schedule')} style={{ padding: '1rem 2rem', fontWeight: '900', borderRadius: '0.5rem', border: 'none', background: '#BFFF00', color: '#000', cursor: 'pointer' }}>SCHEDULE</button>
              <button onClick={() => setCurrentPage('standings')} style={{ padding: '1rem 2rem', fontWeight: '900', borderRadius: '0.5rem', border: 'none', background: '#FF00FF', color: '#000', cursor: 'pointer' }}>STANDINGS</button>
              <button onClick={() => setCurrentPage('topscorers')} style={{ padding: '1rem 2rem', fontWeight: '900', borderRadius: '0.5rem', border: 'none', background: '#FFFF00', color: '#000', cursor: 'pointer' }}>TOP SCORERS</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '2rem' }}>
              <div style={{ borderRadius: '0.5rem', padding: '1.5rem', background: 'rgba(191, 255, 0, 0.1)', border: '2px solid #BFFF00' }}>
                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#BFFF00' }}>16</div>
                <div style={{ color: '#999', fontSize: '0.875rem', marginTop: '0.5rem', fontWeight: 'bold' }}>TEAMS</div>
              </div>
              <div style={{ borderRadius: '0.5rem', padding: '1.5rem', background: 'rgba(255, 0, 255, 0.1)', border: '2px solid #FF00FF' }}>
                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#FF00FF' }}>200+</div>
                <div style={{ color: '#999', fontSize: '0.875rem', marginTop: '0.5rem', fontWeight: 'bold' }}>PLAYERS</div>
              </div>
              <div style={{ borderRadius: '0.5rem', padding: '1.5rem', background: 'rgba(255, 255, 0, 0.1)', border: '2px solid #FFFF00' }}>
                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#FFFF00' }}>4</div>
                <div style={{ color: '#999', fontSize: '0.875rem', marginTop: '0.5rem', fontWeight: 'bold' }}>BRACKETS</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Page */}
      {currentPage === 'schedule' && (
        <div style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
          <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '2rem 1.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', color: '#BFFF00', marginBottom: '1rem' }}>LIVE SCHEDULE</h1>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', fontWeight: 'bold' }}>May 30-31, 2026 • The Zone Houston</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {[
                { team1: 'Uzbekistan 🇺🇿', team2: 'Cabo Verde 🇨🇻', time: '9:00 AM', court: 'Court 1' },
                { team1: 'Portugal 🇵🇹', team2: 'Mexico 🇲🇽', time: '9:00 AM', court: 'Court 2' },
                { team1: 'Argentina 🇦🇷', team2: 'Colombia 🇨🇴', time: '9:00 AM', court: 'Court 3' },
              ].map((match, idx) => (
                <div key={idx} style={{ borderRadius: '0.5rem', padding: '1rem', background: 'rgba(100, 100, 100, 0.1)', border: '2px solid #808080' }}>
                  <div style={{ color: '#808080', fontWeight: '900', fontSize: '0.75rem', marginBottom: '0.75rem' }}>⏱️ SCHEDULED • {match.time} • {match.court}</div>
                  <div style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{match.team1}</div>
                  <div style={{ textAlign: 'center', margin: '0.75rem 0', fontSize: '1.5rem', fontWeight: '900', color: '#808080' }}>? — ?</div>
                  <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{match.team2}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Standings Page */}
      {currentPage === 'standings' && (
        <div style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
          <div style={{ maxWidth: '60rem', margin: '0 auto', padding: '2rem 1.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', color: '#BFFF00', marginBottom: '2rem' }}>STANDINGS</h1>
            
            <div style={{ borderRadius: '0.5rem', overflow: 'hidden', border: '2px solid #BFFF00' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 0.5fr 0.5fr 0.5fr 1fr 0.5fr', gap: '0.5rem', padding: '1rem', background: 'rgba(191, 255, 0, 0.2)', fontWeight: '900', fontSize: '0.875rem' }}>
                <div>TEAM</div>
                <div style={{ textAlign: 'center' }}>W</div>
                <div style={{ textAlign: 'center' }}>D</div>
                <div style={{ textAlign: 'center' }}>L</div>
                <div style={{ textAlign: 'center' }}>GF-GA</div>
                <div style={{ textAlign: 'center' }}>PTS</div>
              </div>
              
              {[
                { team: '🇺🇿 Uzbekistan', w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
                { team: '🇵🇹 Portugal', w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
                { team: '🇲🇽 Mexico', w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
                { team: '🇨🇻 Cabo Verde', w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
              ].map((row, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '2fr 0.5fr 0.5fr 0.5fr 1fr 0.5fr', gap: '0.5rem', padding: '1rem', borderBottom: '1px solid #333', textAlign: 'center' }}>
                  <div style={{ textAlign: 'left' }}><span style={{ fontWeight: 'bold' }}>{idx + 1}.</span> {row.team}</div>
                  <div style={{ fontWeight: 'bold' }}>{row.w}</div>
                  <div style={{ fontWeight: 'bold' }}>{row.d}</div>
                  <div style={{ fontWeight: 'bold' }}>{row.l}</div>
                  <div style={{ fontWeight: 'bold' }}>{row.gf}-{row.ga}</div>
                  <div style={{ fontWeight: '900', color: '#BFFF00' }}>{row.pts}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Top Scorers Page */}
      {currentPage === 'topscorers' && (
        <div style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
          <div style={{ maxWidth: '60rem', margin: '0 auto', padding: '2rem 1.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', color: '#BFFF00', marginBottom: '2rem' }}>TOP SCORERS</h1>
            
            <div style={{ borderRadius: '0.5rem', overflow: 'hidden', border: '2px solid #BFFF00' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '0.5fr 1.5fr 1.5fr 1fr', gap: '1rem', padding: '1rem', background: 'rgba(191, 255, 0, 0.2)', fontWeight: '900', fontSize: '0.9rem' }}>
                <div style={{ textAlign: 'center' }}>RANK</div>
                <div>PLAYER</div>
                <div>TEAM</div>
                <div style={{ textAlign: 'center' }}>GOALS</div>
              </div>
              
              {[
                { rank: '🥇', player: 'João Santos', team: '🇧🇷 Brazil', goals: 5 },
                { rank: '🥈', player: 'Lionel Martinez', team: '🇦🇷 Argentina', goals: 4 },
                { rank: '🥉', player: 'Carlos Rodríguez', team: '🇲🇽 Mexico', goals: 3 },
              ].map((scorer, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '0.5fr 1.5fr 1.5fr 1fr', gap: '1rem', padding: '1rem', borderBottom: '1px solid #333', textAlign: 'center', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: '900' }}>{scorer.rank}</div>
                  <div style={{ fontWeight: 'bold', textAlign: 'left' }}>{scorer.player}</div>
                  <div style={{ fontWeight: 'bold', textAlign: 'left' }}>{scorer.team}</div>
                  <div style={{ fontWeight: '900', color: '#BFFF00' }}>{scorer.goals}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TournamentApp;
