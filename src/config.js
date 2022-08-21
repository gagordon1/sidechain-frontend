const DEVELOPMENT = true

export const BACKEND = "https://sidechain-backend.herokuapp.com"

export const FRONTEND = DEVELOPMENT ? "http://localhost:3000" : ""

export const SIDECHAIN_UPLOAD_ENDPOINT = BACKEND + "/upload"

export const SIDECHAIN_FEED_ENDPOINT = BACKEND + "/feed"

