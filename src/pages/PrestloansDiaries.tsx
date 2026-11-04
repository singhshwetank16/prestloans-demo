import React, { useState, useEffect } from 'react';
import { DIARY_EVENTS, DiaryEvent, DiaryPhoto } from '../data/diaries';

export const PrestloansDiaries: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<{ photo: DiaryPhoto; index: number; total: number } | null>(null);

  useEffect(() => {
    // Re-trigger global client-side script listeners if defined
    if (typeof (window as any).initApp === 'function') {
      (window as any).initApp();
    }
  }, [activeEventId]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, activeEventId]);

  const activeEvent = DIARY_EVENTS.find(e => e.id === activeEventId);
  const currentPhotosList = activeEvent ? activeEvent.photos : DIARY_EVENTS.flatMap(e => e.photos);

  const handleSelectEvent = (id: string) => {
    setActiveEventId(id);
    const el = document.getElementById('diaries-content-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToAll = () => {
    setActiveEventId('all');
    const el = document.getElementById('diaries-content-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLightbox = (photo: DiaryPhoto, index: number, total: number) => {
    setSelectedPhoto({ photo, index, total });
  };

  const navigateLightbox = (direction: number) => {
    if (!selectedPhoto) return;
    const newIndex = selectedPhoto.index + direction;
    if (newIndex >= 0 && newIndex < currentPhotosList.length) {
      setSelectedPhoto({
        photo: currentPhotosList[newIndex],
        index: newIndex,
        total: currentPhotosList.length
      });
    }
  };

  const totalPhotosCount = DIARY_EVENTS.reduce((acc, curr) => acc + curr.photos.length, 0);

  return (
    <>
      {/* PAGE HERO BANNER */}
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.65rem' }}></i>
            <a href="/media">Media</a>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.65rem' }}></i>
            <span>PrestLoans Diaries</span>
          </div>
          <h1 className="page-banner-title">PrestLoans Diaries</h1>
          <p className="page-banner-sub">
            A memorable showcase of events, leadership summits, festive celebrations, milestone achievements, and team stories from Prest Loans.
          </p>
        </div>
      </section>

      {/* MAIN DIARIES SECTION */}
      <section id="diaries-content-section" className="section" style={{ background: '#fdfbfd', minHeight: '650px', paddingTop: '40px' }}>
        <div className="container">

          {/* EVENT FILTER / TAB CONTROLS */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '16px 20px',
            boxShadow: '0 4px 20px rgba(112, 20, 110, 0.05)',
            border: '1px solid #f1e6f1',
            marginBottom: '35px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '14px',
              borderBottom: '1px solid #f8f0f8',
              paddingBottom: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #70146e, #a21c9f)',
                  color: '#ffffff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem'
                }}>
                  <i className="fa-solid fa-calendar-check"></i>
                </span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                    Select Event Album
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
                    Click on any event below to view all its pictures and moments
                  </p>
                </div>
              </div>

              <span style={{
                background: '#fcf2fc',
                color: '#70146e',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '700',
                border: '1px solid #f1d5f1'
              }}>
                <i className="fa-solid fa-images" style={{ marginRight: '6px' }}></i>
                {totalPhotosCount} Total Photos • {DIARY_EVENTS.length} Events
              </span>
            </div>

            {/* TAB BUTTONS */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              alignItems: 'center'
            }}>
              <button
                type="button"
                onClick={handleBackToAll}
                style={{
                  padding: '9px 18px',
                  borderRadius: '30px',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  border: activeEventId === 'all' ? '1.5px solid #70146e' : '1.5px solid #e2e8f0',
                  background: activeEventId === 'all' ? 'linear-gradient(135deg, #70146e, #921b90)' : '#ffffff',
                  color: activeEventId === 'all' ? '#ffffff' : '#475569',
                  transition: 'all 0.25s ease',
                  boxShadow: activeEventId === 'all' ? '0 4px 12px rgba(112, 20, 110, 0.2)' : 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="fa-solid fa-border-all"></i>
                All Events
                <span style={{
                  background: activeEventId === 'all' ? 'rgba(255,255,255,0.25)' : '#f1f5f9',
                  color: activeEventId === 'all' ? '#ffffff' : '#64748b',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '0.75rem'
                }}>
                  {DIARY_EVENTS.length}
                </span>
              </button>

              {DIARY_EVENTS.map(event => {
                const isActive = activeEventId === event.id;
                return (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => handleSelectEvent(event.id)}
                    style={{
                      padding: '9px 18px',
                      borderRadius: '30px',
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      border: isActive ? '1.5px solid #70146e' : '1.5px solid #e2e8f0',
                      background: isActive ? 'linear-gradient(135deg, #70146e, #921b90)' : '#ffffff',
                      color: isActive ? '#ffffff' : '#475569',
                      transition: 'all 0.25s ease',
                      boxShadow: isActive ? '0 4px 12px rgba(112, 20, 110, 0.2)' : 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <i className="fa-solid fa-folder-open" style={{ color: isActive ? '#ffffff' : '#f05a28' }}></i>
                    {event.name}
                    <span style={{
                      background: isActive ? 'rgba(255,255,255,0.25)' : '#f1f5f9',
                      color: isActive ? '#ffffff' : '#64748b',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '0.75rem'
                    }}>
                      {event.photos.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* VIEW 1: ALL EVENTS OVERVIEW (GRID OF EVENT CARDS) */}
          {activeEventId === 'all' && (
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>
                    Featured Event Albums
                  </h2>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                    Click on any event card to open its photo gallery
                  </p>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                gap: '26px'
              }}>
                {DIARY_EVENTS.map(event => (
                  <div
                    key={event.id}
                    onClick={() => handleSelectEvent(event.id)}
                    style={{
                      background: '#ffffff',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
                      border: '1px solid #f1eaf1',
                      cursor: 'pointer',
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(112, 20, 110, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.06)';
                    }}
                  >
                    {/* Event Cover Image */}
                    <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                      <img
                        src={event.coverImage}
                        alt={event.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(15, 23, 42, 0.75)',
                        backdropFilter: 'blur(4px)',
                        color: '#ffffff',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <i className="fa-solid fa-tag" style={{ color: '#f05a28' }}></i>
                        {event.badge || event.category}
                      </div>
                      <div style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        background: '#70146e',
                        color: '#ffffff',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}>
                        <i className="fa-solid fa-camera"></i>
                        {event.photos.length} Photos
                      </div>
                    </div>

                    {/* Event Info */}
                    <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#f05a28', fontWeight: '700', marginBottom: '8px' }}>
                        <i className="fa-regular fa-calendar"></i>
                        <span>{event.date}</span>
                        {event.location && (
                          <>
                            <span style={{ color: '#cbd5e1' }}>•</span>
                            <i className="fa-solid fa-location-dot" style={{ color: '#64748b' }}></i>
                            <span style={{ color: '#64748b', fontWeight: '500' }}>{event.location}</span>
                          </>
                        )}
                      </div>

                      <h3 style={{
                        fontSize: '1.18rem',
                        fontWeight: '800',
                        color: '#0f172a',
                        lineHeight: '1.35',
                        marginBottom: '10px'
                      }}>
                        {event.name}
                      </h3>

                      <p style={{
                        fontSize: '0.88rem',
                        color: '#64748b',
                        lineHeight: '1.5',
                        marginBottom: '18px',
                        flex: 1
                      }}>
                        {event.description}
                      </p>

                      <div style={{
                        paddingTop: '14px',
                        borderTop: '1px solid #f1eaf1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <span style={{ fontSize: '0.82rem', color: '#70146e', fontWeight: '700' }}>
                          Browse Album →
                        </span>
                        <span style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: '#fcf2fc',
                          color: '#70146e',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.85rem'
                        }}>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 2: SINGLE EVENT ALBUM (FULL PHOTO GRID) */}
          {activeEvent && (
            <div>
              {/* Event Header Banner */}
              <div style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #faf3fa 100%)',
                borderRadius: '20px',
                padding: '30px 32px',
                border: '1.5px solid #f1daf1',
                boxShadow: '0 8px 30px rgba(112, 20, 110, 0.06)',
                marginBottom: '32px',
                position: 'relative'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '16px',
                  marginBottom: '12px'
                }}>
                  <button
                    type="button"
                    onClick={handleBackToAll}
                    style={{
                      background: '#ffffff',
                      border: '1.5px solid #70146e',
                      color: '#70146e',
                      padding: '8px 18px',
                      borderRadius: '30px',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 2px 8px rgba(112, 20, 110, 0.1)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                    All Events
                  </button>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{
                      background: '#f05a28',
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.78rem',
                      fontWeight: '700'
                    }}>
                      {activeEvent.category}
                    </span>
                    <span style={{
                      background: '#70146e',
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.78rem',
                      fontWeight: '700'
                    }}>
                      <i className="fa-solid fa-images" style={{ marginRight: '6px' }}></i>
                      {activeEvent.photos.length} Photos in Album
                    </span>
                  </div>
                </div>

                <h2 style={{
                  fontSize: '1.85rem',
                  fontWeight: '800',
                  color: '#0f172a',
                  marginBottom: '8px',
                  lineHeight: '1.3'
                }}>
                  {activeEvent.name}
                </h2>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#64748b',
                  fontSize: '0.9rem',
                  marginBottom: '12px',
                  flexWrap: 'wrap'
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#f05a28', fontWeight: '700' }}>
                    <i className="fa-regular fa-calendar"></i>
                    {activeEvent.date}
                  </span>
                  {activeEvent.location && (
                    <>
                      <span>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <i className="fa-solid fa-location-dot" style={{ color: '#70146e' }}></i>
                        {activeEvent.location}
                      </span>
                    </>
                  )}
                </div>

                <p style={{
                  fontSize: '0.98rem',
                  color: '#475569',
                  lineHeight: '1.6',
                  maxWidth: '850px',
                  margin: 0
                }}>
                  {activeEvent.description}
                </p>
              </div>

              {/* Photos Grid for this Event */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px'
              }}>
                {activeEvent.photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    onClick={() => openLightbox(photo, index, activeEvent.photos.length)}
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 6px 20px rgba(15, 23, 42, 0.06)',
                      border: '1px solid #f1eaf1',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 14px 30px rgba(112, 20, 110, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 23, 42, 0.06)';
                    }}
                  >
                    <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                      <img
                        src={photo.src}
                        alt={photo.title}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease'
                        }}
                      />
                      {/* Hover Overlay */}
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(112, 20, 110, 0.9) 0%, rgba(112, 20, 110, 0.2) 60%, transparent 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '20px'
                      }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                      >
                        <div style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.9)',
                          color: '#70146e',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.1rem',
                          marginBottom: '10px',
                          alignSelf: 'flex-start'
                        }}>
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                        <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700', margin: '0 0 4px' }}>
                          {photo.title}
                        </h4>
                        {photo.caption && (
                          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.8rem', margin: 0 }}>
                            {photo.caption}
                          </p>
                        )}
                      </div>
                    </div>

                    <div style={{ padding: '14px 16px' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1e293b', margin: '0 0 4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {photo.title}
                      </h4>
                      {photo.caption && (
                        <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {photo.caption}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(15, 23, 42, 0.94)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Modal Container */}
          <div
            style={{
              position: 'relative',
              maxWidth: '1050px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title and Close Button */}
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#ffffff',
              marginBottom: '12px'
            }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#f05a28', fontWeight: '700', textTransform: 'uppercase' }}>
                  Photo {selectedPhoto.index + 1} of {selectedPhoto.total}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: '2px 0 0', color: '#ffffff' }}>
                  {selectedPhoto.photo.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  color: '#ffffff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f05a28'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Image Preview with Next/Prev Arrows */}
            <div style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxHeight: '75vh'
            }}>
              {/* Prev Button */}
              {selectedPhoto.index > 0 && (
                <button
                  type="button"
                  onClick={() => navigateLightbox(-1)}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    zIndex: 10,
                    background: 'rgba(112, 20, 110, 0.8)',
                    color: '#ffffff',
                    border: 'none',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.4)'
                  }}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              )}

              <img
                src={selectedPhoto.photo.src}
                alt={selectedPhoto.photo.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '72vh',
                  borderRadius: '12px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                  objectFit: 'contain'
                }}
              />

              {/* Next Button */}
              {selectedPhoto.index < selectedPhoto.total - 1 && (
                <button
                  type="button"
                  onClick={() => navigateLightbox(1)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    zIndex: 10,
                    background: 'rgba(112, 20, 110, 0.8)',
                    color: '#ffffff',
                    border: 'none',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.4)'
                  }}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              )}
            </div>

            {/* Caption */}
            {selectedPhoto.photo.caption && (
              <p style={{
                color: '#cbd5e1',
                fontSize: '0.95rem',
                textAlign: 'center',
                marginTop: '12px',
                maxWidth: '700px'
              }}>
                {selectedPhoto.photo.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
