import React from 'react'

const Items = ({ title, Thickness,  Usage, Grade, Color, Size, img, Price, Quantity}) => {
    return (
        <>
            <div className='items-info'>
                <div className='product-img'>
                    <img src={img} alt="image" />
                </div>
                <div className='title'>
                    <h2>{title}</h2>
                    <p>{Color}</p>
                </div>
                <div className='add-minus-quantity'>
                    <i className="fa-solid fa-minus"></i>
                    <input type="text" placeholder='0' />
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div className='price'>
                    <h3>{Price}</h3>
                </div>
                <div className='remove-item'>
                    <i className="fas fa-trash-alt remove"></i>
                </div>
            </div>
            <hr /> 
        </>
    )
}

export default Items