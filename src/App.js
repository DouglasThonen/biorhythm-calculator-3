import { IonApp, IonContent, IonHeader, IonInput, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput placeholder="Your name"
        value={name} onIonChange={(event) => setName(event.detail.value)}
        />
        <p>
          You entered: <b>{name}</b>
        </p>
      </IonContent>
    </IonApp>
  );
}

export default App;
