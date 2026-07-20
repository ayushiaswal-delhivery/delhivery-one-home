import { useState, useEffect } from 'react'

const font = '"Noto Sans", sans-serif'

const IcoArrowR  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8c8c8" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
const IcoChevR   = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
const IcoWallet  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 2v5M8 2v5"/><circle cx="16" cy="14" r="2"/></svg>
const IcoUpload  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
const IcoCalc    = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="11" y2="14"/><line x1="8" y1="18" x2="11" y2="18"/></svg>

const INTL_PIPELINE = [
  {
    id: 'pre-dispatch', label: 'Pre-Dispatch', unit: 'AWBs', color: '#2396fb',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    cards: [
      { label: 'Created · Pickup not scheduled', count: 15, unit: 'AWBs', delta: '+3',  up: false, sub: [{ label: 'Pending > 24h', value: '6', link: 'Schedule pickup', linkColor: '#ed1b36' }] },
      { label: 'Pickup scheduled',               count: 9,  unit: 'AWBs', delta: '+2',  up: true,  sub: [{ link: 'View all', linkColor: '#2396fb' }] },
    ],
  },
  {
    id: 'in-transit', label: 'In Transit', unit: 'AWBs', color: '#7c3aed',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 16a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 12.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    cards: [
      { label: 'In transit — India',  count: 38,  unit: 'AWBs', delta: '+8%', up: true,  sub: [{ link: 'Track all', linkColor: '#2396fb' }] },
      { label: 'At customs',          count: 14,  unit: 'AWBs', delta: '+3',  up: false, sub: [{ label: 'Held > 3 days', value: '3', link: 'View details', linkColor: '#ed1b36' }] },
      { label: 'In transit — Intl',   count: 90,  unit: 'AWBs', delta: '+12%', up: true, sub: [{ link: 'Track all', linkColor: '#2396fb' }] },
    ],
  },
  {
    id: 'delivered', label: 'Delivered', unit: 'AWBs', color: '#1ba86e',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>,
    cards: [
      { label: 'Delivered (last 10d)', count: 318, unit: 'AWBs', delta: '+9%', up: true,  sub: [{ link: 'View now', linkColor: '#2396fb' }] },
      { label: 'Returns / RTO',        count: 4,   unit: 'AWBs', delta: '+1',  up: false, sub: [{ label: 'Return in transit', value: '2', link: 'View orders', linkColor: '#2396fb' }] },
    ],
  },
]

function PipelineCard({ card }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
        <span style={{ fontSize: 12, color: '#454545', fontFamily: font, lineHeight: 1.4 }}>{card.label}</span>
        <span style={{ fontSize: 10, fontWeight: 600, color: card.up ? '#1ba86e' : '#ed1b36', fontFamily: font, flexShrink: 0 }}>
          {card.delta} {card.up ? '↑' : '↓'}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{ fontSize: 24, fontWeight: 700, color: '#1a1a1a', fontFamily: font, lineHeight: 1 }}>{card.count}</span>
        <span style={{ fontSize: 11, color: '#808080', fontFamily: font }}>{card.unit}</span>
      </div>
      {card.pills && card.pills.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {card.pills.map((p, i) => (
            <span key={i} style={{ fontSize: 10, fontWeight: 600, color: '#e07230', background: '#fff3ec', border: '1px solid #f5c89a', borderRadius: 999, padding: '2px 8px', fontFamily: font }}>{p}</span>
          ))}
        </div>
      )}
      {card.sub && card.sub.length > 0 && (
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {card.sub.map((s, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: s.label ? 'space-between' : 'flex-start', alignItems: 'center', fontSize: 11 }}>
              {s.label && <span style={{ color: '#808080', fontFamily: font }}>{s.label} <strong style={{ color: '#2b2b2b' }}>{s.value}</strong></span>}
              {s.link && <a style={{ fontWeight: 600, color: s.linkColor || '#2396fb', cursor: 'pointer', fontFamily: font, whiteSpace: 'nowrap' }}>{s.link} →</a>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function DateFilter({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const opts = ['Last 7 days', 'Today', 'Yesterday', 'Last 30 days', 'Custom range']
  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)} style={{ display: 'flex', alignItems: 'center', gap: 6, height: 32, padding: '0 12px', background: '#fff', border: '1px solid #d0d5e0', borderRadius: 7, fontSize: 13, fontWeight: 500, color: '#343c51', cursor: 'pointer', fontFamily: font }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
        {value}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {open && (
        <div style={{ position: 'absolute', right: 0, top: 'calc(100% + 4px)', background: '#fff', border: '1px solid #e6e6e6', borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.1)', zIndex: 100, minWidth: 160, overflow: 'hidden' }}>
          {opts.map(opt => (
            <div key={opt} onClick={() => { onChange(opt); setOpen(false) }}
              style={{ padding: '9px 14px', fontSize: 13, fontFamily: font, cursor: 'pointer', color: value === opt ? '#2396fb' : '#2b2b2b', fontWeight: value === opt ? 600 : 400, background: value === opt ? '#f0f8ff' : 'transparent' }}
              onMouseEnter={e => { if (value !== opt) e.currentTarget.style.background = '#f7f7f7' }}
              onMouseLeave={e => { if (value !== opt) e.currentTarget.style.background = 'transparent' }}
            >{opt}</div>
          ))}
        </div>
      )}
    </div>
  )
}

const PERF_DATA = {
  '7d':  { deliveryRate: 93.1, customsRate: 97.2, total: 287, delivered: 267, destinations: [{ flag: '🇺🇸', name: 'USA', count: 89 }, { flag: '🇦🇪', name: 'UAE', count: 61 }, { flag: '🇬🇧', name: 'United Kingdom', count: 48 }, { flag: '🇦🇺', name: 'Australia', count: 32 }, { flag: '🇸🇬', name: 'Singapore', count: 21 }] },
  '30d': { deliveryRate: 94.2, customsRate: 96.8, total: 1247, delivered: 1089, destinations: [{ flag: '🇺🇸', name: 'USA', count: 312 }, { flag: '🇦🇪', name: 'UAE', count: 208 }, { flag: '🇬🇧', name: 'United Kingdom', count: 160 }, { flag: '🇦🇺', name: 'Australia', count: 112 }, { flag: '🇸🇬', name: 'Singapore', count: 73 }] },
  '90d': { deliveryRate: 95.7, customsRate: 97.9, total: 3841, delivered: 3675, destinations: [{ flag: '🇺🇸', name: 'USA', count: 948 }, { flag: '🇦🇪', name: 'UAE', count: 624 }, { flag: '🇬🇧', name: 'United Kingdom', count: 502 }, { flag: '🇦🇺', name: 'Australia', count: 341 }, { flag: '🇸🇬', name: 'Singapore', count: 218 }] },
}

function OverallPerformance() {
  const [range, setRange] = useState('30d')
  const d = PERF_DATA[range]
  const maxDest = d.destinations[0].count

  return (
    <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, padding: 20, marginBottom: 16 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', fontFamily: font }}>Overall performance</span>
        <div style={{ display: 'flex', background: '#f0f2f5', borderRadius: 8, padding: 3, gap: 2 }}>
          {['7d', '30d', '90d'].map(r => (
            <button key={r} onClick={() => setRange(r)} style={{ padding: '4px 14px', fontSize: 13, fontWeight: r === range ? 600 : 400, color: r === range ? '#fff' : '#454545', background: r === range ? '#3a5fa0' : 'transparent', border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: font, transition: 'all 150ms' }}>{r}</button>
          ))}
        </div>
      </div>

      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 20 }}>
        {[
          { label: 'Delivery rate', value: `${d.deliveryRate}%`, sub: `${d.delivered.toLocaleString()} of ${d.total.toLocaleString()} delivered`, pct: d.deliveryRate },
          { label: 'Customs clearance', value: `${d.customsRate}%`, sub: `${(100 - d.customsRate).toFixed(1)}% held for docs`, pct: d.customsRate },
        ].map((k, i) => (
          <div key={i}>
            <div style={{ fontSize: 12, color: '#808080', fontFamily: font, marginBottom: 6 }}>{k.label}</div>
            <div style={{ fontSize: 36, fontWeight: 700, color: '#1ba86e', fontFamily: font, lineHeight: 1, marginBottom: 10 }}>{k.value}</div>
            <div style={{ height: 6, background: '#e8e8e8', borderRadius: 999, overflow: 'hidden', marginBottom: 8 }}>
              <div style={{ height: '100%', width: `${k.pct}%`, background: 'linear-gradient(90deg, #1ba86e, #34c97b)', borderRadius: 999, transition: 'width 500ms ease' }} />
            </div>
            <div style={{ fontSize: 12, color: '#808080', fontFamily: font }}>{k.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ height: 1, background: '#f0f0f0', marginBottom: 20 }} />

      {/* Top destinations */}
      <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', fontFamily: font, marginBottom: 14 }}>Top destinations</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {d.destinations.map((dest, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 40px', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 18, lineHeight: 1 }}>{dest.flag}</span>
              <span style={{ fontSize: 13, color: '#2b2b2b', fontFamily: font }}>{dest.name}</span>
            </div>
            <div style={{ height: 28, background: '#eef1f6', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(dest.count / maxDest) * 100}%`, background: '#3a5fa0', borderRadius: 4, transition: 'width 500ms ease' }} />
            </div>
            <span style={{ fontSize: 13, color: '#454545', fontFamily: font, textAlign: 'right' }}>{dest.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function IntlContent() {
  const [dateFilter, setDateFilter] = useState('Last 7 days')

  return (
    <div className="content" style={{ fontFamily: font }}>

      {/* ── Primary action buttons ── */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: '#3a5fa0', color: '#fff', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: font }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Single shipment
        </button>
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: '#fff', color: '#3a5fa0', border: '1.5px solid #3a5fa0', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: font }}>
          <IcoUpload />
          Bulk upload
        </button>
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: '#fff', color: '#343c51', border: '1px solid #d0d5e0', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: font }}>
          <IcoCalc />
          Rate calculator
        </button>
      </div>

      {/* Alert banners */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff8e6', border: '1px solid #fcd34d', borderRadius: 8, padding: '10px 14px' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <span style={{ fontSize: 13, color: '#92400e', fontWeight: 500, fontFamily: font }}>
            <strong>Customs hold:</strong> 3 shipments pending clearance at US customs. Action required.
          </span>
          <button style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 600, color: '#f59e0b', background: 'none', border: '1px solid #f59e0b', borderRadius: 5, padding: '3px 10px', cursor: 'pointer', fontFamily: font, whiteSpace: 'nowrap' }}>Review</button>
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20, alignItems: 'start' }}>

        {/* LEFT: AWB Summary + performance */}
        <div>
          {/* AWB Summary */}
          <div style={{ background: '#fff', border: '1px solid #e6e6e6', borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', fontFamily: font }}>AWB Summary</span>
                <span style={{ fontSize: 12, color: '#808080', fontFamily: font }}>pipeline view</span>
              </div>
              <DateFilter value={dateFilter} onChange={setDateFilter} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: 0, alignItems: 'start' }}>
              {INTL_PIPELINE.map((bucket, bi) => (
                <>
                  <div key={bucket.id}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, padding: '8px 12px', background: '#eff1f5', borderRadius: 8 }}>
                      <span style={{ color: bucket.color }}>{bucket.icon}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', fontFamily: font }}>{bucket.label}</span>
                      <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 600, color: '#454545', background: '#fff', borderRadius: 999, padding: '1px 8px', fontFamily: font }}>
                        {bucket.cards.reduce((s, c) => s + c.count, 0)} {bucket.unit}
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {bucket.cards.map((card, ci) => <PipelineCard key={ci} card={card} />)}
                    </div>
                  </div>
                  {bi < INTL_PIPELINE.length - 1 && (
                    <div key={`arrow-${bi}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 12px', paddingTop: 18 }}>
                      <IcoArrowR />
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>

          {/* Overall performance */}
          <OverallPerformance />
        </div>

        {/* RIGHT: Wallet + promo */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Wallet */}
          <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#454545' }}><IcoWallet /></div>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#2b2b2b', fontFamily: font }}>Wallet</span>
              </div>
              <a style={{ fontSize: 11, color: '#2396fb', cursor: 'pointer', fontFamily: font, display: 'flex', alignItems: 'center', gap: 2 }}>History <IcoChevR /></a>
            </div>
            <div style={{ fontSize: 11, color: '#98a2bc', fontFamily: font, marginBottom: 2 }}>Available balance</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#ef4444', fontFamily: font, letterSpacing: -1, lineHeight: 1, marginBottom: 4 }}>₹100</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fef9ec', borderRadius: 6, padding: '6px 10px', marginBottom: 12 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c28b00" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span style={{ fontSize: 11, color: '#a07000', fontFamily: font }}>Low balance — recharge to avoid holds</span>
            </div>
            <button style={{ width: '100%', background: '#2b2b2b', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 0', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: font }}>Recharge wallet ↗</button>
          </div>

          {/* Now Live promo */}
          <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)', borderRadius: 12, padding: 20, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: -16, top: -16, width: 80, height: 80, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.12)' }} />
            <div style={{ position: 'absolute', right: 6, top: 6, width: 50, height: 50, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.08)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: '#60a5fa', fontFamily: font }}>✦ Now Live</span>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', fontFamily: font, margin: '8px 0 6px', lineHeight: 1.4 }}>Ship to 10+<br />countries worldwide</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontFamily: font, marginBottom: 16, lineHeight: 1.5 }}>USA · UAE · UK · AUS · SGP and more.</div>
            <button style={{ fontSize: 12, fontWeight: 600, color: '#1a1a2e', background: '#fff', border: 'none', borderRadius: 6, padding: '7px 14px', cursor: 'pointer', fontFamily: font }}>
              Explore countries →
            </button>
          </div>

          {/* Quick actions */}
          <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ padding: '12px 16px', borderBottom: '1px solid #f0f0f0' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#2b2b2b', fontFamily: font }}>Quick links</span>
            </div>
            {[
              { emoji: '📋', title: 'Track a shipment', sub: 'Enter AWB to get live status' },
              { emoji: '📄', title: 'Document checklist', sub: 'Invoice, packing list & more' },
              { emoji: '💬', title: 'Customs support', sub: 'Talk to a clearance expert' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', borderBottom: i < 2 ? '1px solid #f5f5f5' : 'none', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ width: 30, height: 30, borderRadius: 6, background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{item.emoji}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#2b2b2b', fontFamily: font }}>{item.title}</div>
                  <div style={{ fontSize: 11, color: '#98a2bc', fontFamily: font }}>{item.sub}</div>
                </div>
                <IcoChevR />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
