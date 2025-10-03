import QRcode from "react-qr-code";

export default function QRCode({ link }) {
    if (!link) return null;
    return (
        <div style={{ marginTop: "2rem" }}>
            <QRcode value={link} size={128} />
        </div>
    );
}