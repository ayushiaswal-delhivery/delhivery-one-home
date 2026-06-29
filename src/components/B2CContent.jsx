import { useState } from 'react'
import { Button, Badge, Chip, Alert, Card } from '@delhivery/tarmac'

// ── Inline SVG icons (Tarmac icon set style) ──────────────────────────────────
const IcoWarning  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const IcoBox      = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
const IcoClock    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
const IcoChat     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
const IcoHeadset  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z"/><path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>
const IcoShield   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
const IcoScale    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6h18M3 18h18"/></svg>
const IcoWallet   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 2v5M8 2v5"/><circle cx="16" cy="14" r="2"/></svg>
const IcoCod      = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
const IcoTruck    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h11v10H3z"/><path d="M14 10h5l2 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
const IcoPrint    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
const IcoPhone    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
const IcoCalendar = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
const IcoTrendUp  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
const IcoArrow    = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
const IcoChevR    = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
const IcoChevL    = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
const IcoSpark    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"/></svg>
const IcoStop     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
const IcoRain     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"/></svg>
const IcoStarOut  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const IcoInfo     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>

// ── Shared tile helpers ───────────────────────────────────────────────────────
function DeltaBadge({ delta, up }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <span style={{ fontSize: 10, fontWeight: 500, color: up ? '#1ba86e' : '#ed1b36', display: 'flex', alignItems: 'center', gap: 1 }}>
        {delta}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: up ? 'none' : 'rotate(90deg)' }}>
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </span>
      <span style={{ fontSize: 10, fontWeight: 500, color: '#808080' }}>vs last week</span>
    </div>
  )
}

function SubRow({ label, value, link, linkColor }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12 }}>
      <span style={{ color: '#666' }}>{label} <strong style={{ color: '#2b2b2b', fontWeight: 600 }}>{value}</strong></span>
      {link && (
        <a style={{ fontWeight: 600, color: linkColor || '#2396fb', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2, whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 6 }}>
          {link} <IcoChevR />
        </a>
      )}
    </div>
  )
}

// ── Date filter trigger (matches Figma --surface/bg_coal/weaker style) ────────
function DateFilter() {
  const [open, setOpen] = useState(false)
  const [label, setLabel] = useState('Last 7 days')
  const opts = ['Last 7 days', 'Last 14 days', 'Last 30 days', 'Last 90 days']
  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)} style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#eff1f5', border: 'none', borderRadius: 4, padding: '8px 12px', fontSize: 14, fontWeight: 500, color: '#343c51', cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif', whiteSpace: 'nowrap' }}>
        {label}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {open && (
        <div style={{ position: 'absolute', right: 0, top: '100%', marginTop: 4, background: '#fff', border: '1px solid #e6e6e6', borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.1)', zIndex: 200, minWidth: 140, overflow: 'hidden' }}>
          {opts.map(o => (
            <div key={o} onClick={() => { setLabel(o); setOpen(false) }} style={{ padding: '10px 16px', fontSize: 13, color: o === label ? '#ed1b36' : '#2b2b2b', fontWeight: o === label ? 600 : 400, cursor: 'pointer', background: o === label ? '#fde8eb' : 'transparent', fontFamily: '"Noto Sans", sans-serif' }}
              onMouseEnter={e => { if (o !== label) e.currentTarget.style.background = '#f7f7f7' }}
              onMouseLeave={e => { if (o !== label) e.currentTarget.style.background = 'transparent' }}
            >{o}</div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Stat Card (uses Tarmac Badge for the label chip) ──────────────────────────
function StatCard({ icon, iconBg, iconColor, label, value, children }) {
  return (
    <Card isHoverable={false} style={{ flex: 1, minWidth: 0, borderRadius: 12, border: '1px solid var(--rule)' }}>
      <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 4, background: iconBg, color: iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
          <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-3)', fontFamily: 'var(--font-ui)' }}>{label}</span>
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-disp)', lineHeight: 1, letterSpacing: -0.5, marginBottom: 12 }}>{value}</div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>{children}</div>
      </div>
    </Card>
  )
}

function StatRow({ label, value, link }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, borderTop: '1px solid var(--rule)' }}>
      <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>{label} <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{value}</strong></span>
      {link && (
        <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2, whiteSpace: 'nowrap' }}>
          {link} <IcoChevR />
        </a>
      )}
    </div>
  )
}

// ── Finance claim sub-section ─────────────────────────────────────────────────
function ClaimSection({ title, icon, rows }) {
  return (
    <div style={{ borderBottom: '1px solid var(--rule)', padding: '16px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ color: 'var(--red)' }}>{icon}</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{title}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {rows.map((r, i) => (
          <div key={i} style={{ background: r.bg, borderRadius: 8, padding: '14px 16px' }}>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 6 }}>{r.label}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-disp)', lineHeight: 1 }}>{r.value}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: r.amtColor || 'var(--ink-3)', marginTop: 4 }}>{r.amount}</div>
            {r.cta && (
              <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 3, marginTop: 6 }}>
                {r.cta} <IcoArrow />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Pickup column card (new Figma design) ─────────────────────────────────────
function PickupCol({ dayLabel, dayName, date, pickupId, statusLabel, statusVariant, accentColor, buttons }) {
  const pillBg   = statusVariant === 'error'   ? 'var(--Surface-BG_Error-Weakest, #fdf2f4)'
                 : statusVariant === 'warning' ? 'var(--Surface-BG_Warning-Weakest, #fefaec)'
                 :                               'var(--Surface-BG_Blue-Weakest, #f0f8ff)'
  const pillText = statusVariant === 'error'   ? 'var(--Text-Error-Tertiary, #930d28)'
                 : statusVariant === 'warning' ? 'var(--Text-Warning-Primary, #7b6414)'
                 :                               'var(--Text-Info_Blue-Tertiary, #1764a7)'
  return (
    <div style={{ flex: '1 1 0', minWidth: 0, border: '1px solid var(--Border-Neutral-Primary, #e6e6e6)', borderRadius: 12, paddingBottom: 12, overflow: 'hidden' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 12px 6px', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--Text-Caption-Base, #808080)', fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif' }}>{dayLabel}, </span>
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--Text-Caption-Primary, #454545)', fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif' }}>{dayName}</span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--Text-Caption-Base, #808080)', fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif' }}>{date}</span>
      </div>
      <div style={{ height: 1, background: 'var(--Border-Neutral-Primary, #e6e6e6)', margin: '0 12px' }} />
      {/* content */}
      <div style={{ margin: '12px 12px 0', background: 'var(--Surface-BG_Coal-Weakest, #f9f9fb)', borderRadius: 12, padding: '8px 8px 8px 12px', display: 'flex', gap: 8, alignItems: 'center' }}>
        {/* left accent bar */}
        <div style={{ width: 2, height: 72, borderRadius: 999, background: accentColor, flexShrink: 0 }} />
        {/* info */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--Text-Info_Blue-Primary, #2396fb)', fontFamily: 'var(--Font_Family-body, "Noto Sans"), sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{pickupId}</div>
              <div style={{ fontSize: 10, fontWeight: 500, color: 'var(--Text-Caption-Base, #808080)', fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif', marginTop: 1 }}>PICKUP ID</div>
            </div>
            {/* status pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: pillBg, borderRadius: 999, padding: '4px 8px', flexShrink: 0 }}>
              <span style={{ fontSize: 10, fontWeight: 500, color: pillText, fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif', whiteSpace: 'nowrap' }}>{statusLabel}</span>
            </div>
          </div>
          {/* action buttons */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {buttons.map((b, i) => (
              <Button key={i} variant={b.primary ? 'black' : 'outline'} size="sm"
                leadingIcon={b.icon}
                style={{ background: b.primary ? undefined : '#fff', whiteSpace: 'nowrap', padding: '6px' }}>
                {b.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── SmartAssist insight card ───────────────────────────────────────────────────
function InsightCard({ title, body, cta }) {
  return (
    <Card isHoverable={false} style={{ marginBottom: 12, border: '1px solid var(--rule)', borderRadius: 12 }}>
      <div style={{ padding: '16px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <span style={{ color: '#7C3AED' }}><IcoSpark /></span>
          <Badge text="SmartAssist Insight" variant="coal" badgeType="subtle" size="sm" />
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 10 }}>{body}</div>
        <div style={{ background: '#F0FFF8', border: '1px solid #B3E2CF', borderRadius: 4, padding: '8px 12px', fontSize: 12, fontWeight: 600, color: 'var(--green)', cursor: 'pointer' }}>{cta}</div>
      </div>
    </Card>
  )
}

// ── Disruption row ─────────────────────────────────────────────────────────────
function DisruptionRow({ icon, title, meta, severity }) {
  const color = severity === 'high' ? 'var(--red)' : severity === 'med' ? 'var(--yellow)' : 'var(--blue)'
  return (
    <div style={{ display: 'flex', gap: 10, padding: '12px 0 12px 12px', borderBottom: '1px solid var(--rule)', borderLeft: `3px solid ${color}`, marginLeft: -12 }}>
      <span style={{ color, flexShrink: 0, marginTop: 1 }}>{icon}</span>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{title}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 2 }}>{meta}</div>
        <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 3, marginTop: 4 }}>
          View affected <IcoChevR />
        </a>
      </div>
    </div>
  )
}

// ── Performance section ────────────────────────────────────────────────────────
const PERF_WEEKS = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
// [inTransit%, delivered%, returned%] — stacked, values are proportions of max
const PERF_DATA = [
  { inTransit: 32, delivered: 42, returned: 9 },
  { inTransit: 62, delivered: 60, returned: 9 },
  { inTransit: 110, delivered: 182, returned: 26 },
  { inTransit: 10, delivered: 28, returned: 26 },
  { inTransit: 44, delivered: 50, returned: 36 },
  { inTransit: 56, delivered: 120, returned: 64 },
]
const CHART_MAX = 300

function PerformanceSection() {
  const [filter, setFilter] = useState('Last 7 days')
  const [filterOpen, setFilterOpen] = useState(false)
  const filterOpts = ['Last 7 days', 'Last 14 days', 'Last 30 days', 'Last 90 days']
  const kpis = [
    { label: 'Delivered',        value: '1,234', delta: '+50%', up: true },
    { label: 'First attempt',    value: '1,101', delta: '+50%', up: true },
    { label: 'Avg delivery time', value: '2.4 days', delta: '+50%', up: true },
    { label: 'Avg pickup time',  value: '3.1 hrs', delta: '+50%', up: true },
  ]
  const yLabels = [300, 240, 180, 120, 60, 0]

  return (
    <Card isHoverable={false} style={{ marginBottom: 20, borderRadius: 12, border: '1px solid var(--rule)', padding: 24 }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 600, lineHeight: '26px', color: 'var(--Text-Heading-Tertiary, #2b2b2b)', fontFamily: 'var(--Font_Family-heading, "Noto Sans"), sans-serif' }}>Performance</div>
          <div style={{ fontSize: 12, fontWeight: 400, color: 'var(--Text-Heading-Base, #666)', fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif', marginTop: 4 }}>This excludes shipments picked in last 3 days</div>
        </div>
        <div style={{ position: 'relative' }}>
          <button onClick={() => setFilterOpen(o => !o)} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'var(--Surface-BG_Coal-Weaker, #eff1f5)', border: 'none', borderRadius: 4, padding: '8px 12px', fontSize: 14, fontWeight: 500, color: 'var(--Text-Coal-Primary, #343c51)', cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif' }}>
            {filter}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          {filterOpen && (
            <div style={{ position: 'absolute', right: 0, top: '100%', marginTop: 4, background: '#fff', border: '1px solid #e6e6e6', borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.1)', zIndex: 200, minWidth: 140, overflow: 'hidden' }}>
              {filterOpts.map(o => (
                <div key={o} onClick={() => { setFilter(o); setFilterOpen(false) }}
                  style={{ padding: '10px 16px', fontSize: 13, color: o === filter ? '#ed1b36' : '#2b2b2b', fontWeight: o === filter ? 600 : 400, cursor: 'pointer', background: o === filter ? '#fde8eb' : 'transparent', fontFamily: '"Noto Sans", sans-serif' }}
                  onMouseEnter={e => { if (o !== filter) e.currentTarget.style.background = '#f7f7f7' }}
                  onMouseLeave={e => { if (o !== filter) e.currentTarget.style.background = 'transparent' }}
                >{o}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* KPI cards row */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
        {kpis.map((k, i) => (
          <div key={i} style={{ flex: '1 1 0', background: '#f9f9fb', borderRadius: 6, padding: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 400, color: 'var(--Text-Caption-Primary, #454545)', fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif', marginBottom: 6 }}>{k.label}</div>
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: '26px', color: 'var(--Text-Body-Primary, #2b2b2b)', fontFamily: 'var(--Font_Family-heading, "Noto Sans"), sans-serif', marginBottom: 6 }}>{k.value}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <span style={{ fontSize: 10, fontWeight: 500, color: k.up ? '#1ba86e' : '#ed1b36', display: 'flex', alignItems: 'center' }}>
                {k.delta}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: k.up ? 'none' : 'rotate(90deg)' }}>
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </span>
              <span style={{ fontSize: 10, fontWeight: 500, color: '#808080', fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif' }}>vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--rule)', marginBottom: 20 }} />

      {/* Stacked bar chart */}
      <div style={{ display: 'flex', flexDirection: 'column', height: 320, padding: 8 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {/* Chart + y-axis */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'stretch', minHeight: 0 }}>
            {/* Y axis */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', paddingRight: 8, width: 36, fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(0,0,0,0.55)' }}>
              {yLabels.map(l => <span key={l}>{l}</span>)}
            </div>
            {/* Bars + grid */}
            <div style={{ flex: 1, position: 'relative', minWidth: 0 }}>
              {/* Horizontal grid lines */}
              {yLabels.map((_, i) => (
                <div key={i} style={{ position: 'absolute', left: 0, right: 0, top: `${(i / (yLabels.length - 1)) * 100}%`, height: 1, background: i === yLabels.length - 1 ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.07)' }} />
              ))}
              {/* Bar groups */}
              <div style={{ position: 'absolute', inset: '6px 0 28px 0', display: 'flex', alignItems: 'flex-end' }}>
                {PERF_DATA.map((d, i) => {
                  const total = d.inTransit + d.delivered + d.returned
                  const pct = (v) => `${(v / CHART_MAX) * 100}%`
                  return (
                    <div key={i} style={{ flex: 1, display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'flex-end' }}>
                      <div style={{ width: '55%', height: pct(total), display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        {/* returned (top, lightest) */}
                        <div style={{ height: pct(d.returned), background: '#e0e3eb', borderRadius: '4px 4px 0 0', minHeight: d.returned > 0 ? 2 : 0 }} />
                        {/* delivered (mid, darker) */}
                        <div style={{ height: pct(d.delivered), background: '#5a688c', minHeight: d.delivered > 0 ? 2 : 0 }} />
                        {/* inTransit (bottom, darkest) */}
                        <div style={{ height: pct(d.inTransit), background: '#98a2bc', minHeight: d.inTransit > 0 ? 2 : 0 }} />
                      </div>
                    </div>
                  )
                })}
              </div>
              {/* X axis labels */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 28, display: 'flex' }}>
                {PERF_WEEKS.map(w => (
                  <div key={w} style={{ flex: 1, textAlign: 'center', fontSize: 11, fontFamily: 'Inter, sans-serif', color: 'rgba(0,0,0,0.55)', paddingTop: 4 }}>{w}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Legend */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 8 }}>
          {[['#e0e3eb', 'In transit'], ['#5a688c', 'Delivered'], ['#98a2bc', 'Returned']].map(([color, label]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontFamily: 'Inter, sans-serif', color: 'rgba(0,0,0,0.7)' }}>
              <div style={{ width: 8, height: 8, background: color, border: '1px solid #fff' }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function B2CContent() {
  const [slide, setSlide] = useState(0)

  const slides = [
    { bg: 'var(--dark)', tag: 'For you · Recommended', tagColor: '#F36779', title: 'Secure with Delhivery Protect', body: 'Get cover up to ₹30,000 per shipment. In case of loss or damage.', cta: 'Activate Protect →', ctaBg: 'var(--red)', ctaSecondary: 'Learn more' },
    { bg: '#0B3253', tag: 'Coming soon · July', tagColor: '#72BFFE', title: 'Predictive RTO scoring', body: 'AI flags orders likely to fail before dispatch.', cta: 'Join waitlist →', ctaBg: '#2396FB' },
    { bg: '#1B1F2E', tag: 'Policy update · May 31', tagColor: '#B2B8CC', title: 'New fuel surcharge from 1 Jun', body: 'Domestic rates increase 2.4% — review your pricing now.', cta: 'Review rates →', ctaBg: '#3D445C' },
  ]
  const s = slides[slide]

  return (
    <div className="content" style={{ position: 'relative' }}>

      {/* ── Business Overview (Revenue KPIs) ── */}
      <div style={{
        background: 'var(--Surface-BG_Primary-Default, #fff)',
        border: '1px solid var(--Border-Neutral-Tertiary, #e6e6e6)',
        borderRadius: 'var(--Radius-Large, 12px)',
        overflow: 'hidden',
        marginBottom: 16,
      }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--Border-Neutral-Tertiary, #e6e6e6)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--Text-Heading-Primary, #1a1a1a)', fontFamily: 'var(--Font_Family-heading, "Noto Sans"), sans-serif' }}>Business Overview</div>
            <div style={{ fontSize: 12, fontWeight: 400, color: 'var(--Text-Caption-Primary, #454545)', marginTop: 2, fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif' }}>Last 30 days performance</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { icon: <IcoTrendUp />, iconColor: 'var(--Text-Success-Primary, #1ba86e)', label: 'Revenue (OMS)',         value: '₹42.8L', delta: '+12% vs L30D', deltaColor: 'var(--Text-Success-Primary, #1ba86e)' },
            { icon: <IcoBox />,     iconColor: 'var(--Text-Accent-Primary, #2396fb)',  label: 'AOV',                   value: '₹1,247', delta: '+7% vs L30D',  deltaColor: 'var(--Text-Success-Primary, #1ba86e)' },
            { icon: <IcoBox />,     iconColor: '#7C3AED',                              label: 'Total orders',           value: '3,432',  delta: '+2% vs L30D',  deltaColor: 'var(--Text-Success-Primary, #1ba86e)' },
            { icon: <IcoTruck />,   iconColor: 'var(--Text-Warning-Primary, #cf9f02)', label: 'Shipped with Delhivery', value: '1,544',  delta: '45% of total', deltaColor: 'var(--Text-Caption-Base, #808080)' },
          ].map((m, i, arr) => (
            <div key={i} style={{ padding: '16px 20px', borderRight: i < arr.length - 1 ? '1px solid var(--Border-Neutral-Tertiary, #e6e6e6)' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span style={{ color: m.iconColor }}>{m.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--Text-Caption-Primary, #454545)', fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif' }}>{m.label}</span>
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, lineHeight: '26px', letterSpacing: 0, color: 'var(--Text-Body-Primary, #2b2b2b)', fontFamily: 'var(--Font_Family-heading, "Noto Sans"), sans-serif', marginBottom: 6 }}>{m.value}</div>
              <div style={{ fontSize: 10, fontWeight: 500, lineHeight: '12px', color: m.deltaColor, fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif' }}>{m.delta}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Orders Summary — rich tiles with CTAs ── */}
      <div style={{ background: '#fff', border: '1px solid #e6e6e6', borderRadius: 12, padding: 16, marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <span style={{ fontSize: 20, fontWeight: 600, lineHeight: '26px', color: '#2b2b2b', fontFamily: '"Noto Sans", sans-serif' }}>Orders Summary</span>
          <DateFilter />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'stretch' }}>

          {/* Pending manifest */}
          <div style={{ flex: '1 1 0', minWidth: 0, background: '#f9f9fb', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <div style={{ width: 24, height: 24, borderRadius: 4, background: '#fde8eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ed1b36', flexShrink: 0 }}><IcoWarning /></div>
              <span style={{ fontSize: 12, color: '#454545' }}>Pending manifest</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#2b2b2b', lineHeight: 1, marginBottom: 4 }}>312</div>
            <DeltaBadge delta="+8%" up />
            <div style={{ borderTop: '1px solid #e6e6e6', marginTop: 10, paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
              <SubRow label="Bad address" value="47" link="Fix now" linkColor="#ed1b36" />
              <SubRow label="High risk orders" value="23" link="Review" />
            </div>
          </div>

          {/* To be shipped */}
          <div style={{ flex: '1 1 0', minWidth: 0, background: '#f9f9fb', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <div style={{ width: 24, height: 24, borderRadius: 4, background: '#fff3ec', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e77337', flexShrink: 0 }}><IcoBox /></div>
              <span style={{ fontSize: 12, color: '#454545' }}>To be shipped</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#2b2b2b', lineHeight: 1, marginBottom: 4 }}>156</div>
            <DeltaBadge delta="+3%" up />
            <div style={{ borderTop: '1px solid #e6e6e6', marginTop: 10, paddingTop: 10, flex: 1 }}>
              <SubRow label="High risk AWBs" value="12" link="Review" />
            </div>
          </div>

          {/* Awaiting pickup */}
          <div style={{ flex: '1 1 0', minWidth: 0, background: '#f9f9fb', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <div style={{ width: 24, height: 24, borderRadius: 4, background: '#e6f3fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2396fb', flexShrink: 0 }}><IcoClock /></div>
              <span style={{ fontSize: 12, color: '#454545' }}>Awaiting pickup</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#2b2b2b', lineHeight: 1, marginBottom: 4 }}>9</div>
            <DeltaBadge delta="+1" up />
            <div style={{ borderTop: '1px solid #e6e6e6', marginTop: 10, paddingTop: 10, flex: 1 }}>
              <Button variant="black" size="sm" style={{ width: '100%', justifyContent: 'center' }}>Schedule now</Button>
            </div>
          </div>

          {/* NDR */}
          <div style={{ flex: '1 1 0', minWidth: 0, background: '#f9f9fb', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <div style={{ width: 24, height: 24, borderRadius: 4, background: '#f3f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c3aed', flexShrink: 0 }}><IcoChat /></div>
              <span style={{ fontSize: 12, color: '#454545' }}>NDR</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#2b2b2b', lineHeight: 1, marginBottom: 4 }}>84</div>
            <DeltaBadge delta="-2%" up={false} />
            <div style={{ borderTop: '1px solid #e6e6e6', marginTop: 10, paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              <Chip text="Automate NDR" chipType="coal" chipVariant="outlined" size="sm" />
              <Button size="sm" style={{ width: '100%', justifyContent: 'center', background: '#7c3aed', borderColor: '#7c3aed', color: '#fff' }}>
                Activate SmartNDR
              </Button>
            </div>
          </div>

          {/* Support tickets */}
          <div style={{ flex: '1 1 0', minWidth: 0, background: '#f9f9fb', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <div style={{ width: 24, height: 24, borderRadius: 4, background: '#ecf8f3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1ba86e', flexShrink: 0 }}><IcoHeadset /></div>
              <span style={{ fontSize: 12, color: '#454545' }}>Support tickets</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#2b2b2b', lineHeight: 1, marginBottom: 4 }}>18</div>
            <DeltaBadge delta="-3" up={false} />
            <div style={{ borderTop: '1px solid #e6e6e6', marginTop: 10, paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
              <SubRow label="Recently resolved" value="32" link="See resolution" />
              <SubRow label="Need your input" value="11" link="Respond" linkColor="#ed1b36" />
            </div>
          </div>

        </div>{/* end tiles row */}
      </div>{/* end Orders Summary card */}

      {/* ── Main 2-col grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20, alignItems: 'start' }}>

        {/* LEFT */}
        <div>

          {/* Finance */}
          <Card isHoverable={false} style={{ marginBottom: 20, borderRadius: 12, border: '1px solid var(--rule)', padding: '0 18px' }}>
            <div style={{ padding: '16px 0 0', borderBottom: '1px solid var(--rule)' }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>Finance</span>
            </div>
            <ClaimSection title="Loss & Damage Claims" icon={<IcoShield />} rows={[
              { label: 'Need your input', value: '7',  amount: '₹18,200', amtColor: 'var(--yellow)', bg: '#FDFAF2', cta: 'Respond' },
              { label: 'Rejected',        value: '3',  amount: '₹9,400',  amtColor: 'var(--red)',   bg: '#FDF2F3' },
            ]} />
            <ClaimSection title="Weight Disputes" icon={<IcoScale />} rows={[
              { label: 'Need your input', value: '5',  amount: '₹14,800', amtColor: 'var(--yellow)', bg: '#FDFAF2', cta: 'Respond' },
              { label: 'Rejected',        value: '2',  amount: '₹6,500',  amtColor: 'var(--red)',   bg: '#FDF2F3' },
            ]} />
            {/* COD Remittance */}
            <div style={{ padding: '16px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ color: 'var(--blue)' }}><IcoCod /></span>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>COD Remittance</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 4 }}>Remitted (L30D)</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-disp)', letterSpacing: -0.5 }}>₹8,45,600</div>
                </div>
                <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3 }}>View details <IcoChevR /></a>
              </div>
              <div style={{ background: 'var(--surface)', borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
                <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 4 }}>Next remittance</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>May 15, 2026</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)', marginTop: 2 }}>₹1,24,500</div>
              </div>
              <Alert
                variant="error"
                alertStyle="subtle"
                size="sm"
                title="Anomaly detected"
                description="Finlock on your account due to pending verification. Contact support."
                ctaActions={<Button variant="dlv_red" size="sm" buttonStyle="tertiary">Resolve now →</Button>}
                showCtas
              />
            </div>
          </Card>

          {/* Upcoming Pickups */}
          <Card isHoverable={false} style={{ marginBottom: 20, borderRadius: 12, border: '1px solid var(--rule)', padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <span style={{ fontSize: 20, fontWeight: 600, lineHeight: '26px', color: 'var(--Text-Body-Primary, #2b2b2b)', fontFamily: 'var(--Font_Family-heading, "Noto Sans"), sans-serif' }}>Upcoming Pickups</span>
              <a style={{ fontSize: 12, fontWeight: 500, color: 'var(--Text-Info_Blue-Primary, #2396fb)', cursor: 'pointer', fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif' }}>View all</a>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <PickupCol
                dayLabel="YESTERDAY" dayName="SUN" date="24 May"
                pickupId="896232"
                statusLabel="Not Picked" statusVariant="error"
                accentColor="var(--delhivery-red, #ed1b36)"
                buttons={[
                  { label: 'Reschedule', primary: false },
                  { icon: <IcoHeadset />, label: undefined, primary: false },
                ]}
              />
              <PickupCol
                dayLabel="TODAY" dayName="MON" date="25 May"
                pickupId="896233"
                statusLabel="Out for Pickup" statusVariant="info"
                accentColor="var(--delhivery-blue, #2396fb)"
                buttons={[
                  { label: 'Print  Labels', primary: false },
                  { label: 'Call Executive', primary: false },
                ]}
              />
              <PickupCol
                dayLabel="TOMORROW" dayName="TUE" date="26 May"
                pickupId="896222"
                statusLabel="Scheduled" statusVariant="warning"
                accentColor="var(--warning, #e9a900)"
                buttons={[
                  { label: 'Print  Labels', primary: false },
                  { icon: <IcoHeadset />, label: undefined, primary: false },
                ]}
              />
            </div>
          </Card>

          {/* SmartAssist Insights */}
          <InsightCard
            title="Your RTO rate jumped 4.2pp last month"
            body="Top driver: bad addresses in Uttar Pradesh (+18 orders)"
            cta="Fix 18 bad addresses → estimated ₹2.1L recovered"
          />
          <InsightCard
            title="Your COD share is increasing with contribution from Hyderabad"
            body="COD jumped from 42% to 58% in last 30 days"
            cta="Try to change demand mix for better cash flow"
          />
          <Button variant="black" size="md" trailingIcon={<IcoArrow />} style={{ width: '100%', justifyContent: 'center', marginBottom: 20 }}>
            View analysis
          </Button>

          {/* Performance */}
          <PerformanceSection />
        </div>

        {/* RIGHT RAIL */}
        <div>

          {/* Wallet */}
          <Card isHoverable={false} style={{ marginBottom: 16, borderRadius: 12, border: '1px solid var(--rule)', padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ color: 'var(--ink-3)' }}><IcoWallet /></span>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>Wallet</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 4 }}>Available balance</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-disp)', letterSpacing: -1, marginBottom: 4 }}>₹12,456</div>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 12 }}>Last recharged: ₹50,000 on May 8, 2026</div>
            <Alert
              variant="warning"
              alertStyle="subtle"
              size="sm"
              title="Low balance alert"
              description="Recharge now to avoid service interruption"
              style={{ marginBottom: 12 }}
            />
            <Button variant="black" size="sm" style={{ width: '100%', justifyContent: 'center', marginBottom: 8 }}>
              Recharge wallet ↗
            </Button>
            <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
              View transaction history <IcoChevR />
            </a>
          </Card>

          {/* Promo carousel */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ background: s.bg, borderRadius: 12, padding: '16px 18px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: -20, top: -20, width: 100, height: 100, borderRadius: 999, background: 'radial-gradient(closest-side, rgba(237,27,54,0.25), transparent)', pointerEvents: 'none' }} />
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: s.tagColor, fontFamily: 'var(--font-ui)', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ color: '#7C3AED' }}><IcoSpark /></span>{s.tag}
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 12, color: '#B2B8CC', marginBottom: 14, lineHeight: 1.5 }}>{s.body}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button style={{ height: 30, padding: '0 14px', borderRadius: 999, background: s.ctaBg, color: '#fff', border: 'none', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>{s.cta}</button>
                {s.ctaSecondary && <a style={{ fontSize: 12, color: '#B2B8CC', cursor: 'pointer' }}>{s.ctaSecondary}</a>}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, padding: '0 2px' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {slides.map((_, i) => (
                  <div key={i} onClick={() => setSlide(i)} style={{ height: 6, borderRadius: 999, cursor: 'pointer', background: i === slide ? 'var(--ink-3)' : 'var(--rule)', width: i === slide ? 16 : 6, transition: 'all 150ms' }} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <Button variant="outline" size="sm" buttonType="iconButton" onClick={() => setSlide((slide - 1 + slides.length) % slides.length)}><IcoChevL /></Button>
                <Button variant="outline" size="sm" buttonType="iconButton" onClick={() => setSlide((slide + 1) % slides.length)}><IcoChevR /></Button>
              </div>
            </div>
          </div>

          {/* Disruptions */}
          <Card isHoverable={false} style={{ borderRadius: 12, border: '1px solid var(--rule)', padding: '16px 18px 8px' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>Disruptions affecting your shipments</div>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 12 }}>Last synced: 11:59 AM</div>
            <DisruptionRow icon={<IcoStop />}    title="Embargo · Madhya Pradesh"   meta="12 shipments at risk · Est. delay 2–3 days" severity="high" />
            <DisruptionRow icon={<IcoRain />}    title="Heavy rain · Mumbai, Pune"  meta="8 shipments at risk · Est. delay 1 day"     severity="med" />
            <DisruptionRow icon={<IcoStarOut />} title="Local festival · Rajasthan" meta="3 shipments at risk · Delivery may be delayed" severity="low" />
            <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3, padding: '10px 0 4px' }}>
              View all disruptions <IcoChevR />
            </a>
          </Card>

        </div>
      </div>

      {/* Floating SmartAssist */}
      <button style={{ position: 'fixed', bottom: 24, right: 24, height: 44, padding: '0 18px', background: 'var(--dark)', color: '#fff', border: 'none', borderRadius: 999, fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', zIndex: 300, boxShadow: '0 4px 14px rgba(0,0,0,0.25)' }}>
        <span style={{ color: '#7C3AED' }}><IcoSpark /></span>Ask SmartAssist
      </button>
    </div>
  )
}
