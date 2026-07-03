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
    ? { accent: '#ed1b36', badgeBg: '#fde8eb', badgeColor: '#ed1b36', headerBg: '#fff8f8', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> }
    : variant === 'info'
    ? { accent: '#2396fb', badgeBg: '#e6f3fe', badgeColor: '#2396fb', headerBg: '#f5f9ff', icon: <IcoClock /> }
    : { accent: '#e0e0e0', badgeBg: '#f4f4f6', badgeColor: '#666', headerBg: '#fafafa', icon: <IcoCalendar /> }
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

const ORDER_SUMMARY = [
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>, iconBg: '#f3f0ff', label: 'LRs manifested but PUR not created', count: '45 LRs', cta: 'Create PUR' },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M3 7h11v10H3z"/><path d="M14 10h5l2 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>, iconBg: '#f3f0ff', label: 'In transit', count: '328 LRs', cta: 'Track all' },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e07230" strokeWidth="2"><path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-3"/><rect x="9" y="3" width="6" height="8" rx="1"/><path d="M9 12h6M9 16h4"/></svg>, iconBg: '#fff3ec', label: 'E-waybill needed', count: '12 LRs', cta: 'Upload now' },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e07230" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>, iconBg: '#fff3ec', label: 'Documents needed', count: '8 LRs', cta: 'Upload documents' },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ed1b36" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>, iconBg: '#fde8eb', label: 'NDR', count: '24 LRs', cta: 'Resolve NDR' },
]

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
                  <span style={{ fontSize: 12, color: '#454545', fontFamily: '"Noto Sans", sans-serif' }}>Pending KYC — shipments may be held.</span>
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

            {/* Order Summary */}
            <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif', marginBottom: 16 }}>Order Summary</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {ORDER_SUMMARY.map((item, i) => (
                  <div key={i} style={{ background: '#f9f9fb', border: '1px solid #efefef', borderRadius: 10, padding: '16px 16px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: item.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                      {item.icon}
                    </div>
                    <div style={{ fontSize: 11, color: '#808080', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1.4 }}>{item.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', fontFamily: '"Noto Sans", sans-serif', lineHeight: 1 }}>{item.count}</div>
                    <button style={{ marginTop: 6, width: '100%', background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 0', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: '"Noto Sans", sans-serif' }}>
                      {item.cta}
                    </button>
                  </div>
                ))}
              </div>
            </div>

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
              <div style={{ fontSize: 28, fontWeight: 700, color: '#1ba86e', fontFamily: '"Noto Sans", sans-serif', letterSpacing: -1, lineHeight: 1 }}>₹1,24,500</div>
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
