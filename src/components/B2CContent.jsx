import { useState } from 'react'
import { Button, Badge, Chip, Alert, Card, Pill, ProgressBar, FilterDropdown, Divider, TabGroup, TabCell, TableHeaderCell, TableTextCell } from '@delhivery/tarmac'

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

// ── Finance claim card (Figma-spec compact layout) ───────────────────────────
function ClaimCard({ title, total, inputCount, inputAmt, rejectedCount, rejectedAmt, showCta = true }) {
  return (
    <div style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Header chip — sits above the card, overlapping */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--Surface-BG_Coal-Weak, #eff1f5)', borderRadius: '8px 8px 0 0', padding: '8px 14px 20px', zIndex: 1, position: 'relative' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--Text-Heading-Primary, #121212)', fontFamily: '"Noto Sans", sans-serif', whiteSpace: 'nowrap' }}>{title}</span>
        <Badge text={`Total ${total}`} variant="error" badgeType="subtle" size="sm" />
      </div>
      {/* Body card — overlaps header bottom */}
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 0 2px rgba(0,0,0,0.1)', padding: '20px 20px 16px', marginTop: -12, display: 'flex', gap: 0, flex: 1 }}>
        {/* INPUT NEEDED col */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4, paddingRight: 16 }}>
          <div style={{ height: 3, background: 'var(--Surface-BG_Warning-Weak, #fcedb7)', borderRadius: 999, marginBottom: 12 }} />
          <span style={{ fontSize: 10, fontWeight: 500, color: 'var(--Text-Caption-Primary, #454545)', fontFamily: '"Noto Sans", sans-serif', letterSpacing: 0.4 }}>INPUT NEEDED</span>
          <span style={{ fontSize: 20, fontWeight: 600, color: 'var(--Text-Coal-Primary, #343c51)', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1.2 }}>{inputCount}</span>
          <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--Text-Success-Primary, #1ba86e)', fontFamily: '"Noto Sans", sans-serif' }}>{inputAmt}</span>
          {showCta && (
            <a style={{ marginTop: 8, fontSize: 12, fontWeight: 600, color: '#2396fb', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 3, fontFamily: '"Noto Sans", sans-serif' }}>
              Respond <IcoArrow />
            </a>
          )}
        </div>
        {/* Vertical divider */}
        <Divider orientation="vertical" size="0.5" style={{ alignSelf: 'stretch', height: 'auto' }} />
        {/* REJECTED col */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4, paddingLeft: 16 }}>
          <div style={{ height: 3, background: 'var(--Surface-BG_DLV_Red-Weak, #fbd1d7)', borderRadius: 999, marginBottom: 12 }} />
          <span style={{ fontSize: 10, fontWeight: 500, color: 'var(--Text-Caption-Primary, #454545)', fontFamily: '"Noto Sans", sans-serif', letterSpacing: 0.4 }}>REJECTED</span>
          <span style={{ fontSize: 20, fontWeight: 600, color: 'var(--Text-Coal-Primary, #343c51)', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1.2 }}>{rejectedCount}</span>
          <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--Text-Success-Primary, #1ba86e)', fontFamily: '"Noto Sans", sans-serif' }}>{rejectedAmt}</span>
        </div>
      </div>
    </div>
  )
}

// ── Pickup card ───────────────────────────────────────────────────────────────
function PickupCol({ dayLabel, date, pickupCount, variant, cutoff, missedReason, buttons }) {
  const theme = variant === 'error'
    ? { accent: '#ed1b36', badgeBg: '#fde8eb', badgeColor: '#ed1b36', headerBg: '#fff8f8', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> }
    : variant === 'info'
    ? { accent: '#2396fb', badgeBg: '#e6f3fe', badgeColor: '#2396fb', headerBg: '#f5f9ff', icon: <IcoClock /> }
    : { accent: '#e0e0e0', badgeBg: '#f4f4f6', badgeColor: '#666',    headerBg: '#fafafa',  icon: <IcoCalendar /> }

  return (
    <div style={{ flex: '1 1 0', minWidth: 0, border: '1px solid #e6e6e6', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Top accent bar */}
      <div style={{ height: 3, background: theme.accent }} />

      {/* Header */}
      <div style={{ background: theme.headerBg, padding: '14px 16px 12px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif', marginBottom: 2 }}>{dayLabel}</div>
          <div style={{ fontSize: 11, color: '#808080', fontFamily: '"Noto Sans", sans-serif' }}>{date}</div>
          {cutoff && (
            <div style={{ marginTop: 6, display: 'inline-flex', alignItems: 'center', gap: 4, background: '#fde8eb', borderRadius: 6, padding: '3px 8px' }}>
              <IcoClock />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#ed1b36', fontFamily: '"Noto Sans", sans-serif' }}>Cut-off in {cutoff}</span>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: theme.badgeBg, borderRadius: 20, padding: '4px 10px', flexShrink: 0 }}>
          <span style={{ color: theme.badgeColor, display: 'flex' }}>{theme.icon}</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: theme.badgeColor, fontFamily: '"Noto Sans", sans-serif' }}>{pickupCount} {pickupCount === 1 ? 'pickup' : 'pickups'}</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '12px 16px 16px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {missedReason && (
          <div style={{ background: '#fdf2f4', border: '1px solid #f5c6ce', borderRadius: 6, padding: '8px 12px', fontSize: 12, fontFamily: '"Noto Sans", sans-serif', color: '#1a1a1a' }}>
            <span style={{ fontWeight: 600, color: '#ed1b36' }}>Reason: </span>{missedReason}
          </div>
        )}
        <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
          {buttons.map((b, i) => (
            <Button key={i} variant="coal" size="sm"
              leadingIcon={b.icon}
              style={{ flex: '1 1 0', justifyContent: 'center', whiteSpace: 'nowrap', backgroundColor: '#eff1f5', color: '#343c51' }}>
              {b.label}
            </Button>
          ))}
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

function PerformanceSection({ onSeeAnalysis }) {
  const [filter, setFilter] = useState('Last 7 days')
  const [filterOpen, setFilterOpen] = useState(false)
  const [tooltip, setTooltip] = useState(null) // { index, x, y }
  const filterOpts = ['Last 7 days', 'Last 14 days', 'Last 30 days', 'Last 90 days']
  const kpis = [
    { label: 'Delivered',         value: '1,234',    delta: '+11%',    up: true  },
    { label: 'First attempt',     value: '1,101',    delta: '-3%',     up: false },
    { label: 'Avg delivery time', value: '2.4 days', delta: '+0.2d',   up: false },
    { label: 'Avg pickup time',   value: '3.1 hrs',  delta: '-18 min', up: true  },
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <span style={{ fontSize: 10, fontWeight: 500, color: k.up ? '#1ba86e' : '#ed1b36', display: 'flex', alignItems: 'center' }}>
                  {k.delta}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: k.up ? 'none' : 'rotate(90deg)' }}>
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </span>
                <span style={{ fontSize: 10, fontWeight: 500, color: '#808080', fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif' }}>vs last month</span>
              </div>
              {onSeeAnalysis && (
                <a onClick={onSeeAnalysis} style={{ fontSize: 10, fontWeight: 600, color: '#2396fb', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2, fontFamily: '"Noto Sans", sans-serif', whiteSpace: 'nowrap' }}>
                  See trend <IcoChevR />
                </a>
              )}
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
                  const isHovered = tooltip?.index === i
                  return (
                    <div key={i} style={{ flex: 1, display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'flex-end', position: 'relative' }}
                      onMouseEnter={e => {
                        const rect = e.currentTarget.getBoundingClientRect()
                        setTooltip({ index: i, x: rect.left + rect.width / 2, y: rect.top })
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    >
                      <div style={{ width: isHovered ? '65%' : '55%', height: pct(total), display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', transition: 'width 100ms', cursor: 'default' }}>
                        <div style={{ height: pct(d.returned), background: isHovered ? '#c8ccd8' : '#e0e3eb', borderRadius: '4px 4px 0 0', minHeight: d.returned > 0 ? 2 : 0, transition: 'background 100ms' }} />
                        <div style={{ height: pct(d.delivered), background: isHovered ? '#3d4f7a' : '#5a688c', minHeight: d.delivered > 0 ? 2 : 0, transition: 'background 100ms' }} />
                        <div style={{ height: pct(d.inTransit), background: isHovered ? '#7a8aaa' : '#98a2bc', minHeight: d.inTransit > 0 ? 2 : 0, transition: 'background 100ms' }} />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Tooltip */}
              {tooltip && (() => {
                const d = PERF_DATA[tooltip.index]
                const week = PERF_WEEKS[tooltip.index]
                return (
                  <div style={{ position: 'fixed', left: tooltip.x, top: tooltip.y - 8, transform: 'translate(-50%, -100%)', background: '#1a1a1a', color: '#fff', borderRadius: 8, padding: '10px 14px', fontSize: 12, fontFamily: '"Noto Sans", sans-serif', zIndex: 9999, pointerEvents: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.2)', minWidth: 140, lineHeight: 1.6 }}>
                    <div style={{ fontWeight: 700, marginBottom: 6, color: '#fff' }}>{week}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                      <span style={{ color: '#a0a8bc' }}>Delivered</span>
                      <span style={{ fontWeight: 600, color: '#7ed4a4' }}>{d.delivered}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                      <span style={{ color: '#a0a8bc' }}>In transit</span>
                      <span style={{ fontWeight: 600, color: '#c8d0e0' }}>{d.inTransit}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                      <span style={{ color: '#a0a8bc' }}>Returned</span>
                      <span style={{ fontWeight: 600, color: '#ff8fa0' }}>{d.returned}</span>
                    </div>
                    <div style={{ borderTop: '1px solid #333', marginTop: 6, paddingTop: 6, display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                      <span style={{ color: '#a0a8bc' }}>Return rate</span>
                      <span style={{ fontWeight: 700, color: d.returned / (d.delivered + d.returned) > 0.15 ? '#ff6b6b' : '#7ed4a4' }}>
                        {Math.round(d.returned / (d.delivered + d.returned) * 100)}%
                      </span>
                    </div>
                  </div>
                )
              })()}
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

// ── Performance by Geography section ──────────────────────────────────────────
const GEO_DATA = {
  zone: [
    { name: 'Zone A',   orderMix: '38%', rto: '8.2%',  cod: '45%', ttd50: '1.8d', ttd75: '2.2d', ttd95: '3.1d', firstAttempt: '92.5%' },
    { name: 'Zone B',   orderMix: '28%', rto: '10.5%', cod: '52%', ttd50: '2.1d', ttd75: '2.6d', ttd95: '3.8d', firstAttempt: '88.2%' },
    { name: 'Zone C',   orderMix: '22%', rto: '14.8%', cod: '58%', ttd50: '2.4d', ttd75: '3.1d', ttd95: '4.5d', firstAttempt: '84.1%' },
    { name: 'Zone D-F', orderMix: '12%', rto: '18.2%', cod: '65%', ttd50: '3.2d', ttd75: '4.1d', ttd95: '5.8d', firstAttempt: '79.6%' },
  ],
  cities: [
    { name: 'Mumbai',    orderMix: '18%', rto: '7.1%',  cod: '38%', ttd50: '1.2d', ttd75: '1.6d', ttd95: '2.3d', firstAttempt: '94.2%' },
    { name: 'Delhi',     orderMix: '15%', rto: '9.4%',  cod: '42%', ttd50: '1.4d', ttd75: '1.9d', ttd95: '2.8d', firstAttempt: '91.8%' },
    { name: 'Bengaluru', orderMix: '12%', rto: '8.8%',  cod: '35%', ttd50: '1.3d', ttd75: '1.7d', ttd95: '2.5d', firstAttempt: '93.1%' },
    { name: 'Hyderabad', orderMix: '9%',  rto: '11.2%', cod: '48%', ttd50: '1.6d', ttd75: '2.1d', ttd95: '3.0d', firstAttempt: '89.4%' },
    { name: 'Chennai',   orderMix: '8%',  rto: '10.8%', cod: '44%', ttd50: '1.5d', ttd75: '2.0d', ttd95: '2.9d', firstAttempt: '90.6%' },
    { name: 'Pune',      orderMix: '7%',  rto: '12.3%', cod: '51%', ttd50: '1.7d', ttd75: '2.3d', ttd95: '3.3d', firstAttempt: '87.5%' },
    { name: 'Ahmedabad', orderMix: '6%',  rto: '13.1%', cod: '55%', ttd50: '1.9d', ttd75: '2.5d', ttd95: '3.6d', firstAttempt: '85.9%' },
    { name: 'Kolkata',   orderMix: '5%',  rto: '15.6%', cod: '60%', ttd50: '2.2d', ttd75: '2.9d', ttd95: '4.1d', firstAttempt: '83.2%' },
    { name: 'Jaipur',    orderMix: '4%',  rto: '16.4%', cod: '62%', ttd50: '2.5d', ttd75: '3.3d', ttd95: '4.7d', firstAttempt: '81.4%' },
    { name: 'Surat',     orderMix: '3%',  rto: '14.2%', cod: '57%', ttd50: '2.0d', ttd75: '2.7d', ttd95: '3.9d', firstAttempt: '84.7%' },
  ],
  states: [
    { name: 'Maharashtra', orderMix: '22%', rto: '8.9%',  cod: '40%', ttd50: '1.5d', ttd75: '2.0d', ttd95: '2.9d', firstAttempt: '91.3%' },
    { name: 'Delhi',       orderMix: '15%', rto: '9.4%',  cod: '42%', ttd50: '1.4d', ttd75: '1.9d', ttd95: '2.8d', firstAttempt: '91.8%' },
    { name: 'Karnataka',   orderMix: '11%', rto: '9.1%',  cod: '36%', ttd50: '1.4d', ttd75: '1.8d', ttd95: '2.6d', firstAttempt: '92.7%' },
    { name: 'Telangana',   orderMix: '9%',  rto: '11.5%', cod: '49%', ttd50: '1.7d', ttd75: '2.2d', ttd95: '3.1d', firstAttempt: '88.9%' },
    { name: 'Tamil Nadu',  orderMix: '8%',  rto: '11.0%', cod: '46%', ttd50: '1.6d', ttd75: '2.1d', ttd95: '3.0d', firstAttempt: '89.8%' },
    { name: 'Gujarat',     orderMix: '7%',  rto: '13.4%', cod: '54%', ttd50: '2.0d', ttd75: '2.6d', ttd95: '3.7d', firstAttempt: '85.4%' },
    { name: 'Uttar Pradesh', orderMix: '7%', rto: '17.8%', cod: '63%', ttd50: '2.8d', ttd75: '3.7d', ttd95: '5.2d', firstAttempt: '80.1%' },
    { name: 'Rajasthan',   orderMix: '5%',  rto: '16.1%', cod: '61%', ttd50: '2.6d', ttd75: '3.4d', ttd95: '4.9d', firstAttempt: '81.7%' },
    { name: 'West Bengal', orderMix: '5%',  rto: '15.3%', cod: '59%', ttd50: '2.3d', ttd75: '3.0d', ttd95: '4.3d', firstAttempt: '82.9%' },
    { name: 'Madhya Pradesh', orderMix: '4%', rto: '19.1%', cod: '67%', ttd50: '3.4d', ttd75: '4.4d', ttd95: '6.1d', firstAttempt: '78.4%' },
  ],
}

const GEO_COLS = [
  { key: 'name',         label: 'ZONE',           align: 'left',  color: null },
  { key: 'orderMix',     label: 'ORDER MIX',      align: 'right', color: null },
  { key: 'rto',          label: 'RTO %',          align: 'right', color: 'red' },
  { key: 'cod',          label: 'COD %',          align: 'right', color: null },
  { key: 'ttd50',        label: 'TYPICAL',        align: 'right', color: null },
  { key: 'ttd75',        label: 'USUAL',          align: 'right', color: null },
  { key: 'ttd95',        label: 'WORST CASE',     align: 'right', color: null },
  { key: 'firstAttempt', label: 'FIRST ATTEMPT %', align: 'right', color: 'green' },
]

function PerformanceByGeographySection() {
  const [activeTab, setActiveTab] = useState('zone')
  const rows = GEO_DATA[activeTab]
  const colTemplate = '1.4fr 0.9fr 0.9fr 0.9fr 0.9fr 0.9fr 0.9fr 1.1fr'

  return (
    <Card isHoverable={false} style={{ marginBottom: 20, borderRadius: 12, border: '1px solid var(--rule)', padding: 24 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 600, lineHeight: '26px', color: 'var(--Text-Heading-Tertiary, #2b2b2b)', fontFamily: 'var(--Font_Family-heading, "Noto Sans"), sans-serif' }}>Performance by Geography</div>
          <div style={{ fontSize: 12, color: 'var(--Text-Heading-Base, #666)', fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif', marginTop: 4 }}>Last 30 days</div>
        </div>
        {/* Tab switcher */}
        <TabGroup tabType="button" size="sm">
          {[{ key: 'zone', label: 'Zone' }, { key: 'cities', label: 'Top 10 Cities' }, { key: 'states', label: 'Top 10 States' }].map(t => (
            <TabCell key={t.key} tabType="button" size="sm" title={t.label} isPressed={activeTab === t.key} onClick={() => setActiveTab(t.key)} />
          ))}
        </TabGroup>
      </div>

      {/* Column headers */}
      <div style={{ display: 'grid', gridTemplateColumns: colTemplate, padding: '0 12px 10px' }}>
        {GEO_COLS.map(col => (
          <div key={col.key} style={{ textAlign: col.align, fontSize: 11, fontWeight: 600, color: '#808080', fontFamily: '"Noto Sans", sans-serif', letterSpacing: '0.04em' }}>
            {col.label}
          </div>
        ))}
      </div>

      <Divider size="0.5" />

      {/* Data rows */}
      {rows.map((row, i) => (
        <div key={row.name}>
          <div style={{ display: 'grid', gridTemplateColumns: colTemplate, padding: '14px 12px', alignItems: 'center' }}>
            {GEO_COLS.map(col => {
              const val = row[col.key]
              const color = col.color === 'red' ? 'var(--Text-Error-Primary, #dc143c)'
                          : col.color === 'green' ? 'var(--Text-Success-Primary, #1ba86e)'
                          : col.key === 'name' ? 'var(--Text-Body-Primary, #2b2b2b)'
                          : 'var(--Text-Body-Secondary, #454545)'
              return (
                <div key={col.key} style={{ textAlign: col.align, fontSize: 14, fontWeight: col.key === 'name' ? 600 : (col.color ? 600 : 400), color, fontFamily: '"Noto Sans", sans-serif' }}>
                  {val}
                </div>
              )
            })}
          </div>
          {i < rows.length - 1 && <Divider size="0.5" />}
        </div>
      ))}

      <style>{`
        .tbl-hdr-right > * { text-align: right; justify-content: flex-end; }
      `}</style>
    </Card>
  )
}

// ── Needs Your Attention — Action Center ─────────────────────────────────────
const SEVERITY = {
  critical: { label: 'CRITICAL', color: '#ed1b36', bg: '#fde8eb', lightBg: '#fff8f8' },
  urgent:   { label: 'URGENT',   color: '#e07230', bg: '#fff3ec', lightBg: '#fffaf7' },
  normal:   { label: 'NORMAL',   color: '#a07000', bg: '#fef9e7', lightBg: '#fdfbf0' },
}

const ACTION_ITEMS = [
  { sev: 'critical', icon: <IcoStop />,     title: 'Account finlock',   count: 1,   unit: 'issue',     desc: 'Pending KYC verification — shipments may be held',        cta: 'Resolve now'    },
  { sev: 'critical', icon: <IcoTruck />,    title: 'PDD breached',      count: 12,  unit: 'shipments', desc: 'Deliveries past promised date — customer SLA at risk',    cta: 'View shipments' },
  { sev: 'urgent',   icon: <IcoChat />,     title: 'NDR pending',       count: 84,  unit: 'shipments', desc: 'Awaiting your instruction to re-attempt delivery',         cta: 'Resolve NDRs'   },
  { sev: 'urgent',   icon: <IcoCalendar />, title: 'Pickup missed',     count: 1,   unit: 'pickup',    desc: 'Yesterday · Pickup 896232 was not collected',             cta: 'Reschedule'     },
  { sev: 'urgent',   icon: <IcoWarning />,  title: 'Bad addresses',     count: 47,  unit: 'orders',    desc: 'Incomplete address — will be held at origin facility',    cta: 'Fix addresses'  },
  { sev: 'normal',   icon: <IcoBox />,      title: 'Pending manifest',  count: 312, unit: 'orders',    desc: 'Ready to hand over — awaiting manifest creation',         cta: 'Manifest now'   },
  { sev: 'normal',   icon: <IcoHeadset />,  title: 'Support tickets',   count: 11,  unit: 'tickets',   desc: 'Need your input — 1 approaching SLA breach',              cta: 'Respond'        },
  { sev: 'normal',   icon: <IcoShield />,   title: 'Claims & disputes', count: 12,  unit: 'items',     desc: '7 L&D claims + 5 weight disputes awaiting response',      cta: 'View claims'    },
]

function ActionRow({ item, isLast }) {
  const cfg = SEVERITY[item.sev]
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 20px 13px 17px', borderBottom: isLast ? 'none' : '1px solid #f5f5f5', borderLeft: `3px solid ${cfg.color}`, cursor: 'pointer', transition: 'background 100ms', background: 'transparent' }}
      onMouseEnter={e => e.currentTarget.style.background = cfg.lightBg}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      <div style={{ width: 34, height: 34, borderRadius: 8, background: cfg.bg, color: cfg.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {item.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif' }}>{item.title}</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: cfg.color, background: cfg.bg, borderRadius: 999, padding: '1px 7px', fontFamily: '"Noto Sans", sans-serif' }}>
            {item.count} {item.unit}
          </span>
        </div>
        <span style={{ fontSize: 12, color: '#808080', fontFamily: '"Noto Sans", sans-serif' }}>{item.desc}</span>
      </div>
      <a style={{ fontSize: 12, fontWeight: 700, color: cfg.color, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3, whiteSpace: 'nowrap', flexShrink: 0, fontFamily: '"Noto Sans", sans-serif' }}>
        {item.cta} <IcoArrow />
      </a>
    </div>
  )
}

function ActionCard({ item }) {
  const cfg = SEVERITY[item.sev]
  return (
    <div
      style={{ flex: '1 1 0', minWidth: 0, border: `1px solid ${cfg.bg}`, borderTop: `3px solid ${cfg.color}`, borderRadius: 10, padding: '16px 18px', background: '#fff', cursor: 'pointer', transition: 'box-shadow 150ms', display: 'flex', flexDirection: 'column', gap: 10 }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: cfg.bg, color: cfg.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {item.icon}
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, color: cfg.color, background: cfg.bg, borderRadius: 999, padding: '2px 8px', fontFamily: '"Noto Sans", sans-serif', whiteSpace: 'nowrap', alignSelf: 'center' }}>
          {item.count} {item.unit}
        </span>
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif', marginBottom: 4 }}>{item.title}</div>
        <div style={{ fontSize: 12, color: '#808080', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1.4 }}>{item.desc}</div>
      </div>
      <a style={{ marginTop: 'auto', fontSize: 12, fontWeight: 700, color: cfg.color, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: '"Noto Sans", sans-serif' }}>
        {item.cta} <IcoArrow />
      </a>
    </div>
  )
}

function NeedsAttentionSection({ isSupport = false }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  // Support view hides finlock — it's a financial/account health item
  const visibleItems = isSupport ? ACTION_ITEMS.filter(i => i.title !== 'Account finlock') : ACTION_ITEMS
  const critical = visibleItems.filter(i => i.sev === 'critical')
  const topUrgent = visibleItems.filter(i => i.sev === 'urgent').slice(0, 1)
  const preview = [...critical, ...topUrgent].slice(0, 3)

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif' }}>Needs your attention</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#ed1b36', background: '#fde8eb', borderRadius: 999, padding: '2px 8px', fontFamily: '"Noto Sans", sans-serif' }}>
              {critical.length} critical
            </span>
          </div>
          <button
            onClick={() => setDrawerOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'none', border: '1px solid #e6e6e6', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, color: '#454545', cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif', transition: 'border-color 120ms' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#aaa'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#e6e6e6'}
          >
            View all {visibleItems.length} <IcoChevR />
          </button>
        </div>

        {/* ── 3 cards side by side ── */}
        <div style={{ display: 'flex', gap: 14 }}>
          {preview.map((item, idx) => <ActionCard key={idx} item={item} />)}
        </div>
      </div>

      {/* ── Side drawer — all items ── */}
      {drawerOpen && (
        <>
          <div
            onClick={() => setDrawerOpen(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.35)', zIndex: 800, animation: 'fadeIn 150ms ease' }}
          />
          <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 420, background: '#fff', zIndex: 900, display: 'flex', flexDirection: 'column', boxShadow: '-8px 0 32px rgba(0,0,0,0.12)', animation: 'slideInRight 200ms ease' }}>
            {/* Drawer header */}
            <div style={{ padding: '18px 20px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif' }}>All actions</div>
                <div style={{ fontSize: 12, color: '#808080', marginTop: 2, fontFamily: '"Noto Sans", sans-serif' }}>{visibleItems.length} items need your attention</div>
              </div>
              <button onClick={() => setDrawerOpen(false)} style={{ width: 30, height: 30, borderRadius: 6, background: '#f4f4f6', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#454545' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            {/* Drawer body — scrollable */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {['critical', 'urgent', 'normal'].map(sev => {
                const cfg   = SEVERITY[sev]
                const items = visibleItems.filter(i => i.sev === sev)
                return (
                  <div key={sev}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 20px', background: cfg.lightBg, borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', borderLeft: `3px solid ${cfg.color}` }}>
                      <div style={{ width: 7, height: 7, borderRadius: '50%', background: cfg.color }} />
                      <span style={{ fontSize: 10, fontWeight: 700, color: cfg.color, letterSpacing: 1, textTransform: 'uppercase', fontFamily: '"Noto Sans", sans-serif' }}>{cfg.label}</span>
                      <span style={{ fontSize: 10, color: '#bbb', fontFamily: '"Noto Sans", sans-serif' }}>{items.length} {items.length === 1 ? 'item' : 'items'}</span>
                    </div>
                    {items.map((item, idx) => (
                      <ActionRow key={idx} item={item} isLast={idx === items.length - 1} />
                    ))}
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}
    </>
  )
}

// ── Support Tasks section ────────────────────────────────────────────────────
function SupportTasksSection() {
  const tasks = [
    { count: 7,  countColor: '#ed1b36', title: 'Tickets need your input',    sub: '3 customer-facing · oldest 18h' },
    { count: 4,  countColor: '#e07230', title: 'Open claims awaiting docs',   sub: '₹38,420 · 1 expires today' },
    { count: 86, countColor: '#1a1a1a', title: 'NDR — call customer',         sub: 'Resolve before 6pm cut-off' },
    { count: 42, countColor: '#1a1a1a', title: 'Bad addresses to fix',        sub: 'Auto-suggest available · 38' },
  ]

  return (
    <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, padding: '18px 20px', marginBottom: 24 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif', marginBottom: 3 }}>
            Tasks for you · <span style={{ fontWeight: 700 }}>11 to action</span>
          </div>
          <div style={{ fontSize: 12, color: '#808080', fontFamily: '"Noto Sans", sans-serif' }}>
            Customer issues, stuck shipments and tickets needing your input. Sorted by SLA breach risk.
          </div>
        </div>
        <div style={{ background: '#fde8eb', border: '1px solid #f5c0c8', borderRadius: 999, padding: '4px 12px', whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 16 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#ed1b36', fontFamily: '"Noto Sans", sans-serif' }}>3 breaching SLA in &lt; 2h</span>
        </div>
      </div>

      {/* Task cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {tasks.map((t, i) => (
          <div key={i} style={{
            background: '#f7f7f9', borderRadius: 8, padding: '16px 18px',
            cursor: 'pointer', transition: 'box-shadow 150ms',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div style={{ fontSize: 32, fontWeight: 700, color: t.countColor, fontFamily: '"Noto Sans", sans-serif', lineHeight: 1, marginBottom: 8 }}>{t.count}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif', marginBottom: 4 }}>{t.title}</div>
            <div style={{ fontSize: 11, color: '#808080', fontFamily: '"Noto Sans", sans-serif' }}>{t.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Orders Summary 2 ─────────────────────────────────────────────────────────
function OrdersSummary2() {
  const IcoFire = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 2c0 0-5 4-5 9a5 5 0 0010 0c0-5-5-9-5-9z"/><path d="M12 12c0 0-2 1.5-2 3a2 2 0 004 0c0-1.5-2-3-2-3z"/></svg>
  const IcoArrow = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>

  const items = [
    {
      id: 'ndr',
      urgency: 'critical',
      accentColor: '#ed1b36',
      accentBg: '#fde8eb',
      headline: '₹84,000 at risk',
      subline: 'from 84 undelivered orders',
      why: 'Customers couldn\'t be reached. Every day without action increases return probability.',
      metric: { label: 'Avg. at risk per order', value: '₹1,000' },
      cta: 'Respond to NDRs',
    },
    {
      id: 'manifest',
      urgency: 'urgent',
      accentColor: '#e07230',
      accentBg: '#fff3ec',
      headline: '312 orders not booked',
      subline: 'manifests pending dispatch',
      why: 'These shipments haven\'t been picked up yet. Delays here push your delivery dates out.',
      metric: { label: 'Bad addresses blocking', value: '47 orders' },
      cta: 'Book manifests',
    },
    {
      id: 'rto',
      urgency: 'normal',
      accentColor: '#a07000',
      accentBg: '#fef9e7',
      headline: '23 high-risk orders',
      subline: 'likely to RTO before dispatch',
      why: 'AI flagged these as return-prone. Review before pickup to avoid wasted shipping cost.',
      metric: { label: 'Estimated RTO cost if ignored', value: '~₹3,450' },
      cta: 'Review orders',
    },
    {
      id: 'tickets',
      urgency: 'info',
      accentColor: '#2396fb',
      accentBg: '#e6f3fe',
      headline: '11 tickets need your reply',
      subline: 'out of 18 open support cases',
      why: 'Unresolved tickets affect your seller rating and customer trust.',
      metric: { label: 'Recently resolved', value: '32 tickets' },
      cta: 'Open tickets',
    },
  ]

  const urgencyLabel = { critical: 'Act now', urgent: 'Today', normal: 'Review', info: 'FYI' }

  return (
    <div style={{ marginBottom: 24 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <span style={{ fontSize: 20, fontWeight: 600, color: '#2b2b2b', fontFamily: '"Noto Sans", sans-serif' }}>Orders Summary</span>
          <span style={{ fontSize: 12, color: '#808080', fontFamily: '"Noto Sans", sans-serif', marginLeft: 8 }}>— v2</span>
        </div>
        <div style={{ fontSize: 12, color: '#808080', fontFamily: '"Noto Sans", sans-serif' }}>
          Today · May 13, 2026
        </div>
      </div>

      {/* Hero risk banner */}
      <div style={{
        background: 'linear-gradient(135deg, #fff8f8 0%, #fde8eb 100%)',
        border: '1px solid #f5c0c8', borderRadius: 10, padding: '14px 18px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: '#fde8eb', border: '1px solid #f5c0c8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ed1b36' }}>
            <IcoFire />
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, color: '#ed1b36', fontFamily: '"Noto Sans", sans-serif', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Revenue at risk today</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1.2, letterSpacing: -0.5 }}>₹87,450</div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, color: '#808080', fontFamily: '"Noto Sans", sans-serif', marginBottom: 3 }}>across NDR + RTO risk</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#ed1b36', fontFamily: '"Noto Sans", sans-serif' }}>107 shipments affected</div>
        </div>
      </div>

      {/* Action cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {items.map(item => (
          <div key={item.id} style={{
            background: '#fff', border: '1px solid #e8e8e8', borderRadius: 10,
            overflow: 'hidden', display: 'flex', flexDirection: 'column',
            transition: 'box-shadow 150ms',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            {/* Accent top bar */}
            <div style={{ height: 3, background: item.accentColor }} />

            <div style={{ padding: '14px 14px 12px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* Urgency pill */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: item.accentBg, borderRadius: 4, padding: '2px 7px', marginBottom: 10, alignSelf: 'flex-start' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.accentColor }} />
                <span style={{ fontSize: 10, fontWeight: 700, color: item.accentColor, fontFamily: '"Noto Sans", sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{urgencyLabel[item.urgency]}</span>
              </div>

              {/* Main number / headline */}
              <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1.25, marginBottom: 3 }}>{item.headline}</div>
              <div style={{ fontSize: 11, color: '#808080', fontFamily: '"Noto Sans", sans-serif', marginBottom: 10 }}>{item.subline}</div>

              {/* Why it matters */}
              <div style={{ fontSize: 11, color: '#454545', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1.5, marginBottom: 10, flex: 1 }}>{item.why}</div>

              {/* Context metric */}
              <div style={{ background: '#f7f7f9', borderRadius: 6, padding: '7px 10px', marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: '#808080', fontFamily: '"Noto Sans", sans-serif' }}>{item.metric.label}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif' }}>{item.metric.value}</span>
              </div>

              {/* CTA */}
              <button style={{
                width: '100%', padding: '8px 0', background: item.accentColor, color: '#fff',
                border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 600,
                fontFamily: '"Noto Sans", sans-serif', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                transition: 'opacity 150ms',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {item.cta} <IcoArrow />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function B2CContent({ role = 'owner' }) {
  const isSupport = role === 'support'
  const [tab, setTab] = useState('overview')
  const [slide, setSlide] = useState(0)

  const slides = [
    { bg: 'var(--dark)', tag: 'For you · Recommended', tagColor: '#F36779', title: 'Secure with Delhivery Protect', body: 'Get cover up to ₹30,000 per shipment. In case of loss or damage.', cta: 'Activate Protect →', ctaBg: 'var(--red)', ctaSecondary: 'Learn more' },
    { bg: '#0B3253', tag: 'Coming soon · July', tagColor: '#72BFFE', title: 'Predictive RTO scoring', body: 'AI flags orders likely to fail before dispatch.', cta: 'Join waitlist →', ctaBg: '#2396FB' },
    { bg: '#1B1F2E', tag: 'Policy update · May 31', tagColor: '#B2B8CC', title: 'New fuel surcharge from 1 Jun', body: 'Domestic rates increase 2.4% — review your pricing now.', cta: 'Review rates →', ctaBg: '#3D445C' },
  ]
  const s = slides[slide]

  return (
    <div className="content" style={{ position: 'relative' }}>

      {/* ── Support role banner ── */}
      {isSupport && (
        <div style={{ background: '#f0f6ff', border: '1px solid #c5dcf9', borderRadius: 8, padding: '10px 16px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2396fb" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 116 0c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="#2396fb"/></svg>
          <span style={{ fontSize: 12, fontWeight: 500, color: '#1a6abf', fontFamily: '"Noto Sans", sans-serif' }}>
            <strong>Support view</strong> — financial data and business intelligence are hidden. Switch to Owner view to see full details.
          </span>
        </div>
      )}

      {/* ── Tabs ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--rule)', marginBottom: 20, marginTop: -4 }}>
        <div style={{ display: 'flex' }}>
          {[
            { id: 'overview',  label: 'Overview' },
            { id: 'analysis',  label: 'Analysis' },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '10px 20px', fontSize: 14, fontWeight: tab === t.id ? 600 : 400,
              color: tab === t.id ? 'var(--ink)' : 'var(--ink-3)',
              borderBottom: tab === t.id ? '2px solid var(--red)' : '2px solid transparent',
              marginBottom: -1, fontFamily: '"Noto Sans", sans-serif',
              transition: 'color 120ms',
            }}>
              {t.label}
            </button>
          ))}
        </div>
        <DateFilter />
      </div>

      {tab === 'analysis' && <>
        {/* ── Business Overview (Revenue KPIs) — owner only ── */}
        {!isSupport && <div style={{ background: 'var(--Surface-BG_Primary-Default, #fff)', border: '1px solid var(--Border-Neutral-Tertiary, #e6e6e6)', borderRadius: 'var(--Radius-Large, 12px)', overflow: 'hidden', marginBottom: 16 }}>
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
                <div style={{ fontSize: 20, fontWeight: 700, lineHeight: '26px', color: 'var(--Text-Body-Primary, #2b2b2b)', fontFamily: 'var(--Font_Family-heading, "Noto Sans"), sans-serif', marginBottom: 6 }}>{m.value}</div>
                <div style={{ fontSize: 10, fontWeight: 500, color: m.deltaColor, fontFamily: 'var(--Font_Family-caption, "Noto Sans"), sans-serif' }}>{m.delta}</div>
              </div>
            ))}
          </div>
        </div>}
        {/* Performance */}
        <PerformanceSection />
        {/* Performance by Geography */}
        <PerformanceByGeographySection />
      </>}

      {tab === 'overview' && <>

      {/* ── Action Center ── */}
      {isSupport ? <SupportTasksSection /> : <NeedsAttentionSection />}

      {/* ── Orders Summary — rich tiles with CTAs ── */}
      <div style={{ background: '#fff', border: '1px solid #e6e6e6', borderRadius: 12, padding: 16, marginBottom: 24 }}>
        <div style={{ marginBottom: 14 }}>
          <span style={{ fontSize: 20, fontWeight: 600, lineHeight: '26px', color: '#2b2b2b', fontFamily: '"Noto Sans", sans-serif' }}>Orders Summary</span>
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
              <button onClick={() => setTab('analysis')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3, fontSize: 12, fontWeight: 600, color: '#2396fb', fontFamily: '"Noto Sans", sans-serif' }}>
                See trend <IcoChevR />
              </button>
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

        {/* Footer link to Analysis */}
        <div style={{ borderTop: '1px solid #f0f0f0', marginTop: 12, paddingTop: 10, display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={() => setTab('analysis')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: '#2396fb', fontFamily: '"Noto Sans", sans-serif', padding: 0 }}>
            See delivery trends in Analysis <IcoChevR />
          </button>
        </div>
      </div>{/* end Orders Summary card */}

      {/* ── Orders Summary 2 — owner only ── */}
      {!isSupport && <OrdersSummary2 />}

      {/* ── Main 2-col grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20, alignItems: 'start' }}>

        {/* LEFT */}
        <div>

          {/* Finance — owner only */}
          {!isSupport && <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', fontFamily: '"Noto Sans", sans-serif' }}>Finance</span>
                <span style={{ fontSize: 12, color: '#808080', fontFamily: '"Noto Sans", sans-serif' }}>Total at risk:</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#ed1b36', fontFamily: '"Noto Sans", sans-serif' }}>₹48,900</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <ClaimCard title="Loss & Damage Claims" total={10} inputCount={7}  inputAmt="₹18,200" rejectedCount={3} rejectedAmt="₹9,400" />
              <ClaimCard title="Weight Disputes"       total={7}  inputCount={5}  inputAmt="₹14,800" rejectedCount={2} rejectedAmt="₹6,500" />
            </div>
          </div>}

          {/* Upcoming Pickups */}
          <Card isHoverable={false} style={{ marginBottom: 20, borderRadius: 12, border: '1px solid var(--rule)', padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--Text-Body-Primary, #2b2b2b)', fontFamily: '"Noto Sans", sans-serif' }}>Upcoming Pickups</span>
              <a style={{ fontSize: 12, fontWeight: 500, color: 'var(--Text-Info_Blue-Primary, #2396fb)', cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif' }}>View all</a>
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <PickupCol
                dayLabel="Yesterday" date="May 12, 2026"
                pickupCount={1} variant="error"
                missedReason="Shipment not ready"
                buttons={[{ label: 'Reschedule', primary: true }]}
              />
              <PickupCol
                dayLabel="Today" date="May 13, 2026"
                pickupCount={9} variant="info" cutoff="2h 14m"
                buttons={[
                  { icon: <IcoPhone />, label: 'Call FE', primary: false },
                  { icon: <IcoPrint />, label: 'Print labels', primary: false },
                ]}
              />
              <PickupCol
                dayLabel="Tomorrow" date="May 14, 2026"
                pickupCount={3} variant="default"
                buttons={[{ icon: <IcoPrint />, label: 'Print labels', primary: false }]}
              />
            </div>
          </Card>

          {/* SmartAssist Insights — hidden */}
        </div>

        {/* RIGHT RAIL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* ── Wallet card — owner only ── */}
          {!isSupport && <Card isHoverable={false} style={{ borderRadius: 12, border: '1px solid var(--rule)', overflow: 'hidden' }}>
            {/* Low balance banner — top of card, unmissable */}
            <div style={{ background: '#fffbec', borderBottom: '1px solid #fcedb7', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c28b00" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#a07000', fontFamily: '"Noto Sans", sans-serif' }}>Low balance — recharge to avoid disruption</span>
            </div>
            <div style={{ padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: 'var(--ink-3)' }}><IcoWallet /></span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', fontFamily: '"Noto Sans", sans-serif' }}>Wallet</span>
                </div>
                <a style={{ fontSize: 11, fontWeight: 500, color: 'var(--blue)', cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif' }}>History <IcoChevR /></a>
              </div>
              <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 2 }}>Available balance</div>
              <div style={{ fontSize: 30, fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-disp)', letterSpacing: -1, marginBottom: 2 }}>₹12,456</div>
              <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 14 }}>Last recharged ₹50,000 · May 8</div>
              <Button variant="black" size="sm" style={{ width: '100%', justifyContent: 'center' }}>
                Recharge wallet ↗
              </Button>
            </div>
          </Card>}

          {/* ── COD Remittance card — owner only ── */}
          {!isSupport && <Card isHoverable={false} style={{ borderRadius: 12, border: '1px solid var(--rule)', overflow: 'hidden' }}>
            {/* Next payout hero */}
            <div style={{ background: 'linear-gradient(135deg, #f0fdf8 0%, #e8f8f2 100%)', borderBottom: '1px solid #b3e2cf', padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span style={{ color: '#1ba86e' }}><IcoCod /></span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif' }}>COD Remittance</span>
              </div>
              <div style={{ fontSize: 11, color: '#1ba86e', fontWeight: 500, fontFamily: '"Noto Sans", sans-serif', marginBottom: 4 }}>NEXT PAYOUT · MAY 15, 2026</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#1ba86e', fontFamily: 'var(--font-disp)', letterSpacing: -1, lineHeight: 1, marginBottom: 4 }}>₹1,24,500</div>
              <div style={{ fontSize: 11, color: '#454545', fontFamily: '"Noto Sans", sans-serif' }}>In 2 days · direct to your bank account</div>
            </div>
            <div style={{ padding: '12px 18px' }}>
              <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3, fontFamily: '"Noto Sans", sans-serif' }}>
                View remittance details <IcoChevR />
              </a>
            </div>
          </Card>}

          {/* ── Support quick-ref card — support only ── */}
          {isSupport && (
            <Card isHoverable={false} style={{ borderRadius: 12, border: '1px solid #c5dcf9', overflow: 'hidden' }}>
              <div style={{ background: '#f0f6ff', borderBottom: '1px solid #c5dcf9', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2396fb" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 116 0c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="#2396fb"/></svg>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1a6abf', fontFamily: '"Noto Sans", sans-serif' }}>Support quick-ref</span>
              </div>
              <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { label: 'NDR pending', value: '84', note: 'Awaiting re-attempt instruction', color: '#ed1b36' },
                  { label: 'Tickets needing reply', value: '11', note: 'SLA risk on 1 ticket', color: '#e07230' },
                  { label: 'Bad addresses', value: '47', note: 'Call customer to fix', color: '#a07000' },
                  { label: 'Support tickets open', value: '18', note: '32 resolved this month', color: '#2396fb' },
                ].map((r, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: i < 3 ? 10 : 0, borderBottom: i < 3 ? '1px solid #eef3fb' : 'none' }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif' }}>{r.label}</div>
                      <div style={{ fontSize: 11, color: '#808080', fontFamily: '"Noto Sans", sans-serif', marginTop: 1 }}>{r.note}</div>
                    </div>
                    <span style={{ fontSize: 18, fontWeight: 700, color: r.color, fontFamily: '"Noto Sans", sans-serif' }}>{r.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          )}

        </div>
      </div>

      {/* ── Quick links ── */}
      <div style={{ height: 1, background: 'var(--rule)', margin: '8px 0 20px' }} />
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        {[
          {
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
            title: 'Help Center',
            sub: 'FAQs, guides & support',
          },
          {
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-3"/><rect x="9" y="3" width="6" height="8" rx="1"/><path d="M9 12h6M9 16h4"/></svg>,
            title: 'Rate Calculator',
            sub: 'Estimate shipping costs',
          },
          {
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>,
            title: 'Book a Training Session',
            sub: 'Learn the platform with an expert',
          },
        ].map((item, i) => (
          <button key={i} style={{
            flex: '1 1 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 12, padding: '14px 16px', background: '#fff',
            border: '1px solid var(--rule)', borderRadius: 12, cursor: 'pointer',
            textAlign: 'left', transition: 'box-shadow 150ms, border-color 150ms',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = '#ccc' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--rule)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#f4f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#454545', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', fontFamily: '"Noto Sans", sans-serif' }}>{item.title}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: '"Noto Sans", sans-serif', marginTop: 2 }}>{item.sub}</div>
              </div>
            </div>
            <IcoChevR />
          </button>
        ))}
      </div>

      {/* Floating SmartAssist */}
      <button style={{ position: 'fixed', bottom: 24, right: 24, height: 44, padding: '0 18px', background: 'var(--dark)', color: '#fff', border: 'none', borderRadius: 999, fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', zIndex: 300, boxShadow: '0 4px 14px rgba(0,0,0,0.25)' }}>
        <span style={{ color: '#7C3AED' }}><IcoSpark /></span>Ask SmartAssist
      </button>
      </>}
    </div>
  )
}
