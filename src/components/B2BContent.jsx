import { useState } from 'react'
import { Button, Badge, Card, Divider } from '@delhivery/tarmac'

const IcoChevR   = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
const IcoWallet  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 2v5M8 2v5"/><circle cx="16" cy="14" r="2"/></svg>
const IcoCod     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
const IcoHeadset = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z"/><path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>
const IcoClock   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
const IcoCalendar= () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
const IcoPhone   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
const IcoPrint   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
const IcoArrow   = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
const IcoSpark   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
const IcoArrowR  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8c8c8" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>

const B2B_PIPELINE = [
  {
    id: 'pre-dispatch',
    label: 'Pre-Dispatch',
    color: '#2396fb',
    bg: '#e6f3fe',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13h6M9 17h4"/></svg>,
    cards: [
      { label: 'LRs manifested · PUR not created', count: 45,  unit: 'LRs', delta: '+6',  up: false, accent: '#ed1b36', accentBg: '#fde8eb', sub: [{ label: 'Pending > 24h', value: '12', link: 'Create PUR', linkColor: '#ed1b36' }] },
      { label: 'Awaiting pickup',                   count: 28,  unit: 'LRs', delta: '+3',  up: true,  accent: '#2396fb', accentBg: '#e6f3fe', sub: [{ link: 'Schedule Now', linkColor: '#2396fb' }] },
      { label: 'Documents needed',                  count: 20,  unit: 'LRs', delta: '+3',  up: false, accent: '#e07230', accentBg: '#fff3ec', pills: ['E-waybill'], sub: [{ label: 'Expiring today', value: '4', link: 'Upload now', linkColor: '#ed1b36' }] },
    ],
  },
  {
    id: 'in-transit',
    label: 'In Transit',
    color: '#7c3aed',
    bg: '#f3f0ff',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h11v10H3z"/><path d="M14 10h5l2 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>,
    cards: [
      { label: 'In transit',       count: 328, unit: 'LRs', delta: '+15%', up: true,  accent: '#7c3aed', accentBg: '#f3f0ff', sub: [{ link: 'Track all', linkColor: '#2396fb' }] },
      { label: 'Delayed',          count: 18,  unit: 'LRs', delta: '+4',   up: false, accent: '#ed1b36', accentBg: '#fde8eb', sub: [{ label: 'Critical delay', value: '6', link: 'View details', linkColor: '#ed1b36' }] },
      { label: 'NDR',              count: 24,  unit: 'LRs', delta: '+3',   up: false, accent: '#ed1b36', accentBg: '#fde8eb', sub: [{ label: 'Consignee unreachable', value: '9', link: 'Resolve NDR', linkColor: '#ed1b36' }] },
    ],
  },
  {
    id: 'delivered',
    label: 'Delivered',
    color: '#1ba86e',
    bg: '#ecf8f3',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>,
    cards: [
      { label: 'Delivered', count: 145, unit: 'LRs', delta: '+9%', up: true,  accent: '#1ba86e', accentBg: '#ecf8f3', sub: [{ link: 'View now', linkColor: '#2396fb' }] },
      { label: 'RTO',       count: 9,   unit: 'LRs', delta: '+2',  up: false, accent: '#ed1b36', accentBg: '#fde8eb', sub: [{ label: 'In transit back', value: '6', link: 'View orders', linkColor: '#2396fb' }] },
    ],
  },
]

function B2BPipelineCard({ card }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
        <span style={{ fontSize: 12, color: '#454545', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1.4 }}>{card.label}</span>
        <span style={{ fontSize: 10, fontWeight: 600, color: card.up ? '#1ba86e' : '#ed1b36', fontFamily: '"Noto Sans", sans-serif', flexShrink: 0 }}>
          {card.delta} {card.up ? '↑' : '↓'}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{ fontSize: 24, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1 }}>{card.count}</span>
        <span style={{ fontSize: 11, color: '#808080', fontFamily: '"Noto Sans", sans-serif' }}>{card.unit}</span>
      </div>
      {card.pills && card.pills.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {card.pills.map((p, i) => (
            <span key={i} style={{ fontSize: 10, fontWeight: 600, color: '#e07230', background: '#fff3ec', border: '1px solid #f5c89a', borderRadius: 999, padding: '2px 8px', fontFamily: '"Noto Sans", sans-serif' }}>{p}</span>
          ))}
        </div>
      )}
      {card.sub.length > 0 && (
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {card.sub.map((s, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: s.label ? 'space-between' : 'flex-start', alignItems: 'center', fontSize: 11 }}>
              {s.label && <span style={{ color: '#808080', fontFamily: '"Noto Sans", sans-serif' }}>{s.label} <strong style={{ color: '#2b2b2b' }}>{s.value}</strong></span>}
              {s.link && <a style={{ fontWeight: 600, color: s.linkColor || '#2396fb', cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif', whiteSpace: 'nowrap' }}>{s.link} →</a>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function B2BOrderSummary() {
  return (
    <div style={{ background: '#fff', border: '1px solid #e6e6e6', borderRadius: 12, padding: 20, marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 18 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif' }}>LR Summary</span>
        <span style={{ fontSize: 12, color: '#808080', fontFamily: '"Noto Sans", sans-serif' }}>pipeline view</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: 0, alignItems: 'start' }}>
        {B2B_PIPELINE.map((bucket, bi) => (
          <>
            <div key={bucket.id}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, padding: '8px 12px', background: '#eff1f5', borderRadius: 8 }}>
                <span style={{ color: bucket.color }}>{bucket.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif' }}>{bucket.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 600, color: '#454545', background: '#fff', borderRadius: 999, padding: '1px 8px', fontFamily: '"Noto Sans", sans-serif' }}>
                  {bucket.cards.reduce((s, c) => s + c.count, 0)} LRs
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {bucket.cards.map((card, ci) => <B2BPipelineCard key={ci} card={card} />)}
              </div>
            </div>
            {bi < B2B_PIPELINE.length - 1 && (
              <div key={`arrow-${bi}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 12px', paddingTop: 18 }}>
                <IcoArrowR />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

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

function ClaimCard({ title, total, inputCount, inputAmt, rejectedCount, rejectedAmt, showCta = true }) {
  return (
    <div style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--Surface-BG_Coal-Weak, #eff1f5)', borderRadius: '8px 8px 0 0', padding: '8px 14px 20px', zIndex: 1, position: 'relative' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#121212', fontFamily: '"Noto Sans", sans-serif', whiteSpace: 'nowrap' }}>{title}</span>
        <Badge text={`Total ${total}`} variant="error" badgeType="subtle" size="sm" />
      </div>
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 0 2px rgba(0,0,0,0.1)', padding: '20px 20px 16px', marginTop: -12, display: 'flex', gap: 0, flex: 1 }}>
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4, paddingRight: 16 }}>
          <div style={{ height: 3, background: '#fcedb7', borderRadius: 999, marginBottom: 12 }} />
          <span style={{ fontSize: 10, fontWeight: 500, color: '#454545', fontFamily: '"Noto Sans", sans-serif', letterSpacing: 0.4 }}>INPUT NEEDED</span>
          <span style={{ fontSize: 20, fontWeight: 600, color: '#343c51', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1.2 }}>{inputCount}</span>
          <span style={{ fontSize: 11, fontWeight: 500, color: '#1ba86e', fontFamily: '"Noto Sans", sans-serif' }}>{inputAmt}</span>
          {showCta && <a style={{ marginTop: 8, fontSize: 12, fontWeight: 600, color: '#2396fb', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 3, fontFamily: '"Noto Sans", sans-serif' }}>Respond <IcoArrow /></a>}
        </div>
        <Divider orientation="vertical" size="0.5" style={{ alignSelf: 'stretch', height: 'auto' }} />
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4, paddingLeft: 16 }}>
          <div style={{ height: 3, background: '#fbd1d7', borderRadius: 999, marginBottom: 12 }} />
          <span style={{ fontSize: 10, fontWeight: 500, color: '#454545', fontFamily: '"Noto Sans", sans-serif', letterSpacing: 0.4 }}>REJECTED</span>
          <span style={{ fontSize: 20, fontWeight: 600, color: '#343c51', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1.2 }}>{rejectedCount}</span>
          <span style={{ fontSize: 11, fontWeight: 500, color: '#1ba86e', fontFamily: '"Noto Sans", sans-serif' }}>{rejectedAmt}</span>
        </div>
      </div>
    </div>
  )
}

function PickupCol({ dayLabel, date, pickupCount, variant, cutoff, missedReason, buttons }) {
  const theme = variant === 'error'
    ? { accent: '#ed1b36', badgeBg: '#fde8eb', badgeColor: '#ed1b36', headerBg: '#eff1f5', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> }
    : variant === 'info'
    ? { accent: '#2396fb', badgeBg: '#e6f3fe', badgeColor: '#2396fb', headerBg: '#eff1f5', icon: <IcoClock /> }
    : { accent: '#1ba86e', badgeBg: '#eff1f5', badgeColor: '#454545', headerBg: '#eff1f5', icon: <IcoCalendar /> }
  return (
    <div style={{ flex: '1 1 0', minWidth: 0, border: '1px solid #e6e6e6', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 3, background: theme.accent }} />
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
      <div style={{ padding: '12px 16px 16px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {missedReason && (
          <div style={{ background: '#fdf2f4', border: '1px solid #f5c6ce', borderRadius: 6, padding: '8px 12px', fontSize: 12, fontFamily: '"Noto Sans", sans-serif', color: '#1a1a1a' }}>
            <span style={{ fontWeight: 600, color: '#ed1b36' }}>Reason: </span>{missedReason}
          </div>
        )}
        <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
          {buttons.map((b, i) => (
            <Button key={i} variant="coal" size="sm" leadingIcon={b.icon} style={{ flex: '1 1 0', justifyContent: 'center', whiteSpace: 'nowrap', backgroundColor: '#eff1f5', color: '#343c51' }}>
              {b.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}


export default function B2BContent() {
  const [tab, setTab] = useState('overview')

  return (
    <div className="content" style={{ position: 'relative' }}>

      {/* ── Tabs ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--rule)', marginBottom: 20, marginTop: -4 }}>
        <div style={{ display: 'flex' }}>
          {[{ id: 'overview', label: 'Overview' }, { id: 'analysis', label: 'Analysis' }].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '10px 20px', fontSize: 14, fontWeight: tab === t.id ? 600 : 400,
              color: tab === t.id ? 'var(--ink)' : 'var(--ink-3)',
              borderBottom: tab === t.id ? '2px solid var(--red)' : '2px solid transparent',
              marginBottom: -1, fontFamily: '"Noto Sans", sans-serif', transition: 'color 120ms',
            }}>{t.label}</button>
          ))}
        </div>
        <DateFilter />
      </div>

      {/* ── Analysis ── */}
      {tab === 'analysis' && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 320, color: '#98a2bc', fontSize: 14, fontFamily: '"Noto Sans", sans-serif' }}>
          Analysis coming soon
        </div>
      )}

      {/* ── Overview ── */}
      {tab === 'overview' && <>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20, alignItems: 'start' }}>

          {/* LEFT */}
          <div>
            {/* Alert strips */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff3f4', border: '1px solid #f5c0c8', borderRadius: 8, padding: '9px 16px', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ed1b36" strokeWidth="2.5" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#c0001a', fontFamily: '"Noto Sans", sans-serif', whiteSpace: 'nowrap' }}>Account finlock</span>
                  <span style={{ fontSize: 12, color: '#454545', fontFamily: '"Noto Sans", sans-serif' }}>Pending KYC · shipments may be held.</span>
                </div>
                <a style={{ fontSize: 12, fontWeight: 700, color: '#ed1b36', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: '"Noto Sans", sans-serif', display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>Resolve now <IcoChevR /></a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f3f0ff', border: '1px solid #d4c8f8', borderRadius: 8, padding: '9px 16px', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <IcoHeadset />
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#5b21b6', fontFamily: '"Noto Sans", sans-serif', whiteSpace: 'nowrap' }}>Support tickets</span>
                  <span style={{ fontSize: 12, color: '#454545', fontFamily: '"Noto Sans", sans-serif' }}>11 need your input · 1 nearing SLA.</span>
                </div>
                <a style={{ fontSize: 12, fontWeight: 700, color: '#7c3aed', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: '"Noto Sans", sans-serif', display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>Respond <IcoChevR /></a>
              </div>
            </div>

            {/* LR Summary — pipeline view */}
            <B2BOrderSummary />

            {/* Upcoming Pickups */}
            <Card isHoverable={false} style={{ marginBottom: 20, borderRadius: 12, border: '1px solid var(--rule)', padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#2b2b2b', fontFamily: '"Noto Sans", sans-serif' }}>Upcoming Pickups</span>
                <a style={{ fontSize: 12, fontWeight: 500, color: '#2396fb', cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif' }}>View all</a>
              </div>
              <div style={{ display: 'flex', gap: 14 }}>
                <PickupCol dayLabel="Yesterday" date="May 12, 2026" pickupCount={1} variant="error" missedReason="Shipment not ready" buttons={[{ label: 'Reschedule', primary: true }]} />
                <PickupCol dayLabel="Today" date="May 13, 2026" pickupCount={9} variant="info" cutoff="2h 14m" buttons={[{ icon: <IcoPhone />, label: 'Call FE', primary: false }, { icon: <IcoPrint />, label: 'Print labels', primary: false }]} />
                <PickupCol dayLabel="Tomorrow" date="May 14, 2026" pickupCount={3} variant="default" buttons={[{ icon: <IcoPrint />, label: 'Print labels', primary: false }]} />
              </div>
            </Card>

            {/* Appointment Management */}
            <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, marginBottom: 20, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px 14px', borderBottom: '1px solid #f0f0f0' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#454545" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif' }}>Appointment Management</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr 1px 1fr' }}>
                {[
                  { count: 10, label: 'Appointments Needed', cta: 'Book Now', ctaColor: '#ed1b36', details: [
                    { icon: 'shield', color: '#1ba86e', text: '+80 appointments auto-added from consignee' },
                    { icon: 'doc', color: '#e07230', text: '5 PO details needed' },
                  ]},
                  { count: 30, label: 'Appointments Booked', cta: 'View', ctaColor: '#ed1b36', details: [
                    { icon: 'calendar', color: '#2396fb', text: '9 appointments scheduled for tomorrow' },
                    { icon: 'warning', color: '#cf9f02', text: '3 appointments are at risk' },
                  ]},
                  { count: 15, label: 'Appointments Expired', cta: 'Review', ctaColor: '#ed1b36', details: [
                    { icon: 'doc', color: '#ed1b36', text: '3 missed due to Invalid / Expired PO' },
                    { icon: 'doc', color: '#ed1b36', text: '10 missed due to ASN missing' },
                  ]},
                ].map((col, i) => (
                  <>
                    {i > 0 && <div key={`div-${i}`} style={{ background: '#e8e8e8', margin: '20px 0' }} />}
                    <div key={i} style={{ padding: '20px 24px 24px' }}>
                      <div style={{ fontSize: 40, fontWeight: 800, color: '#1a1a2e', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1, marginBottom: 4 }}>{col.count}</div>
                      <div style={{ fontSize: 13, color: '#454545', fontFamily: '"Noto Sans", sans-serif', marginBottom: 10 }}>{col.label}</div>
                      <a style={{ fontSize: 13, fontWeight: 700, color: col.ctaColor, cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif', display: 'block', marginBottom: 14 }}>{col.cta}</a>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {col.details.map((d, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                            <div style={{ width: 28, height: 28, borderRadius: 6, background: d.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              {d.icon === 'shield' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={d.color} strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                              {d.icon === 'doc' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={d.color} strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>}
                              {d.icon === 'calendar' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={d.color} strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>}
                              {d.icon === 'warning' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={d.color} strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="10" x2="12" y2="14"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}
                            </div>
                            <span style={{ fontSize: 12, color: '#454545', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1.5, paddingTop: 4 }}>{d.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            {/* Finance */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 14 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', fontFamily: '"Noto Sans", sans-serif' }}>Finance</span>
                <span style={{ fontSize: 12, color: '#808080', fontFamily: '"Noto Sans", sans-serif' }}>Total at risk:</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#ed1b36', fontFamily: '"Noto Sans", sans-serif' }}>₹48,900</span>
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                <ClaimCard title="Loss & Damage Claims" total={10} inputCount={7} inputAmt="₹18,200" rejectedCount={3} rejectedAmt="₹9,400" />
                <ClaimCard title="Weight Disputes" total={7} inputCount={5} inputAmt="₹14,800" rejectedCount={2} rejectedAmt="₹6,500" />
              </div>
            </div>
          </div>

          {/* RIGHT: Wallet + COD + What's New */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#454545' }}><IcoWallet /></div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#2b2b2b', fontFamily: '"Noto Sans", sans-serif' }}>Wallet</span>
                </div>
                <a style={{ fontSize: 11, color: '#2396fb', cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif', display: 'flex', alignItems: 'center', gap: 2 }}>History <IcoChevR /></a>
              </div>
              <div style={{ fontSize: 11, color: '#98a2bc', fontFamily: '"Noto Sans", sans-serif', marginBottom: 2 }}>Available balance</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#2b2b2b', fontFamily: '"Noto Sans", sans-serif', letterSpacing: -1, lineHeight: 1, marginBottom: 14 }}>₹12,456</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fef9ec', borderRadius: 6, padding: '6px 10px', marginBottom: 12 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c28b00" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <span style={{ fontSize: 11, color: '#a07000', fontFamily: '"Noto Sans", sans-serif' }}>Low balance — recharge to avoid disruption</span>
              </div>
              <button style={{ width: '100%', background: '#2b2b2b', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 0', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif' }}>Recharge wallet ↗</button>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#454545' }}><IcoCod /></div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#2b2b2b', fontFamily: '"Noto Sans", sans-serif' }}>COD Remittance</span>
                </div>
                <a style={{ fontSize: 11, color: '#2396fb', cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif', display: 'flex', alignItems: 'center', gap: 2 }}>Details <IcoChevR /></a>
              </div>
              <div style={{ fontSize: 11, color: '#98a2bc', fontFamily: '"Noto Sans", sans-serif', marginBottom: 2 }}>Next payout · May 15, 2026</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif', letterSpacing: -1, lineHeight: 1 }}>₹1,24,500</div>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ padding: '14px 16px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#454545" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#2b2b2b', fontFamily: '"Noto Sans", sans-serif' }}>What's New</span>
              </div>
              {[
                { emoji: '🛵', title: 'Direct Intracity Shipping', sub: 'Hire bikes or trucks to deliver goods', isNew: false },
                { emoji: '🛡️', title: 'Secure with Delhivery Protect', sub: 'Get cover up to ₹30,000 per shipment', isNew: true },
                { emoji: '📦', title: 'Save More with RTO Prediction', sub: 'Reduce returns using AI', isNew: false },
                { emoji: '👛', title: 'Auto-topup using Remittances', sub: 'Topup your wallet automatically', isNew: false },
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', borderBottom: i < arr.length - 1 ? '1px solid #f5f5f5' : 'none', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{item.emoji}</div>
                    {item.isNew && <div style={{ position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)', background: '#ed1b36', color: '#fff', fontSize: 8, fontWeight: 700, borderRadius: 999, padding: '1px 4px', fontFamily: '"Noto Sans", sans-serif', whiteSpace: 'nowrap' }}>New</div>}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#2b2b2b', fontFamily: '"Noto Sans", sans-serif', marginBottom: 1 }}>{item.title}</div>
                    <div style={{ fontSize: 11, color: '#98a2bc', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1.4 }}>{item.sub}</div>
                  </div>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8c8c8" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M9 18l6-6-6-6"/></svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Quick links ── */}
        <div style={{ height: 1, background: 'var(--rule)', margin: '8px 0 20px' }} />
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          {[
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>, title: 'Help Center', sub: 'FAQs, guides & support' },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-3"/><rect x="9" y="3" width="6" height="8" rx="1"/><path d="M9 12h6M9 16h4"/></svg>, title: 'Rate Calculator', sub: 'Estimate freight costs' },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>, title: 'Book a Training Session', sub: 'Learn the platform with an expert' },
          ].map((item, i) => (
            <button key={i} style={{ flex: '1 1 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '14px 16px', background: '#fff', border: '1px solid var(--rule)', borderRadius: 12, cursor: 'pointer', textAlign: 'left', transition: 'box-shadow 150ms, border-color 150ms' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = '#ccc' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--rule)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: '#f4f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#454545', flexShrink: 0 }}>{item.icon}</div>
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
