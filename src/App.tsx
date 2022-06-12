import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import Card from './components/Card';
import { getclimate } from './services/weatherApi'
import { initial } from './helpers/initialValues';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function App() {  
  const [data, setData] = useState(initial);
  const MySwal = withReactContent(Swal);

  const setClimate = (city: string) => {
    getclimate(city).then((response) => {
      if(response.location) {
        setData(response);
      } 
      else return false;
    })
    .catch((error) => {
      MySwal.fire({
        title: 'Erro na API',
        text: 'Revise o nome da cidade',
        icon: 'error',
        confirmButtonColor: '#036ffc',

      });
    });
  }

  return (
    <div id='App' className='flex flex-col items-center justify-center w-full h-screen'>
      <h1 className='text-6xl font-bold text-blue-700 mb-5'>Climate Now</h1>
      
      <SearchForm setClimate={setClimate} />
      <Card data={data}/>
      <h3 className='text-xl font-bold text-blue-700 mt-5'>Por: <a className='hover:text-sky-700' href='https://github.com/LucasMSF'>LucasMSF</a></h3>
    </div>
  );
}

export default App;
