import { OAuth2Token } from "@badgateway/oauth2-client";
import { AccessToken } from "@spotify/web-api-ts-sdk";
import { TokenDto } from "src/components/models/spotify/tokenDto";

export function convertToAccessToken(tokenDto:TokenDto) :OAuth2Token{
    
    return {
        accessToken: tokenDto.access_token,
        refreshToken: "",
        expiresAt: new Date().getTime() + (tokenDto.expires_in *1000),
    }
}