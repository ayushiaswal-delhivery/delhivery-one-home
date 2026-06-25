import { useState, useEffect, useRef } from 'react'

const eduContent = {
  all:     { videos: [{ bg:'#1B1D22', label:<>How to<br/>Manifest <span>Shipments</span></> }, { bg:'#0B3253', label:<>Reduce <span>RTO</span><br/>in 30 days</> }], bookTitle:'Book a Training Session', bookSub:'Get a guided demo to understand Delhivery One and start shipping with ease.' },
  owner:   { videos: [{ bg:'#3D2E1F', label:<>Understand your <span>Revenue</span> dashboard</> }, { bg:'#093825', label:<>Improve <span>Delivery Rate</span> fast</> }], bookTitle:'Growth Strategy Session', bookSub:'Talk to a Delhivery expert about scaling your shipping and reducing costs.' },
  support: { videos: [{ bg:'#4F0912', label:<>Resolving <span>NDR</span><br/>claims faster</> }, { bg:'#071E32', label:<>How to handle <span>SLA</span> breaches</> }], bookTitle:'Support Best Practices', bookSub:'A guided walkthrough of claims, NDR resolution, and SLA management.' },
  ops:     { videos: [{ bg:'#1B1D22', label:<>Bulk <span>Manifest</span><br/>in 60 seconds</> }, { bg:'#292000', label:<>Schedule <span>Pickups</span><br/>efficiently</> }], bookTitle:'Operations Onboarding', bookSub:'Learn how to set up pickup schedules, manifesting workflows, and label printing.' },
}

const greetingMap = {
  all:     <><b>14 actions waiting</b> on you. Start with high-risk orders and bad addresses.</>,
  owner:   <>Net revenue up <b>8% week-on-week</b>. Delivery rate 87.5%. ROAS down — review ads.</>,
  support: <>You have <b>11 tasks to action</b> — 3 breaching SLA in &lt; 2h. Start with expiring claims.</>,
  ops:     <><b>9 pickups</b> due today, cut-off in 2h 14m. <b>312 shipments</b> waiting to be manifested.</>,
}

const carouselSlides = [
  { bg: '#1B1D22', tag: 'New · Just shipped', tagColor: '#F36779', title: 'One-click WhatsApp NDR resolution', body: 'Live for 12 pin-code clusters.', pillBg: '#ED1B36', pillText: 'Try it now →', link: 'Watch 90s demo' },
  { bg: '#0B3253', tag: 'Coming soon · June', tagColor: '#72BFFE', title: 'Predictive RTO scoring', body: 'AI flags orders likely to fail before dispatch.', pillBg: '#2396FB', pillText: 'Join waitlist →' },
  { bg: '#1B1F2E', tag: 'Policy update · May 31', tagColor: '#B2B8CC', title: 'New fuel surcharge from 1 Jun', body: 'Domestic rates increase 2.4% — review your pricing now.', pillBg: '#3D445C', pillText: 'Review rates →' },
]

function Carousel() {
  const [cur, setCur] = useState(0)
  const timerRef = useRef(null)

  const goTo = (n) => setCur((n + carouselSlides.length) % carouselSlides.length)

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(cur + 1), 6000)
    return () => clearInterval(timerRef.current)
  }, [cur])

  const s = carouselSlides[cur]
  return (
    <div className="carousel">
      <div className="carousel-track">
        <div className="news-card" style={{ background: s.bg }}>
          <div className="news-tag" style={{ color: s.tagColor }}>{s.tag}</div>
          <h4>{s.title}</h4>
          <p>{s.body}</p>
          <div className="news-ctas">
            <div className="news-pill" style={{ background: s.pillBg }}>{s.pillText}</div>
            {s.link && <a className="news-link">{s.link}</a>}
          </div>
        </div>
      </div>
      <div className="carousel-nav">
        <div className="carousel-dots">
          {carouselSlides.map((_, i) => (
            <div key={i} className={`carousel-dot${cur === i ? ' active' : ''}`} onClick={() => goTo(i)} />
          ))}
        </div>
        <div className="carousel-arrows">
          <button className="carousel-arrow" onClick={() => goTo(cur - 1)}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="carousel-arrow" onClick={() => goTo(cur + 1)}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

function AlertRow({ type, children, onDismiss }) {
  const [visible, setVisible] = useState(true)
  const [hiding, setHiding] = useState(false)
  const rowRef = useRef(null)

  const dismiss = () => {
    const el = rowRef.current
    if (!el) return
    el.style.height = el.offsetHeight + 'px'
    el.style.overflow = 'hidden'
    requestAnimationFrame(() => {
      el.style.transition = 'height 200ms ease, opacity 200ms ease, padding 200ms ease'
      el.style.height = '0'
      el.style.opacity = '0'
      el.style.padding = '0'
      setTimeout(() => setVisible(false), 210)
    })
  }

  if (!visible) return null
  return (
    <div ref={rowRef} className={`alert-row ${type}`}>
      <span className="alert-dot" />
      <span className="alert-msg">{children}</span>
      <button className="alert-act" onClick={() => {}}>
        {type === 'crit' ? 'Update GSTIN' : type === 'warn' ? 'Review rates' : 'View shipments'}
      </button>
      <span className="alert-dismiss" onClick={dismiss}>×</span>
    </div>
  )
}

export default function CurrentContent({ persona }) {
  const edu = eduContent[persona] || eduContent.all

  return (
    <div className="content">
      {/* Alerts */}
      <div className="alerts">
        <AlertRow type="crit"><b>GST update mandatory</b> — Add GSTIN before 10 May to avoid shipment holds. Required for compliance.</AlertRow>
        <AlertRow type="warn"><b>New fuel surcharge from 1 Jun</b> — Domestic rates increase 2.4%. Review impact on your pricing before May 31.</AlertRow>
        <AlertRow type="info"><b>38 shipments stuck at Mumbai hub</b> — Port congestion causing delays. Expected clearance by 8 May.</AlertRow>
      </div>

      {/* Page header */}
      <div className="page-head">
        <div>
          <div className="greeting-name">Good morning, Anjali</div>
          <div className="greeting-line">{greetingMap[persona] || greetingMap.all}</div>
        </div>
      </div>

      {/* Support hero */}
      {persona === 'support' && (
        <div className="hero-card">
          <div className="hero-head">
            <div className="hero-title">Tasks for you · 11 to action</div>
            <div className="hero-chip">3 breaching SLA in &lt; 2h</div>
          </div>
          <div className="hero-sub">Customer issues, stuck shipments and tickets needing your input. Sorted by SLA breach risk.</div>
          <div className="hero-tiles">
            {[
              { num: '7', cls: 'urgent', label: 'Tickets need your input', sub: '3 customer-facing · oldest 18h' },
              { num: '4', cls: 'warn', label: 'Open claims awaiting docs', sub: '₹38,420 · 1 expires today' },
              { num: '86', label: 'NDR — call customer', sub: 'Resolve before 6pm cut-off' },
              { num: '42', label: 'Bad addresses to fix', sub: 'Auto-suggest available · 38' },
            ].map((t, i) => (
              <div key={i} className="hero-tile">
                <div className={`hero-tile-num${t.cls ? ' ' + t.cls : ''}`}>{t.num}</div>
                <div className="hero-tile-label">{t.label}</div>
                <div className="hero-tile-sub">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ops hero */}
      {persona === 'ops' && (
        <div className="hero-card">
          <div className="hero-head">
            <div className="hero-title">Floor view · Tue, 5 May</div>
            <div className="hero-chip">Cut-off in 2h 14m</div>
          </div>
          <div className="hero-sub">Pickups due, manifesting backlog and exceptions blocking dispatch.</div>
          <div className="hero-tiles-2up">
            <div className="hero-tile">
              <div className="hero-tile-label" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.7px', color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 6 }}>Pickup requests for today</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <div className="hero-tile-num">9</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>scheduled · 3 confirmed</div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 6, lineHeight: 1.4 }}>Next slot <b style={{ color: 'var(--red)' }}>3:00 – 6:00 PM</b> · 4 pickups · ABC Couriers (2), DTDC (1), Delhivery Express (1)</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button className="btn-sm btn-ghost">Schedule pickup</button>
                <button className="btn-sm btn-ghost">View all 9</button>
              </div>
            </div>
            <div className="hero-tile">
              <div className="hero-tile-label" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.7px', color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 6 }}>Manifesting backlog</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <div className="hero-tile-num">312</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>shipments unmanifested</div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 6, lineHeight: 1.4 }}><b style={{ color: 'var(--red)' }}>200 high-risk</b> orders need address verification. 38 cargo orders pending weight confirmation.</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button className="btn-sm btn-dark">Bulk manifest</button>
                <button className="btn-sm btn-ghost">Resolve high-risk first</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main grid */}
      <div className="grid">

        {/* Left column */}
        <div>
          {/* Shipment status */}
          <div className="section-label">Shipment status</div>
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="metric-row">
              {[
                { label: 'Pending Manifest', num: '1,284', action: 'Manifest now' },
                { label: 'To Be Shipped', num: '542', action: 'Add to Pickup' },
                { label: 'In Transit', num: '8,419', action: 'View tracking →' },
                { label: 'Delivered', num: '1,241', sub: 'Today', subColor: 'var(--green)', action: 'View & download' },
              ].map((m, i) => (
                <div key={i} className="metric-cell">
                  <div className="metric-label">{m.label}</div>
                  <div className="metric-num">{m.num}</div>
                  {m.sub && <div className="metric-sub" style={{ color: m.subColor, fontWeight: 600 }}>{m.sub}</div>}
                  <div className="metric-actions">
                    <button className="btn-sm btn-ghost">{m.action}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming pickups */}
          <div className="section-label">Upcoming pickups</div>
          <div className="card" style={{ marginBottom: 20, padding: '14px 16px 0' }}>
            <div className="card-head" style={{ padding: '0 0 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 32, height: 32, background: 'var(--surface)', borderRadius: 'var(--r-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="2"><path d="M3 7h11v10H3z"/><path d="M14 10h5l2 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
                </div>
                <span className="card-title" style={{ fontSize: 15 }}>Upcoming Pickups</span>
              </div>
              <a className="card-link" style={{ color: 'var(--blue)', fontWeight: 600 }}>View All ›</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
              {[
                { id: 'PKP-2401', date: 'Today', awbs: '3 AWBs', statusBg: 'var(--green-bg)', statusColor: 'var(--green)', statusText: 'Out for Pickup' },
                { id: 'PKP-2402', date: 'Tomorrow', awbs: '5 AWBs', statusBg: 'var(--yellow-bg)', statusColor: 'var(--yellow)', statusText: 'Scheduled' },
              ].map(p => (
                <div key={p.id} style={{ background: '#EEEEF8', borderRadius: 'var(--r-md)', padding: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{p.id}</span>
                    <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3 }}>
                      Download <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                    </a>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                      {p.date}
                    </span>
                    <span style={{ color: 'var(--rule)' }}>·</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
                      {p.awbs}
                    </span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, background: p.statusBg, color: p.statusColor, padding: '4px 10px', borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    {p.statusText}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid var(--rule)', padding: '10px 0 12px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--ink-3)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, color: 'var(--ink-4)' }}><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Your pickup will happen during the selected time slot. Check <a style={{ color: 'var(--blue)', fontWeight: 600, cursor: 'pointer', marginLeft: 3 }}>guidelines</a> to keep your shipment ready for pickup.
            </div>
          </div>

          {/* Reduce RTO */}
          <div className="section-label">Reduce the chances of RTO</div>
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="exc-list">
              {[
                { num: '86', title: 'NDR', sub: 'Pending customer outreach', cta: 'Resolve' },
                { num: '21', title: 'Bad addresses', sub: '14 auto-fixable now', cta: 'Fix now' },
                { num: '200', title: 'High risk orders', sub: 'Likely to RTO this week', cta: 'Resolve all' },
              ].map((r, i) => (
                <div key={i} className="exc-row">
                  <div className="exc-num">{r.num}</div>
                  <div className="exc-info">
                    <div className="exc-title">{r.title}</div>
                    <div className="exc-sub">{r.sub}</div>
                  </div>
                  <button className="btn-sm btn-ghost">{r.cta}</button>
                </div>
              ))}
            </div>
          </div>

          {/* Need your input */}
          <div className="section-label">Need your input</div>
          <div className="support-grid" style={{ marginTop: 0, marginBottom: 20 }}>
            <div className="support-card">
              <div className="sc-label">Tickets</div>
              <div className="sc-num">7</div>
              <div className="sc-meta">Oldest 2d open · <b>1 SLA breach risk</b></div>
              <div style={{ marginTop: 12 }}><a className="card-link">View all →</a></div>
            </div>
            <div className="support-card">
              <div className="sc-label">Claims</div>
              <div className="sc-num">4</div>
              <div className="sc-meta">Worth ₹5,350 · <b>1 expires in 11h</b></div>
              <div style={{ marginTop: 12 }}><a className="card-link">View all →</a></div>
            </div>
          </div>

          {/* Performance */}
          <div className="section-label">Performance</div>
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="card-head" style={{ paddingBottom: 0 }}>
              <div className="card-title">Last 14 days</div>
            </div>
            <div className="perf-strip">
              {[
                { label: 'Delivered', val: '87.5%' },
                { label: 'First attempt', val: '84.2%' },
                { label: 'Avg delivery time', val: <>2.1<span style={{ fontSize: 14, fontWeight: 400, color: 'var(--ink-3)' }}> days</span></> },
                { label: 'Avg pickup time', val: <>14h<span style={{ fontSize: 14, fontWeight: 400, color: 'var(--ink-3)' }}> 22m</span></> },
              ].map((p, i) => (
                <div key={i} className="perf-cell">
                  <div className="perf-label">{p.label}</div>
                  <div className="perf-val">{p.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right rail */}
        <div>
          {/* Wallet */}
          {persona !== 'support' && persona !== 'ops' && (
            <>
              <div className="section-label">Wallet &amp; finance</div>
              <div className="card" style={{ marginBottom: 16 }}>
                <div className="wallet-row">
                  <div className="wr-info">
                    <div className="wr-label">Wallet balance</div>
                    <div className="wr-val">₹1,147.68</div>
                    <div className="wr-sub">auto-topup at ₹500</div>
                  </div>
                  <button className="btn-recharge">Recharge</button>
                </div>
                <div className="wallet-row">
                  <div className="wr-info">
                    <div className="wr-label">COD to remit</div>
                    <div className="wr-val">₹84,210</div>
                    <div className="wr-sub">next on 7 May</div>
                  </div>
                  <button className="btn-sm btn-ghost">Statement</button>
                </div>
              </div>
            </>
          )}

          {/* Quick actions */}
          <div className="section-label">Quick actions</div>
          <div className="card" style={{ marginBottom: 16, overflow: 'hidden', padding: 0 }}>
            <div className="qa-grid">
              <div className="qa-cell">
                <div className="qa-icon" style={{ background: 'var(--blue-bg)', color: 'var(--blue)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 116 0c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>
                </div>
                <div className="qa-name">Help Centre</div>
                <div className="qa-sub">Find answers &amp; guides</div>
              </div>
              <div className="qa-cell">
                <div className="qa-icon" style={{ background: 'var(--blue-bg)', color: 'var(--blue)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h.01M9 12h.01M9 15h.01M12 9h.01M12 12h.01M12 15h.01M15 9h.01M15 12h.01"/></svg>
                </div>
                <div className="qa-name">Rate Calculator</div>
                <div className="qa-sub">Estimate shipping costs</div>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <Carousel />

          {/* Shipper spotlight */}
          <div className="promo-card" style={{ marginTop: 0 }}>
            <div className="promo-eyebrow">Shipper Spotlight</div>
            <div className="promo-title">How Edenivy lifted first-attempt delivery to 92%</div>
            <div className="promo-stat">8%</div>
            <div className="promo-stat-label">First-attempt delivery</div>
            <a className="promo-link">Read the playbook →</a>
          </div>

          {/* Education */}
          <div className="edu-section">
            <div className="edu-head">
              <div className="edu-heading">Quick Help &amp; Learning</div>
              <a className="edu-viewall">View All</a>
            </div>
            <div className="edu-videos">
              {edu.videos.map((v, i) => (
                <div key={i} className="edu-thumb" style={{ background: v.bg }}>
                  <div className="edu-thumb-bg">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="white" opacity="0.12"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
                  </div>
                  <div className="edu-play">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#ED1B36"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                  <div className="edu-thumb-label">{v.label}</div>
                </div>
              ))}
            </div>
            <div className="edu-book">
              <div className="edu-book-text">
                <div className="edu-book-title">{edu.bookTitle}</div>
                <div className="edu-book-sub">{edu.bookSub}</div>
              </div>
              <button className="edu-book-btn">Schedule Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
