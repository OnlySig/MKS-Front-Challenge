import './App.css'
import Item from './components/Item'
import NavBar from './components/Navbar'
import Query from './hooks/useQuery'

function App() {
  const { produtos, isLoading, isError } = Query()

  if(isLoading) return 'Carregando...'
  if(isError) return 'Algum erro inesperado ocorreu, contate nosso suporte!'
  return (
    <>
      <NavBar/>
      <div className='container'>
        <div className='container__itens'>
          {produtos?.products.map((produto, index) => 
            <Item key={index} produto={{...produto}}/>
          )}
        </div>
      </div>
    </>
  )
}

export default App
