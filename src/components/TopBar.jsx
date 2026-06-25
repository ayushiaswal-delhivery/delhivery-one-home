export default function TopBar() {
  return (
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
        <button className="client-selector">
          <span className="dot" />
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.2 }}>Edenivy Lifestyle</div>
            <div className="client-sub">Domestic</div>
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div className="avatar">AS</div>
        <button className="btn-primary">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
          Create Shipment
        </button>
      </div>
    </header>
  )
}
