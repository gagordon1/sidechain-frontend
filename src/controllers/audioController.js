

export const setSource = (newSource) => getAudio().src=newSource

export const getSource = () => getAudio().src

export const getAudio = () => document.getElementById("audio")

export const playAudio = () => getAudio().play()

export const pauseAudio = () => getAudio().pause()

export const audioIsPaused = () => getAudio().paused