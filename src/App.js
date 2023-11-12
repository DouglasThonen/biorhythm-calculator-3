import { IonApp, IonContent, IonHeader, IonInput, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonDatetime } from '@ionic/react';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Name:</IonLabel>
              <IonInput value={name}
            onIonChange={(event) => setName(event.detail.value)}
            />
          </IonItem>
            <IonItem>
              <IonLabel position= "stacked">Date of Birth:</IonLabel>
              <IonInput type="date" value={birthDate}
              onIonChange={(event) => setBirthDate(event.detail.value)}
              /> 
               
               
            </IonItem>
          </IonList>
       <p>
          You entered: <b>{name}</b>, born on<b>{birthDate}</b>
        </p>
      </IonContent>
    </IonApp>
  );
}

export default App;

