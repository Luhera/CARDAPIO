function obterReceita(receita){
	fetch('https://api.edamam.com/api/recipes/v2?' + "type=public" + '&q=' + receita + '&app_id=89e2db89' 
	+ '&app_key=b2845d8c0787787706ecc19951a4d390' + '&ingr=1-10')
	.then((resp)=>{
		return resp.json();
	})
	.then((data)=>{
	   
		//linha1 
		$('#img1').attr("src",data.hits[0].recipe.image);
		$('#nome1').append(data.hits[0].recipe.label)
		$('#link1').attr("href",data.hits[0].recipe.url)
		
		//linha2
		$('#img2').attr("src",data.hits[1].recipe.image);
		$('#nome2').append(data.hits[1].recipe.label)
		$('#link2').attr("href",data.hits[1].recipe.url)
		
		//linha3
		$('#img3').attr("src",data.hits[2].recipe.image);
		$('#nome3').append(data.hits[2].recipe.label)
		$('#link3').attr("href",data.hits[2].recipe.url)
		
		
	   
		console.log(data)
	})
	.catch((err)=>{
		console.log(err)
	})
	
	
	
	}