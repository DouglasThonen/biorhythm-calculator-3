import { IonApp, IonContent, IonHeader, IonInput, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonDatetime } from '@ionic/react';
import { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';

function getToday() {
  return new Date().toString().slice(0, 'yyyy-mm-dd'.length);
}

function App() {
  
  const [birthDate, setBirthDate] = useState('');
  const [targetDate, setTargetDate] = useState(getToday);



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
          </IonItem>
            <IonItem>
              <IonLabel position= "fixed">Birth Date:</IonLabel>
              <IonInput type="date" value={birthDate}
              onIonChange={(event) => setBirthDate(event.detail.value)}
              /> 
              <IonLabel position= "fixed">Target Date:</IonLabel>
              <IonInput type="date" value={targetDate}
              onIonChange={(event) => setTargetDate(event.detail.value)}
              /> 
            </IonItem>
          </IonList>
       <BiorhythmCard targetDate={targetDate} />
      </IonContent>
    </IonApp>
  );
}

export default App;

