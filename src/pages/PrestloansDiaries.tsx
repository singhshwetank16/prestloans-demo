import React, { useState, useEffect, useMemo, useRef } from 'react';
import { DIARY_EVENTS, DiaryEvent, DiaryPhoto } from '../data/diaries';

// Filter categories
type CategoryKey = 'all' | 'festivals' | 'corporate' | 'national' | 'outings';

interface CategoryTab {
  key: CategoryKey;
  label: string;
  icon: string;
  match: (e: DiaryEvent) => boolean;
}

const CATEGORIES: CategoryTab[] = [
  {
    key: 'all',
    label: 'All Albums',
    icon: 'fa-solid fa-shapes',
    match: () => true
  },
  {
    key: 'festivals',
    label: 'Festivals & Celebrations',
    icon: 'fa-solid fa-cake-candles',
    match: (e) => ['Festival', 'Celebration', 'Special Occasion', 'Culture'].includes(e.category)
  },
  {
    key: 'corporate',
    label: 'Corporate & Awards',
    icon: 'fa-solid fa-award',
    match: (e) => ['Annual Day', 'Awards', 'Milestones'].includes(e.category)
  },
  {
    key: 'national',
    label: 'National Pride',
    icon: 'fa-solid fa-flag',
    match: (e) => ['National Event'].includes(e.category)
  },
  {
    key: 'outings',
    label: 'Outings & Wellness',
    icon: 'fa-solid fa-mountain-sun',
    match: (e) => ['Team Offsite', 'Wellness'].includes(e.category)
  }
];

export const PrestloansDiaries: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [activeEventId, setActiveEventId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPlayingSlideshow, setIsPlayingSlideshow] = useState<boolean>(false);
  const thumbnailStripRef = useRef<HTMLDivElement>(null);

  // Active event object
  const activeEvent = useMemo(() => {
    return DIARY_EVENTS.find(e => e.id === activeEventId) || null;
  }, [activeEventId]);

  // Current active photos list for lightbox
  const currentPhotos = useMemo(() => {
    return activeEvent ? activeEvent.photos : [];
  }, [activeEvent]);

  // Filtered events for overview
  const filteredEvents = useMemo(() => {
    const cat = CATEGORIES.find(c => c.key === activeCategory);
    return DIARY_EVENTS.filter(e => {
      const matchesCat = cat ? cat.match(e) : true;
      const matchesSearch = !searchQuery.trim() || 
        e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (e.location && e.location.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Total counts
  const totalPhotosCount = useMemo(() => {
    return DIARY_EVENTS.reduce((sum, e) => sum + e.photos.length, 0);
  }, []);

  // Event index for Prev/Next event navigation
  const currentEventIndex = useMemo(() => {
    if (!activeEvent) return -1;
    return DIARY_EVENTS.findIndex(e => e.id === activeEvent.id);
  }, [activeEvent]);

  const prevEvent = currentEventIndex > 0 ? DIARY_EVENTS[currentEventIndex - 1] : null;
  const nextEvent = currentEventIndex < DIARY_EVENTS.length - 1 ? DIARY_EVENTS[currentEventIndex + 1] : null;

  // Handle Event Selection
  const handleOpenEvent = (id: string) => {
    setActiveEventId(id);
    const contentEl = document.getElementById('diaries-root-section');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToOverview = () => {
    setActiveEventId('all');
    setLightboxIndex(null);
    setIsPlayingSlideshow(false);
    const contentEl = document.getElementById('diaries-root-section');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lightbox handlers
  const openLightboxAt = (index: number) => {
    setLightboxIndex(index);
    setIsPlayingSlideshow(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsPlayingSlideshow(false);
  };

  const nextPhoto = () => {
    if (lightboxIndex === null || !currentPhotos.length) return;
    setLightboxIndex((lightboxIndex + 1) % currentPhotos.length);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null || !currentPhotos.length) return;
    setLightboxIndex((lightboxIndex - 1 + currentPhotos.length) % currentPhotos.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, currentPhotos.length]);

  // Slideshow timer
  useEffect(() => {
    if (!isPlayingSlideshow || lightboxIndex === null) return;
    const interval = setInterval(() => {
      setLightboxIndex(prev => (prev === null ? 0 : (prev + 1) % currentPhotos.length));
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlayingSlideshow, lightboxIndex, currentPhotos.length]);

  // Auto scroll active thumbnail into view
  useEffect(() => {
    if (lightboxIndex !== null && thumbnailStripRef.current) {
      const activeThumb = thumbnailStripRef.current.children[lightboxIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [lightboxIndex]);

  return (
    <>
      {/* PAGE BANNER */}
      <section className="page-banner" style={{ background: 'linear-gradient(135deg, #2b032b 0%, #4a0d48 50%, #70146e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.12, background: 'radial-gradient(circle at 20% 40%, #f05a28 0%, transparent 60%), radial-gradient(circle at 80% 60%, #a21c9f 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumbs" style={{ justifyContent: 'center', marginBottom: '14px' }}>
            <a href="/" style={{ color: '#e2e8f0' }}>Home</a>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.65rem', color: '#94a3b8' }}></i>
            <a href="/media" style={{ color: '#e2e8f0' }}>Media</a>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.65rem', color: '#94a3b8' }}></i>
            <span style={{ color: '#f05a28', fontWeight: '700' }}>PrestLoans Diaries</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 16px', borderRadius: '30px', color: '#fbd5cb', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>
            <i className="fa-solid fa-camera-retro" style={{ color: '#f05a28' }}></i>
            Corporate Scrapbook & Moments
          </div>

          <h1 className="page-banner-title" style={{ fontSize: '2.6rem', fontWeight: '800', letterSpacing: '-0.5px', marginBottom: '14px' }}>
            PrestLoans <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fed7aa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Diaries</span>
          </h1>

          <p className="page-banner-sub" style={{ maxWidth: '720px', margin: '0 auto 20px', color: '#f1f5f9', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Explore genuine celebrations, national festivals, award ceremonies, and team milestones that make the Prest Loans family extraordinary.
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '18px', background: 'rgba(15, 23, 42, 0.45)', backdropFilter: 'blur(8px)', padding: '8px 22px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', fontSize: '0.85rem' }}>
            <span><strong style={{ color: '#f05a28' }}>12</strong> Featured Albums</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
            <span><strong style={{ color: '#38bdf8' }}>{totalPhotosCount}</strong> High-Res Photos</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
            <span><strong style={{ color: '#4ade80' }}>2025 - 2026</strong> Archive</span>
          </div>
        </div>
      </section>

      {/* ROOT DIARIES SECTION */}
      <section id="diaries-root-section" className="section" style={{ background: '#fcfafc', minHeight: '800px', paddingTop: '45px', paddingBottom: '80px' }}>
        <div className="container">

          {/* VIEW A: ALL ALBUMS OVERVIEW */}
          {activeEventId === 'all' && (
            <div>
              {/* STICKY CONTROL DOCK (CATEGORY TABS + SEARCH & SELECTOR) */}
              <div style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '16px 20px',
                boxShadow: '0 10px 30px rgba(112, 20, 110, 0.05)',
                border: '1px solid #f1e4f1',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                {/* CATEGORY FILTER PILLS */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  {CATEGORIES.map(cat => {
                    const isActive = activeCategory === cat.key;
                    const count = DIARY_EVENTS.filter(e => cat.match(e)).length;
                    return (
                      <button
                        key={cat.key}
                        type="button"
                        onClick={() => setActiveCategory(cat.key)}
                        style={{
                          background: isActive ? 'linear-gradient(135deg, #70146e 0%, #991b96 100%)' : '#f8fafc',
                          color: isActive ? '#ffffff' : '#475569',
                          border: isActive ? '1px solid #70146e' : '1px solid #e2e8f0',
                          padding: '8px 16px',
                          borderRadius: '30px',
                          fontSize: '0.86rem',
                          fontWeight: '700',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          boxShadow: isActive ? '0 4px 14px rgba(112, 20, 110, 0.22)' : 'none',
                          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      >
                        <i className={cat.icon} style={{ color: isActive ? '#ffffff' : '#f05a28', fontSize: '0.85rem' }}></i>
                        {cat.label}
                        <span style={{
                          background: isActive ? 'rgba(255,255,255,0.25)' : '#e2e8f0',
                          color: isActive ? '#ffffff' : '#475569',
                          padding: '2px 7px',
                          borderRadius: '10px',
                          fontSize: '0.72rem'
                        }}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* SEARCH & QUICK JUMP */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  {/* Search box */}
                  <div style={{ position: 'relative' }}>
                    <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '0.85rem' }}></i>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search album..."
                      style={{
                        padding: '8px 32px 8px 34px',
                        borderRadius: '30px',
                        border: '1.5px solid #e2e8f0',
                        fontSize: '0.85rem',
                        outline: 'none',
                        width: '180px',
                        transition: 'border-color 0.2s ease, width 0.3s ease',
                        background: '#ffffff'
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#70146e'; e.currentTarget.style.width = '220px'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.width = '180px'; }}
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'transparent', color: '#94a3b8', cursor: 'pointer', fontSize: '0.85rem' }}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    )}
                  </div>

                  {/* Quick Select Dropdown */}
                  <select
                    value=""
                    onChange={(e) => { if (e.target.value) handleOpenEvent(e.target.value); }}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '30px',
                      border: '1.5px solid #f05a28',
                      color: '#f05a28',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      background: '#fff7ed',
                      cursor: 'pointer',
                      outline: 'none'
                    }}
                  >
                    <option value="" disabled>Jump to Album ▾</option>
                    {DIARY_EVENTS.map(event => (
                      <option key={event.id} value={event.id}>
                        {event.name} ({event.photos.length} photos)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ALBUM CARDS GRID */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '30px'
              }}>
                {filteredEvents.map((event) => {
                  const previewThumbs = event.photos.slice(1, 4);
                  return (
                    <div
                      key={event.id}
                      onClick={() => handleOpenEvent(event.id)}
                      style={{
                        background: '#ffffff',
                        borderRadius: '22px',
                        overflow: 'hidden',
                        boxShadow: '0 6px 24px rgba(112, 20, 110, 0.05)',
                        border: '1px solid #f1e4f1',
                        cursor: 'pointer',
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(112, 20, 110, 0.14)';
                        e.currentTarget.style.borderColor = '#e4c4e4';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 6px 24px rgba(112, 20, 110, 0.05)';
                        e.currentTarget.style.borderColor = '#f1e4f1';
                      }}
                    >
                      {/* Top Album Cover */}
                      <div style={{ position: 'relative', height: '230px', overflow: 'hidden', background: '#0f172a' }}>
                        <img
                          src={event.coverImage}
                          alt={event.name}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />

                        {/* Top Gradient Overlay */}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,23,42,0.45) 0%, transparent 40%, rgba(15,23,42,0.7) 100%)', pointerEvents: 'none' }}></div>

                        {/* Category Badge */}
                        <div style={{
                          position: 'absolute',
                          top: '14px',
                          left: '14px',
                          background: 'rgba(255, 255, 255, 0.92)',
                          backdropFilter: 'blur(4px)',
                          color: '#70146e',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: '800',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f05a28' }}></span>
                          {event.badge || event.category}
                        </div>

                        {/* Photo Count Tag */}
                        <div style={{
                          position: 'absolute',
                          top: '14px',
                          right: '14px',
                          background: 'rgba(15, 23, 42, 0.8)',
                          backdropFilter: 'blur(4px)',
                          color: '#ffffff',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.78rem',
                          fontWeight: '700',
                          border: '1px solid rgba(255,255,255,0.2)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <i className="fa-solid fa-camera" style={{ color: '#f05a28' }}></i>
                          {event.photos.length} Photos
                        </div>

                        {/* Date & Location at bottom of photo */}
                        <div style={{
                          position: 'absolute',
                          bottom: '12px',
                          left: '16px',
                          right: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          color: '#ffffff',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          textShadow: '0 2px 4px rgba(0,0,0,0.6)'
                        }}>
                          <span><i className="fa-regular fa-calendar" style={{ marginRight: '5px', color: '#fed7aa' }}></i>{event.date}</span>
                          {event.location && <span><i className="fa-solid fa-location-dot" style={{ marginRight: '4px', color: '#f05a28' }}></i>{event.location}</span>}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontWeight: '800',
                          color: '#0f172a',
                          marginBottom: '8px',
                          lineHeight: '1.35'
                        }}>
                          {event.name}
                        </h3>

                        <p style={{
                          fontSize: '0.88rem',
                          color: '#64748b',
                          lineHeight: '1.5',
                          marginBottom: '16px',
                          flex: 1
                        }}>
                          {event.description}
                        </p>

                        {/* Mini Photo Strip Preview */}
                        {previewThumbs.length > 0 && (
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: '#faf5fa',
                            padding: '8px',
                            borderRadius: '12px',
                            border: '1px solid #f1e4f1',
                            marginBottom: '16px'
                          }}>
                            {previewThumbs.map((thumb) => (
                              <div key={thumb.id} style={{ width: '48px', height: '48px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                                <img src={thumb.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                              </div>
                            ))}
                            <div style={{ flex: 1, paddingLeft: '4px' }}>
                              <span style={{ fontSize: '0.75rem', color: '#70146e', fontWeight: '700' }}>
                                +{event.photos.length - 1} more photos
                              </span>
                              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Click to view full album</div>
                            </div>
                          </div>
                        )}

                        {/* Open Button */}
                        <div style={{
                          paddingTop: '12px',
                          borderTop: '1px solid #f8f0f8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}>
                          <span style={{
                            color: '#70146e',
                            fontWeight: '800',
                            fontSize: '0.88rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}>
                            Open Event Album
                            <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8rem', color: '#f05a28' }}></i>
                          </span>

                          <span style={{
                            background: '#fcf2fc',
                            color: '#70146e',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.85rem'
                          }}>
                            <i className="fa-solid fa-images"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Empty state if search found nothing */}
              {filteredEvents.length === 0 && (
                <div style={{ textAlign: 'center', padding: '60px 20px', background: '#ffffff', borderRadius: '20px', border: '1px dashed #cbd5e1' }}>
                  <i className="fa-solid fa-camera-slash" style={{ fontSize: '2.5rem', color: '#94a3b8', marginBottom: '14px' }}></i>
                  <h3 style={{ fontSize: '1.2rem', color: '#1e293b', fontWeight: '700' }}>No albums found</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Try clearing your search query or switching to 'All Albums'.</p>
                  <button
                    type="button"
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    style={{ background: '#70146e', color: '#ffffff', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer', marginTop: '10px' }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* VIEW B: SINGLE ALBUM IMMERSIVE PHOTO GALLERY */}
          {activeEvent && (
            <div>
              {/* ALBUM HEADER HERO */}
              <div style={{
                background: 'linear-gradient(135deg, #2b042a 0%, #500f4e 50%, #70146e 100%)',
                borderRadius: '24px',
                padding: '36px 36px',
                color: '#ffffff',
                boxShadow: '0 20px 50px rgba(112, 20, 110, 0.18)',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '36px'
              }}>
                {/* Background glow circle */}
                <div style={{ position: 'absolute', right: '-40px', bottom: '-40px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(240, 90, 40, 0.3) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

                {/* Top Nav: Back button & Prev/Next Event */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '22px' }}>
                  <button
                    type="button"
                    onClick={handleBackToOverview}
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      padding: '8px 20px',
                      borderRadius: '30px',
                      fontSize: '0.88rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#70146e'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.color = '#ffffff'; }}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                    All Albums
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {prevEvent && (
                      <button
                        type="button"
                        onClick={() => handleOpenEvent(prevEvent.id)}
                        title={`Previous: ${prevEvent.name}`}
                        style={{
                          background: 'rgba(255, 255, 255, 0.12)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          color: '#ffffff',
                          padding: '7px 14px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <i className="fa-solid fa-chevron-left"></i>
                        Prev Album
                      </button>
                    )}

                    {nextEvent && (
                      <button
                        type="button"
                        onClick={() => handleOpenEvent(nextEvent.id)}
                        title={`Next: ${nextEvent.name}`}
                        style={{
                          background: 'rgba(255, 255, 255, 0.12)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          color: '#ffffff',
                          padding: '7px 14px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        Next Album
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    )}
                  </div>
                </div>

                {/* Event Badges & Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <span style={{
                    background: '#f05a28',
                    color: '#ffffff',
                    padding: '4px 14px',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {activeEvent.badge || activeEvent.category}
                  </span>

                  <span style={{
                    background: 'rgba(255, 255, 255, 0.18)',
                    color: '#ffffff',
                    padding: '4px 14px',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: '700'
                  }}>
                    <i className="fa-solid fa-images" style={{ marginRight: '6px' }}></i>
                    {activeEvent.photos.length} Photos in Album
                  </span>
                </div>

                <h2 style={{
                  fontSize: '2.1rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '10px',
                  letterSpacing: '-0.3px',
                  lineHeight: '1.25'
                }}>
                  {activeEvent.name}
                </h2>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.92rem',
                  marginBottom: '16px',
                  flexWrap: 'wrap'
                }}>
                  <span><i className="fa-regular fa-calendar" style={{ marginRight: '6px', color: '#fed7aa' }}></i>{activeEvent.date}</span>
                  {activeEvent.location && (
                    <>
                      <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
                      <span><i className="fa-solid fa-location-dot" style={{ marginRight: '6px', color: '#f05a28' }}></i>{activeEvent.location}</span>
                    </>
                  )}
                </div>

                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '850px',
                  lineHeight: '1.6',
                  margin: '0 0 24px'
                }}>
                  {activeEvent.description}
                </p>

                {/* Slideshow CTA Button */}
                <button
                  type="button"
                  onClick={() => {
                    openLightboxAt(0);
                    setIsPlayingSlideshow(true);
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #f05a28 0%, #ff7849 100%)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '11px 24px',
                    borderRadius: '30px',
                    fontSize: '0.92rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(240, 90, 40, 0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <i className="fa-solid fa-play"></i>
                  Start Fullscreen Slideshow
                </button>
              </div>

              {/* PHOTO GALLERY GRID */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '22px'
              }}>
                {activeEvent.photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    onClick={() => openLightboxAt(index)}
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(112, 20, 110, 0.06)',
                      border: '1px solid #f1e4f1',
                      cursor: 'pointer',
                      position: 'relative',
                      height: '240px',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(112, 20, 110, 0.16)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(112, 20, 110, 0.06)';
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />

                    {/* Gradient Overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(112, 20, 110, 0.88) 0%, rgba(112, 20, 110, 0.1) 50%, transparent 100%)',
                      opacity: 0,
                      transition: 'opacity 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '16px'
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                    >
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <span style={{
                          background: 'rgba(255,255,255,0.92)',
                          color: '#70146e',
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.9rem',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                        }}>
                          <i className="fa-solid fa-expand"></i>
                        </span>
                      </div>

                      <div>
                        <span style={{ background: '#f05a28', color: '#ffffff', padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: '700' }}>
                          Photo {index + 1} of {activeEvent.photos.length}
                        </span>
                        <h4 style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: '700', margin: '6px 0 0', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                          {photo.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX WITH FILMSTRIP & SLIDESHOW */}
      {lightboxIndex !== null && currentPhotos[lightboxIndex] && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: 'rgba(10, 15, 28, 0.96)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '16px 20px',
            userSelect: 'none'
          }}
          onClick={closeLightbox}
        >
          {/* Top Control Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#ffffff',
              padding: '6px 12px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span style={{
                background: '#f05a28',
                color: '#ffffff',
                padding: '3px 10px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '800',
                marginRight: '10px'
              }}>
                Photo {lightboxIndex + 1} of {currentPhotos.length}
              </span>
              <span style={{ color: '#e2e8f0', fontSize: '1rem', fontWeight: '700' }}>
                {activeEvent ? activeEvent.name : ''}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Play/Pause Slideshow Button */}
              <button
                type="button"
                onClick={() => setIsPlayingSlideshow(!isPlayingSlideshow)}
                style={{
                  background: isPlayingSlideshow ? '#f05a28' : 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  color: '#ffffff',
                  padding: '7px 16px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <i className={isPlayingSlideshow ? 'fa-solid fa-pause' : 'fa-solid fa-play'}></i>
                {isPlayingSlideshow ? 'Pause Slideshow' : 'Play Slideshow'}
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
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
          </div>

          {/* Center Stage Image with Arrow Nav */}
          <div
            style={{
              position: 'relative',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxHeight: '74vh',
              padding: '10px 0'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={prevPhoto}
              style={{
                position: 'absolute',
                left: '20px',
                zIndex: 10,
                background: 'rgba(112, 20, 110, 0.85)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f05a28'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(112, 20, 110, 0.85)'}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            {/* Main Full-Res Photo */}
            <img
              src={currentPhotos[lightboxIndex].src}
              alt={currentPhotos[lightboxIndex].title}
              style={{
                maxWidth: '92vw',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '14px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
              }}
            />

            {/* Next Arrow */}
            <button
              type="button"
              onClick={nextPhoto}
              style={{
                position: 'absolute',
                right: '20px',
                zIndex: 10,
                background: 'rgba(112, 20, 110, 0.85)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f05a28'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(112, 20, 110, 0.85)'}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          {/* Bottom Thumbnails Filmstrip Tray */}
          <div
            style={{
              paddingTop: '10px',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              ref={thumbnailStripRef}
              style={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                paddingBottom: '8px',
                justifyContent: currentPhotos.length < 15 ? 'center' : 'flex-start'
              }}
            >
              {currentPhotos.map((thumb, idx) => {
                const isSelected = idx === lightboxIndex;
                return (
                  <button
                    key={thumb.id}
                    type="button"
                    onClick={() => { setLightboxIndex(idx); setIsPlayingSlideshow(false); }}
                    style={{
                      border: isSelected ? '2.5px solid #f05a28' : '1.5px solid transparent',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      width: '54px',
                      height: '54px',
                      padding: 0,
                      background: '#1e293b',
                      flexShrink: 0,
                      cursor: 'pointer',
                      opacity: isSelected ? 1 : 0.45,
                      transform: isSelected ? 'scale(1.08)' : 'scale(1)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <img src={thumb.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
