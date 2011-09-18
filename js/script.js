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
	$nav2=$('#nav2'),
	pag={masculino:1,femenino:0};

var toPage=function(pagina){
		
	switch(pagina){
		case 'masculino':
			pag.masculino=1;pag.femenino=0;
			$nav1.removeClass('noactivo');
			$nav2.addClass('noactivo');
			$container.removeClass('fem');
			break;
		case 'femenino'	:
			pag.masculino=0;pag.femenino=1;
			$nav1.addClass('noactivo');
			$nav2.removeClass('noactivo');
			$container.addClass('fem');
			break;		
		
	}
	
	createList();clickAleat();
	
};

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
	if(!pag.masculino){
		$container.fadeOut('slow',function(){
			$datos.empty().html(Mustache.to_html(template,masculino));
		});
		$container.fadeIn('slow',function(){
					toPage("masculino");	
		});
	}
};
var click2=function(e){
	e.preventDefault();
	if(!pag.femenino){
		
		$container.fadeOut('slow',function(){
			$datos.empty().html(Mustache.to_html(template,femenino));
		});
		$container.fadeIn('slow',function(){
						toPage("femenino");
		});
		
	}
};


$lista.delegate("li","click",gotoplayer);
contador();
$datos.empty().html(Mustache.to_html(template,masculino));
createList();
clickAleat();

$nav1.click(click1);	
$nav2.click(click2);	

	
});

//Templateeee
var template='{{#datos}}'+				
				'<article>'+			
					'<h3>{{nombre}}</h3>'	+
					'<p>'+
						'<img src="img/{{foto}}.jpg"> {{txt}}' +
					'</p>'	+
			 	'</article> '+
				'{{/datos}}';

//Datos de jugadores
var masculino={
	"datos":[
	
	{"nombre" : "Carlos" ,"foto": "carlos","txt":""},
	{"nombre" : "Federico" ,"foto": "federico","txt":""},
	{"nombre" : "Antonio" ,"foto": "antonio","txt":""},
	{"nombre" : "Carlillos" ,"foto": "carlos jr","txt":""},
	{"nombre" : "Luis Carlos" ,"foto": "luiscarlos","txt":""},
	{"nombre" : "Dani" ,"foto": "dani","txt":""},
	{"nombre" : "Belasteguin" ,"foto": "jesus","txt":""},
	{"nombre" : "Kiko" ,"foto": "kiko","txt":""},
	{"nombre" : "Makelele" ,"foto": "luis","txt":""},
	{"nombre" : "Manolo" ,"foto": "manolo","txt":""},
	{"nombre" : "Nacho" ,"foto": "nacho","txt":""}
	
	]
};

var femenino={	
	"datos":[
		{"nombre" : "Ana" ,"foto": "ana","txt":""},
		{"nombre" : "Carmen" ,"foto": "carmen","txt":""},
		{"nombre" : "Celia" ,"foto": "celia","txt":""},
		{"nombre" : "Cristina" ,"foto": "cristina","txt":""},
		{"nombre" : "Laura" ,"foto": "laura","txt":""},
		{"nombre" : "M Rosa" ,"foto": "m rosa","txt":""},
		{"nombre" : "Maribel" ,"foto": "maribel","txt":""},
		{"nombre" : "Prado" ,"foto": "prado","txt":""},
		{"nombre" : "Sandra" ,"foto": "sandra","txt":""}
		
	]
};	





