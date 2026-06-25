export default function Sidebar({ persona, onPersonaChange }) {
  const navItems = [
    { tip: 'Home', active: true, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12L12 4l9 8"/><path d="M9 21V12h6v9"/></svg> },
    { tip: 'Shipments', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h11v10H3z"/><path d="M14 10h5l2 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg> },
    { tip: 'Tracking', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg> },
    { tip: 'Reports', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M7 9h10M7 13h7"/></svg> },
    { tip: 'Wallet', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 2v5M8 2v5"/><circle cx="16" cy="14" r="2"/></svg> },
  ]

  return (
    <nav className="sidebar">
      <div className="sb-logo">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="0" y="0" width="7" height="24" fill="white"/>
          <rect x="7" y="0" width="7" height="4" fill="white"/>
          <rect x="7" y="20" width="7" height="4" fill="white"/>
          <rect x="14" y="0" width="4" height="3" fill="white"/>
          <rect x="14" y="21" width="4" height="3" fill="white"/>
          <rect x="18" y="3" width="3" height="4" fill="white"/>
          <rect x="18" y="17" width="3" height="4" fill="white"/>
          <rect x="21" y="7" width="3" height="10" fill="white"/>
        </svg>
      </div>

      <div className="sb-section">
        <div className="sb-label">VIEW</div>
        {[
          { id: 'all', tip: 'All — Full overview', icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/><rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg> },
          { id: 'owner', tip: 'Owner — Finance & growth', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21V10l9-7 9 7v11"/><path d="M9 21v-6h6v6"/></svg> },
          { id: 'support', tip: 'Support — Tasks, claims · 11 to action', badge: '11', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 116 0c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg> },
          { id: 'ops', tip: 'Operations — Pickups · 9 pending', badge: '9', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h11v10H3z"/><path d="M14 10h5l2 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg> },
        ].map(p => (
          <div
            key={p.id}
            className={`sb-btn${persona === p.id ? ' active' : ''}`}
            data-tip={p.tip}
            onClick={() => onPersonaChange(p.id)}
          >
            {p.icon}
            {p.badge && <span className="badge">{p.badge}</span>}
          </div>
        ))}
      </div>

      <div className="sb-divider" />

      <div className="sb-section" style={{ paddingTop: 4 }}>
        {navItems.map((item, i) => (
          <div key={i} className={`sb-btn${i === 0 ? ' active' : ''}`} data-tip={item.tip}>
            {item.icon}
          </div>
        ))}
      </div>

      <div className="sb-spacer" />

      <div style={{ padding: '12px 8px', borderTop: '1px solid var(--dark-rule)' }}>
        <div className="sb-btn" data-tip="Settings">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        </div>
      </div>
    </nav>
  )
}
