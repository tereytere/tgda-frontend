import React from "react";
import Map from "../components/Map";
import CustomButton from "../components/CustomButton";

const Home: React.FC = () => {
	return (
		<>
			<div className="content">
				<h1>Tu Granito de Arena</h1>
				<p>
					En un mundo donde cada acción cuenta, tú también puedes ser parte del
					cambio. Tu Granito de Arena es un espacio dedicado a ofrecerte
					recursos prácticos y accesibles para vivir de manera más sostenible,
					respetuosa con el planeta y sus habitantes. Desde recetas veganas,
					trucos para reducir residuos, hasta documentales, libros y consejos
					sobre cosmética natural y moda ética, aquí encontrarás todo lo que
					necesitas para empezar a dejar una huella positiva.
				</p>
				<p>
					Nuestro objetivo es simple: ayudarte a tomar decisiones conscientes
					que no solo mejoren tu vida, sino que también contribuyan al bienestar
					del mundo que nos rodea. Cada pequeño gesto suma, podemos hacer la
					diferencia. Explora, aprende y comienza hoy mismo a aportar tu
					granito de arena para construir un futuro más verde y justo.
				</p>
				<div className="dirbuttons">
					<CustomButton text="Temas" url="/temas/" />
					<CustomButton text="Autores" url="/autores/" />
					<CustomButton text="Posts" url="/posts/" />
				</div>
				<Map />
			</div>
		</>
	);
};

export default Home;
