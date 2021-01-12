import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from 'lib/firebase';

function ListView() {
  const query = db.collection('products');
  const [values, loading, error] = useCollection(query);

  return (
    <div>
      <h2>List</h2>
      <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>List: Loading...</span>}
        {values && (
          <span>
            <div>
              {values.docs.map((doc) => (
                <div key={doc.id}>
                  <p>
                    {doc.data().item.charAt(0).toUpperCase() +
                      doc.data().item.slice(1)}
                  </p>
                </div>
              ))}
            </div>
          </span>
        )}
      </div>
    </div>
  );
}
export default ListView;
