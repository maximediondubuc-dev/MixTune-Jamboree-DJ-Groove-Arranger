require('dotenv').config();
import fetch from 'cross-fetch';


export const getToken: any = async (req: any, res: any) => {

    var client_id = process.env.SPOTIFY_CLIENT_ID;
    var client_secret = process.env.SPOTIFY_CLIENT_SECRET;

    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')) ,
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };
    fetch(authOptions.url,{
        method:'POST',
        headers : authOptions.headers,
        body: 'grant_type=client_credentials'
    })
    .catch((error:any)=>{
        console.log(error);
    })
    .then((ret :any)=>{
        return ret.json();
    }).then(ret=>{
        res.send(ret)
    });
}
