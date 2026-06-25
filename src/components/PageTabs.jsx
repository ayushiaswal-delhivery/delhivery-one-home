const TABS = [
  { id: 'current', label: 'Current' },
  { id: 'b2b',     label: 'B2B' },
  { id: 'b2c',     label: 'B2C' },
]

export default function PageTabs({ activeTab, onTabChange }) {
  return (
    <div className="page-tabs">
      {TABS.map(tab => (
        <button
          key={tab.id}
          className={`page-tab${activeTab === tab.id ? ' active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
