var mudafam = document.getElementsByTagName('p');/*'p' 'h1' 'h2'*/

var i;

function mudaFamilia(){
	for (i =0; i <mudafam.length;i++)  {
	mudafam[i].style.fontFamily='Serif';
	}
}

	function adicionaID(){
		document.getElementsByTagName('div')[1].id = 'divyellow';
		
	}

	function removeID(){
		document.getElementsByTagName('div')[1].id = '';
		
	}

	function retornaFamilia(){
		document.getElementsByTagName('p')[1].style.fontFamily = '';
		
	}



	function testeID(){

		mudacor = document.getElementsByTagName('div');
		if (mudacor[1].id=='divyellow') {
			mudacor[1].id='divgreen';
			mudacor[1].style.color='green';
			/*mudafam[0].id='';*/

		}

		/*		if (mudafam[0].id=='divyellow') {
			mudafam[0].style.color='divgreen';
			mudafam[0].id='';

		}*/
		
	}

/*

function mudaFamilia ()
{
	document.getElementById('titulo').style.fontFamily='Serif';
	document.getElementsByClassName('mudamais')[].style.fontFamily='Serif';
por classe, [] para indexar 0..(prim).1..(segun).2..(terc)
	document.getElementsByTagName('p')[0].style.fontFamily='Serif';

	
}

{
	document.getElementsByTagName('p')[].style.fontFamily='Serif';
	
}
*/