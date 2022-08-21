const DEVELOPMENT = false

export const BACKEND = "https://sidechain-backend.herokuapp.com"

export const FRONTEND = DEVELOPMENT ? "http://localhost:3000" : "https://www.side-chain.xyz"

export const SIDECHAIN_UPLOAD_ENDPOINT = BACKEND + "/upload"

export const SIDECHAIN_FEED_ENDPOINT = BACKEND + "/feed"

