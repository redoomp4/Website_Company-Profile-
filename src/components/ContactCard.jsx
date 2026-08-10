export default function ContactCard({ icon, title, detail, href }) {
  const content = <><div className="contact-info-icon">{icon}</div><div className="contact-info-text"><h4>{title}</h4><p>{detail}</p></div></>
  return href ? <a className="contact-info-card" href={href}>{content}</a> : <div className="contact-info-card">{content}</div>
}
