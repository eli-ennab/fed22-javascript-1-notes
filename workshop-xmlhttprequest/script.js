/**
 * XMLHttpRequest
 *
 * MINI-WORKSHOP: Skriv om getUsers till getJSON och lägg till att den kan
 * hämta vilken som helst och ÄNDÅ ta emot en callback som får både om något
 * går fel OCH datan från om requesten lyckas.
 *
 */

 const getJSON = (url, callback) => {
	// Create a new XML Http Request
	const request = new XMLHttpRequest();

	// Attach an event-listener to the request
	request.addEventListener('readystatechange', () => {
		// Is request done?
		if (request.readyState === 4) {    // 4 = DONE

			// Was the request successful?
			if (request.status === 200) {
				// 200 OK

				// take the STRING in responseText and PARSE it into JavaScript object
				const data = JSON.parse(request.responseText);

				// invoke(call) callback
				callback( undefined, data );

			} else {
				// Something went wrong :'(
				console.log("ERROR ERROR DANGER WILL ROBINSON!");

				// invoke(call) callback
				callback( "Could not get data" );
			}
		}
	});

	// Set request to GET data from 'https://jsonplaceholder.typicode.com/users'
	request.open('GET', url);

	// Send the request
	request.send();

	console.log("Request sent.");
}

// Get users and output their names to DOM
getJSON('https://jsonplaceholder.typicode.com/users',		// url
 (err, users) => {											// callback
	console.log("Hello, I'm going to output users to DOM.");

	if (err) {
		// something went wrong
		alert( err );

	} else {
		// Loop over all users
		users.forEach(user => {
			// Append a listitem for each user
			document.querySelector('#users').innerHTML += `<li>${user.name}</li>`;
		});
	}
} );