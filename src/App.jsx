import './App.css'

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="เมนูหลัก">
        <a className="wordmark" href="#home">OUR DAY</a>
        <a className="nav-link" href="#details">รายละเอียดงาน <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero" id="home" aria-labelledby="couple-names">
        <div className="hero-image" role="img" aria-label="บรรยากาศงานแต่งงานแสนอบอุ่น" />
        <div className="hero-wash" />
        <div className="hero-copy">
          <p className="eyebrow">ขอเชิญร่วมเป็นส่วนหนึ่งในวันสำคัญ</p>
          <h1 id="couple-names">กิตติธัช <span>&</span> สุภาพร</h1>
          <div className="hero-rule"><span>✳</span></div>
          <p className="hero-date">14 มีนาคม 2570 <span>·</span> หัวไทร</p>
          <a className="button button-light" href="#details">เปิดการ์ดเชิญ <span aria-hidden="true">↓</span></a>
        </div>
        <p className="vertical-note">SAVE THE DATE · 14.03.27</p>
      </section>

      <section className="invitation" id="details">
        <p className="eyebrow eyebrow-dark">ด้วยรักและยินดี</p>
        <h2>เรากำลังจะเริ่มต้น<br />บทใหม่ของชีวิต</h2>
        <p className="invitation-copy">
          ขอเรียนเชิญคุณมาร่วมแบ่งปันความสุข และเป็นสักขีพยานในวันพิเศษของเรา
          การมีคุณอยู่ด้วยจะทำให้วันนี้สมบูรณ์ยิ่งขึ้น
        </p>

        <div className="event-card">
          <div className="event-item">
            <span className="event-icon" aria-hidden="true">◷</span>
            <p className="event-label">วันและเวลา</p>
            <h3>วันอาทิตย์ที่ 14 มีนาคม 2570</h3>
            <p>พิธีเริ่มเวลา 17:30 น.</p>
          </div>
          <div className="event-divider" />
          <div className="event-item">
            <span className="event-icon" aria-hidden="true">⌖</span>
            <p className="event-label">สถานที่</p>
            <h3>หัวไทร</h3>
          </div>
        </div>
        <a
          className="text-link"
          href="https://maps.google.com/?q=หัวไทร"
          target="_blank"
          rel="noreferrer"
        >
          ดูแผนที่ <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>14 · 03 · 2027 <span>ทำด้วยความรัก</span></footer>
    </main>
  )
}

export default App
