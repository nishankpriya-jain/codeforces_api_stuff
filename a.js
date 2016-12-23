function trigger(){
	//alert("running");
  document.querySelector('#p1').onclick=run;
  
}
function run(){
	alert('run Called');
	var query=new XMLHttpRequest();
	query.open("GET","http://codeforces.com/api/problemset.problems?tags=greedy",false);
	
//	alert("something status: "+query.status+" sText: "+query.statusText); 
	alert("sending state: "+query.readyState);

	query.send(null);

//	alert("something status: "+query.status+" sText: "+query.statusText); 
	alert("receiving state: "+query.readyState);
	alert("gotcha: "+query.responseText);
	
	var received=JSON.parse(query.responseText);
	alert("received: ".received);
/*	
	var display1=document.getElementById('p2');
	p2.innerHTML=query.responseText;
	
	var display2=document.getElementById('p3');
	p3.innerHTML=received.result.problems[0].contestId;
*/	

	var forward=new XMLHttpRequest();
	forward.open("POST","b.php",false);
	
    var json_string=JSON.stringify(received);
//	var json_string="{\"result\":{\"problems\":[{\"contestId\":749,\"index\":\"A\"}]}}";
	alert("json_string: "+json_string);
	alert("forwarding state: "+forward.readyState);
	forward.send(json_string);
    alert("forwarding state: "+forward.readyState);
	
	forward.onreadystatechange=respond(forward);
	
	/*
	var hit=new XMLHttpRequest();
	hit.open("GET","http://codeforces.com/problemset/problem/749/E",false);
	
	alert("hit sending state: "+hit.readyState);
	
	hit.send(null);

	alert("something status: "+hit.status+" sText: "+hit.statusText); 
	alert("hit receiving state: "+hit.readyState);
	var display3=document.getElementById('p4');
	p4.innerHTML=hit.responseText;
	*/
  
	/* //open url on new tabs
		var hit_url_base="http://codeforces.com/problemset/problem";
		var contest_id=received.result.problems[0].contestId;
		var problem_no=received.result.problems[0].index;
		var hit_url=hit_url_base+"/"+contest_id+"/"+problem_no;
	
		//window.open(hit_url);
		//window.focus();
	*/
}

function respond(forward) {
	 	alert("here in respond state"+forward.readyState+" text= "+forward.responseText);
        if (forward.readyState == 4) {
			alert("here in respond state 4");
            p2.innerHTML = forward.responseText;
        }
}

window.onload=trigger;
