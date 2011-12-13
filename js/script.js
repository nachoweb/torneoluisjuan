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
						'<img src="img/{{foto}}.jpg"> {{{txt}}}' +
					'</p>'	+
			 	'</article> '+
				'{{/datos}}';

//Datos de jugadores
var masculino={
  "datos":[
	
	{"nombre" : "Carlos" ,"foto": "carlos","txt":"Cada año presenta excusas diversas para justificar su mal momento físico y deportivo. Aunque se le agradece su originalidad e inventiva, la grada empieza a cansarse de esperar al gran jugador que él dice que es. MEJOR GOLPE: volea de revés a dos manos. <span>MÁS DE LO MISMO</span>"},
	{"nombre" : "Federico" ,"foto": "federico","txt":"Jugador que poco a poco va llegando al mejor momento de su carrera deportiva. Le gusta hablar dentro de la pista (fuera también). Es el jugador más veterano del Master aunque nadie diría q tiene 64 años. Parecen 63. MEJOR GOLPE: los de agacharse en general. <span>JUGADOR MUY COMUNICATIVO</span>"},
  {"nombre" : "Antonio" ,"foto": "antonio","txt":"Este no se sabe si va o viene. Se le ve jugar mucho con 'el luisfran' y 'el guiller' , 2 conocidos padelistas de renombre en la región, pero no acaban de contagiarle su buen hacer en la pista. Le pone mucha intención y muchos gritos, pero poco padel. MEJOR GOLPE: cualquiera que tenga una apuesta por medio. <span>MUCHO RUIDO Y POCAS NUECES</span>"},
	// {"nombre" : "Carlillos" ,"foto": "carlos jr","txt":""},
	{"nombre" : "Luis Carlos" ,"foto": "luiscarlos","txt":"Se rumorea por el circuito que ha contratado a un nuevo coach para mejorar algunos aspectos de su juego con carencias, pero los que le han visto entrenar han podido constatar que no están surtiendo el efecto deseado. Ganó el Master de la pasada edición pero con mucha suerte y polémica en la final. MEJOR GOLPE: globo cortado. <span>VA DE PROFESIONAL PERO LE FALLA EL ESTILISMO</span>"},
	{"nombre" : "Dani" ,"foto": "dani","txt":"No consigue cuajar dos buenos partidos seguidos. Demasiado tierno para un circuito plagado de jugadores con mucha más experiencia que él. Se esfuerza pero en los puntos decisivos se va por la patilla. Además parece ser que la noche le tira mucho. MEJOR GOLPE: las dobles faltas. <span>NO DAMOS DOS DUROS POR ÉL</span>"},
	{"nombre" : "Belasteguin" ,"foto": "jesus","txt":"Cada año se entrena en la sombra con semiprofesionales y se prepara físicamente(hasta dice q corre medias maratones) pero cada año está más gordo y tiene menos toque. El amplio margen de mejora q se le presuponía, cada año es más amplio. MEJOR GOLPE: remate de potencia. <span>EN CAÍDA LIBRE</span>"},
	{"nombre" : "Kiko" ,"foto": "kiko","txt":"Al haber pasado más horas que el resto de jugadores en la pista ha aprendido ciertos \"trucos\" que emplea en la cancha y le dan partidos. A pesar de llevar mucho tiempo jugando no destaca por la técnica de sus golpes pero sí por la efectividad para sacar partidos. Aprende rápido los puntos débiles de los rivales.<span>EL TRUQUITO DE LA PARED</span> "},
	{"nombre" : "Makelele" ,"foto": "luis","txt":"Le pone gran interés y se preocupa mucho por su imagen dentro y fuera de la pista. Hasta ahora no ha tenido suerte con las parejas que ha tenido, que no han sabido adaptarse a su juego contundente y agresivo. Aunque por unos u otros motivos lleva 8 años malos, su mejor momento de forma tiene que estar al caer. MEJOR GOLPE: la víbora (lagarta). <span>CADA AÑO NOS SORPRENDE CON ALGO</span> "},
	{"nombre" : "Manolo" ,"foto": "manolo","txt":"Y mira que le pone interés, pero no termina de encontrar el deporte que se adapte a sus condiciones. Probó unos años con el balonmano, pero lo tuvo que dejar al poco tiempo. Algunos le aconsejaron un cambio de actitud dentro y fuera de la cancha y parece que les ha hecho caso. De momento se ha comprado una Harley y va de malote. MEJOR GOLPE: lanzamiento de cadera. <span>GANANDO MUSCULATURA POR MOMENTOS</span>"},
	{"nombre" : "Nacho" ,"foto": "nacho","txt":"En la pasada edición no se le permitió jugar por sus problemas con la justicia, que le ocasionaron tener que abandonar el país con una mano delante y otra detrás. Se ha entrenado duro y a diario en tierras neozelandesas donde el pádel es el deporte nacional, para volver con fuerza este año. Dicen los que le han visto que está en una forma física envidiable. MEJOR GOLPE: bandeja en saltillo directa a la pared. <span>EL RETORNO DEL KIWI</span>"}
	
	]

};

var femenino={	
	"datos":[
		{"nombre" : "Ana" ,"foto": "ana","txt":"El drive de la tenista madrileña lo calificaríamos como más defensivo que atacante.El ritmo de peloteo durante el punto lo mantiene casi siempre con este golpe. A diferencia del revés, la posición preferida con el drive para atacar es la derecha invertida. Con ese tipo de golpeo aprovecha para acorralar al rival en el fondo, cerrar el punto o subir a la red.<span>JUGADORA MUY PELIGROSA EN LA RED</span>"},
		{"nombre" : "Carmen" ,"foto": "carmen","txt":"El drive es el golpe preferido por Carmen para disputar los puntos. Viendola jugar, uno se da cuenta que con el drive es donde más cómoda se siente. Incluso, en muchas ocasiones, se tapa el revés para jugar con la derecha invertida y hacer ejercer más presión sobre el rival.<span>PODEROSO DRIVE</span>"},
		{"nombre" : "Celia" ,"foto": "celia","txt":"La fuerza y el peso que le imprime con su revés no es la misma que podemos ver en su drive, mucho menor en este último. Con el revés siente que dirige el juego y que maneja al rival, buscando siempre la línea de fondo y el golpe ganador. Un arma ofensiva y peligrosa.<span>REVÉS de ORO</span>"},
		{"nombre" : "Cristina" ,"foto": "cristina","txt":"Su revés a dos manos liftado le permite mantener el ritmo de peloteo durante el punto sin problemas. Pero por otro lado, hace uso de un revés cortado que le ocasiona algún que otro contratiempo durante el juego ya que permite que el rival se meta en pista y le arrincone. Abusa un poco de este tipo de golpeo. Sin embargo, al final sabe cómo sacar los partidos adelante.<span>JUGADORA MUY LUCHADORA</span>"},
		{"nombre" : "Laura" ,"foto": "laura","txt":"El saque es sin lugar a dudas, el punto más fuerte de Laura. La técnica empleada para realizar el golpe, quizás, no es la más bonita si lo comparamos con la de Prado. Sin embargo, el resultado es excepcional. Sus servicios superan los 200 km/h y han llegado a rozar los 250 km/h (249km/h en 2004).Su mecánica de golpeo podría resultar para algunos anti estética y para otros, un saque perfecto.<span>SAQUE DEMOLEDOR</span>"},
		{"nombre" : "M Rosa" ,"foto": "m rosa","txt":"La ejecución del approach de esta jugadora es la adecuada. Rosa utiliza ese golpe para una posterior finalización del punto en la red, ya sea con una volea plana, una dejada corta o cualquier golpeo similar. El approach de revés a una mano cortado y paralelo es, la mayoría de veces, el que usa.<span>REINA LA MEDIA PISTA</span>"},
		{"nombre" : "Maribel" ,"foto": "maribel","txt":"Maribel presenta un buen juego de piernas. Es rápida y tiene buenos golpes en carrera. Su situación en el fondo de la pista es la idónea aunque siempre busca jugar lo más cerca de la línea de fondo. En este apartado no hay nada que reprocharle. La única pega a todo su tenis es que con el paso de los años, su rendimiento en la pista ha ido cayendo y cada vez es una tenistas más vulnerable.<span>BUENA MOVILIDAD</span>"},
		{"nombre" : "Prado" ,"foto": "prado","txt":"La experiencia y fortaleza que atesora esta jugadora es inmensa. Lleva una década como profesional y ha pasado por todos los estados de ánimo y situaciones. Cada partido para ella significa una oportunidad para disfrutar, no un calvario. Con el paso de los años ha perdido la ambición, pero no da un partido por perdido hasta el último punto.<span>MENTALIDAD EN LOS MOMENTOS IMPORTANTES</span>"},
		{"nombre" : "Sandra" ,"foto": "sandra","txt":"Sandra hace uso de un impacto de abajo a arriba a la bola, es decir, liftado. Sin embargo, la potencia que imprime a la bola le otorga un plus de ventaja que suele ayudarle en las pistas más rápidas. De ahí explicamos sus mejores resultados en el circuito.<span>DOMINA EN PISTA RÁPIDA</span> "}
		
	]
};	





