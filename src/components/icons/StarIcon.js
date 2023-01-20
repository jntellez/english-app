const StarIcon = (color = '#fefefe', active = false) => {
    if(active) return `
        <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.15 31.75L20 27.05L27.85 31.8L25.75 22.9L32.65 16.9L23.55 16.1L20 7.7L16.45 16.05L7.35 16.85L14.25 22.85L12.15 31.75ZM7.65 38L10.9 23.95L0 14.5L14.4 13.25L20 0L25.6 13.25L40 14.5L29.1 23.95L32.35 38L20 30.55L7.65 38Z M12.15 31.75L20 27.05L27.85 31.8L25.75 22.9L32.65 16.9L23.55 16.1L20 7.7L16.45 16.05L7.35 16.85L14.25 22.85L12.15 31.75Z" fill="${color}"/>
        </svg>
    `
    return `
        <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.15 31.75L20 27.05L27.85 31.8L25.75 22.9L32.65 16.9L23.55 16.1L20 7.7L16.45 16.05L7.35 16.85L14.25 22.85L12.15 31.75ZM7.65 38L10.9 23.95L0 14.5L14.4 13.25L20 0L25.6 13.25L40 14.5L29.1 23.95L32.35 38L20 30.55L7.65 38Z" fill="${color}"/>
        </svg>
    `
}

export default StarIcon