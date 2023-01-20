const SettingsIcon = (color = '#fefefe', active = false) => {
    if(active) return `
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4 40L14.4 33.7C13.7667 33.4667 13.1 33.15 12.4 32.75C11.7 32.35 11.0833 31.9333 10.55 31.5L4.65 34.2L0 26L5.4 22.05C5.33333 21.75 5.29167 21.4083 5.275 21.025C5.25833 20.6417 5.25 20.3 5.25 20C5.25 19.7 5.25833 19.3583 5.275 18.975C5.29167 18.5917 5.33333 18.25 5.4 17.95L0 14L4.65 5.8L10.55 8.5C11.0833 8.06667 11.7 7.65 12.4 7.25C13.1 6.85 13.7667 6.55 14.4 6.35L15.4 0H24.6L25.6 6.3C26.2333 6.53333 26.9083 6.84167 27.625 7.225C28.3417 7.60833 28.95 8.03333 29.45 8.5L35.35 5.8L40 14L34.6 17.85C34.6667 18.1833 34.7083 18.5417 34.725 18.925C34.7417 19.3083 34.75 19.6667 34.75 20C34.75 20.3333 34.7417 20.6833 34.725 21.05C34.7083 21.4167 34.6667 21.7667 34.6 22.1L40 26L35.35 34.2L29.45 31.5C28.9167 31.9333 28.3083 32.3583 27.625 32.775C26.9417 33.1917 26.2667 33.5 25.6 33.7L24.6 40H15.4ZM20 26.5C21.8 26.5 23.3333 25.8667 24.6 24.6C25.8667 23.3333 26.5 21.8 26.5 20C26.5 18.2 25.8667 16.6667 24.6 15.4C23.3333 14.1333 21.8 13.5 20 13.5C18.2 13.5 16.6667 14.1333 15.4 15.4C14.1333 16.6667 13.5 18.2 13.5 20C13.5 21.8 14.1333 23.3333 15.4 24.6C16.6667 25.8667 18.2 26.5 20 26.5ZM20 23.5C19.0333 23.5 18.2083 23.1583 17.525 22.475C16.8417 21.7917 16.5 20.9667 16.5 20C16.5 19.0333 16.8417 18.2083 17.525 17.525C18.2083 16.8417 19.0333 16.5 20 16.5C20.9667 16.5 21.7917 16.8417 22.475 17.525C23.1583 18.2083 23.5 19.0333 23.5 20C23.5 20.9667 23.1583 21.7917 22.475 22.475C21.7917 23.1583 20.9667 23.5 20 23.5ZM17.8 37H22.2L22.9 31.4C24 31.1333 25.0417 30.7167 26.025 30.15C27.0083 29.5833 27.9 28.9 28.7 28.1L34 30.4L36 26.8L31.3 23.35C31.4333 22.7833 31.5417 22.225 31.625 21.675C31.7083 21.125 31.75 20.5667 31.75 20C31.75 19.4333 31.7167 18.875 31.65 18.325C31.5833 17.775 31.4667 17.2167 31.3 16.65L36 13.2L34 9.6L28.7 11.9C27.9333 11.0333 27.0667 10.3083 26.1 9.725C25.1333 9.14167 24.0667 8.76667 22.9 8.6L22.2 3H17.8L17.1 8.6C15.9667 8.83333 14.9083 9.23333 13.925 9.8C12.9417 10.3667 12.0667 11.0667 11.3 11.9L6 9.6L4 13.2L8.7 16.65C8.56667 17.2167 8.45833 17.775 8.375 18.325C8.29167 18.875 8.25 19.4333 8.25 20C8.25 20.5667 8.29167 21.125 8.375 21.675C8.45833 22.225 8.56667 22.7833 8.7 23.35L4 26.8L6 30.4L11.3 28.1C12.1 28.9 12.9917 29.5833 13.975 30.15C14.9583 30.7167 16 31.1333 17.1 31.4L17.8 37Z M17.8 37H22.2L22.9 31.4C24 31.1333 25.0417 30.7167 26.025 30.15C27.0083 29.5833 27.9 28.9 28.7 28.1L34 30.4L36 26.8L31.3 23.35C31.4333 22.7833 31.5417 22.225 31.625 21.675C31.7083 21.125 31.75 20.5667 31.75 20C31.75 19.4333 31.7167 18.875 31.65 18.325C31.5833 17.775 31.4667 17.2167 31.3 16.65L36 13.2L34 9.6L28.7 11.9C27.9333 11.0333 27.0667 10.3083 26.1 9.725C25.1333 9.14167 24.0667 8.76667 22.9 8.6L22.2 3H17.8L17.1 8.6C15.9667 8.83333 14.9083 9.23333 13.925 9.8C12.9417 10.3667 12.0667 11.0667 11.3 11.9L6 9.6L4 13.2L8.7 16.65C8.56667 17.2167 8.45833 17.775 8.375 18.325C8.29167 18.875 8.25 19.4333 8.25 20C8.25 20.5667 8.29167 21.125 8.375 21.675C8.45833 22.225 8.56667 22.7833 8.7 23.35L4 26.8L6 30.4L11.3 28.1C12.1 28.9 12.9917 29.5833 13.975 30.15C14.9583 30.7167 16 31.1333 17.1 31.4L17.8 37ZM24.6 24.6C23.3333 25.8667 21.8 26.5 20 26.5C18.2 26.5 16.6667 25.8667 15.4 24.6C14.1333 23.3333 13.5 21.8 13.5 20C13.5 18.2 14.1333 16.6667 15.4 15.4C16.6667 14.1333 18.2 13.5 20 13.5C21.8 13.5 23.3333 14.1333 24.6 15.4C25.8667 16.6667 26.5 18.2 26.5 20C26.5 21.8 25.8667 23.3333 24.6 24.6Z" fill="${color}"/>
        <path d="M15.4 40L14.4 33.7C13.7667 33.4667 13.1 33.15 12.4 32.75C11.7 32.35 11.0833 31.9333 10.55 31.5L4.65 34.2L0 26L5.4 22.05C5.33333 21.75 5.29167 21.4083 5.275 21.025C5.25833 20.6417 5.25 20.3 5.25 20C5.25 19.7 5.25833 19.3583 5.275 18.975C5.29167 18.5917 5.33333 18.25 5.4 17.95L0 14L4.65 5.8L10.55 8.5C11.0833 8.06667 11.7 7.65 12.4 7.25C13.1 6.85 13.7667 6.55 14.4 6.35L15.4 0H24.6L25.6 6.3C26.2333 6.53333 26.9083 6.84167 27.625 7.225C28.3417 7.60833 28.95 8.03333 29.45 8.5L35.35 5.8L40 14L34.6 17.85C34.6667 18.1833 34.7083 18.5417 34.725 18.925C34.7417 19.3083 34.75 19.6667 34.75 20C34.75 20.3333 34.7417 20.6833 34.725 21.05C34.7083 21.4167 34.6667 21.7667 34.6 22.1L40 26L35.35 34.2L29.45 31.5C28.9167 31.9333 28.3083 32.3583 27.625 32.775C26.9417 33.1917 26.2667 33.5 25.6 33.7L24.6 40H15.4ZM20 26.5C21.8 26.5 23.3333 25.8667 24.6 24.6C25.8667 23.3333 26.5 21.8 26.5 20C26.5 18.2 25.8667 16.6667 24.6 15.4C23.3333 14.1333 21.8 13.5 20 13.5C18.2 13.5 16.6667 14.1333 15.4 15.4C14.1333 16.6667 13.5 18.2 13.5 20C13.5 21.8 14.1333 23.3333 15.4 24.6C16.6667 25.8667 18.2 26.5 20 26.5ZM20 23.5C19.0333 23.5 18.2083 23.1583 17.525 22.475C16.8417 21.7917 16.5 20.9667 16.5 20C16.5 19.0333 16.8417 18.2083 17.525 17.525C18.2083 16.8417 19.0333 16.5 20 16.5C20.9667 16.5 21.7917 16.8417 22.475 17.525C23.1583 18.2083 23.5 19.0333 23.5 20C23.5 20.9667 23.1583 21.7917 22.475 22.475C21.7917 23.1583 20.9667 23.5 20 23.5ZM17.8 37H22.2L22.9 31.4C24 31.1333 25.0417 30.7167 26.025 30.15C27.0083 29.5833 27.9 28.9 28.7 28.1L34 30.4L36 26.8L31.3 23.35C31.4333 22.7833 31.5417 22.225 31.625 21.675C31.7083 21.125 31.75 20.5667 31.75 20C31.75 19.4333 31.7167 18.875 31.65 18.325C31.5833 17.775 31.4667 17.2167 31.3 16.65L36 13.2L34 9.6L28.7 11.9C27.9333 11.0333 27.0667 10.3083 26.1 9.725C25.1333 9.14167 24.0667 8.76667 22.9 8.6L22.2 3H17.8L17.1 8.6C15.9667 8.83333 14.9083 9.23333 13.925 9.8C12.9417 10.3667 12.0667 11.0667 11.3 11.9L6 9.6L4 13.2L8.7 16.65C8.56667 17.2167 8.45833 17.775 8.375 18.325C8.29167 18.875 8.25 19.4333 8.25 20C8.25 20.5667 8.29167 21.125 8.375 21.675C8.45833 22.225 8.56667 22.7833 8.7 23.35L4 26.8L6 30.4L11.3 28.1C12.1 28.9 12.9917 29.5833 13.975 30.15C14.9583 30.7167 16 31.1333 17.1 31.4L17.8 37Z M17.8 37H22.2L22.9 31.4C24 31.1333 25.0417 30.7167 26.025 30.15C27.0083 29.5833 27.9 28.9 28.7 28.1L34 30.4L36 26.8L31.3 23.35C31.4333 22.7833 31.5417 22.225 31.625 21.675C31.7083 21.125 31.75 20.5667 31.75 20C31.75 19.4333 31.7167 18.875 31.65 18.325C31.5833 17.775 31.4667 17.2167 31.3 16.65L36 13.2L34 9.6L28.7 11.9C27.9333 11.0333 27.0667 10.3083 26.1 9.725C25.1333 9.14167 24.0667 8.76667 22.9 8.6L22.2 3H17.8L17.1 8.6C15.9667 8.83333 14.9083 9.23333 13.925 9.8C12.9417 10.3667 12.0667 11.0667 11.3 11.9L6 9.6L4 13.2L8.7 16.65C8.56667 17.2167 8.45833 17.775 8.375 18.325C8.29167 18.875 8.25 19.4333 8.25 20C8.25 20.5667 8.29167 21.125 8.375 21.675C8.45833 22.225 8.56667 22.7833 8.7 23.35L4 26.8L6 30.4L11.3 28.1C12.1 28.9 12.9917 29.5833 13.975 30.15C14.9583 30.7167 16 31.1333 17.1 31.4L17.8 37ZM24.6 24.6C23.3333 25.8667 21.8 26.5 20 26.5C18.2 26.5 16.6667 25.8667 15.4 24.6C14.1333 23.3333 13.5 21.8 13.5 20C13.5 18.2 14.1333 16.6667 15.4 15.4C16.6667 14.1333 18.2 13.5 20 13.5C21.8 13.5 23.3333 14.1333 24.6 15.4C25.8667 16.6667 26.5 18.2 26.5 20C26.5 21.8 25.8667 23.3333 24.6 24.6Z" fill="${color}" fill-opacity="0.2"/>
        </svg>
    `
    return `
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4 40L14.4 33.7C13.7667 33.4667 13.1 33.15 12.4 32.75C11.7 32.35 11.0833 31.9333 10.55 31.5L4.65 34.2L0 26L5.4 22.05C5.33333 21.75 5.29167 21.4083 5.275 21.025C5.25833 20.6417 5.25 20.3 5.25 20C5.25 19.7 5.25833 19.3583 5.275 18.975C5.29167 18.5917 5.33333 18.25 5.4 17.95L0 14L4.65 5.8L10.55 8.5C11.0833 8.06667 11.7 7.65 12.4 7.25C13.1 6.85 13.7667 6.55 14.4 6.35L15.4 0H24.6L25.6 6.3C26.2333 6.53333 26.9083 6.84167 27.625 7.225C28.3417 7.60833 28.95 8.03333 29.45 8.5L35.35 5.8L40 14L34.6 17.85C34.6667 18.1833 34.7083 18.5417 34.725 18.925C34.7417 19.3083 34.75 19.6667 34.75 20C34.75 20.3333 34.7417 20.6833 34.725 21.05C34.7083 21.4167 34.6667 21.7667 34.6 22.1L40 26L35.35 34.2L29.45 31.5C28.9167 31.9333 28.3083 32.3583 27.625 32.775C26.9417 33.1917 26.2667 33.5 25.6 33.7L24.6 40H15.4ZM20 26.5C21.8 26.5 23.3333 25.8667 24.6 24.6C25.8667 23.3333 26.5 21.8 26.5 20C26.5 18.2 25.8667 16.6667 24.6 15.4C23.3333 14.1333 21.8 13.5 20 13.5C18.2 13.5 16.6667 14.1333 15.4 15.4C14.1333 16.6667 13.5 18.2 13.5 20C13.5 21.8 14.1333 23.3333 15.4 24.6C16.6667 25.8667 18.2 26.5 20 26.5ZM20 23.5C19.0333 23.5 18.2083 23.1583 17.525 22.475C16.8417 21.7917 16.5 20.9667 16.5 20C16.5 19.0333 16.8417 18.2083 17.525 17.525C18.2083 16.8417 19.0333 16.5 20 16.5C20.9667 16.5 21.7917 16.8417 22.475 17.525C23.1583 18.2083 23.5 19.0333 23.5 20C23.5 20.9667 23.1583 21.7917 22.475 22.475C21.7917 23.1583 20.9667 23.5 20 23.5ZM17.8 37H22.2L22.9 31.4C24 31.1333 25.0417 30.7167 26.025 30.15C27.0083 29.5833 27.9 28.9 28.7 28.1L34 30.4L36 26.8L31.3 23.35C31.4333 22.7833 31.5417 22.225 31.625 21.675C31.7083 21.125 31.75 20.5667 31.75 20C31.75 19.4333 31.7167 18.875 31.65 18.325C31.5833 17.775 31.4667 17.2167 31.3 16.65L36 13.2L34 9.6L28.7 11.9C27.9333 11.0333 27.0667 10.3083 26.1 9.725C25.1333 9.14167 24.0667 8.76667 22.9 8.6L22.2 3H17.8L17.1 8.6C15.9667 8.83333 14.9083 9.23333 13.925 9.8C12.9417 10.3667 12.0667 11.0667 11.3 11.9L6 9.6L4 13.2L8.7 16.65C8.56667 17.2167 8.45833 17.775 8.375 18.325C8.29167 18.875 8.25 19.4333 8.25 20C8.25 20.5667 8.29167 21.125 8.375 21.675C8.45833 22.225 8.56667 22.7833 8.7 23.35L4 26.8L6 30.4L11.3 28.1C12.1 28.9 12.9917 29.5833 13.975 30.15C14.9583 30.7167 16 31.1333 17.1 31.4L17.8 37Z" fill="${color}"/>
        </svg>
    `
}

export default SettingsIcon