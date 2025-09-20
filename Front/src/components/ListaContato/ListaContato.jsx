import { useState } from "react";
import Formulario from "../Formulario/Formulario";
import ItemContato from "../ItemContato/ItemContato";

export default function ListaContato({ contatos, onDelete, onEdit, onSendMessage, onSave }) {
    return (
        <div>
            <div>
                <h2>Agenda de Contatos</h2>
            </div>

            <Formulario onSave={onSave} />

            <div>
                <h3>Seus Contatos ({contatos.length})</h3>
            </div>

            {contatos.length === 0 ? (
                <div>
                    {contatos.map((contato) => (
                        <ItemContato
                            key={contato.id}
                            contato={contato}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onSendMessage={onSendMessage}
                        />
                    ))}
                </div>
            ) : (
                <div>
                    Nenhum contato salvo ainda.
                </div>
            )}
        </div>
    )
}