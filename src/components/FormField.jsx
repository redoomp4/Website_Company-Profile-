export default function FormField({ name, label, type = 'text', placeholder }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} required placeholder={placeholder} />
    </div>
  )
}
