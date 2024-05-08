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
    position: [40.37145272479757, -4.080607400910739],
    popupContent: (
      <div>
        <p>Santuario Salvando Peludoso</p>
        <p>Cam. de los Quemados</p>
        <p>28610 Villamanta, Madrid</p>
        <a href="https://planetavegano.com">Visita su web</a>
      </div>
    ),
    markerType: 'organization',
  },

];

export default markerDataList;