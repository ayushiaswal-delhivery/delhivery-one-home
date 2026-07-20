const KPI_CARDS = [
  { label: 'Created today',       value: 24,  unit: 'AWBs', color: '#343c51' },
  { label: 'Pickup scheduled',    value: 9,   unit: 'AWBs', color: '#2396fb' },
  { label: 'In transit — India',  value: 38,  unit: 'AWBs', color: '#f59e0b' },
  { label: 'At customs',          value: 14,  unit: 'AWBs', color: '#ed1b36' },
  { label: 'In transit — Intl',   value: 90,  unit: 'AWBs', color: '#8b5cf6' },
  { label: 'Delivered (10d)',     value: 318, unit: 'AWBs', color: '#1ba86e' },
]

const TOP_DESTINATIONS = [
  { country: 'USA 🇺🇸', value: 312 },
  { country: 'UAE 🇦🇪', value: 208 },
  { country: 'UK  🇬🇧', value: 160 },
  { country: 'AUS 🇦🇺', value: 112 },
  { country: 'SGP 🇸🇬', value: 73  },
]

const MAX_DEST = 312

const font = '"Noto Sans", sans-serif'

function Card({ children, style = {} }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 10,
      border: '1px solid #e8e8ec',
      padding: 20,
      ...style,
    }}>
      {children}
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 700, color: '#808080', letterSpacing: 1, textTransform: 'uppercase', fontFamily: font, marginBottom: 14 }}>
      {children}
    </div>
  )
}

export default function IntlContent() {
  return (
    <div style={{ padding: '20px 24px', fontFamily: font, background: '#f5f6fa', minHeight: '100%', boxSizing: 'border-box' }}>

      {/* Alert banners */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: '#fff8e6', border: '1px solid #f59e0b',
          borderRadius: 8, padding: '10px 14px',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <span style={{ fontSize: 13, color: '#92400e', fontWeight: 500, fontFamily: font }}>
            <strong>Customs hold:</strong> 3 shipments are pending clearance at US customs. Action required.
          </span>
          <button style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 600, color: '#f59e0b', background: 'none', border: '1px solid #f59e0b', borderRadius: 5, padding: '3px 10px', cursor: 'pointer', fontFamily: font, whiteSpace: 'nowrap' }}>
            Review
          </button>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: '#fef2f2', border: '1px solid #fca5a5',
          borderRadius: 8, padding: '10px 14px',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
          <span style={{ fontSize: 13, color: '#991b1b', fontWeight: 500, fontFamily: font }}>
            <strong>Low wallet balance:</strong> ₹100 remaining. Recharge to avoid shipment holds.
          </span>
          <button style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 600, color: '#ef4444', background: 'none', border: '1px solid #ef4444', borderRadius: 5, padding: '3px 10px', cursor: 'pointer', fontFamily: font, whiteSpace: 'nowrap' }}>
            Recharge
          </button>
        </div>
      </div>

      {/* Overview label */}
      <SectionLabel>Overview</SectionLabel>

      {/* KPI strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 12, marginBottom: 20 }}>
        {KPI_CARDS.map(k => (
          <Card key={k.label} style={{ padding: '14px 16px' }}>
            <div style={{ fontSize: 26, fontWeight: 800, color: k.color, fontFamily: font, lineHeight: 1 }}>{k.value}</div>
            <div style={{ fontSize: 11, color: '#808080', fontFamily: font, marginTop: 4 }}>{k.unit}</div>
            <div style={{ fontSize: 12, color: '#343c51', fontFamily: font, fontWeight: 500, marginTop: 6, lineHeight: 1.3 }}>{k.label}</div>
          </Card>
        ))}
      </div>

      {/* Main row: Performance + Right rail */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16 }}>

        {/* Overall Performance */}
        <Card>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', fontFamily: font, marginBottom: 18 }}>Overall Performance</div>

          {/* Metric pills */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            {[
              { label: 'Delivery rate', value: '94.2%', color: '#1ba86e', bg: '#f0faf5' },
              { label: 'Customs clearance rate', value: '96.8%', color: '#2396fb', bg: '#f0f8ff' },
            ].map(m => (
              <div key={m.label} style={{ flex: 1, background: m.bg, borderRadius: 8, padding: '14px 16px', border: `1px solid ${m.color}30` }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: m.color, fontFamily: font }}>{m.value}</div>
                <div style={{ fontSize: 12, color: '#6b7490', fontFamily: font, marginTop: 4 }}>{m.label}</div>
              </div>
            ))}
          </div>

          {/* Top destinations bar chart */}
          <div style={{ fontSize: 12, fontWeight: 600, color: '#808080', fontFamily: font, marginBottom: 12, letterSpacing: 0.5, textTransform: 'uppercase' }}>
            Top destinations
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {TOP_DESTINATIONS.map(d => (
              <div key={d.country} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 72, fontSize: 13, color: '#343c51', fontFamily: font, fontWeight: 500, flexShrink: 0 }}>{d.country}</div>
                <div style={{ flex: 1, height: 8, background: '#f0f2f5', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(d.value / MAX_DEST) * 100}%`, background: 'linear-gradient(90deg, #2396fb, #8b5cf6)', borderRadius: 99 }} />
                </div>
                <div style={{ width: 36, fontSize: 13, fontWeight: 600, color: '#1a1a1a', fontFamily: font, textAlign: 'right', flexShrink: 0 }}>{d.value}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Right rail */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Wallet */}
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', fontFamily: font }}>Wallet Balance</div>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ef4444', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 20, padding: '2px 8px', fontFamily: font }}>Low</span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#ef4444', fontFamily: font, lineHeight: 1 }}>₹100</div>
            <div style={{ fontSize: 12, color: '#808080', fontFamily: font, marginTop: 4, marginBottom: 16 }}>Available balance</div>
            <button style={{
              width: '100%', height: 36, background: '#2396fb',
              color: '#fff', border: 'none', borderRadius: 7,
              fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: font,
            }}>
              + Recharge wallet
            </button>
          </Card>

          {/* Now Live promo */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
            borderRadius: 10, padding: 20, position: 'relative', overflow: 'hidden',
          }}>
            {/* decorative globe */}
            <div style={{ position: 'absolute', right: -16, top: -16, width: 80, height: 80, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.12)', opacity: 0.6 }} />
            <div style={{ position: 'absolute', right: 6, top: 6, width: 50, height: 50, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.1)', opacity: 0.6 }} />

            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: '#60a5fa', fontFamily: font }}>✦ Now Live</span>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', fontFamily: font, margin: '8px 0 6px', lineHeight: 1.4 }}>
              Ship to 10+<br />countries worldwide
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontFamily: font, marginBottom: 16, lineHeight: 1.5 }}>
              USA · UAE · UK · AUS · SGP and more. Competitive rates, real-time tracking.
            </div>
            <button style={{
              fontSize: 12, fontWeight: 600, color: '#1a1a2e',
              background: '#fff', border: 'none', borderRadius: 6,
              padding: '7px 14px', cursor: 'pointer', fontFamily: font,
            }}>
              Explore countries →
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
