/* Author:
	Nachoooweb
*/
$(function(){
var $container=$('#container'),
	$datos=$('#datos')
	,$lista=$('#lista')
	,links
	,$cont=$('#contador')
	,players=$('#datos article'),
	$nav1=$('#nav1'),
	$nav2=$('#nav2');


var gotoplayer=function(e){
	e.preventDefault();
	var leftt=$(this).data('left'),
		topp=$(this).data('top');
	console.log(topp,leftt);
	$datos.animate({'left':-leftt,'top':-topp},1000);	
};
	

var createList=function(){
	
	$lista.empty();
	$('article').each(function(){
		var position=$(this).position(),
			$li=$('<li/>'),
			text=$(this).find('h3').text();
			
		$li.html(text)
			.data('left',position.left)
			.data('top',position.top);
		console.log('creando ','top: ',position.top,'left: ',position.left);			
		$lista.append($li);
		
	});
		
};
	
var clickAleat=function(){
	var $lis=$lista.find('li'); 
	var rand=Math.floor(Math.random()*$lis.length);
	$lis.eq(rand).click();
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

var click1=function(e){
	e.preventDefault();
	if($container.hasClass('fem')){
		$datos.load('masculino.html', function() {
			$container.addClass('invisible')
						.removeClass('fem');
			$nav2.addClass('noactivo');
			$nav1.removeClass('noactivo');
			createList();
			$container.hide()
						.removeClass('invisible')
						.fadeIn('slow');
			clickAleat();
		});
	}
};
var click2=function(e){
	e.preventDefault();
	if(!$container.hasClass('fem')){
		$datos.empty();
		$datos.load('femenino.html', function() {
			$container.addClass('invisible')
						.addClass('fem');
			$nav1.addClass('noactivo');
			$nav2.removeClass('noactivo');
			createList();
			$container.hide()
						.removeClass('invisible')
						.fadeIn('slow');
			clickAleat();			
		  
		});
	
	}
};


$lista.delegate("li","click",gotoplayer);
contador();
createList();
clickAleat();

$nav1.click(click1);	
$nav2.click(click2);	

	
});





