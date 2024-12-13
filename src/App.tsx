import { FC } from "react";
import Header from "./components/Header";
import TodoList from "./components/ToDoList";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

const App: FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app-container">
          <Header />
          <TodoList />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
