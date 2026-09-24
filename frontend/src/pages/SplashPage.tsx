import { AppHeader } from '@conways/drawer'
import './SplashPage.css'

export default function SplashPage() {
  return (
    <div className="splash">
      <AppHeader brand={<span className="ch-brand">QMS</span>} />
      <div className="splash__content">
        <span className="splash__badge">Not built yet</span>
        <h1>QMS</h1>
        <p className="splash__tag">The organization’s quality management system</p>
        <p>Where the organization’s quality management system will live.</p>
        <p className="splash__area">ISO/IEC/IEEE 15288 Organizational Project-Enabling: Quality Management (6.2.5)</p>
        <p className="splash__note">
          This is a placeholder page so Conway&rsquo;s Depot&rsquo;s catalog can launch it. The real
          application is still to come.
        </p>
      </div>
    </div>
  )
}
