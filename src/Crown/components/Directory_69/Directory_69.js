import React,{ useState }from 'react';
import './Directory_69.scss';
import MenuItem_69 from '../MenuItem/MenuItem_69'
import items from '../MenuItem/menu-item-data_69';

const Directory_69 = () => {
  // eslint-disable-next-line
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuItems', menuItems);
  return (
    <div className="directory-menu">
      {menuItems.map(item => {
        const {id, name, remoteUrl, size} =item;
        return (
          // eslint-disable-next-line
            <MenuItem_69 key={id} name={name} remoteUrl={remoteUrl} size={size}/>
        )
      })

      }
    </div>
  );
};

export default Directory_69;