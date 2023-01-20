const HomeIcon = (color = '#fefefe', active = false) => {
    if(active) return `
        <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 33H10.5V20.5H21.5V33H29V13.5L16 3.75L3 13.5V33ZM0 36V12L16 0L32 12V36H18.5V23.5H13.5V36H0Z M3 33H10.5V20.5H21.5V33H29V13.5L16 3.75L3 13.5V33Z" fill="${color}"/>
        </svg>
    `
    
    return `
        <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 33H10.5V20.5H21.5V33H29V13.5L16 3.75L3 13.5V33ZM0 36V12L16 0L32 12V36H18.5V23.5H13.5V36H0Z" fill="${color}"/>
        </svg>
    `
}

export default HomeIcon