import React from 'react'
 
const Links = () => {

    const items = [
        "Home",
        "About Us",
        "Product and Services",
        "Our Team",
        "Our Advantages",
        "Vision and Mission",
        "Contact",
    ]

    return (
        <div className="links">
            {items.map(item => (
            <a href={`#${item}`} key={item}>
                {item}
            </a>
            ))}
        </div>
    )
}

export default Links