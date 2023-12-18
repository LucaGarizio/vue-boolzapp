const { createApp } = Vue

createApp({
  data() {
    return {
        newText: "",
        lastAccess: '',
        searchName: '',
        currentDate: '',
        lastMessage: '',
        currentIndex: null,
        currentMessages: [],
        currentUserInfo: ({ 
            date: '',
            name: '',
            avatar: ''
        }),
        contacts: [
        {
            name: 'Michele',
            avatar: 'img/avatar_1.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: 'img/avatar_2.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: 'img/avatar_3.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: 'img/avatar_4.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: 'img/avatar_2.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: 'img/avatar_io.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: 'img/avatar_3.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Davide',
            avatar: 'img/avatar_1.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
        }
    ]
    }
  },
  methods: {
    showUser(index){
        // Imposta l'indice sull'indice del contatto selezionato
        this.currentIndex = index;
        // Imposta i messaggi sull'array di messaggi del contatto selezionato
        this.currentMessages = this.contacts[index].messages,
        this.lastMessage = this.currentMessages[this.currentMessages.length - 1].date;
         // Imposta le informazioni dell'utente sul nome e avatar del contatto selezionato
        this.currentUserInfo = {
            date: this.lastMessage.date,
            name: this.contacts[index].name,
            avatar: this.contacts[index].avatar,
            lastAccess: this.currentMessages[this.currentMessages.length - 1].date
        };
        this.lastAccess = "Ultimo Accesso"
      },     
    addText() {
        // check se il campo text non è vuoto
        if(this.newText.trim() !== "") {
            // pusha il nuovo messaggio con valore (sent) dentro l'array di oggetti(messages) gia esistente
            this.contacts[this.currentIndex].messages.push({
                message: this.newText,
                status: 'sent'
            }); 
        }
        this.newText = "";

        setTimeout (() => {
            // pusha nell'array(messages) gia esistente  una risposta automatica dopo un secondo con valore (received)
            this.contacts[this.currentIndex].messages.push({
                message: "ciao",
                status: 'received'
            }); 
        },1000);
    }, 
  },
  computed:{
    filteredContacts(){
        return this.contacts.filter(contact => contact.name.includes(this.searchName)); 
    },
  }
}).mount('#app')