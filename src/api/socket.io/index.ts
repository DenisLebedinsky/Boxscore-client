import io from "socket.io-client";
const port = "http://localhost:3001";
const socket = io(port);

function socketOn<T>(event:string){
	return new Promise((resolve) => {
		socket.on(event, (data: T) => resolve(data));
	})
}


const subscribeToUpdate = async () => {
	const res = await socketOn("updateData")
	if(Array.isArray(res)){
	return res;
	}
};

export default subscribeToUpdate