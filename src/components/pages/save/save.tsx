import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./save.css";

const Save: React.FC = () => {
  return (
    <main className="save-layout" aria-label="Save Page">
      <div className="top-area">
        <div className="search-bar" aria-label="Search Bar">
          <h1>General</h1>
          <form>
            <input type="text" placeholder="Search Catalog"></input>
            <button type="submit" name="search">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="categories" aria-label="View Food Categories">
          <h1>Categories</h1>
          <select>
            <option>General</option>
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
      <div className="catalog" aria-label="Savings Catalog">
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Sale Name</h1>
          <p>Save: $2.50</p>
          <p>Valid Until: <b>07/02/24</b></p>
          <button name="Add-To-Cart">Add to Cart</button>
        </div>
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Sale Name</h1>
          <p>Save: $2.50</p>
          <p>Valid Until: <b>07/02/24</b></p>
          <button name="Add-To-Cart">Add to Cart</button>
        </div>
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Sale Name</h1>
          <p>Save: $2.50</p>
          <p>Valid Until: <b>07/02/24</b></p>
          <button name="Add-To-Cart">Add to Cart</button>
        </div>
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Sale Name</h1>
          <p>Save: $2.50</p>
          <p>Valid Until: <b>07/02/24</b></p>
          <button name="Add-To-Cart">Add to Cart</button>
        </div>
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Sale Name</h1>
          <p>Save: $2.50</p>
          <p>Valid Until: <b>07/02/24</b></p>
          <button name="Add-To-Cart">Add to Cart</button>
        </div>
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Sale Name</h1>
          <p>Save: $2.50</p>
          <p>Valid Until: <b>07/02/24</b></p>
          <button name="Add-To-Cart">Add to Cart</button>
        </div>
        <div className="item">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <h1>Sale Name</h1>
          <p>Save: $2.50</p>
          <p>Valid Until: <b>07/02/24</b></p>
          <button name="Add-To-Cart">Add to Cart</button>
        </div>
      </div>
    </main>
  )
}

export default Save;