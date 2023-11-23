import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const { userID } = useParams();

  useEffect(() => {
    // Check if userID exists before making the API call
    if (userID) {
      axios.get(`http://localhost:3000/users/${userID}`)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userID]);

  return (
    <div>
      {/* Render your component content */}

      hey man
    </div>
  );
};

export default App;