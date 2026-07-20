import { useState, useEffect } from 'react'
import { Button, Badge, Card, Divider } from '@delhivery/tarmac'

const font = '"Noto Sans", sans-serif'
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

function InfoTooltip({ text }) {
  const [show, setShow] = useState(false)
  return (
    <span style={{ position: 'relative', display: 'inline-flex', verticalAlign: 'middle', marginLeft: 4, cursor: 'default' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a0a8bc" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      {show && (
        <div style={{ position: 'absolute', bottom: 'calc(100% + 4px)', left: '50%', transform: 'translateX(-50%)', background: '#1a1a1a', color: '#fff', fontSize: 11, fontFamily: font, padding: '4px 8px', borderRadius: 4, whiteSpace: 'nowrap', zIndex: 9999, pointerEvents: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
          {text}
        </div>
      )}
    </span>
  )
}

const B2B_PIPELINE = [
  {
    id: 'pre-dispatch', label: 'Pre-Dispatch', color: '#2396fb',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13h6M9 17h4"/></svg>,
    cards: [
      { label: 'LRs manifested · PUR not created', count: 45, unit: 'LRs', delta: '+6', up: false, sub: [{ label: 'Pending > 24h', value: '12', link: 'Create PUR', linkColor: '#ed1b36' }] },
      { label: 'Awaiting pickup', count: 28, unit: 'LRs', delta: '+3', up: true, sub: [{ link: 'Schedule Now', linkColor: '#2396fb' }] },
    ],
  },
  {
    id: 'in-transit', label: 'In Transit', color: '#7c3aed',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h11v10H3z"/><path d="M14 10h5l2 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>,
    cards: [
      { label: 'In transit', count: 328, unit: 'LRs', delta: '+15%', up: true, sub: [{ link: 'Track all', linkColor: '#2396fb' }] },
      { label: 'Appointment, NDR & other exceptions', labelTooltip: 'Non-Delivery Report', count: 24, unit: 'LRs', delta: '+3', up: false, sub: [{ label: 'Consignee unreachable', value: '9', link: 'Resolve NDR', linkColor: '#ed1b36' }] },
    ],
  },
  {
    id: 'delivered', label: 'Delivered / Returned', color: '#1ba86e',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>,
    cards: [
      { label: 'Delivered', count: 145, unit: 'LRs', delta: '+9%', up: true, sub: [{ link: 'View now', linkColor: '#2396fb' }] },
      { label: 'RTO', count: 9, unit: 'LRs', delta: '+2', up: false, sub: [{ label: 'In transit back', value: '6', link: 'View orders', linkColor: '#2396fb' }] },
    ],
  },
]

function B2BPipelineCard({ card }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
        <span style={{ fontSize: 12, color: '#454545', fontFamily: font, lineHeight: 1.4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          {card.label}
          {card.labelTooltip && <InfoTooltip text={card.labelTooltip} />}
        </span>
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

function RemittanceSuccessBanner() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f0faf5', border: '1px solid #a8e0c4', borderRadius: 7, padding: '7px 10px', marginTop: 12 }}>
      <span style={{ fontSize: 15, lineHeight: 1, flexShrink: 0 }}>🎉</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#1a7a4a', fontFamily: font }}>₹98,200 remitted</span>
        <span style={{ fontSize: 11, color: '#2d8a5a', fontFamily: font }}> · Jul 18, 2026</span>
      </div>
      <button onClick={() => setDismissed(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6aaf8a', fontSize: 16, lineHeight: 1, padding: '0 2px', flexShrink: 0 }}>×</button>
    </div>
  )
}

function DateFilter() {
  const [open, setOpen] = useState(false)
  const [label, setLabel] = useState('Last 7 days')
  const opts = ['Last 7 days', 'Last 14 days', 'Last 30 days', 'Last 90 days']
  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)} style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#eff1f5', border: 'none', borderRadius: 4, padding: '6px 10px', fontSize: 13, fontWeight: 500, color: '#343c51', cursor: 'pointer', fontFamily: font }}>
        {label}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {open && (
        <div style={{ position: 'absolute', right: 0, top: '100%', marginTop: 4, background: '#fff', border: '1px solid #e6e6e6', borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.1)', zIndex: 200, minWidth: 140, overflow: 'hidden' }}>
          {opts.map(o => (
            <div key={o} onClick={() => { setLabel(o); setOpen(false) }}
              style={{ padding: '10px 16px', fontSize: 13, color: o === label ? '#ed1b36' : '#2b2b2b', fontWeight: o === label ? 600 : 400, cursor: 'pointer', background: o === label ? '#fde8eb' : 'transparent', fontFamily: font }}
              onMouseEnter={e => { if (o !== label) e.currentTarget.style.background = '#f7f7f7' }}
              onMouseLeave={e => { if (o !== label) e.currentTarget.style.background = 'transparent' }}
            >{o}</div>
          ))}
        </div>
      )}
    </div>
  )
}

function ClaimCard({ title, total, openData, closedData }) {
  return (
    <div style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#eff1f5', borderRadius: '8px 8px 0 0', padding: '8px 14px 20px', zIndex: 1, position: 'relative' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#121212', fontFamily: font }}>{title}</span>
        <Badge text={`Total ${total}`} variant="error" badgeType="subtle" size="sm" />
        <a style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 600, color: '#2396fb', cursor: 'pointer', fontFamily: font }}>View all</a>
      </div>
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 0 2px rgba(0,0,0,0.1)', padding: '16px 20px', marginTop: -12, display: 'flex', gap: 0, flex: 1 }}>
        <div style={{ flex: 1, minWidth: 0, paddingRight: 16 }}>
          <div style={{ height: 3, background: '#fcedb7', borderRadius: 999, marginBottom: 10 }} />
          <span style={{ fontSize: 10, fontWeight: 600, color: '#454545', fontFamily: font, letterSpacing: 0.4 }}>OPEN</span>
          {openData.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginTop: 10, gap: 6 }}>
              <div>
                <div style={{ fontSize: 20, fontWeight: 600, color: '#343c51', fontFamily: font, lineHeight: 1.1 }}>{item.count}</div>
                <div style={{ fontSize: 11, color: '#808080', fontFamily: font, marginTop: 2 }}>{item.label}</div>
              </div>
              <a style={{ fontSize: 12, fontWeight: 600, color: item.ctaColor || '#2396fb', cursor: 'pointer', fontFamily: font, whiteSpace: 'nowrap', marginTop: 2 }}>{item.cta}</a>
            </div>
          ))}
        </div>
        <Divider orientation="vertical" size="0.5" style={{ alignSelf: 'stretch', height: 'auto' }} />
        <div style={{ flex: 1, minWidth: 0, paddingLeft: 16 }}>
          <div style={{ height: 3, background: '#fbd1d7', borderRadius: 999, marginBottom: 10 }} />
          <span style={{ fontSize: 10, fontWeight: 600, color: '#454545', fontFamily: font, letterSpacing: 0.4 }}>CLOSED</span>
          {closedData.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginTop: 10, gap: 6 }}>
              <div>
                <div style={{ fontSize: 20, fontWeight: 600, color: '#343c51', fontFamily: font, lineHeight: 1.1 }}>{item.count}</div>
                <div style={{ fontSize: 11, color: '#808080', fontFamily: font, marginTop: 2 }}>{item.label}</div>
              </div>
              <a style={{ fontSize: 12, fontWeight: 600, color: '#2396fb', cursor: 'pointer', fontFamily: font, whiteSpace: 'nowrap', marginTop: 2 }}>View</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PickupCol({ dayLabel, date, slot, pickupCount, variant, cutoff, missedReason, buttons }) {
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
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', fontFamily: font, marginBottom: 2 }}>{dayLabel}</div>
          <div style={{ fontSize: 11, color: '#808080', fontFamily: font }}>{date}</div>
          {slot && (
            <div style={{ fontSize: 11, color: '#454545', fontFamily: font, marginTop: 4 }}>
              <span style={{ fontWeight: 600, color: '#6b7490' }}>Slots</span>&nbsp;
              {slot.time} <span style={{ color: '#c8c8c8', margin: '0 3px' }}>|</span> {slot.label}
            </div>
          )}
          {cutoff && (
            <div style={{ marginTop: 6, display: 'inline-flex', alignItems: 'center', gap: 4, background: '#fde8eb', borderRadius: 6, padding: '3px 8px' }}>
              <IcoClock />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#ed1b36', fontFamily: font }}>Cut-off in {cutoff}</span>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: theme.badgeBg, borderRadius: 20, padding: '4px 10px', flexShrink: 0 }}>
          <span style={{ color: theme.badgeColor, display: 'flex' }}>{theme.icon}</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: theme.badgeColor, fontFamily: font }}>{pickupCount} {pickupCount === 1 ? 'pickup' : 'pickups'}</span>
        </div>
      </div>
      <div style={{ padding: '12px 16px 16px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {missedReason && (
          <div style={{ background: '#fdf2f4', border: '1px solid #f5c6ce', borderRadius: 6, padding: '8px 12px', fontSize: 12, fontFamily: font, color: '#1a1a1a' }}>
            <span style={{ fontWeight: 600, color: '#ed1b36' }}>Reason: </span>{missedReason}
          </div>
        )}
        <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
          {buttons.map((b, i) => (
            <Button key={i} variant="coal" size="sm" leadingIcon={b.icon}
              style={{ flex: '1 1 0', justifyContent: 'center', whiteSpace: 'nowrap', backgroundColor: '#eff1f5', color: '#343c51' }}>
              {b.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

function B2BOrderSummary() {
  return (
    <div style={{ background: '#fff', border: '1px solid #e6e6e6', borderRadius: 12, padding: 20, marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', fontFamily: font }}>LR Summary</span>
          <span style={{ fontSize: 12, color: '#808080', fontFamily: font }}>pipeline view</span>
        </div>
        <DateFilter />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: 0, alignItems: 'start' }}>
        {B2B_PIPELINE.map((bucket, bi) => (
          <>
            <div key={bucket.id}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, padding: '8px 12px', background: '#eff1f5', borderRadius: 8 }}>
                <span style={{ color: bucket.color }}>{bucket.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', fontFamily: font }}>{bucket.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 600, color: '#454545', background: '#fff', borderRadius: 999, padding: '1px 8px', fontFamily: font }}>
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

const SYSTEM_BANNERS = [
  { id: 'fuel', dot: '#e07230', bg: '#fffbf5', border: '#f5d3a8', text: <><strong>New fuel surcharge from 1 Jun</strong> — Domestic rates increase 2.4%. Review impact on your pricing before May 31.</>, cta: 'Review rates' },
  { id: 'hub', dot: '#2396fb', bg: '#f0f8ff', border: '#bfdbfe', text: <><strong>38 shipments stuck at Mumbai hub</strong> — Port congestion causing delays. Expected clearance by 8 May.</>, cta: 'View shipments' },
]

const ALERT_SLIDES = [
  { bg: '#fff3f4', border: '#f5c0c8', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ed1b36" strokeWidth="2.5" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>, iconColor: '#ed1b36', title: 'Account finlock', desc: 'Pending KYC · shipments may be held.', cta: 'Resolve now', ctaColor: '#ed1b36', titleColor: '#c0001a' },
  { bg: '#f3f0ff', border: '#d4c8f8', icon: <IcoHeadset />, iconColor: '#5b21b6', title: 'Support tickets', desc: '11 need your input · 1 nearing SLA.', cta: 'Respond', ctaColor: '#7c3aed', titleColor: '#5b21b6' },
]

function AlertCarousel() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % ALERT_SLIDES.length), 4000)
    return () => clearInterval(t)
  }, [])

  const a = ALERT_SLIDES[idx]
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ background: a.bg, border: `1px solid ${a.border}`, borderRadius: 8, padding: '9px 16px', transition: 'background 300ms, border-color 300ms' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
            <span style={{ color: a.iconColor, display: 'flex' }}>{a.icon}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: a.titleColor, fontFamily: font, whiteSpace: 'nowrap' }}>{a.title}</span>
            <span style={{ fontSize: 12, color: '#454545', fontFamily: font }}>{a.desc}</span>
          </div>
          <a style={{ fontSize: 12, fontWeight: 700, color: a.ctaColor, cursor: 'pointer', fontFamily: font, display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>{a.cta} <IcoChevR /></a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 8 }}>
          {ALERT_SLIDES.map((_, i) => (
            <div key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 16 : 6, height: 6, borderRadius: 999, background: i === idx ? a.ctaColor : '#d0d5e0', cursor: 'pointer', transition: 'all 300ms' }} />
          ))}
        </div>
      </div>
    </div>
  )
}

const WHATS_NEW_ITEMS = [
  { emoji: '🛵', title: 'Direct Intracity Shipping', sub: 'Hire bikes or trucks to deliver goods', isNew: false },
  { emoji: '🛡️', title: 'Secure with Delhivery Protect', sub: 'Get cover up to ₹30,000 per shipment', isNew: true },
  { emoji: '📦', title: 'Save More with RTO Prediction', sub: 'Reduce returns using AI', isNew: false },
  { emoji: '👛', title: 'Auto-topup using Remittances', sub: 'Topup your wallet automatically', isNew: false },
]
const QUICK_LINKS = [
  { emoji: '❓', title: 'Help Center', sub: 'FAQs, guides & support' },
  { emoji: '🧮', title: 'Rate Calculator', sub: 'Estimate freight costs' },
  { emoji: '📅', title: 'Book a Training Session', sub: 'Learn the platform with an expert' },
]

export default function B2BContent() {
  const [tab, setTab] = useState('overview')

  return (
    <div className="content" style={{ position: 'relative' }}>

      {/* ── Tabs (no date filter here) ── */}
      <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--rule)', marginBottom: 20, marginTop: -4 }}>
        {[{ id: 'overview', label: 'Overview' }, { id: 'analysis', label: 'Analysis' }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '10px 20px', fontSize: 14, fontWeight: tab === t.id ? 600 : 400,
            color: tab === t.id ? 'var(--ink)' : 'var(--ink-3)',
            borderBottom: tab === t.id ? '2px solid var(--red)' : '2px solid transparent',
            marginBottom: -1, fontFamily: font, transition: 'color 120ms',
          }}>{t.label}</button>
        ))}
      </div>

      {tab === 'analysis' && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 320, color: '#98a2bc', fontSize: 14, fontFamily: font }}>
          Analysis coming soon
        </div>
      )}

      {tab === 'overview' && <>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20, alignItems: 'start' }}>

          {/* LEFT */}
          <div>
            {/* System banners */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
              {SYSTEM_BANNERS.map(b => (
                <div key={b.id} style={{ display: 'flex', alignItems: 'center', gap: 10, background: b.bg, border: `1px solid ${b.border}`, borderRadius: 7, padding: '8px 14px' }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: b.dot, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: '#454545', fontFamily: font, flex: 1 }}>{b.text}</span>
                  <button style={{ fontSize: 12, fontWeight: 600, color: '#454545', background: '#fff', border: '1px solid #d0d5e0', borderRadius: 5, padding: '3px 10px', cursor: 'pointer', fontFamily: font, whiteSpace: 'nowrap' }}>{b.cta}</button>
                  <span style={{ color: '#c8c8c8', cursor: 'pointer', fontSize: 16, lineHeight: 1, flexShrink: 0 }}>×</span>
                </div>
              ))}
            </div>

            {/* Finlock carousel */}
            <AlertCarousel />

            {/* LR Summary pipeline */}
            <B2BOrderSummary />

            {/* Pickups */}
            <Card isHoverable={false} style={{ marginBottom: 20, borderRadius: 12, border: '1px solid var(--rule)', padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#2b2b2b', fontFamily: font }}>Pickups</span>
                <div style={{ display: 'flex', gap: 12 }}>
                  <a style={{ fontSize: 12, fontWeight: 500, color: '#2396fb', cursor: 'pointer', fontFamily: font }}>View guidelines</a>
                  <a style={{ fontSize: 12, fontWeight: 500, color: '#2396fb', cursor: 'pointer', fontFamily: font }}>View all</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 14 }}>
                <PickupCol dayLabel="Yesterday" date="May 12, 2026" slot={{ time: '06:00am - 12:00pm', label: 'Early Morning - Noon' }} pickupCount={1} variant="error" missedReason="Shipment not ready" buttons={[{ label: 'Reschedule', primary: true }]} />
                <PickupCol dayLabel="Today" date="May 13, 2026" slot={{ time: '09:00am - 01:00pm', label: 'Morning - Noon' }} pickupCount={9} variant="info" cutoff="2h 14m" buttons={[{ icon: <IcoPhone />, label: 'Call FE' }, { icon: <IcoPrint />, label: 'Print labels' }]} />
                <PickupCol dayLabel="Tomorrow" date="May 14, 2026" slot={{ time: '12:00pm - 06:00pm', label: 'Noon - Evening' }} pickupCount={3} variant="default" buttons={[{ icon: <IcoPrint />, label: 'Print labels' }]} />
              </div>
            </Card>

            {/* Appointment Management */}
            <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, marginBottom: 20, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px 14px', borderBottom: '1px solid #f0f0f0' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#454545" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', fontFamily: font }}>Appointment Management</span>
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
                      <div style={{ fontSize: 40, fontWeight: 800, color: '#1a1a2e', fontFamily: font, lineHeight: 1, marginBottom: 4 }}>{col.count}</div>
                      <div style={{ fontSize: 13, color: '#454545', fontFamily: font, marginBottom: 10 }}>{col.label}</div>
                      <a style={{ fontSize: 13, fontWeight: 700, color: col.ctaColor, cursor: 'pointer', fontFamily: font, display: 'block', marginBottom: 14 }}>{col.cta}</a>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {col.details.map((d, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                            <div style={{ width: 28, height: 28, borderRadius: 6, background: d.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              {d.icon === 'shield' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={d.color} strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                              {d.icon === 'doc' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={d.color} strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>}
                              {d.icon === 'calendar' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={d.color} strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>}
                              {d.icon === 'warning' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={d.color} strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="10" x2="12" y2="14"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}
                            </div>
                            <span style={{ fontSize: 12, color: '#454545', fontFamily: font, lineHeight: 1.5, paddingTop: 4 }}>{d.text}</span>
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
                <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', fontFamily: font }}>Finance</span>
                <span style={{ fontSize: 12, color: '#808080', fontFamily: font }}>Total at risk:</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#ed1b36', fontFamily: font }}>₹48,900</span>
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                <ClaimCard title="Loss & Damage Claims" total={10}
                  openData={[{ label: 'In process', count: 4, cta: 'View', ctaColor: '#2396fb' }, { label: 'Need your input', count: 3, cta: 'Respond', ctaColor: '#ed1b36' }]}
                  closedData={[{ label: 'Rejected', count: 2 }, { label: 'Accepted', count: 1 }]}
                />
                <ClaimCard title="Weight Disputes" total={7}
                  openData={[{ label: 'In process', count: 3, cta: 'View', ctaColor: '#2396fb' }, { label: 'Need your input', count: 2, cta: 'Respond', ctaColor: '#ed1b36' }]}
                  closedData={[{ label: 'Rejected', count: 1 }, { label: 'Processed', count: 1 }]}
                />
              </div>
            </div>
          </div>

          {/* RIGHT rail */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* Support card (permanent) */}
            <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: '#f3f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IcoHeadset />
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#2b2b2b', fontFamily: font }}>Support</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { count: 11, label: 'tickets need your input', cta: 'Respond', ctaColor: '#ed1b36' },
                  { count: 3, label: 'nearing SLA breach', cta: 'Review', ctaColor: '#e07230' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f9f9fb', borderRadius: 7, padding: '8px 12px' }}>
                    <span style={{ fontSize: 12, fontFamily: font, color: '#454545' }}>
                      <strong style={{ color: '#1a1a1a' }}>{item.count}</strong> {item.label}
                    </span>
                    <a style={{ fontSize: 12, fontWeight: 600, color: item.ctaColor, cursor: 'pointer', fontFamily: font, whiteSpace: 'nowrap' }}>{item.cta} →</a>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'none', border: '1px solid #e6e6e6', borderRadius: 6, padding: '7px 0', fontSize: 12, fontWeight: 500, color: '#343c51', cursor: 'pointer', fontFamily: font }}>
                  <span style={{ color: '#7C3AED' }}><IcoSpark /></span>Ask SmartAssist
                </button>
              </div>
            </div>

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
              <div style={{ fontSize: 28, fontWeight: 700, color: '#2b2b2b', fontFamily: font, letterSpacing: -1, lineHeight: 1, marginBottom: 14 }}>₹12,456</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fef9ec', borderRadius: 6, padding: '6px 10px', marginBottom: 12 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c28b00" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <span style={{ fontSize: 11, color: '#a07000', fontFamily: font }}>Low balance — recharge to avoid disruption</span>
              </div>
              <button style={{ width: '100%', background: '#2b2b2b', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 0', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: font }}>Recharge wallet ↗</button>
            </div>

            {/* COD */}
            <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#454545' }}><IcoCod /></div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#2b2b2b', fontFamily: font }}>COD Remittance</span>
                </div>
                <a style={{ fontSize: 11, color: '#2396fb', cursor: 'pointer', fontFamily: font, display: 'flex', alignItems: 'center', gap: 2 }}>Details <IcoChevR /></a>
              </div>
              <div style={{ fontSize: 11, color: '#98a2bc', fontFamily: font, marginBottom: 2 }}>Next payout · Jul 25, 2026</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#1a1a1a', fontFamily: font, letterSpacing: -1, lineHeight: 1 }}>₹1,24,500</div>
              <RemittanceSuccessBanner />
            </div>

            {/* What's New (includes quick links) */}
            <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ padding: '14px 16px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#454545" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#2b2b2b', fontFamily: font }}>What's New</span>
              </div>
              {WHATS_NEW_ITEMS.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', borderBottom: '1px solid #f5f5f5', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{item.emoji}</div>
                    {item.isNew && <div style={{ position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)', background: '#ed1b36', color: '#fff', fontSize: 8, fontWeight: 700, borderRadius: 999, padding: '1px 4px', fontFamily: font, whiteSpace: 'nowrap' }}>New</div>}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#2b2b2b', fontFamily: font, marginBottom: 1 }}>{item.title}</div>
                    <div style={{ fontSize: 11, color: '#98a2bc', fontFamily: font, lineHeight: 1.4 }}>{item.sub}</div>
                  </div>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8c8c8" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M9 18l6-6-6-6"/></svg>
                </div>
              ))}
              {/* Quick links inside What's New */}
              <div style={{ padding: '6px 0 4px', borderTop: '1px solid #f0f0f0' }}>
                <div style={{ padding: '6px 16px 4px', fontSize: 10, fontWeight: 700, color: '#a0a8bc', letterSpacing: 0.8, textTransform: 'uppercase', fontFamily: font }}>Resources</div>
                {QUICK_LINKS.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px', cursor: 'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>{item.emoji}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: '#2b2b2b', fontFamily: font }}>{item.title}</div>
                      <div style={{ fontSize: 11, color: '#98a2bc', fontFamily: font }}>{item.sub}</div>
                    </div>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8c8c8" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M9 18l6-6-6-6"/></svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>}
    </div>
  )
}
