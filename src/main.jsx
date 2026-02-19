import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List_of_colors />
  </StrictMode>,
)


function List_of_colors() {
  const my_color = ["Red", "Blue", "Green","Yellow", "Pink", "Purple", "Orange", "Brown", "Black", "White"];

  return (
    <ul>
      {my_color.map((color) => (
        <li 
          key={color} 
          style={{ color: color.toLowerCase(), fontWeight: 'bold' }}
        >
          {color}
        </li>
      ))}
    </ul>
  );
}

export default List_of_colors