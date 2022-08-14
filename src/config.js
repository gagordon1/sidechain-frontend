const DEVELOPMENT = true

const BACKEND = DEVELOPMENT ? "http://localhost:8080" : ""

export const SIDECHAIN_UPLOAD_ENDPOINT = BACKEND + "/upload"

export const SIDECHAIN_FEED_ENDPOINT = BACKEND + "/feed"

