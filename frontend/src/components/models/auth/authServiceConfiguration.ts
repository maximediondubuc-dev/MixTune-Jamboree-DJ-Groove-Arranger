import { ClientSettings } from "@badgateway/oauth2-client/dist/client"

interface AuthStorageConfig {
    jwtStorageKey : string

}

export type AuthServiceConfiguration  = AuthStorageConfig & ClientSettings
