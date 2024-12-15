import { Editor } from "./components/Editor";
import { Header } from "./components/Header";
import { Viewer } from "./components/Viewer";
import { UserInfoContextProvider } from "./context/UserInfoContext";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.root}>
      <UserInfoContextProvider>
        <Header />
        <div className={styles.wrapper}>
          <Editor />
          <Viewer />
        </div>
      </UserInfoContextProvider>
    </div>
  );
}

export default App;
