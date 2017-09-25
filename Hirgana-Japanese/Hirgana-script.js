        
   
        function symbols(){
        	document.getElementById('sv').style.display = 'none';
        	ocument.getElementById('sv2	').style.display = 'none';
			document.getElementById('butt1').style.display = 'block';
			document.getElementById('butt2').style.display = 'block';
        	var divs = document.getElementsByClassName("item");
			var e = document.getElementsByClassName('caption');
			var aud = document.getElementsByTagName('audio');
			document.getElementById('tb1').style.display = 'none';
			document.getElementById('tb2').style.display = 'none';
			document.getElementById('selectt').style.display = 'block';
			
        		for (var i = 0; i < divs.length; i++) {
        			divs[i].style.display = 'block';
					divs[i].setAttribute("style","vertical-align: top;");
					e[i].style.display = 'block';
					aud[i].play = 'true';
        	}
       }
			 function test1(){
			 	document.getElementById('butt1').style.display = 'none';
			    document.getElementById('butt2').style.display = 'none';
				var divs = document.getElementsByClassName("item");
				var form = document.getElementById('divv');
				var inputs = form.getElementsByTagName('input');
				var e = document.getElementsByClassName('caption');
				var aud = document.getElementsByTagName('audio');
				var is_checked = false;
				document.getElementById('selectt').style.display = 'none';

					for(var x = 0; x < inputs.length; x++) {
						if(inputs[x].type == 'checkbox' && inputs[x].name == 'us') {
								is_checked = inputs[x].checked;
								if(is_checked == true){
									for (var i = 0; i < divs.length; i++) {
										divs[x].style.display = 'block';
										divs[x].setAttribute("style","vertical-align: top;");
										e[x].style.display = 'none';
										aud[x].play = 'false';

									}
								}else{
									for (var i = 0; i < divs.length; i++) {
									divs[x].style.display = 'none'; 
									aud[x].play = 'false';
					 document.getElementById('tb1').style.display = 'block';
					}
				}
	 		} 
		}
   }	
			 	function test2(){
			 	document.getElementById('butt1').style.display = 'none';
			    document.getElementById('butt2').style.display = 'none';
				var divs = document.getElementsByClassName("item");
				var form = document.getElementById('divv');
				var inputs = form.getElementsByTagName('input');
				var e = document.getElementsByClassName('caption');
				var aud = document.getElementsByTagName('audio');
				var is_checked = false;
				document.getElementById('selectt').style.display = 'none';

					for(var x = 0; x < inputs.length; x++) {
						if(inputs[x].type == 'checkbox' && inputs[x].name == 'us') {
								is_checked = inputs[x].checked;
								if(is_checked == true){
									for (var i = 0; i < divs.length; i++) {
										divs[x].style.display = 'block';
										divs[x].setAttribute("style","vertical-align: top;");
										e[x].style.display = 'none';
										aud[x].play = 'false';

									}
								}else{
									for (var i = 0; i < divs.length; i++) {
									divs[x].style.display = 'none'; 
									aud[x].play = 'false';
					 document.getElementById('tb2').style.display = 'block';
					}
				}
	 		} 
		}
   }

	function submitQuiz() {
		console.log('submitted');

	// get each answer score
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	// calc score with answerScore function
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + answerScore('q8') + answerScore('q9') + answerScore('q10'));
		console.log("CalcScore: " + calcScore); // it works!

	// function to return correct answer string
		function correctAnswer (correctStringNo, qNumber) {
			console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).innerHTML) + "</strong>");
			}

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore('q1') === 0) {
			document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
		}
		if (answerScore('q5') === 0) {
			document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
		}
		if (answerScore('q6') === 0) {
			document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
		}
		if (answerScore('q7') === 0) {
			document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
		}
		if (answerScore('q8') === 0) {
			document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
		}
		if (answerScore('q9') === 0) {
			document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
		}
		if (answerScore('q10') === 0) {
			document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
		}
	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question1');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
//		var showScore = "Your Score: " + calcScore +"/" + questionCounter + " = " + ((calcScore/100)*100) + "%";
	// if 4/4, "perfect score!"
		if (calcScore === questionCounter) {
			var showScore = 0;
			showScore = " Perfect Score: " + ((calcScore/questionCounter)*100) + "%";
		}else{
			 showScore = "Your Score: " + calcScore +"/" + questionCounter + " = " + ((calcScore/questionCounter)*100) + "%";
		}
		document.getElementById('userScore1').innerHTML = showScore;
		document.getElementById('sv').style.display = "block";
	}
		

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});
		
		function submitQuiz2() {
		console.log('submitted');

	// get each answer score
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	// calc score with answerScore function
		var calcScore = (answerScore('q12') + answerScore('q22') + answerScore('q32') + answerScore('q42') + answerScore('q52') + answerScore('q62') + answerScore('q72') + answerScore('q82') + answerScore('q92') + answerScore('q102'));
		console.log("CalcScore: " + calcScore); // it works!

	// function to return correct answer string
		function correctAnswer (correctStringNo, qNumber) {
			console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).innerHTML) + "</strong>");
			}

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore('q12') === 0) {
			document.getElementById('correctAnswer12').innerHTML = correctAnswer('correctString12', 1);
		}
		if (answerScore('q22') === 0) {
			document.getElementById('correctAnswer22').innerHTML = correctAnswer('correctString22', 2);
		}
		if (answerScore('q32') === 0) {
			document.getElementById('correctAnswer32').innerHTML = correctAnswer('correctString32', 3);
		}
		if (answerScore('q42') === 0) {
			document.getElementById('correctAnswer42').innerHTML = correctAnswer('correctString42', 4);
		}
		if (answerScore('q52') === 0) {
			document.getElementById('correctAnswer52').innerHTML = correctAnswer('correctString52', 5);
		}
		if (answerScore('q62') === 0) {
			document.getElementById('correctAnswer62').innerHTML = correctAnswer('correctString62', 6);
		}
		if (answerScore('q72') === 0) {
			document.getElementById('correctAnswer72').innerHTML = correctAnswer('correctString72', 7);
		}
		if (answerScore('q82') === 0) {
			document.getElementById('correctAnswer82').innerHTML = correctAnswer('correctString82', 8);
		}
		if (answerScore('q92') === 0) {
			document.getElementById('correctAnswer92').innerHTML = correctAnswer('correctString92', 9);
		}
		if (answerScore('q102') === 0) {
			document.getElementById('correctAnswer102').innerHTML = correctAnswer('correctString102', 10);
		}
	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question2');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
//		var showScore = "Your Score: " + calcScore +"/" + questionCounter + " = " + ((calcScore/100)*100) + "%";
	// if 4/4, "perfect score!"
		if (calcScore === questionCounter) {
			var showScore = 0;
			showScore = " Perfect Score: " + ((calcScore/questionCounter)*100) + "%";
		}else{
			 showScore = "Your Score: " + calcScore +"/" + questionCounter + " = " + ((calcScore/questionCounter)*100) + "%";
		}
		document.getElementById('userScore2').innerHTML = showScore;
		document.getElementById('sv2').style.display = "block";
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});