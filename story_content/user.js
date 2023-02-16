function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6rQW1MEJH32":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxnjiH_1IgKRSDydu1wvBWERe-sV8WKn4OHMoCHJKYzihGU9c5O5GGL-MKDBQH_5FmM/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

