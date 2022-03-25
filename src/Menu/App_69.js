import Category_69 from './components/Category_69';
import Menu_69 from './components/Menu_69';
import items from './data';
import {useState} from 'react';

const allCategories = [`all`, ...new Set (items.map (item => item.category))];
console.log ('allCategories', allCategories);

function App_69 () {
  const [menuItems, setMenuItems] = useState (items);
  const [categories, setCategories] = useState (allCategories);
  const filterItems = category => {
    if (category === 'all') {
      setMenuItems (items);
    } else {
      const newItems = items.filter (item => item.category === category);
      setMenuItems (newItems);
    }
  };
  return (
    <div>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline" />
        </div>
        <Category_69 categories={categories} filterItems={filterItems} />
        <Menu_69 items={menuItems} />
      </section>
    </div>
  );
}

export default App_69;
