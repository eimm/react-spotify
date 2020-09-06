export const config ={
    appId: '3333222d641d4904b6ebf0d9622bc07b',
    appKey: '70e3a608511a47f8a3bfcaf9f0723dfc',
    redirectLink: 'http://localhost:3000',
}

export const links = {
    authLink: `https://accounts.spotify.com/ru/authorize?client_id=${config.appId}&response_type=code&redirect_uri=${config.redirectLink}`,
    tokenLink: `https://accounts.spotify.com/api/token`,
    searchEndpoint: 'https://api.spotify.com/v1/search'
}