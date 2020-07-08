export const getRandomX = (canvas) => {
    return Math.random() * (1200 - canvas.width) + canvas.width
}

export const getRandomY = () => {
    return Math.random() * (440 - 0)
}