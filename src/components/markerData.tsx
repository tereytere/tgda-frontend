export interface MarkerData {
  position: [number, number];
  popupContent: JSX.Element;
  markerType: 'store' | 'restaurant' | 'organization';
}

const markerDataList: MarkerData[] = [
  {
    position: [40.41390319007231, -3.7120237741325575],
    popupContent: (
      <div>
        <p>The Vegan Roll</p>
        <p>C/ Segovia 15</p>
        <p>28005 Madrid</p>
        <a href="https://theveganroll.com">Visita su web</a>
      </div>
    ),
    markerType: 'restaurant',
  },
  {
    position: [40.42249362855215, -3.673752314606949],
    popupContent: (
      <div>
        <p>shlen</p>
        <p>C/ Duque de Sesto 46</p>
        <p>28009 Madrid</p>
        <a href="https://shlen.es">Visita su web</a>
      </div>
    ),
    markerType: 'restaurant',
  },
  {
    position: [41.68403284260121, -0.8689172281114376],
    popupContent: (
      <div>
        <p>A Flama Madalena</p>
        <p>Calle Mayor, 53, LOCAL IZDA</p>
        <p>50001 Zaragoz</p>
        <a href="https://aflamavegana.com/">Visita su web</a>
      </div>
    ),
    markerType: 'restaurant',
  },
  {
    position: [41.647682417455634, -0.8977273577883246],
    popupContent: (
      <div>
        <p>Restaurante Baobab</p>
        <p>C. del Arzobispo Apaolaza, 10</p>
        <p>50009 Zaragoz</p>
        <a href="http://www.restaurantebaobab.com/">Visita su web</a>
      </div>
    ),
    markerType: 'restaurant',
  },
  {
    position: [40.41039560892273, -3.701071074132719],
    popupContent: (
      <div>
        <p>Planeta Vegano</p>
        <p>C/ Ave María 34</p>
        <p>28012 Madrid</p>
        <a href="https://planetavegano.com">Visita su web</a>
      </div>
    ),
    markerType: 'store',
  },
  {
    position: [41.64924956117644, -0.8969433365305406],
    popupContent: (
      <div>
        <p>De Ida y Vuelta Casa de Graneles</p>
        <p>C/ Tomás Bretón, 48</p>
        <p>50005 Zaragoza</p>
      </div>
    ),
    markerType: 'store',
  },
  {
    position: [40.37145272479757, -4.080607400910739],
    popupContent: (
      <div>
        <p>Santuario Salvando Peludoso</p>
        <p>Cam. de los Quemados</p>
        <p>28610 Villamanta, Madrid</p>
        <a href="http://www.salvandopeludos.org/">Visita su web</a>
      </div>
    ),
    markerType: 'organization',
  },
  {
    position: [40.353611270005594, -3.765262887300183],
    popupContent: (
      <div>
        <p>Asociación Protectora De Animales Zarpas Y Colmillos</p>
        <p>C. Batalla de Lepanto, 12</p>
        <p>28912 Leganés, Madrid</p>
        <a href="http://zarpasycolmillos.es/">Visita su web</a>
      </div>
    ),
    markerType: 'organization',
  },
  {
    position: [40.58073976209921, -4.497004831798348],
    popupContent: (
      <div>
        <p>Santuario Winston, hogar de caballos libres</p>
        <p>Carretera AV-P 307 Km. 1,5</p>
        <p>05294 La Cañada, Ávila</p>
        <a href="https://santuariowinston.org/">Visita su web</a>
      </div>
    ),
    markerType: 'organization',
  },
  {
    position: [41.65316858343651, -0.8846291886726363],
    popupContent: (
      <div>
        <p>Zarpa Protección Animal</p>
        <p>C. de Cristóbal Colón, 6, 8</p>
        <p>50007 Zaragoza</p>
        <a href="http://zarpa.org/">Visita su web</a>
      </div>
    ),
    markerType: 'organization',
  },


];

export default markerDataList;