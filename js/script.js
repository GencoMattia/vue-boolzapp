const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1',
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
                    avatar: './img/avatar_2',
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
                    avatar: './img/avatar_3',
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
                    avatar: './img/avatar_4',
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
                    avatar: './img/avatar_5',
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
                    avatar: './img/avatar_6',
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
                    avatar: './img/avatar_7',
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
                    avatar: './img/avatar_8',
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
            ],            
            
            myProfile: {
                name: 'Mattia',
                avatar: './img/avatar_io',
                visible: true,
                messages: [
                    
                ], 
            },

            activeChat: 0,

            newMessage: {
                date: "",
                message: "",
                status: "sent",
            },

            isNotificationsOn: true,

            searchInput: "",

            contextMenu: {
                visible: false,
                x: 0,
                y: 0,
                messageIndex: null,
            }
        }
    },

    methods: {
        getMessages() {
            return this.contacts[this.activeChat].messages;
        },

        getLastMessage(index) {
            return this.contacts[index].messages[this.contacts[index].messages.length - 1];
        },

        pushNewMessage() {
            if(this.newMessage.message.trim() !== "") {
                const newMessage = {
                    date: new Date().toLocaleString(),
                    message: this.newMessage.message,
                    status: "sent",
                }
                this.contacts[this.activeChat].messages.push(newMessage)
            }

            setTimeout(() => {
                const newReply = {
                    date: new Date().toLocaleString(),
                    message: "Ok!",
                    status: "received",
                }
                this.contacts[this.activeChat].messages.push(newReply)
                console.log(`newReply.date ${newReply.date}`);
            }, 1000);
            this.newMessage =  {
                date: "",
                message: "",
                status: "sent",
            }
        },

        toggleNotifications() {
            this.isNotificationsOn = !this.isNotificationsOn;
        },

        isContactSearched(contact) {
            const searchedTerm = this.searchInput.toLowerCase();
            return contact.name.toLowerCase().includes(searchedTerm);
        },

        getTimeFormat(dateString) {
            console.log(`dateString: ${dateString}`);
            const [date, splitHours] = dateString.split(" ");
            const [month, day, year] = date.split("/");
            const formattedDateString = `${day}/${month}/${year} ${splitHours}`;
            const dateObj = new Date(formattedDateString);
            console.log(`formattedDateString: ${formattedDateString}`);
            const hours = dateObj.getHours().toString().padStart(2, "0");
            const minutes = dateObj.getMinutes().toString().padStart(2, "0");
            return `${hours}:${minutes}`;
        },

        showContextMenu(index, event) {
            this.contextMenu.visible = true;
            this.contextMenu.x = event.clientX - 50;
            this.contextMenu.y = event.clientY - 50;
            this.contextMenu.messageIndex = index;
        },

        deleteMessage(index) {
            this.contacts[this.activeChat].messages.splice(index, 1);
            this.contextMenu.visible = false;
        },

        closeContextMenu() {
            this.contextMenu.visible = false;
        }
    },
}).mount('#app')

// console.log(new Date().toLocaleString())