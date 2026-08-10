export default function SectionHeader({ label, title, text }) {
  return (
    <div className="section-header reveal">
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{text}</p>
    </div>
  )
}
