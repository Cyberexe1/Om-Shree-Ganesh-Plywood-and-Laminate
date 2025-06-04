import React from 'react';
import { FaGithub, FaMapMarkerAlt, FaEnvelope, FaCode, FaBriefcase, FaHeart } from 'react-icons/fa';

const DeveloperProfile: React.FC = () => {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: 20,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      padding: '32px 0', // vertical only
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 40,
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      marginTop: 100,
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 4,
        background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb)',
      }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', zIndex: 1 }}>
        <div style={{
          width: 160,
          height: 160,
          borderRadius: '50%',
          objectFit: 'cover',
          border: '4px solid #fff',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 40,
          fontWeight: 'bold',
          marginBottom: 24,
        }}>
          VT
        </div>
      </div>
      <div style={{ paddingLeft: 20, zIndex: 1 }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#2d3748',
          marginBottom: 8,
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Vikas Tiwari</h1>
        <p style={{ fontSize: '1.3rem', color: '#718096', marginBottom: 20, fontWeight: 500 }}>Full Stack Developer</p>
        <a
          href="https://github.com/Cyberexe1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'linear-gradient(135deg, #24292e, #586069)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: 25,
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            marginBottom: 30,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <FaGithub /> GitHub Profile
        </a>
        <div style={{ display: 'grid', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 15, padding: '15px 0', borderBottom: '1px solid rgba(226, 232, 240, 0.8)' }}>
            <FaMapMarkerAlt style={{ width: 20, height: 20, color: '#667eea', fontSize: 18, marginTop: 2, flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 600, color: '#4a5568', marginBottom: 5, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>Location</div>
              <div style={{ color: '#2d3748', lineHeight: 1.6, fontSize: '1rem' }}>Mumbai, India</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 15, padding: '15px 0', borderBottom: '1px solid rgba(226, 232, 240, 0.8)' }}>
            <FaEnvelope style={{ width: 20, height: 20, color: '#667eea', fontSize: 18, marginTop: 2, flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 600, color: '#4a5568', marginBottom: 5, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>Email</div>
              <div style={{ color: '#2d3748', lineHeight: 1.6, fontSize: '1rem' }}>
                <a href="mailto:vikastiwari1045@gmail.com" style={{ color: '#667eea', textDecoration: 'none', transition: 'color 0.3s ease' }}>vikastiwari1045@gmail.com</a>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 15, padding: '15px 0', borderBottom: '1px solid rgba(226, 232, 240, 0.8)' }}>
            <FaCode style={{ width: 20, height: 20, color: '#667eea', fontSize: 18, marginTop: 2, flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 600, color: '#4a5568', marginBottom: 5, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>Tech Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 5 }}>
                {['HTML','CSS','JavaScript','React','Node.js','Python','Django','MySQL'].map((tech) => (
                  <span key={tech} style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: 15,
                    fontSize: '0.85rem',
                    fontWeight: 500,
                  }}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 15, padding: '15px 0', borderBottom: '1px solid rgba(226, 232, 240, 0.8)' }}>
            <FaBriefcase style={{ width: 20, height: 20, color: '#667eea', fontSize: 18, marginTop: 2, flexShrink: 0 }} />
            
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 15, padding: '15px 0' }}>
            <FaHeart style={{ width: 20, height: 20, color: '#667eea', fontSize: 18, marginTop: 2, flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 600, color: '#4a5568', marginBottom: 5, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>Passion</div>
              <div style={{ color: '#2d3748', lineHeight: 1.6, fontSize: '1rem' }}>Loves building responsive web apps and experimenting with AI integration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
