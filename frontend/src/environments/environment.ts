
export const environment = {
    spotifyAuthConfig : {
        issuer : '',
        redirectUri : '',
        clientId : '',
        responseType : 'code',
        scope : ['user-read-private' ,'user-read-email','playlist-read-private', 'playlist-read-collaborative'],
        jwtStorageKey : 'SPOTIFY_BEARER_TOKEN'

    }


};
