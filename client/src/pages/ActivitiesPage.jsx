import React, { useEffect, useState } from 'react';

function ActivitiesPage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    fetch('/api/activities/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log('Activities: ', data);
      setActivities(data);
    })
    .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActivitiesPage;