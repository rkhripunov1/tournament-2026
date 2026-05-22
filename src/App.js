import React, { useState } from 'react';

const TournamentApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [topScorers, setTopScorers] = useState([]);
  const [newGoal, setNewGoal] = useState({ playerName: '', team: '', goals: 1 });
  const [editingMatch, setEditingMatch] = useState(null);
  const [editScore1, setEditScore1] = useState('');
  const [editScore2, setEditScore2] = useState('');

  const ADMIN_PASSWORD = 'tournament2026';

  const allTeams = [
    { name: 'Uzbekistan', flag: '🇺🇿' }, { name: 'Portugal', flag: '🇵🇹' }, { name: 'Mexico', flag: '🇲🇽' }, { name: 'Cabo Verde', flag: '🇨🇻' },
    { name: 'Argentina', flag: '🇦🇷' }, { name: 'Thailand', flag: '🇹🇭' }, { name: 'Ecuador', flag: '🇪🇨' }, { name: 'Colombia', flag: '🇨🇴' },
    { name: 'Brazil', flag: '🇧🇷' }, { name: 'El Salvador', flag: '🇸🇻' }, { name: 'Kazakhstan', flag: '🇰🇿' }, { name: 'Angola', flag: '🇦🇴' },
    { name: 'Iraq', flag: '🇮🇶' }, { name: 'Cuba', flag: '🇨🇺' }, { name: 'USA', flag: '🇺🇸' }, { name: 'TBD', flag: '❓' },
  ];

  const groupsData = {
    A: ['Uzbekistan', 'Portugal', 'Mexico', 'Cabo Verde'],
    B: ['Argentina', 'Thailand', 'Ecuador', 'Colombia'],
    C: ['Brazil', 'El Salvador', 'Kazakhstan', 'Angola'],
    D: ['Iraq', 'Cuba', 'USA', 'TBD'],
  };

  const [matches, setMatches] = useState([
    { id: 1, team1: 'Uzbekistan', flag1: '🇺🇿', team2: 'Cabo Verde', flag2: '🇨🇻', score1: null, score2: null, time: '9:00 AM', court: 'Court 1', group: 'A' },
    { id: 2, team1: 'Portugal', flag1: '🇵🇹', team2: 'Mexico', flag2: '🇲🇽', score1: null, score2: null, time: '9:00 AM', court: 'Court 2', group: 'A' },
    { id: 3, team1: 'Argentina', flag1: '🇦🇷', team2: 'Colombia', flag2: '🇨🇴', score1: null, score2: null, time: '9:00 AM', court: 'Court 3', group: 'B' },
    { id: 4, team1: 'Thailand', flag1: '🇹🇭', team2: 'Ecuador', flag2: '🇪🇨', score1: null, score2: null, time: '9:00 AM', court: 'Court 1', group: 'B' },
    { id: 5, team1: 'Brazil', flag1: '🇧🇷', team2: 'Angola', flag2: '🇦🇴', score1: null, score2: null, time: '9:00 AM', court: 'Court 2', group: 'C' },
    { id: 6, team1: 'El Salvador', flag1: '🇸🇻', team2: 'Kazakhstan', flag2: '🇰🇿', score1: null, score2: null, time: '9:00 AM', court: 'Court 3', group: 'C' },
    { id: 7, team1: 'Mexico', flag1: '🇲🇽', team2: 'Cabo Verde', flag2: '🇨🇻', score1: null, score2: null, time: '1:00 PM', court: 'Court 1', group: 'A' },
    { id: 8, team1: 'Brazil', flag1: '🇧🇷', team2: 'Kazakhstan', flag2: '🇰🇿', score1: null, score2: null, time: '1:00 PM', court: 'Court 2', group: 'C' },
    { id: 9, team1: 'Ecuador', flag1: '🇪🇨', team2: 'Colombia', flag2: '🇨🇴', score1: null, score2: null, time: '1:00 PM', court: 'Court 3', group: 'B' },
    { id: 10, team1: 'Argentina', flag1: '🇦🇷', team2: 'Thailand', flag2: '🇹🇭', score1: null, score2: null, time: '2:00 PM', court: 'Court 1', group: 'B' },
    { id: 11, team1: 'El Salvador', flag1: '🇸🇻', team2: 'Angola', flag2: '🇦🇴', score1: null, score2: null, time: '2:00 PM', court: 'Court 2', group: 'C' },
    { id: 12, team1: 'Iraq', flag1: '🇮🇶', team2: 'USA', flag2: '🇺🇸', score1: null, score2: null, time: '2:00 PM', court: 'Court 3', group: 'D' },
    { id: 13, team1: 'Cuba', flag1: '🇨🇺', team2: 'TBD', flag2: '❓', score1: null, score2: null, time: '3:00 PM', court: 'Court 1', group: 'D' },
    { id: 14, team1: 'Argentina', flag1: '🇦🇷', team2: 'Ecuador', flag2: '🇪🇨', score1: null, score2: null, time: '3:00 PM', court: 'Court 2', group: 'B' },
    { id: 15, team1: 'Portugal', flag1: '🇵🇹', team2: 'Cabo Verde', flag2: '🇨🇻', score1: null, score2: null, time: '3:00 PM', court: 'Court 3', group: 'A' },
    { id: 16, team1: 'Argentina', flag1: '🇦🇷', team2: 'Ecuador', flag2: '🇪🇨', score1: null, score2: null, time: '4:00 PM', court: 'Court 1', group: 'B' },
    { id: 17, team1: 'Thailand', flag1: '🇹🇭', team2: 'Colombia', flag2: '🇨🇴', score1: null, score2: null, time: '4:00 PM', court: 'Court 2', group: 'B' },
    { id: 18, team1: 'Brazil', flag1: '🇧🇷', team2: 'El Salvador', flag2: '🇸🇻', score1: null, score2: null, time: '4:00 PM', court: 'Court 3', group: 'C' },
    { id: 19, team1: 'Kazakhstan', flag1: '🇰🇿', team2: 'Angola', flag2: '🇦🇴', score1: null, score2: null, time: '5:00 PM', court: 'Court 1', group: 'C' },
    { id: 20, team1: 'Iraq', flag1: '🇮🇶', team2: 'Cuba', flag2: '🇨🇺', score1: null, score2: null, time: '5:00 PM', court: 'Court 2', group: 'D' },
    { id: 21, team1: 'Uzbekistan', flag1: '🇺🇿', team2: 'USA', flag2: '🇺🇸', score1: null, score2: null, time: '5:00 PM', court: 'Court 3', group: 'A' },
  ]);

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

  const updateScore = (matchId) => {
    const score1 = parseInt(editScore1) || 0;
    const score2 = parseInt(editScore2) || 0;
    
    setMatches(matches.map(m => 
      m.id === matchId ? { ...m, score1, score2 } : m
    ));
    
    setEditingMatch(null);
    setEditScore1('');
    setEditScore2('');
  };

  const addTopScorer = () => {
    if (newGoal.playerName && newGoal.team && newGoal.goals > 0) {
      const existing = topScorers.findIndex(s => s.playerName === newGoal.playerName && s.team === newGoal.team);
      if (existing !== -1) {
        const updated = [...topScorers];
        updated[existing].goals += newGoal.goals;
        setTopScorers(updated.sort((a, b) => b.goals - a.goals));
      } else {
        setTopScorers([...topScorers, newGoal].sort((a, b) => b.goals - a.goals));
      }
      setNewGoal({ playerName: '', team: '', goals: 1 });
    }
  };

  const deleteTopScorer = (idx) => {
    setTopScorers(topScorers.filter((_, i) => i !== idx));
  };

  const calculateStandings = (group) => {
    const teams = groupsData[group];
    const standings = {};
    
    teams.forEach(team => {
      standings[team] = { wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, flag: allTeams.find(t => t.name === team)?.flag || '' };
    });

    matches.forEach(match => {
      if (match.group === group && match.score1 !== null && match.score2 !== null) {
        standings[match.team1].gf += match.score1;
        standings[match.team1].ga += match.score2;
        standings[match.team2].gf += match.score2;
        standings[match.team2].ga += match.score1;

        if (match.score1 > match.score2) {
          standings[match.team1].wins++;
          standings[match.team2].losses++;
        } else if (match.score2 > match.score1) {
          standings[match.team2].wins++;
          standings[match.team1].losses++;
        } else {
          standings[match.team1].draws++;
          standings[match.team2].draws++;
        }
      }
    });

    return Object.entries(standings)
      .map(([name, stats]) => ({
        name,
        ...stats,
        gd: stats.gf - stats.ga,
        points: stats.wins * 3 + stats.draws * 1,
      }))
      .sort((a, b) => b.points - a.points || b.gd - a.gd);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff' }}>
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', background: '#1a1a1a', borderBottom: '3px solid #BFFF00', padding: '1rem', zIndex: 50 }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
            <div style={{ fontSize: '2rem' }}>⚽</div>
            <span style={{ fontWeight: '900', color: '#BFFF00', fontSize: '1.125rem' }}>CUP OF NATIONS 2026</span>
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
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {matches.map((match) => (
                <div key={match.id} style={{ borderRadius: '0.5rem', padding: '1rem', background: 'rgba(100, 100, 100, 0.1)', border: '2px solid #808080' }}>
                  <div style={{ color: '#808080', fontWeight: '900', fontSize: '0.75rem', marginBottom: '0.75rem' }}>⏱️ {match.time} • {match.court}</div>
                  
                  {editingMatch === match.id ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <input
                        type="number"
                        value={editScore1}
                        onChange={(e) => setEditScore1(e.target.value)}
                        placeholder="Score 1"
                        style={{ background: '#333', border: '2px solid #555', borderRadius: '0.5rem', padding: '0.5rem', color: '#fff', fontSize: '1.25rem', fontWeight: '900', textAlign: 'center' }}
                      />
                      <input
                        type="number"
                        value={editScore2}
                        onChange={(e) => setEditScore2(e.target.value)}
                        placeholder="Score 2"
                        style={{ background: '#333', border: '2px solid #555', borderRadius: '0.5rem', padding: '0.5rem', color: '#fff', fontSize: '1.25rem', fontWeight: '900', textAlign: 'center' }}
                      />
                      <button onClick={() => updateScore(match.id)} style={{ background: '#BFFF00', color: '#000', fontWeight: '900', border: 'none', borderRadius: '0.5rem', padding: '0.5rem', cursor: 'pointer' }}>SAVE</button>
                    </div>
                  ) : (
                    <>
                      <div style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{match.flag1} {match.team1}</div>
                      <div style={{ textAlign: 'center', margin: '0.75rem 0', fontSize: '1.75rem', fontWeight: '900', color: '#808080' }}>
                        {match.score1 !== null ? match.score1 : '?'} — {match.score2 !== null ? match.score2 : '?'}
                      </div>
                      <div style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{match.flag2} {match.team2}</div>
                      
                      {isAdmin && (
                        <button onClick={() => { setEditingMatch(match.id); setEditScore1(match.score1 || ''); setEditScore2(match.score2 || ''); }} style={{ background: '#FF00FF', color: '#000', fontWeight: '900', border: 'none', borderRadius: '0.5rem', padding: '0.5rem', marginTop: '0.5rem', cursor: 'pointer' }}>EDIT SCORE</button>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Standings Page */}
      {currentPage === 'standings' && (
        <div style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
          <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '2rem 1.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', color: '#BFFF00', marginBottom: '2rem' }}>STANDINGS</h1>
            
            {Object.keys(groupsData).map((group) => (
              <div key={group} style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#FF00FF', marginBottom: '1rem' }}>GROUP {group}</h2>
                <div style={{ borderRadius: '0.5rem', overflow: 'hidden', border: '2px solid #BFFF00' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 0.5fr 0.5fr 0.5fr 1fr 0.5fr', gap: '0.5rem', padding: '1rem', background: 'rgba(191, 255, 0, 0.2)', fontWeight: '900', fontSize: '0.875rem' }}>
                    <div>TEAM</div>
                    <div style={{ textAlign: 'center' }}>W</div>
                    <div style={{ textAlign: 'center' }}>D</div>
                    <div style={{ textAlign: 'center' }}>L</div>
                    <div style={{ textAlign: 'center' }}>GF-GA</div>
                    <div style={{ textAlign: 'center' }}>PTS</div>
                  </div>
                  
                  {calculateStandings(group).map((team, idx) => (
                    <div key={team.name} style={{ display: 'grid', gridTemplateColumns: '2fr 0.5fr 0.5fr 0.5fr 1fr 0.5fr', gap: '0.5rem', padding: '1rem', borderBottom: '1px solid #333', textAlign: 'center' }}>
                      <div style={{ textAlign: 'left' }}><span style={{ fontWeight: 'bold' }}>{idx + 1}.</span> {team.flag} {team.name}</div>
                      <div style={{ fontWeight: 'bold' }}>{team.wins}</div>
                      <div style={{ fontWeight: 'bold' }}>{team.draws}</div>
                      <div style={{ fontWeight: 'bold' }}>{team.losses}</div>
                      <div style={{ fontWeight: 'bold' }}>{team.gf}-{team.ga}</div>
                      <div style={{ fontWeight: '900', color: '#BFFF00' }}>{team.points}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Top Scorers Page */}
      {currentPage === 'topscorers' && (
        <div style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
          <div style={{ maxWidth: '60rem', margin: '0 auto', padding: '2rem 1.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', color: '#BFFF00', marginBottom: '2rem' }}>TOP SCORERS</h1>
            
            {isAdmin && (
              <div style={{ borderRadius: '0.5rem', padding: '1.5rem', marginBottom: '2rem', background: 'rgba(255, 0, 255, 0.1)', border: '2px solid #FF00FF' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#FF00FF', marginBottom: '1rem' }}>LOG GOAL</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem' }}>
                  <input
                    type="text"
                    placeholder="Player Name"
                    value={newGoal.playerName}
                    onChange={(e) => setNewGoal({ ...newGoal, playerName: e.target.value })}
                    style={{ background: '#333', border: '2px solid #555', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                  />
                  <select
                    value={newGoal.team}
                    onChange={(e) => setNewGoal({ ...newGoal, team: e.target.value })}
                    style={{ background: '#333', border: '2px solid #555', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                  >
                    <option value="">Select Team</option>
                    {allTeams.map((t) => (
                      <option key={t.name} value={t.name}>{t.flag} {t.name}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min="1"
                    value={newGoal.goals}
                    onChange={(e) => setNewGoal({ ...newGoal, goals: parseInt(e.target.value) || 1 })}
                    style={{ background: '#333', border: '2px solid #555', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                  />
                  <button
                    onClick={addTopScorer}
                    style={{ background: '#FFFF00', color: '#000', fontWeight: '900', border: 'none', borderRadius: '0.5rem', padding: '0.75rem', cursor: 'pointer' }}
                  >
                    + ADD
                  </button>
                </div>
              </div>
            )}

            <div style={{ borderRadius: '0.5rem', overflow: 'hidden', border: '2px solid #BFFF00' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '0.5fr 1.5fr 1.5fr 1fr', gap: '1rem', padding: '1rem', background: 'rgba(191, 255, 0, 0.2)', fontWeight: '900', fontSize: '0.9rem' }}>
                <div style={{ textAlign: 'center' }}>RANK</div>
                <div>PLAYER</div>
                <div>TEAM</div>
                <div style={{ textAlign: 'center' }}>GOALS</div>
              </div>
              
              {topScorers.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>No scorers yet. {isAdmin && 'Start logging goals!'}</div>
              ) : (
                topScorers.map((scorer, idx) => (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '0.5fr 1.5fr 1.5fr 1fr', gap: '1rem', padding: '1rem', borderBottom: '1px solid #333', textAlign: 'center', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: '900' }}>{idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1}</div>
                    <div style={{ fontWeight: 'bold', textAlign: 'left' }}>{scorer.playerName}</div>
                    <div style={{ fontWeight: 'bold', textAlign: 'left' }}>{scorer.team}</div>
                    <div style={{ fontWeight: '900', color: '#BFFF00', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{scorer.goals}</span>
                      {isAdmin && (
                        <button onClick={() => deleteTopScorer(idx)} style={{ background: 'none', border: 'none', color: '#FF00FF', cursor: 'pointer', fontSize: '1rem' }}>✕</button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TournamentApp;
