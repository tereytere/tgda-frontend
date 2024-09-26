import React from "react";
import {
	FormContainer,
	FormGroup,
	Label,
	Input,
	Select,
	TextArea,
  Button,
  StyledH4
} from "../styledComponents/HelpStyles";

const Form: React.FC = () => {
	return (
		<FormContainer>
			<div>
				<div>
					<StyledH4>Información General</StyledH4>
					<div>
						<FormGroup>
							<Label htmlFor="name">Nombre</Label>
							<Input type="text" name="name" id="name" autoComplete="name" />
						</FormGroup>

						<FormGroup>
							<Label htmlFor="type">Tipo de Negocio</Label>
							<Input type="text" name="type" id="type" autoComplete="type" />
						</FormGroup>

						<FormGroup>
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								name="email"
								id="email"
								autoComplete="email"
							/>
						</FormGroup>

						<FormGroup>
							<Label htmlFor="country">País</Label>
							<Select id="country" name="country" autoComplete="country-name">
								<option>Selecciona uno</option>
								<option>Afganistán</option>
								<option>Albania</option>
								<option>Alemania</option>
								<option>Andorra</option>
								<option>Angola</option>
								<option>Antigua y Barbuda</option>
								<option>Arabia Saudita</option>
								<option>Argelia</option>
								<option>Argentina</option>
								<option>Armenia</option>
								<option>Australia</option>
								<option>Austria</option>
								<option>Azerbaiyán</option>
								<option>Bahamas</option>
								<option>Bangladés</option>
								<option>Barbados</option>
								<option>Baréin</option>
								<option>Bélgica</option>
								<option>Belice</option>
								<option>Benín</option>
								<option>Bielorrusia</option>
								<option>Birmania (Myanmar)</option>
								<option>Bolivia</option>
								<option>Bosnia y Herzegovina</option>
								<option>Botsuana</option>
								<option>Brasil</option>
								<option>Brunei</option>
								<option>Bulgaria</option>
								<option>Burkina Faso</option>
								<option>Burundi</option>
								<option>Bután</option>
								<option>Cabo Verde</option>
								<option>Camboya</option>
								<option>Camerún</option>
								<option>Canadá</option>
								<option>Catar</option>
								<option>Chad</option>
								<option>Chile</option>
								<option>China</option>
								<option>Chipre</option>
								<option>Ciudad del Vaticano</option>
								<option>Colombia</option>
								<option>Comoras</option>
								<option>Corea del Norte</option>
								<option>Corea del Sur</option>
								<option>Costa de Marfil</option>
								<option>Costa Rica</option>
								<option>Croacia</option>
								<option>Cuba</option>
								<option>Dinamarca</option>
								<option>Dominica</option>
								<option>Ecuador</option>
								<option>Egipto</option>
								<option>El Salvador</option>
								<option>Emiratos Árabes Unidos</option>
								<option>Eritrea</option>
								<option>Eslovaquia</option>
								<option>Eslovenia</option>
								<option>España</option>
								<option>Estados Unidos</option>
								<option>Estonia</option>
								<option>Esuatini (Suazilandia)</option>
								<option>Etiopía</option>
								<option>Filipinas</option>
								<option>Finlandia</option>
								<option>Fiyi</option>
								<option>Francia</option>
								<option>Gabón</option>
								<option>Gambia</option>
								<option>Georgia</option>
								<option>Ghana</option>
								<option>Granada</option>
								<option>Grecia</option>
								<option>Guatemala</option>
								<option>Guinea</option>
								<option>Guinea Ecuatorial</option>
								<option>Guinea-Bisáu</option>
								<option>Guyana</option>
								<option>Haití</option>
								<option>Honduras</option>
								<option>Hungría</option>
								<option>India</option>
								<option>Indonesia</option>
								<option>Irak</option>
								<option>Irán</option>
								<option>Irlanda</option>
								<option>Islandia</option>
								<option>Islas Marshall</option>
								<option>Islas Salomón</option>
								<option>Italia</option>
								<option>Jamaica</option>
								<option>Japón</option>
								<option>Jordania</option>
								<option>Kazajistán</option>
								<option>Kenia</option>
								<option>Kirguistán</option>
								<option>Kiribati</option>
								<option>Kosovo</option>
								<option>Kuwait</option>
								<option>Laos</option>
								<option>Lesoto</option>
								<option>Letonia</option>
								<option>Líbano</option>
								<option>Liberia</option>
								<option>Libia</option>
								<option>Liechtenstein</option>
								<option>Lituania</option>
								<option>Luxemburgo</option>
								<option>Macedonia del Norte</option>
								<option>Madagascar</option>
								<option>Malasia</option>
								<option>Malaui</option>
								<option>Maldivas</option>
								<option>Malí</option>
								<option>Malta</option>
								<option>Marruecos</option>
								<option>Mauricio</option>
								<option>Mauritania</option>
								<option>México</option>
								<option>Micronesia</option>
								<option>Moldavia</option>
								<option>Mónaco</option>
								<option>Mongolia</option>
								<option>Montenegro</option>
								<option>Mozambique</option>
								<option>Namibia</option>
								<option>Nauru</option>
								<option>Nepal</option>
								<option>Nicaragua</option>
								<option>Níger</option>
								<option>Nigeria</option>
								<option>Noruega</option>
								<option>Nueva Zelanda</option>
								<option>Omán</option>
								<option>Países Bajos</option>
								<option>Pakistán</option>
								<option>Palaos</option>
								<option>Palestina</option>
								<option>Panamá</option>
								<option>Papúa Nueva Guinea</option>
								<option>Paraguay</option>
								<option>Perú</option>
								<option>Polonia</option>
								<option>Portugal</option>
								<option>Reino Unido</option>
								<option>República Centroafricana</option>
								<option>República Checa</option>
								<option>República del Congo</option>
								<option>República Democrática del Congo</option>
								<option>República Dominicana</option>
								<option>Ruanda</option>
								<option>Rumanía</option>
								<option>Rusia</option>
								<option>Samoa</option>
								<option>San Cristóbal y Nieves</option>
								<option>San Marino</option>
								<option>San Vicente y las Granadinas</option>
								<option>Santa Lucía</option>
								<option>Santo Tomé y Príncipe</option>
								<option>Senegal</option>
								<option>Serbia</option>
								<option>Seychelles</option>
								<option>Sierra Leona</option>
								<option>Singapur</option>
								<option>Siria</option>
								<option>Somalia</option>
								<option>Sri Lanka</option>
								<option>Sudáfrica</option>
								<option>Sudán</option>
								<option>Sudán del Sur</option>
								<option>Suecia</option>
								<option>Suiza</option>
								<option>Surinam</option>
								<option>Tailandia</option>
								<option>Tanzania</option>
								<option>Tayikistán</option>
								<option>Timor Oriental</option>
								<option>Togo</option>
								<option>Tonga</option>
								<option>Trinidad y Tobago</option>
								<option>Túnez</option>
								<option>Turkmenistán</option>
								<option>Turquía</option>
								<option>Tuvalu</option>
								<option>Ucrania</option>
								<option>Uganda</option>
								<option>Uruguay</option>
								<option>Uzbekistán</option>
								<option>Vanuatu</option>
								<option>Venezuela</option>
								<option>Vietnam</option>
								<option>Yemen</option>
								<option>Yibuti</option>
								<option>Zambia</option>
								<option>Zimbabue</option>
								<option>Mundo</option>
							</Select>
						</FormGroup>

						<FormGroup>
							<Label htmlFor="street-address">Dirección</Label>
							<Input
								type="text"
								name="street-address"
								id="street-address"
								autoComplete="street-address"
							/>
						</FormGroup>

						<FormGroup>
							<Label htmlFor="city">Ciudad</Label>
							<Input
								type="text"
								name="city"
								id="city"
								autoComplete="address-level2"
							/>
						</FormGroup>

						<FormGroup>
							<Label htmlFor="region">Provincia / Estado</Label>
							<Input
								type="text"
								name="region"
								id="region"
								autoComplete="address-level1"
							/>
						</FormGroup>

						<FormGroup>
							<Label htmlFor="postal-code">Código Postal</Label>
							<Input
								type="text"
								name="postal-code"
								id="postal-code"
								autoComplete="postal-code"
							/>
						</FormGroup>
					</div>
				</div>
				<div>
					<StyledH4>Redes Sociales</StyledH4>
					<FormGroup>
						<Label htmlFor="instagram">Instagram</Label>
						<Input
							type="text"
							name="instagram"
							id="instagram"
							autoComplete="instagram"
						/>
					</FormGroup>
					<FormGroup>
						<Label htmlFor="youtube">YouTube</Label>
						<Input
							type="text"
							name="youtube"
							id="youtube"
							autoComplete="youtube"
						/>
					</FormGroup>
					<FormGroup>
						<Label htmlFor="podcast">Podcast</Label>
						<Input
							type="text"
							name="podcast"
							id="podcast"
							autoComplete="podcast"
						/>
					</FormGroup>
					<FormGroup>
						<Label htmlFor="webpage">Página Web</Label>
						<Input
							type="text"
							name="webpage"
							id="webpage"
							autoComplete="webpage"
						/>
					</FormGroup>
				</div>
				<FormGroup>
					<Label htmlFor="about">Cuéntanos sobre tu Negocio</Label>
					<TextArea id="about" name="about"></TextArea>
				</FormGroup>
				<Button type="button">Enviar</Button>
			</div>
		</FormContainer>
	);
};

export default Form;
