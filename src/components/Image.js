import React, {useState} from "react"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
   return (
    <div className={`${className} image-container`}
         onmouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}>
        <img src={img.url} className="image-grid" alt=""/>
    </div>
   )
}

export default Image