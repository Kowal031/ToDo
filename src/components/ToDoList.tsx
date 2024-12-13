import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { FC, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoType } from "../types/todoType";
import { getTodos, saveTodos } from "../utils/localStorageUtils";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  const [todos, setTodos] = useState<TodoType[]>(getTodos());
  const [newTodoText, setNewTodoText] = useState<string>("");

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const handleAddTodo = (e?: FormEvent) => {
    if (e) e.preventDefault();

    if (newTodoText.trim()) {
      const newTodo: TodoType = {
        id: uuidv4(),
        text: newTodoText.trim(),
        completed: false,
      };
      setTodos([newTodo, ...todos]);
      setNewTodoText("");
    }
  };

  const handleAddTodoText = (text: string) => {
    setNewTodoText(text);
  };

  const toggleTodoComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setTodos((todos) => {
        const oldIndex = todos.findIndex((todo) => todo.id === active.id);
        const newIndex = todos.findIndex((todo) => todo.id === over?.id);

        return arrayMove(todos, oldIndex, newIndex);
      });
    }
  };

  return (
    <div>
      <TodoHeader
        handleAddTodo={handleAddTodo}
        newTodoText={newTodoText}
        handleAddTodoText={handleAddTodoText}
        todos={todos}
      />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={todos.map((todo) => todo.id)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="todo-list">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleComplete={toggleTodoComplete}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default TodoList;
