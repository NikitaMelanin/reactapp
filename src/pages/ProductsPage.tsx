import { Loader } from '../components/Loader';
import {Product} from '../components/product';
import { useProducts } from '../hooks/products';
import { Error } from '../components/ErrorMes';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { useContext, useState } from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';


export function ProductsPage () {

   const {loading, products, error, addProduct} = useProducts()
    const { modal, open, close} =  useContext(ModalContext)

const createHandler = (product: IProduct) => {
  addProduct(product)
}

 return (
  <div className="container mx-auto max-w-2xl pt-6">
    {loading && <Loader />}
    {error && <Error error = {error} /> }
    {products.map(product => <Product product = {product} key = {product.id} />)}
    {/* <Product product = {products[0]} /> 
    <Product product = {products[1]} />
    <Product product = {products[2]} /> */}
      <div className={"main_content"}>

      </div>
    {modal && <Modal title="Create new product" onClose={close}>
      <CreateProduct onCreate={createHandler}/>
      
    </Modal>}

    <button 
    className='absolute bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
    onClick={open}
    >+</button>
  
  </div>
 )
}