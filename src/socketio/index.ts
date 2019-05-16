import io from 'socket.io-client';

const socket = io('http://localhost');
const subscribeToUpdate = () => {
    socket.on('timer', console.log(''));
}

export default subscribeToUpdate;