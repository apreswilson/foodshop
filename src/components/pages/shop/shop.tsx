import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./shop.css"

const Shop: React.FC = () => {
  return (
    <main className="shop-layout" aria-label="Shop Page">
      <div className="top-area">
        <div className="search-bar" aria-label="Search Bar">
          <h1>General</h1>
          <form>
            <input type="text" placeholder="Search Catalog"></input>
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="categories" aria-label="View Different Food Categories">
          <h1>Categories</h1>
          <select>
            <option>All</option>
            <option>Dry Grocery</option>
            <option>Produce</option>
            <option>Meat</option>
            <option>Seafood</option>
            <option>Drinks</option>
            <option>Pharmacy</option>
            <option>Bakery</option>
            <option>Deli</option>
          </select>
        </div>
      </div>
      <div className="catalog" aria-label="Food Shop Item Catalog">
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Item Name</h1>
          <p>Price: $4.50</p>
          <p><b>In Stock</b></p>
          <button>Add to Cart</button>
        </div>
        <div className="item no-stock">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Item Name</h1>
          <p>Price: $4.50</p>
          <p><b>Out Of Stock</b></p>
          <button disabled>Add to Cart</button>
        </div>
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Item Name</h1>
          <p>Price: $4.50</p>
          <p><b>In Stock</b></p>
          <button>Add to Cart</button>
        </div>
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Item Name</h1>
          <p>Price: $4.50</p>
          <p><b>In Stock</b></p>
          <button>Add to Cart</button>
        </div>
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Item Name</h1>
          <p>Price: $4.50</p>
          <p><b>In Stock</b></p>
          <button>Add to Cart</button>
        </div>
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Item Name</h1>
          <p>Price: $4.50</p>
          <p><b>In Stock</b></p>
          <button>Add to Cart</button>
        </div>
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Item Name</h1>
          <p>Price: $4.50</p>
          <p><b>In Stock</b></p>
          <button>Add to Cart</button>
        </div>
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Item Name</h1>
          <p>Price: $4.50</p>
          <p><b>In Stock</b></p>
          <button>Add to Cart</button>
        </div>
      </div>
    </main>
  )
}

export default Shop;