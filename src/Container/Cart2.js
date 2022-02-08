import { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
class Cart2 extends Component {
    state = {
      products: [
        {title: 'Apple', count: 0, price: 100},
        {title: 'IBM', count: 0, price: 200},
        {title: 'HP', count: 0, price: 300},
      ]
    }
    
    onChange = (index, val) => {
      this.setState({
        products: this.state.products.map((product, i) => (
          i === index ? {...product, count: val} : product
        ))
      })
    }
  
    render () {
      return (
        <div>
          <ProductList products={this.state.products} onChange={this.onChange} />
          <Total products={this.state.products} />
        </div>
      )
    }
  };
  
  const ProductList = ({ products, onChange }) => (
    <ul>
      {products.map((product, i) => (
        <li key={i}>
          {product.title}
          <input 
            type="text" 
            value={product.count}
            onChange={e => onChange(i, parseInt(e.target.value) || 0)}
          />
        </li>
      ))}
    </ul>
  );
  
  const Total = ({ products }) => (
    <h3>
      Price: 
      {products.reduce((sum, i) => (
        sum += i.count * i.price
      ), 0)}
    </h3>
  )
  
  
export default Cart2