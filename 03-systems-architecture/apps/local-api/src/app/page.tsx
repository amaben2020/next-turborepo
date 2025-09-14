import { auth } from '@/auth';
import { Todo, PRIORITIES, getTodos } from '@repo/todos';

import AuthButton from '@/components/AuthButton.server';

import TodoList from './TodoList';

export default async function Home() {
  const session = await auth();

  console.log(session);

  const priorities: string[] = PRIORITIES;

  const todos: Todo[] = session?.user?.id
    ? await getTodos(session?.user?.id)
    : [];

  return (
    <main>
      {/* <AuthButton />
      {session?.user && <TodoList todos={todos} priorities={priorities} />} */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        quam, reprehenderit, animi porro totam, atque sunt laborum recusandae
        neque sit fuga pariatur illum vero aut. Quod quidem assumenda fugiat
        accusamus?
      </p>
      <TodoList todos={todos} priorities={priorities} />
    </main>
  );
}
