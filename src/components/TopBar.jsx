import { useState, useRef, useEffect } from 'react'

const SERVICES = [
  { id: 'b2c',  label: 'B2C Express Parcel',  icon: '📦', desc: 'Direct-to-consumer deliveries' },
  { id: 'b2b',  label: 'B2B Part Truckload',  icon: '🚛', desc: 'Business freight & LTL' },
  { id: 'intl', label: 'International Shipping', icon: '✈️', desc: 'Cross-border logistics' },
]

export default function TopBar({ activeService = 'b2c', onServiceChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = SERVICES.find(s => s.id === activeService)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className="topbar">
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
        <span style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 900, fontSize: 17, letterSpacing: -0.5, color: '#1a1a1a', lineHeight: 1 }}>DELHIVERY</span>
        <span style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 900, fontSize: 17, letterSpacing: -0.5, color: '#ed1b36', lineHeight: 1, marginLeft: 5 }}>ONE</span>
      </div>

      {/* Search */}
      <div className="search" style={{ margin: '0 12px', maxWidth: 320 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
        <input placeholder="Search AWB, order ID, customer…" />
      </div>

      {/* Right actions */}
      <div className="topbar-right">
        {/* Tasks */}
        <button style={{
          display: 'flex', alignItems: 'center', gap: 6, height: 34,
          padding: '0 14px', background: '#fff',
          border: '1px solid #d0d5e0', borderRadius: 6,
          fontSize: 13, fontWeight: 500, color: '#343c51',
          cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif',
          whiteSpace: 'nowrap', position: 'relative',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
          Tasks
          <span style={{ position: 'absolute', top: 6, right: 6, width: 6, height: 6, borderRadius: '50%', background: '#ed1b36' }} />
        </button>

        {/* Settings */}
        <button className="icon-btn" title="Settings">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        </button>

        {/* Help */}
        <button className="icon-btn" title="Help">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 116 0c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>
        </button>

        {/* Divider */}
        <div style={{ width: 1, height: 24, background: '#e6e6e6', flexShrink: 0 }} />

        {/* Profile + service selector */}
        <div ref={ref} style={{ position: 'relative' }}>
          <button onClick={() => setOpen(o => !o)} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: 'none', border: 'none', cursor: 'pointer', padding: '4px 6px',
            borderRadius: 8,
            background: open ? '#f0f2f5' : 'transparent',
            transition: 'background 120ms',
          }}>
            {/* Avatar */}
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'linear-gradient(135deg, #343c51 0%, #5a6480 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 12, fontWeight: 700,
              fontFamily: '"Noto Sans", sans-serif', flexShrink: 0,
            }}>AA</div>

            {/* Name + service */}
            <div style={{ textAlign: 'left', lineHeight: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#2b2b2b', fontFamily: '"Noto Sans", sans-serif', whiteSpace: 'nowrap' }}>Edenivy Lifestyle</div>
              <div style={{ fontSize: 10, color: '#808080', fontFamily: '"Noto Sans", sans-serif', marginTop: 2, whiteSpace: 'nowrap' }}>{current.label}</div>
            </div>

            {/* Chevron */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#808080" strokeWidth="2.5"
              style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms', flexShrink: 0 }}>
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>

          {open && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 6px)', right: 0,
              background: '#fff', border: '1px solid #e6e6e6',
              borderRadius: 10, boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              zIndex: 500, minWidth: 240, overflow: 'hidden',
            }}>
              <div style={{ padding: '8px 12px 6px', fontSize: 10, fontWeight: 600, color: '#808080', letterSpacing: 0.8, textTransform: 'uppercase', fontFamily: '"Noto Sans", sans-serif' }}>
                Select service line
              </div>
              {SERVICES.map(svc => (
                <div key={svc.id}
                  onClick={() => { onServiceChange?.(svc.id); setOpen(false) }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '10px 14px', cursor: 'pointer',
                    background: activeService === svc.id ? '#f0f8ff' : 'transparent',
                    borderLeft: activeService === svc.id ? '3px solid #2396fb' : '3px solid transparent',
                    transition: 'background 100ms',
                  }}
                  onMouseEnter={e => { if (activeService !== svc.id) e.currentTarget.style.background = '#f7f7f7' }}
                  onMouseLeave={e => { if (activeService !== svc.id) e.currentTarget.style.background = 'transparent' }}
                >
                  <span style={{ fontSize: 18, lineHeight: 1 }}>{svc.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: activeService === svc.id ? 600 : 500, color: activeService === svc.id ? '#2396fb' : '#2b2b2b', fontFamily: '"Noto Sans", sans-serif' }}>{svc.label}</div>
                    <div style={{ fontSize: 11, color: '#808080', fontFamily: '"Noto Sans", sans-serif', marginTop: 1 }}>{svc.desc}</div>
                  </div>
                  {activeService === svc.id && (
                    <svg style={{ marginLeft: 'auto', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2396fb" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </header>
  )
}
