export const environment = {

    spotifyAuthConfig : {
        server : 'https://accounts.spotify.com/',
        redirectUri : 'http://localhost:4200/callback',
        tokenEndpoint: '/api/token',
        clientId : '1640144d61f247aa901a2b6979a8fca6',
        authorizationEndpoint: '/authorize',
        scope : ['user-read-private' ,'user-read-email','playlist-read-private', 'playlist-read-collaborative']
    }
};
