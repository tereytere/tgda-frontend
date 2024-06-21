import React from "react";

const Form: React.FC = () => {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h4 className="text-base font-semibold leading-7 text-gray-900">
            Información General
          </h4>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="type"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tipo de Negocio
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="type"
                  id="type"
                  autoComplete="type"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                País
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
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
                  <option>Armenia</option>
                  <option>Australia</option>
                  <option>Austria</option>
                  <option>Azerbaiyán</option>
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
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dirección
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ciudad
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Provincia / Estado
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Código Postal
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <h4 className="text-base font-semibold leading-7 text-gray-900">
                Redes Sociales{" "}
              </h4>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="block text-sm font-medium leading-6 text-gray-900">
                    Instagram
                  </span>
                  <input
                    type="text"
                    name="instagram"
                    id="instagram"
                    autoComplete="instagram"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  <br />
                  <span className="block text-sm font-medium leading-6 text-gray-900">
                    YouTube
                  </span>
                  <input
                    type="text"
                    name="youtube"
                    id="youtube"
                    autoComplete="youtube"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  <br />
                  <span className="block text-sm font-medium leading-6 text-gray-900">
                    Podcast
                  </span>
                  <input
                    type="text"
                    name="podcast"
                    id="podcast"
                    autoComplete="podcast"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  <br />
                  <span className="block text-sm font-medium leading-6 text-gray-900">
                    Página Web
                  </span>
                  <input
                    type="text"
                    name="webpage"
                    id="webpage"
                    autoComplete="webpage"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cuéntanos sobre tu Negocio
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div className="col-span-full">
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
