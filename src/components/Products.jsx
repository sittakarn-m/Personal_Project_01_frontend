// rfce
import React from 'react'

function Product({ kai, firstname }) {
  // console.log(props)
  // const { kai,firstname } = props
  return (
    <>
      <div>Product</div>
      <h1>{kai}</h1>
      <h1>{firstname}</h1>
    </>
  )
}

export default Product