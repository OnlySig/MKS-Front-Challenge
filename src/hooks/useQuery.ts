import { useQuery } from '@tanstack/react-query'
import { IProdutos } from '../interface/IProdutos'

interface ProdTypes {
  products: IProdutos[]
  isLoading: boolean
  isError: boolean
}

const Query = () => {
  const { data: produtos, isLoading, isError } = useQuery<ProdTypes>({
    queryKey: ['produtos'],
    queryFn: () => 
      fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')
      .then((resp)=>resp.json())
  })
  return { produtos, isLoading, isError }
}

export default Query