import { ChatEngine } from "react-chat-engine";
import './App.css'
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm"

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height="100vh"
            projectID="ff68ca6b-2d81-445a-905c-dc43c75f68ad"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed  {...chatAppProps}/>}
        />
    );
}

export default App;