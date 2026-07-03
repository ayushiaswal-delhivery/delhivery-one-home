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

  function handleSelect(svc) {
    onServiceChange?.(svc.id)
    setOpen(false)
  }

  return (
    <>
      <header className="topbar">
        <div className="search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
          <input placeholder="Search AWB, order ID, customer, pincode…" />
        </div>
        <div className="topbar-right">
          <button className="icon-btn" title="Tasks">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
            <span className="dot" />
          </button>
          <button className="icon-btn" title="Notifications">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            <span className="dot" />
          </button>

          {/* Client / service selector */}
          <div ref={ref} style={{ position: 'relative' }}>
            <button className="client-selector" onClick={() => setOpen(o => !o)}
              style={{ border: open ? '1px solid #2396fb' : undefined }}>
              <span className="dot" />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.2 }}>Edenivy Lifestyle</div>
                <div className="client-sub">{current.label}</div>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' }}>
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
                  <div key={svc.id} onClick={() => handleSelect(svc)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '10px 14px', cursor: 'pointer',
                      background: activeService === svc.id ? '#f0f8ff' : 'transparent',
                      borderLeft: activeService === svc.id ? '3px solid #2396fb' : '3px solid transparent',
                      transition: 'background 100ms',
                    }}
                    onMouseEnter={e => { if (active !== svc.id) e.currentTarget.style.background = '#f7f7f7' }}
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

          <div className="avatar">AS</div>
          <button className="btn-primary">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
            Create Shipment
          </button>
        </div>
      </header>


      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideInRight { from { transform: translateX(100%) } to { transform: translateX(0) } }
      `}</style>
    </>
  )
}
