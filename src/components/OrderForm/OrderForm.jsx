function OrderForm({handleInputChange, sendOrder }) {
    return (
        <form onSubmit={(e) => sendOrder(e)}>
            <div className='inputDiv'>
                <label htmlFor="name">Nombre</label>
                <input type="text" htmlFor="name" id='name' placeholder='Nombre*' name='name' onChange={handleInputChange} required />
            </div>
            <div className='inputDiv'>
                <label htmlFor="email">Email</label>
                <input type="email" htmlFor="email" id='email' placeholder='Email*' name='email' onChange={handleInputChange} required />
            </div>
            <div className='inputDiv'>
                <label htmlFor="phone">Teléfono</label>
                <input type="number" htmlFor="phone" id='phone' placeholder='Teléfono*' name='phone' onChange={handleInputChange} required />
            </div>
            <button type='submit' className='comprar'>Comprar</button>
        </form>
    )
}

export default OrderForm;