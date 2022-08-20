const DEVELOPMENT = true

export const BACKEND = "http://18.212.228.207:8080"

export const FRONTEND = DEVELOPMENT ? "http://localhost:3000" : ""

export const SIDECHAIN_UPLOAD_ENDPOINT = BACKEND + "/upload"

export const SIDECHAIN_FEED_ENDPOINT = BACKEND + "/feed"

