# vue-boolzapp

Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 



----- PASSAGGI -----

--- Milestone 1
- HTML: creare un container in cui racchiudere la chat e tutti gli elementi dell'interfaccia
- creare classi CSS per .user-messsage & .interlocutor-message
- creare section.contacts
    - creare header per la section.contacts
- creare section.chatbox
    - creare header per section.chatbox
- creare un div.contacts e inserire la lista contatti con ciclo v-for usando un article.contact come base
- creazione della barra ricerca al di sopra dei contatti
- creazione della barra notifiche al di sopra della barra ricerca contatti
- creazione dell'input:text per l'inserimento dei messaggi sotto il div display.chat
