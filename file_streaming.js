// Imports the Google Cloud client library
const fs = require('fs')
const speech = require('@google-cloud/speech')

// Creates a client
const client = new speech.SpeechClient()

const start = async () => {
	const filename = './resources/voice.flac'
	const encoding = 'FLAC'
	const sampleRateHertz = 44100
	const languageCode = 'ko-KR'

	const config = {
		encoding: encoding,
		sampleRateHertz: sampleRateHertz,
		languageCode: languageCode,
	}
	const audio = {
		content: fs.readFileSync(filename).toString('base64'),
	}

	const request = {
		config: config,
		audio: audio,
	}

	// Detects speech in the audio file
	const [response] = await client.recognize(request)
	const transcription = response.results
		.map((result) => result.alternatives[0].transcript)
		.join('\n')
	console.log('Transcription: ', transcription)
	return transcription
}

//start();
exports.start = start
