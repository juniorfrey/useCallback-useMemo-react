import React, { memo, useEffect} from 'react'
import Item from './Item'

const List = memo(({ users, handleDelete }) => {
  useEffect(() => {
    //console.log("List render");
  });

  return (
    <div>
      <ul>
        {users.map((user) => (
          <Item key={user.id} user={user} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
});

export default List
