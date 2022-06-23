interface jwtConfig {
    secret: string,
    jwtExpiration: number,
    jwtRefreshExpiration: number
}

export const jwtConfig: jwtConfig = {
    secret: 'secret.gg.jwt.key',
    jwtExpiration: 3600,
    jwtRefreshExpiration: 86400
}