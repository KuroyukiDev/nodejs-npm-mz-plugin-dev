const PlaySFX = (mode, OPTS_RAW) => {
	const OPTS = MakeSFXOpts(OPTS_RAW)
	console.debug(mode, OPTS)
	switch (mode.toLowerCase()) {
		case 'se':
			AudioManager.playSe(OPTS)
			break
		case 'me':
			AudioManager.playMe(OPTS)
			break
		default:
			AudioManager.playSe(OPTS)
			break
	}
}
const MakeSFXOpts = (OPTS_RAW) => {
	return {
		name: OPTS_RAW["name"],
		volume: OPTS_RAW["volume"],
		pitch: OPTS_RAW["pitch"]
	}
}
export {
	PlaySFX
}