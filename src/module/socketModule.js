import SockJS from "sockjs-client";
import Stomp from 'stompjs'

const socketModule = (function () {
    let stompClient = null;

    function connect(userId, token = "") {
        let socket = new SockJS("http://localhost:8080/ws");
        stompClient = Stomp.over(socket);


        const user = {
            userId,
            access_token: token,
        };

        console.log(user)

        const onConnected = () => {
            stompClient.subscribe(
                "/user/" + userId + "/queue/messages",
                function (resp) {
                    console.log(`response: `,resp.body)
                }
              );
        }

        stompClient.connect(user, onConnected);  
    }

    function disconnect() {
        return stompClient !== null && stompClient.disconnect();
    }

    function sendMessageToOneFriend(roomId, content, type) {
        const FRIEND = {
            content,
            roomId,
            type,
        };
        stompClient.send("/app/chat", {}, JSON.stringify(FRIEND));
    }

    return {
        connect: function(userId, token) {
            connect(userId, token)
        },
        disconnect: function() {
            disconnect()
        },
        sendMessageToOneFriend: function(roomId, content, type) {
            sendMessageToOneFriend(roomId, content, type);
        }

    }
})();
export default socketModule
