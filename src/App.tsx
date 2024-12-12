import { FC } from "react";
import ThemeToggle from "./components/ThemeToggle";
import TodoList from "./components/TodoList";
import { ThemeProvider } from "./context/ThemeContext";

const App: FC = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <ThemeToggle />
        <TodoList />
      </div>
    </ThemeProvider>
  );
};

export default App;
