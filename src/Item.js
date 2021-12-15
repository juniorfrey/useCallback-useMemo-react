import React, {memo, useEffect} from 'react'

const Item = memo(({ user, handleDelete }) => {
  useEffect(() => {
    //console.log("Item render" + user.name + "");
  });

  return (
    <li>
      {user.name}
      <button onClick={() => handleDelete(user.id)}>Eliminar</button>
    </li>
  );
});

export default Item
