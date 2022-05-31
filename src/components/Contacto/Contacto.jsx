import './Contacto.css';

function Contacto() {
    return (
        <>
            <h2>Contacto</h2>
            <form>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <div className='botones'>
                    <input type="submit" value="Enviar" />
                    <input type="reset" value="Borrar" />
                </div>
            </form>
        </>
    )
}

export default Contacto;