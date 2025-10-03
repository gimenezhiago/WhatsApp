import QRcode from "react-qr-code";
import * as C from "./QRCode.styles";

export default function QRCode({ link }) {
    if (!link) return null;
    return (
        <C.QRCodeContainer>
            <QRcode value={link} size={128}/>
        </C.QRCodeContainer>
    );
}