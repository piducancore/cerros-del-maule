import React from "react"
import { Scrollama, Step } from "react-scrollama"
import { FlyToInterpolator } from "react-map-gl"
import { easeCubic } from "d3-ease"

import Layout from "../components/layout"
import useStore from "../components/viewport"

const chapters = [
  {
    name: "Volcán Salín (6029 m)",
    hill_id: "867",
    publish_date: "2018-02-15 08:01:23",
    country_1: "Chile",
    region_1: "Región de Antofagasta",
    country_2: "Argentina",
    region_2: "Provincia de Salta",
    height_1: 6029,
    latitude: -24.32848430626654,
    longitude: -68.0672550201416,
    publish: "1",
    id: "867",
    first_name: "Luis Ignacio",
    last_name: "Salazar Vargas",
    images: [
      "https://www.andeshandbook.org/media/route_gallery/thumb600x400/1518694820877479001.jpg",
    ],
    html:
      '\n\t\t\t\t\t\t<h5 class="text-uppercase">Presentación</h5>\n\t\t\t\t\t\t<p></p><p>El volcán Salín es una de esas montañas “olvidadas” de nuestra cordillera; tal es su situación que probablemente al día de hoy aún no llega a la decena de ascensos deportivos. Al contrario de lo que ocurre en la actualidad, durante la época incaica tuvo un prestigio mayor siendo considerado uno de los mayores adoratorios de altura de la zona. A pesar de estos datos el origen de su nombre nos remite a una historia más antigua. La etimología del Salín,&nbsp;al igual que muchas cumbres del altiplano,&nbsp;proviene de la lengua kunza y se traduciría al castellano&nbsp;como “hermano”; mostrándonos que esta montaña ya era conocida previamente a la llegada de la cultura inca a la zona.</p>\n<p>&nbsp;&nbsp;</p>\n<p>La primera ascensión a esta montaña fue concretada por Sergio Bossini y Carlos Mas del Club Andino Tucumán el 5 de octubre de 1960 a través de la larga ruta Sureste que se inicia en la antigua estación ferroviaria Vega de Arizaro.&nbsp;En el informe de estos montañistas se lee: <em>“La conquista de la cumbre se hizo a las 3 de la tarde. Allí encontramos una apacheta de forma de paralelepípedo de 0,60 de lado, por 0,70 de altura, pero no encontramos testimonios de ascensiones anteriores..."</em> Este detalle es muy sugestivo, pues se suponía que dicho cerro se conservaba virgen todavía.</p>\n<p><br>La segunda ascensión&nbsp;fue realizada recién después de&nbsp;32 años por los salteños Alejandro Giménez Gambetta y Alberto Pastrana del Club de Montaña Janajman el 25 de marzo de 1992. No encontraron los testimonios lo cual puso en duda a la primera ascensión, no obstante, en aquella oportunidad Alejandro Jiménez me facilitó una fotografía de la cumbre donde se aprecia el mojón o plataforma de la cima, que coincidía con la descripción de Bossini y Mas.</p>\n<p>&nbsp;</p>\n<p>La tercera ascensión fue realizada 15 años después de la segunda por Christian Vitry y Darío Bracali el 3 de noviembre de 2007. Del informe de aquella expedición extracto la siguiente cita: <em>"La estructura de la cima es arqueológica, comprobación que se puede hacer por la técnica constructiva y debido a la presencia de una “Huanca” o piedra alargada... Se trata de una construcción bastante común en los adoratorios incas de nuestros Andes. Localizamos una lata oxidada en un costado de la plataforma de roca, la misma tenía varias horadaciones causadas por las descargas eléctricas. Lo primero que pensé es que se trataba de los testimonios de la primera ascensión, pocas dudas quedaban al respecto..."</em></p>\n<p>&nbsp;</p>\n<p>Con el paso de los años se abre una nueva ruta desde el Norte, a través de Chile, la que permite realizar la aproximación hasta la base de la montaña en un vehículo 4x4 y que también permitiría realizar una ruta al vecino <a href="http://www.andeshandbook.org/montanismo/cerro/97/Pular" target="_blank">volcán Pular</a>. A pesar de esta nueva posibilidad, la montaña se sigue manteniendo oculta para la mayoría de los montañistas, probablemente debido a la lejanía con los poblados de la zona, lo que implica un largo viaje por una zona prácticamente desolada además de la imposibilidad de encontrar agua y otros recursos en el camino.&nbsp;</p>\n<p>&nbsp;</p>\n<p><strong>Referencias</strong></p>\n<p>&nbsp;</p>\n<ul>\n<li>Vitry, Christian. <em><a href="http://www.culturademontania.com.ar/Arqueologia/montanas-argentinas-volcan-salin.html" target="_blank">Guía de Montañas Argentinas: Volcán Salín</a>. </em>Centro Cultural Argentino de Montaña.</li>\n<li>Moyano, Ricado y Uribe, Carlos. <a href="http://www.scielo.cl/scielo.php?script=sci_arttext&amp;pid=S0718-10432012000100010" target="_blank">El volcán Chiliques y el "morar-en-el-mundo" de una comunidad atacameña del norte de Chile</a>. Estudios Atacameños N°43, San Pedro de Atacama, 2012.</li>\n</ul><p></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="clearfix"></div>\n\t\t\t\t\t',
  },
  {
    name: "Volcán Pili (6046 m)",
    hill_id: "435",
    publish_date: "2009-06-17 00:00:00",
    country_1: "Chile",
    region_1: "Región de Antofagasta",
    country_2: "",
    region_2: "",
    height_1: 6046,
    latitude: -23.292761964018748,
    longitude: -67.61775789947512,
    publish: "1",
    id: "435",
    first_name: "Eduardo",
    last_name: "Atalah",
    images: [
      "https://www.andeshandbook.org/media/route_gallery/thumb600x400/1504404942653145046.jpg",
      "https://www.andeshandbook.org/media/route_gallery/thumb600x400/1504480150360220505.jpg",
    ],
    html:
      '\n\t\t\t\t\t\t<h5 class="text-uppercase">Presentación</h5>\n\t\t\t\t\t\t<p></p><p><br>El volcán Pili alza sus imponentes 6046m de altitud a unos 80km al sureste de San Pedro de Atacama, coronando con prestancia el no menos bello salar de Pujsa. Su estructura, enclavada íntegramente en territorio chileno, corresponde a la de un estratovolcán <span style="font-size: xx-small;"><strong>(1)</strong></span> y a diferencia de su vecino el <a href="http://www.andeshandbook.org/montanismo/cerro/92/Lascar" target="_blank">Láscar</a>, no evidencia actividad volcánica reciente. Su nombre ancestral es el de Acamarachi, una voz aimara que se traduce como Caracol de Piedra y que se explicaría por las dos puntas que se levantan a cada extremo del cráter.<br> <br>La voz Pili por su parte, corresponde a una expresión que tanto en quechua como en aimara significa pato, y fuera de constituir la denominación actualmente más utilizada para el volcán, lo es también de la quebrada que se extiende hacia el sureste del macizo y que encausa el río del mismo nombre hasta el salar de Aguas Calientes. La exuberante avifauna que anida en el salar de Pujsa, protegido dentro de los márgenes de la Reserva Nacional Los Flamencos, incluye varias especies de la familia anatidae <span style="font-size: xx-small;"><strong>(2)</strong></span>, como el pato juarjual, el pato jergón o la guallata, lo que podría explicar en parte el origen de la designación del volcán.<br> <br>El primer ascenso deportivo al volcán tuvo lugar el 19 de febrero de 1939, como resultado de la expedición italiana que el conde Bonacossa organizó a la Puna de Atacama y que condujo al propio Aldo Bonacossa y a Remigio Gerard a la cumbre del Pili.<br> <br>Al observar su majestuosa figura, se comprende por qué hace 500 años los incas convirtieron el Acamarachi en uno de sus santuarios de altura y escenario de sus ceremonias sagradas, tal como pudo confirmarse en octubre de 1971, cuando Pedro Rosende y Sergio Kunstmann descubrieron un altar inca en la cumbre del volcán.<br> <br>Con las certezas que le brindó el hallazgo, Kunstmann organizó un equipo integrado por siete escaladores, tres porteadores y dos arrieros, con el que el 26 de noviembre de 1972 regresó a la cima del Pili, instalando un campamento en las inmediaciones del cráter con la finalidad de realizar nuevas exploraciones arqueológicas. Luego de varios días cavando, el grupo descendió con una estatuilla de oro y otra de plata, textiles, plumas, ornamentos, mechones de pelo humano, leña y hasta mariposas, piezas que fueron entregadas al padre Gustavo Le Paige para su conservación en el Museo Arqueológico de San Pedro de Atacama, fundado y, en ese entonces, aún dirigido por el religioso.<br> <br>El salar de Pujsa, en tanto, no se queda atrás en historia y leyendas, una de las cuales versa que existe un pueblo enterrado bajo sus cristales de sal y sedimentos, como consecuencia de la maldad de su gente.<br> <br>Otra de las leyendas, se refiere a la peculiar perdiz cordillerana que abunda en las inmediaciones del salar, que vuela corto y se mimetiza con el entorno, porque la infeliz Chuquipacsi, “Luna de Oro”, desposó a un Mallcu, “Príncipe”, con el que constituyó un matrimonio muy feliz que hubiera continuado así, de no mediar el duro trato que Sunisuni, la suegra, daba a la primera. Un día, antes de que volviera el príncipe, Sunisuni expulsó injustamente a la muchacha de su casa. Llorando, Chuquipacsi comenzó su camino solitario. Al llegar el príncipe a casa, Sunisuni, angustiada, se dio cuenta de que había cometido una inequidad. Madre e hijo salieron a buscar a la joven y vieron que corría y tropezaba y que después de cada caída, se levantaba transformada. Sus manos iban convirtiéndose en alas, mientras plumas le nacían en el cuerpo, el que disminuyó hasta transformarse en una avecilla gris que, en el horizonte, volando, se perdió.<br> <br>Quien quiera descubrir y protagonizar este mundo de realidades y leyendas entrelazadas, como antaño lo hiciera el Inca, invitado queda a contemplar desde las alturas del Acamarachi, el amplio horizonte desértico flanqueado por el <a href="http://www.andeshandbook.org/montanismo/cerro/76/Licancabur" target="_blank">Licancabur</a> hacia el norte, el cerro Meñiques y la misteriosa...</p>\n<p>&nbsp;</p>\n<p><strong>Referencia</strong></p>\n<p>&nbsp;</p>\n<ul>\n<li><em>Montañismo Andino</em>. <a href="http://www.andeshandbook.org/media/documents/Andina_93__1973_Sep.pdf" target="_blank">Revista Andina N°93</a>, 1973, Club Andino de Chile (pág. 23).</li>\n<li>Kunstmann, Sergio. <em>Los Primeros Alpinistas fueron Andinistas</em>.<em><a href="http://www.andeshandbook.org/media/documents/5_Volcan_Pili_o_Acamarachi.pdf" target="_blank"> Capítulo 5- Volcán Pili o Acamarachi</a></em>. Obra inédita.</li>\n</ul><p></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="clearfix"></div>\n\t\t\t\t\t',
  },
  {
    name: "Volcán Socompa (6051 m)",
    hill_id: "866",
    publish_date: "2017-02-22 07:19:14",
    country_1: "Chile",
    region_1: "Región de Antofagasta",
    country_2: "Argentina",
    region_2: "Provincia de Salta",
    height_1: 6051,
    latitude: -24.3958408228177,
    longitude: -68.24583381414413,
    publish: "1",
    id: "866",
    first_name: "Luis Ignacio",
    last_name: "Salazar Vargas",
    images: [
      "https://www.andeshandbook.org/media/route_gallery/thumb600x400/14867300181226777603.PNG",
      "https://www.andeshandbook.org/media/route_gallery/thumb600x400/14877742321414463304.JPG",
    ],
    html:
      '\n\t\t\t\t\t\t<h5 class="text-uppercase">Presentación</h5>\n\t\t\t\t\t\t<p></p><p>El volcán Socompa es un estratovolcán localizado en el límite de la Región de Antofagasta, Chile, y la Provincia de Salta, Argentina, en la meseta altiplánica conocida como Puna de Atacama. Inmediatamente al sur se encuentra el paso de montaña homónimo, dando origen a un poco transitado paso internacional, motivo por el cual&nbsp;se emplazan de&nbsp;forma permanente destacamentos de Gendarmertía Nacional Argentina y Carabineros de Chile a cada uno de los lados de la frontera. En las proximidades del volcán también son visibles los&nbsp;vestigios de una antigua estación ferroviaria, actualmente abandonada, propiedad del antiguo ferrocarril que hace algunos años conectaba&nbsp;la ciudad de Salta, Argentina, con el puerto de Antofagasta en Chile.</p>\n<p>&nbsp;</p>\n<p>El origen del topónimo Socompa es desconocido. Se deduce que probablemente tenga origen kunza (atacameño) debido a que esta, además de ser la lengua originaria de la región previo a la dominación incaica, es la que mayor presencia tiene entre las montañas de la zona (Arizaro, Aracar, Antofalla, <a href="http://www.andeshandbook.org/montanismo/cerro/76/Licancabur" target="_blank">Licancabur</a> entre otras). Algunas de las significados que se le han atribuido al volcán van desde “terreno verde deleznable”, hasta “cabeza protegida”, “cuello largo” y “tierra que se estremece con el trueno”. Adicionalmente se han descubierto registros del siglo XVIII y XIX de lugareños, identificados como&nbsp;atacameños, con el apellido Socompa; lo que reafirmaría la teoría del origen kunza de este nombre.<br>&nbsp;</p>\n<p>Tal como ocurre en la mayoría de las montañas de la zona, los primeros&nbsp;ascensos fueron realizados por los incas. Si bien no existen testimonios que corroboren que estos&nbsp;alcanzaran la&nbsp;cumbre, se han descubierto&nbsp;restos arqueológicos en distintos lugares del volcán y muy cerca de la cima;&nbsp;lo que hace presumir que esta montaña fue frecuentemente visitada por los incas en sus rituales sagrados.</p>\n<p>&nbsp;</p>\n<p>El primer ascenso deportivo fue realizado por Federico Reichert el 5 de mayo de 1905. Esta ascensción fue realizada a través de la cara&nbsp;Este, accediendo desde quebrada del Agua por la vertiente argentina del cerro. Anecdoticámente vale la pena mencionar que esta montaña se convertiría el primer seismil ascendido por el alemán. La historia posterior del germano es conocida y lo llevó, por mas de 40 años, a ascender y explorar extensamente la cordillera de los Andes, marcando un precedente en la historia de montaña andina.&nbsp;La ruta Este no ha vuelto a ser utilizada en desmedro de la que es conocida actualmente como "normal"; que transcurre inicialmente por la cara sur para conectar luego con el filo suroeste de la montaña y que es posible de alcanzar desde el paso internacional. Desde la&nbsp;cara Norte y Oeste de la montaña no existen ascensos registrados debido a la presencia de campos minados, lo que impidió por largos años el acceso a esta vertiente; actualmente en proceso de recuperación.&nbsp;</p>\n<p>&nbsp;</p>\n<p>Desde el punto de vista científico el Socompa ha servido de ejemplo para el estudio geológico del desmoronamiento y colapso de volcanes. Investigaciones recientes han revelado que probablemente en sus inicios el Socompa fue mas alto de lo que hoy en día se conoce, alcanzándo&nbsp;una altura de 6300m aproximadamente, antes de que una serie de sucesos desencadenara el desplome del 70% del perímetro de su cúpula.&nbsp;Se calcula que&nbsp;hace aproximadamente de 7500 años atrás (~5250 AC)&nbsp;un terremoto de alta intensidad,&nbsp;sumado a la acumulación magma reciente en el zócalo; generó la erupción y posterior colapso de la pared noroeste del macizo; provocando una avalancha que se extendió a&nbsp;mas de 40km de distancia&nbsp;y que abarcó&nbsp;una superficie de casi 600km²; siendo considerado uno de los depósitos volcánicos más extensos del mundo hasta ahora descubiertos.</p>\n<p>&nbsp;</p>\n<p>Mas allá de los muchos atributos que hacen a este volcán especial desde el punto de vista arqueológico, geológico o&nbsp;montañistico; el Socompa registra escasas visitas, principalmente debido a su localización&nbsp;geográfica inhóspita, la que obliga a realizar una travesía que implica largas jornadas de conducción&nbsp;para llegar a su base. Otro motivo que explica sus pocas visitas, es que histórciamente se ha visto opacado por su vecino lejano, el imponente <a href="http://www.andeshandbook.org/montanismo/cerro/43/Llullaillaco" target="_blank">Llullaillaco</a>.</p>\n<p>&nbsp;</p>\n<p><strong>Referencias&nbsp;</strong></p>\n<p>&nbsp;</p>\n<ul>\n<li>Guías de Montañas Argentinas.&nbsp;<a href="http://www.culturademontania.com.ar/Arqueologia/montanas-argentinas-volcan-socompa.html" target="_blank">Volcán Socompa</a>. Centro Cultural Aregentino de Montaña.</li>\n</ul>\n<ul>\n<li><a href="&nbsp;http://volcano.si.edu/volcano.cfm?vn=355109&nbsp;" target="_blank"><em>Global Volcanism Program</em></a>. Smithsonian Institution.</li>\n<li>Francis, Peter y Self, Stephen<em>.&nbsp;<a href="http://www.redes-cepalcala.org/ciencias1/geologia/vulcanologia/volcan_socompa.htm" target="_blank">Collapsing Volcanoes</a></em>. &nbsp;Scientific American, Junio de 1987.&nbsp;</li>\n<li>Rover, Horacio.<em>&nbsp;<a href="http://culturademontania.com.ar/Historia/HIS_otra_cara_socompa_salta_febrero_1986.htm" target="_blank">La Otra Cara del Socompa</a></em>.&nbsp;Revista "Weekend" Nº 161, Febrero 1986.&nbsp;Archivo de la Biblioteca del CCAM</li>\n<li><a href="http://www.andeshandbook.org/media/documents/Federico_Reichert.pdf" target="_blank">Federico Reichert. Padre del Montañismo Argentino.</a>&nbsp;Fundación Parques Nacionales, 2010.</li>\n</ul><p></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="clearfix"></div>\n\t\t\t\t\t',
  },
]
export default function Home() {
  const { setViewport } = useStore()
  const handleStepEnter = ({ data }) => {
    setViewport({
      ...data,
      zoom: 8,
      pitch: 0,
      bearing: 0,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic,
    })
  }
  return (
    <Layout>
      <Scrollama offset={0.5} onStepEnter={handleStepEnter}>
        {chapters.slice(-3).map((chapter, index) => (
          <Step key={index} data={chapter}>
            <div
              style={{
                position: "relative",
                paddingTop: index > 0 ? null : "180vh",
                marginBottom: "180vh",
                maxWidth: "480px",
              }}
            >
              {/* <pre>{JSON.stringify(chapter, null, 2)}</pre> */}
              <div
                style={{
                  padding: 8,
                  margin: 8,
                  background: "rgba(0,0,0,0.8)",
                  color: "#fff",
                }}
              >
                <h1>{chapter.name}</h1>
                <img
                  src={chapter.images[0]}
                  alt={chapter.name}
                  style={{ width: "100%" }}
                />
                <div dangerouslySetInnerHTML={{ __html: chapter.html }} />
              </div>
            </div>
          </Step>
        ))}
      </Scrollama>
    </Layout>
  )
}
