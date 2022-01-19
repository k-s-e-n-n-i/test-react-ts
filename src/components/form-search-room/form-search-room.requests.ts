interface Guests {
  grown: string;
  children: string;
  babies: string;
}

class RequestsFormSearchRoom {
  formSearchRoom: HTMLFormElement | null = null;
  constructor() {
    this.formSearchRoom = document.forms.namedItem('formSearchRoom');
  }

  socketsGO() {
    const { formSearchRoom } = this;

    if (!window.WebSocket) {
      document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
    }

    var socket = new WebSocket('ws://localhost:9001');

    if (formSearchRoom) {
      formSearchRoom.onsubmit = function () {
        const postJSON = {
          guests: {
            grown: formSearchRoom.grown.value,
            children: formSearchRoom.childs.value,
            babies: formSearchRoom.babies.value,
          },
        };
        console.log(`Отправлены данные:${JSON.stringify(postJSON)}`);
        socket.send(JSON.stringify(postJSON));
        return false;
      };
    }

    // обработчик входящих сообщений
    socket.onmessage = (event) => {
      const incomingMessage = event.data;
      const data = JSON.parse(incomingMessage);

      if (data.guests !== undefined) {
        //this.showSentGuests(data.guests);
      }
    };

    socket.onopen = function () {
      console.log('Соединение установлено.');
    };

    socket.onerror = function (error: Event) {
      alert('Ошибка ' + error);
    };
  }

  showSentGuests(data: Guests) {
    const { formSearchRoom } = this;

    const oldBlockGET = document.querySelector('.blockGET');
    if (oldBlockGET) {
      oldBlockGET.remove();
    }
    console.log(data);
    const messageElem = document.createElement('div');
    messageElem.className = 'blockGET';

    const grown = document.createElement('p');
    grown.innerText = `Взрослых: ${data.grown}`;
    const children = document.createElement('p');
    children.innerText = `Детей: ${data.children}`;
    const babies = document.createElement('p');
    babies.innerText = `Младенцев: ${data.babies}`;

    messageElem.appendChild(grown);
    messageElem.appendChild(children);
    messageElem.appendChild(babies);

    formSearchRoom?.appendChild(messageElem);
  }
}

export { RequestsFormSearchRoom };
