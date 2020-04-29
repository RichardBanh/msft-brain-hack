function randomWhole(x, y) {
    const random = Math.floor(Math.random() * (+x - +y)) + +y; 
    return (random)
}

export{randomWhole} 