import { useState } from 'react'
import { Card, Button } from '@delhivery/tarmac'

const IcoChevR = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
const IcoWallet = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 2v5M8 2v5"/><circle cx="16" cy="14" r="2"/></svg>
const IcoCod = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
const IcoHeadset = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z"/><path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>

function DateFilter() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid #e6e6e6', borderRadius: 6, padding: '5px 10px', fontSize: 12, color: '#454545', fontFamily: '"Noto Sans", sans-serif', cursor: 'pointer' }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
      Last 30 days
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
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
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'analysis', label: 'Analysis' },
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

      {/* ── Analysis tab — placeholder ── */}
      {tab === 'analysis' && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 320, color: '#98a2bc', fontSize: 14, fontFamily: '"Noto Sans", sans-serif' }}>
          Analysis coming soon
        </div>
      )}

      {/* ── Overview tab ── */}
      {tab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20, alignItems: 'start' }}>

          {/* LEFT */}
          <div>
            {/* Alert strips */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
              {/* Finlock */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff3f4', border: '1px solid #f5c0c8', borderRadius: 8, padding: '9px 16px', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ed1b36" strokeWidth="2.5" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#c0001a', fontFamily: '"Noto Sans", sans-serif', whiteSpace: 'nowrap' }}>Account finlock</span>
                  <span style={{ fontSize: 12, color: '#454545', fontFamily: '"Noto Sans", sans-serif' }}>Pending KYC — shipments may be held.</span>
                </div>
                <a style={{ fontSize: 12, fontWeight: 700, color: '#ed1b36', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: '"Noto Sans", sans-serif', display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
                  Resolve now <IcoChevR />
                </a>
              </div>
              {/* Support tickets */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f3f0ff', border: '1px solid #d4c8f8', borderRadius: 8, padding: '9px 16px', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <IcoHeadset />
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#5b21b6', fontFamily: '"Noto Sans", sans-serif', whiteSpace: 'nowrap' }}>Support tickets</span>
                  <span style={{ fontSize: 12, color: '#454545', fontFamily: '"Noto Sans", sans-serif' }}>11 need your input · 1 nearing SLA.</span>
                </div>
                <a style={{ fontSize: 12, fontWeight: 700, color: '#7c3aed', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: '"Noto Sans", sans-serif', display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
                  Respond <IcoChevR />
                </a>
              </div>
            </div>

            {/* Placeholder content area */}
            <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 12, padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200 }}>
              <div style={{ textAlign: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c8c8c8" strokeWidth="1.5" style={{ marginBottom: 12 }}><path d="M3 7h11v10H3z"/><path d="M14 10h5l2 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#2b2b2b', fontFamily: '"Noto Sans", sans-serif', marginBottom: 4 }}>B2B overview coming soon</div>
                <div style={{ fontSize: 12, color: '#98a2bc', fontFamily: '"Noto Sans", sans-serif' }}>Shipment pipeline, pickups and freight summary will appear here.</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Wallet + COD + What's New */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* Wallet */}
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

            {/* COD Remittance */}
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

            {/* What's New — no channel connectors */}
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
      )}

    </div>
  )
}
