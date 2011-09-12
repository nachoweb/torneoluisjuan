/* Author:
	Nachoooweb
*/
$(function(){
var $datos=$('#datos')
	,$lista=$('#lista')
	,links
	,$cont=$('#contador')
	,players=$('#datos article');

var createList=function(){
	
	$('article').each(function(){
		var position=$(this).position(),
			$li=$('<li/>'),
			text=$(this).find('h3').text();
			
		$li.html(text)
			.data('left',position.left)
			.data('top',position.top);		
		$lista.append($li);
	});	
};	



var gotoplayer=function(e){
	e.preventDefault();
	var leftt=$(this).data('left'),
		topp=$(this).data('top');
	console.log(topp,leftt);
	$datos.animate({'left':-leftt,'top':-topp},1000);	
};
	
	
var contador=function(){
	var target=new Date('12/20/2011 19:00:00'),
	 	now=new Date(),
	 	diff=target.getTime()-now.getTime(),
		segundos,minutos,horas,dias,html;
	segundos= (diff < 0 ) ? 0 : Math.ceil(diff/1000) ;
	minutos= Math.floor(segundos/60);
	horas=Math.floor(minutos/60);
	dias=Math.floor(horas/24);
	html='<span>'+dias+'</span> Dias' +
		  '<span>'+horas+'</span>Horas'+
		  '<span>'+minutos+'</span>Minutos'+
		  '<span>'+segundos+'</span>Segundos';
	$cont.html(html);
	
	setTimeout(contador,1000);
};	

createList();
$lista.delegate("li","click",gotoplayer);
contador();
	
	
});





