import React from 'react'
import './css/Privacy.css'

const Privacy = () => {
    return (
        <>
            <div className="top-divider container" style={{ marginTop: "17px" }}></div>
            <h1 className="privacy-title">Privacy Policy</h1>
            <div className="privacy-wr">
                <div className="privacy-bl">
                    <p className="privacy-desc">
                        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante
                        a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a.
                        Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim.
                        Proin placerat tortor lacus, ac sodales lectus placerat quis.
                    </p>
                </div>
                <div className="privacy-bl">
                    <h2 className="privacy-bl-title">Security</h2>
                    <p className="privacy-desc">
                        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu.
                        Nam fringilla molestie velit, eget pellentesque risus scelerisque.
                    </p>
                </div>
                <div className="privacy-bl">
                    <h2 className="privacy-bl-title">Cookies</h2>
                    <ul className="privacy-bl-list">
                        <li>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.</li>
                        <li> Nam fringilla molestie velit, eget pellentesque risus scelerisque a.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Privacy