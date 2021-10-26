import React from 'react'

const Search = () => {
    return (
        <div className="search-page-content">
            <h1>RESULTADOS DE BUSQUEDA : 3</h1>
            <p>Fontaneria en Cochabamba.</p>
            <div className="search-page-results">
                {/* <Card/> */}
            </div>
        </div>
    )
}

export default Search


const Card = () => {
    return (
        <div className="card">
            <div className="card-image">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
            </div>
            <div className="card-content">
                <h1>Fontaneria en Cochabamba</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quidem!</p>
            </div>
        </div>
    )
}