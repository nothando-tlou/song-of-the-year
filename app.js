let recognition;

if ('webkitSpeechRecognition' in window){
	recognition = new webkitSpeechRecognition();
} else {
	alert('Your browser does not support speech recognition. Please try using Chrome.');
}

recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = 'en-US';

recognition.onstart = function() {
	document.getElementById('status').textContent = 'Listening...';
	
};

recognition.onerror  = function(event) {
	document.getElementById('status').textContent = 'Error occurred in recognition: ' + event.error;
};
recognition.onend = function(){
	document.getElementById('status').textContent = 'Stopped listening, restart manually.';
	};

recognition.onresult = function(event){
	let transcript = event.results[event.results.length -1][0].transcript.trim();
	
	if(transcript.toLowerCase() === 'candidate a'){
	vote('Candidate A');
	}else if (transcript.toLowerCase() === 'candidate b'){
	vote('Candidate B');
	} else {
		document.getElementById('status').textContent = `Unrecognized command: ${transcript}`;
		}
	};
	
	recognition.start();
	
	function vote(candidate){
	alert('Vote registered for ${candidate}');
	document.getElementById('status').textContent = `Vote registered for ${candidate}`;
	
	}
	
