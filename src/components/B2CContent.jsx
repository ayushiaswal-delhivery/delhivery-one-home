import { useState } from 'react'

// ── Icons ────────────────────────────────────────────────────────────────────
const IcoWarning  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const IcoBox      = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
const IcoClock    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
const IcoChat     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
const IcoHeadset  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z"/><path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>
const IcoShield   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
const IcoScale    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6h18M3 18h18"/><path d="M6 21H3a2 2 0 01-2-2V7a2 2 0 012-2h3"/><path d="M18 21h3a2 2 0 002-2V7a2 2 0 00-2-2h-3"/></svg>
const IcoWallet   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 2v5M8 2v5"/><circle cx="16" cy="14" r="2"/></svg>
const IcoCod      = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
const IcoTruck    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h11v10H3z"/><path d="M14 10h5l2 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
const IcoPrint    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
const IcoPhone    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
const IcoCalendar = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
const IcoTrendUp  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
const IcoArrow    = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
const IcoChevR    = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
const IcoChevL    = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
const IcoSpark    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"/></svg>
const IcoStop     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
const IcoRain     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"/></svg>
const IcoStar     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const IcoInfo     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ icon, iconBg, iconColor, label, value, children }) {
  return (
    <div style={{ background: 'var(--white)', border: '1px solid var(--rule)', borderRadius: 'var(--r-lg)', padding: '16px 18px', flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 'var(--r-sm)', background: iconBg, color: iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-3)', fontFamily: 'var(--font-ui)' }}>{label}</span>
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-disp)', lineHeight: 1, letterSpacing: -0.5, marginBottom: 12 }}>{value}</div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>{children}</div>
    </div>
  )
}

function StatRow({ label, value, link }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, borderTop: '1px solid var(--rule)' }}>
      <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>{label} <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{value}</strong></span>
      {link && <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2, whiteSpace: 'nowrap' }}>{link} <IcoChevR /></a>}
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
          <div key={i} style={{ background: r.bg, borderRadius: 'var(--r-md)', padding: '14px 16px' }}>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 6 }}>{r.label}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-disp)', lineHeight: 1 }}>{r.value}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: r.amtColor || 'var(--ink-3)', marginTop: 4 }}>{r.amount}</div>
            {r.cta && <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 3, marginTop: 6 }}>{r.cta} <IcoArrow /></a>}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Pickup day row ─────────────────────────────────────────────────────────────
function PickupDay({ day, date, count, countColor, tag, tagColor, tagBg, actions, warning }) {
  return (
    <div style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{day}</span>
          {tag && <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 999, background: tagBg || 'var(--red-bg)', color: tagColor || 'var(--red)', fontFamily: 'var(--font-ui)' }}>{tag}</span>}
        </div>
        <span style={{ fontSize: 12, fontWeight: 600, color: countColor || 'var(--blue)' }}>{count}</span>
      </div>
      <div style={{ fontSize: 12, color: 'var(--ink-4)', marginBottom: 10 }}>{date}</div>
      {warning && (
        <div style={{ background: '#FDF2F3', border: '1px solid #F9B3BC', borderRadius: 'var(--r-sm)', padding: '8px 12px', fontSize: 12, color: 'var(--ink-3)', marginBottom: 10 }}>
          <span style={{ fontWeight: 700 }}>Reason: </span><span style={{ color: 'var(--red)', fontWeight: 600 }}>{warning}</span>
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${actions.length}, 1fr)`, gap: 8 }}>
        {actions.map((a, i) => (
          <button key={i} style={{ height: 36, border: '1px solid var(--rule)', borderRadius: 'var(--r-md)', background: a.dark ? 'var(--ink)' : 'var(--white)', color: a.dark ? '#fff' : 'var(--ink)', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer' }}>
            {a.icon}{a.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// ── SmartAssist insight card ───────────────────────────────────────────────────
function InsightCard({ title, body, cta }) {
  return (
    <div style={{ background: 'var(--white)', border: '1px solid var(--rule)', borderRadius: 'var(--r-lg)', padding: '16px 18px', marginBottom: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
        <span style={{ color: '#7C3AED' }}><IcoSpark /></span>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#7C3AED', fontFamily: 'var(--font-ui)' }}>SmartAssist Insight</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 10 }}>{body}</div>
      <div style={{ background: '#F0FFF8', border: '1px solid #B3E2CF', borderRadius: 'var(--r-sm)', padding: '8px 12px', fontSize: 12, fontWeight: 600, color: 'var(--green)', cursor: 'pointer' }}>{cta}</div>
    </div>
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
        <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 3, marginTop: 4 }}>View affected <IcoChevR /></a>
      </div>
    </div>
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

      {/* ── Business Overview ── */}
      <div style={{ background: 'var(--white)', border: '1px solid var(--rule)', borderRadius: 'var(--r-lg)', marginBottom: 24, overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px 12px', borderBottom: '1px solid var(--rule)' }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>Business Overview</div>
          <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 2 }}>Last 30 days performance</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { icon: <IcoTrendUp />, iconColor: 'var(--green)', label: 'Revenue (OMS)', value: '₹42.8L', delta: '+12% vs L30D', deltaColor: 'var(--green)' },
            { icon: <IcoBox />,     iconColor: 'var(--blue)',  label: 'AOV',            value: '₹1,247', delta: '+7% vs L30D',  deltaColor: 'var(--green)' },
            { icon: <IcoBox />,     iconColor: '#7C3AED',       label: 'Total orders',   value: '3,432',  delta: '+2% vs L30D',  deltaColor: 'var(--green)' },
            { icon: <IcoTruck />,   iconColor: '#E77337',       label: 'Shipped with Delhivery', value: '1,544', delta: '45% of total', deltaColor: 'var(--ink-4)' },
          ].map((m, i, arr) => (
            <div key={i} style={{ padding: '16px 20px', borderRight: i < arr.length - 1 ? '1px solid var(--rule)' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span style={{ color: m.iconColor }}>{m.icon}</span>
                <span style={{ fontSize: 12, color: 'var(--ink-3)', fontFamily: 'var(--font-ui)' }}>{m.label}</span>
              </div>
              <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-disp)', letterSpacing: -0.5, lineHeight: 1, marginBottom: 6 }}>{m.value}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: m.deltaColor }}>{m.delta}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Greeting ── */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: 'var(--font-disp)', fontSize: 26, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2 }}>Welcome back, Anjali</h1>
      </div>

      {/* ── 5 stat cards ── */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 24, alignItems: 'stretch' }}>
        <StatCard icon={<IcoWarning />} iconBg="var(--red-bg)"   iconColor="var(--red)"   label="Pending manifest"       value="312">
          <StatRow label="Bad address"     value="47" link="Fix now" />
          <StatRow label="High risk orders" value="23" link="Review" />
        </StatCard>
        <StatCard icon={<IcoBox />}     iconBg="#FFF3EC"          iconColor="#E77337"       label="To be shipped"          value="156">
          <StatRow label="High risk AWBs" value="12" link="Review" />
        </StatCard>
        <StatCard icon={<IcoClock />}   iconBg="var(--blue-bg)"  iconColor="var(--blue)"  label="Awaiting pickup"         value="9">
          <button style={{ height: 36, background: 'var(--ink)', color: '#fff', border: 'none', borderRadius: 'var(--r-md)', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', cursor: 'pointer', width: '100%', marginTop: 4 }}>Schedule now</button>
        </StatCard>
        <StatCard icon={<IcoChat />}    iconBg="#F3F0FF"          iconColor="#7C3AED"       label="NDR — awaiting your input" value="84">
          <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 999, background: '#F3F0FF', color: '#7C3AED', fontFamily: 'var(--font-ui)', display: 'inline-block', marginBottom: 8 }}>Automate NDR</span>
          <button style={{ height: 36, background: '#7C3AED', color: '#fff', border: 'none', borderRadius: 'var(--r-md)', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', cursor: 'pointer', width: '100%' }}>Activate SmartNDR</button>
        </StatCard>
        <StatCard icon={<IcoHeadset />} iconBg="var(--green-bg)" iconColor="var(--green)" label="Support tickets"          value="18">
          <StatRow label="Recently resolved" value="32" link="See resolution" />
          <StatRow label="Need your input"   value="11" link="Respond" />
        </StatCard>
      </div>

      {/* ── Main 2-col grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20, alignItems: 'start' }}>

        {/* LEFT */}
        <div>

          {/* Finance */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--rule)', borderRadius: 'var(--r-lg)', padding: '0 18px', marginBottom: 20 }}>
            <div style={{ padding: '16px 0 0', borderBottom: '1px solid var(--rule)', marginBottom: 0 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>Finance</span>
            </div>
            <ClaimSection title="Loss & Damage Claims" icon={<IcoShield />} rows={[
              { label: 'Approved (L30D)', value: '18', amount: '₹45,600', amtColor: 'var(--green)', bg: '#F4FBF8' },
              { label: 'Need your input', value: '7',  amount: '₹18,200', amtColor: 'var(--yellow)', bg: '#FDFAF2', cta: 'Respond' },
              { label: 'Rejected',        value: '3',  amount: '₹9,400',  amtColor: 'var(--red)',   bg: '#FDF2F3' },
            ]} />
            <ClaimSection title="Weight Disputes" icon={<IcoScale />} rows={[
              { label: 'Approved (L30D)', value: '12', amount: '₹32,100', amtColor: 'var(--green)', bg: '#F4FBF8' },
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
              <div style={{ background: 'var(--surface)', borderRadius: 'var(--r-md)', padding: '12px 14px', marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 4 }}>Next remittance</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>May 15, 2026</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)', marginTop: 2 }}>₹1,24,500</div>
              </div>
              <div style={{ background: '#FDF2F3', border: '1px solid #F9B3BC', borderRadius: 'var(--r-md)', padding: '10px 14px', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: 'var(--yellow)', flexShrink: 0, marginTop: 1 }}><IcoInfo /></span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)' }}>Anomaly detected</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>Finlock on your account due to pending verification. Contact support.</div>
                  <a style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 3, marginTop: 4 }}>Resolve now <IcoArrow /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Pickups */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--rule)', borderRadius: 'var(--r-lg)', padding: '16px 18px 0', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ color: 'var(--ink-3)' }}><IcoTruck /></span>
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>Upcoming Pickups</span>
            </div>
            <PickupDay day="Yesterday" date="May 12, 2026" count="1 pickup" countColor="var(--red)" warning="Shipment not ready" actions={[{ label: 'Reschedule', dark: true }]} />
            <PickupDay day="Today" date="May 13, 2026" count="9 pickups" tag="Cut-off in 2h 14m" tagColor="var(--red)" tagBg="var(--red-bg)" actions={[{ icon: <IcoPhone />, label: 'Call FE' }, { icon: <IcoPrint />, label: 'Print labels' }]} />
            <PickupDay day="Tomorrow" date="May 14, 2026" count="3 pickups" actions={[{ icon: <IcoPrint />, label: 'Print labels' }]} />
            <div style={{ height: 16 }} />
          </div>

          {/* SmartAssist Insights */}
          <InsightCard title="Your RTO rate jumped 4.2pp last month" body="Top driver: bad addresses in Uttar Pradesh (+18 orders)" cta="Fix 18 bad addresses → estimated ₹2.1L recovered" />
          <InsightCard title="Your COD share is increasing with contribution from Hyderabad" body="COD jumped from 42% to 58% in last 30 days" cta="Try to change demand mix for better cash flow" />
          <button style={{ width: '100%', height: 44, background: 'var(--ink)', color: '#fff', border: 'none', borderRadius: 'var(--r-md)', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 20 }}>
            View analysis <IcoArrow />
          </button>
        </div>

        {/* RIGHT RAIL */}
        <div>
          {/* Wallet */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--rule)', borderRadius: 'var(--r-lg)', padding: '16px 18px', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ color: 'var(--ink-3)' }}><IcoWallet /></span>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>Wallet</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 4 }}>Available balance</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-disp)', letterSpacing: -1, marginBottom: 4 }}>₹12,456</div>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 12 }}>Last recharged: ₹50,000 on May 8, 2026</div>
            <div style={{ background: 'var(--yellow-bg)', border: '1px solid #E7CF80', borderRadius: 'var(--r-sm)', padding: '8px 12px', marginBottom: 12, display: 'flex', gap: 8 }}>
              <span style={{ color: 'var(--yellow)', flexShrink: 0 }}><IcoInfo /></span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#8A6A01' }}>Low balance alert</div>
                <div style={{ fontSize: 11, color: 'var(--yellow)', marginTop: 1 }}>Recharge now to avoid service interruption</div>
              </div>
            </div>
            <button style={{ width: '100%', height: 38, background: 'var(--ink)', color: '#fff', border: 'none', borderRadius: 'var(--r-md)', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 8 }}>
              Recharge wallet <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </button>
            <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>View transaction history <IcoChevR /></a>
          </div>

          {/* Promo carousel */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ background: s.bg, borderRadius: 'var(--r-lg)', padding: '16px 18px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: -20, top: -20, width: 100, height: 100, borderRadius: 999, background: 'radial-gradient(closest-side, rgba(237,27,54,0.25), transparent)', pointerEvents: 'none' }} />
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: s.tagColor, fontFamily: 'var(--font-ui)', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ color: '#7C3AED' }}><IcoSpark /></span>{s.tag}
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 12, color: '#B2B8CC', marginBottom: 14, lineHeight: 1.5 }}>{s.body}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button style={{ height: 30, padding: '0 14px', borderRadius: 999, background: s.ctaBg, color: '#fff', border: 'none', fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-ui)', cursor: 'pointer' }}>{s.cta}</button>
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
                <button onClick={() => setSlide((slide - 1 + slides.length) % slides.length)} style={{ width: 28, height: 28, borderRadius: 'var(--r-sm)', border: '1px solid var(--rule)', background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-3)', cursor: 'pointer' }}><IcoChevL /></button>
                <button onClick={() => setSlide((slide + 1) % slides.length)} style={{ width: 28, height: 28, borderRadius: 'var(--r-sm)', border: '1px solid var(--rule)', background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-3)', cursor: 'pointer' }}><IcoChevR /></button>
              </div>
            </div>
          </div>

          {/* Disruptions */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--rule)', borderRadius: 'var(--r-lg)', padding: '16px 18px 8px' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>Disruptions affecting your shipments</div>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-ui)', marginBottom: 12 }}>Last synced: 11:59 AM</div>
            <DisruptionRow icon={<IcoStop />}  title="Embargo · Madhya Pradesh"   meta="12 shipments at risk · Est. delay 2–3 days" severity="high" />
            <DisruptionRow icon={<IcoRain />}  title="Heavy rain · Mumbai, Pune"  meta="8 shipments at risk · Est. delay 1 day"     severity="med" />
            <DisruptionRow icon={<IcoStar />}  title="Local festival · Rajasthan" meta="3 shipments at risk · Delivery may be delayed" severity="low" />
            <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3, padding: '10px 0 4px' }}>View all disruptions <IcoChevR /></a>
          </div>
        </div>
      </div>

      {/* Floating SmartAssist */}
      <button style={{ position: 'fixed', bottom: 24, right: 24, height: 44, padding: '0 18px', background: 'var(--dark)', color: '#fff', border: 'none', borderRadius: 999, fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', zIndex: 300, boxShadow: '0 4px 14px rgba(0,0,0,0.25)' }}>
        <span style={{ color: '#7C3AED' }}><IcoSpark /></span>Ask SmartAssist
      </button>
    </div>
  )
}
