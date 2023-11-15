import { IonApp, IonContent, IonHeader, IonInput, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/react';
import { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import { useStoredState } from './lib/hook';

function getToday() {
  return new Date().toString().slice(0, 'yyyy-mm-dd'.length);
}

function App() {
  
  const [birthDate, setBirthDate] = useStoredState('birthDate', '');
  const [targetDate, setTargetDate] = useState(getToday);



  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {Boolean(birthDate) && (
       <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
       )}
          <IonList>
            <IonItem>
              <IonLabel position= "fixed">
                Birth Date:
                </IonLabel>
              <IonInput type="date" value={birthDate}
              onIonChange={(event) => setBirthDate(event.detail.value)}
              /> 
              </IonItem>
              <IonItem>
              <IonLabel position= "fixed">
                Target Date:
                </IonLabel>
              <IonInput type="date" value={targetDate}
              onIonChange={(event) => setTargetDate(event.detail.value)}
              /> 
            </IonItem>
          </IonList>
      </IonContent>
    </IonApp>
  );
}

export default App;

