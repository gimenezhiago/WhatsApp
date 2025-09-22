import { MessageCircle } from 'lucide-react'
import * as C from './Cabecalho.styles.js'

export default function Cabecalho() {
    return (
        <C.ContainerCabecalho>
            <C.TituloCabecalho>
                <MessageCircle size={32} color="#10b981"/>
                <C.H1Cabecalho>WhatsHub</C.H1Cabecalho>
            </C.TituloCabecalho>
            <C.DescricaoCabecalho>
                O jeito mais rápido de iniciar conversas no WhatsApp. Gere links instantâneos e 
        mantenha seus contatos organizados.
            </C.DescricaoCabecalho>
        </C.ContainerCabecalho>
    )
}