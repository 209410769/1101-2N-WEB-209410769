import React, {useState, useEffect} from 'react';
import './Directory_69.scss';
import axios from 'axios';
import MenuItem_69 from '../MenuItem/MenuItem_69';
// import items from '../MenuItem/menu-item-data_69';

const Directory_69 = () => {
  // eslint-disable-next-line
  const [menuItems, setMenuItems] = useState ([]);

  useEffect (() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL =
        'https://heroku-crown-69.herokuapp.com/api_69/category_69';
      const {data} = await axios.get (HEROKU_URL);
      console.log ('/api/category_69', data);
      setMenuItems (data);
    };
    fetchMenuItems ();
  }, []);

  console.log ('menuItems', menuItems);
  return (
    <div className="directory-menu">
      {menuItems.map (item => {
        const {id, name, remote_url, size} = item;
        return (
          //eslint-disable-next-line
          (
            <MenuItem_69
              key={id}
              name={name}
              remoteUrl={remote_url}
              size={size}
            />
          )
        );
      })}
    </div>
  );
};

export default Directory_69;
