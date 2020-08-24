import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/RenderProps/ClickCounter';
import HoverCounter from './components/RenderProps/HoverCounter';
import User from './components/RenderProps/User';
import Counter from './components/RenderProps/Counter';
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/UserContext';
import PostList from './components/HTTP/PostList';
import PostForm from './components/HTTP/PostForm';
import LifeCycleA from './components/Lifecycle Methods/LifeCycleA';
import FragmentDemo from './components/Fragments/FragmentDemo';
import Tables from './components/Fragments/Tables';
import PureComp from './components/PureComponents/PureComponent';
import ParentComponent from './components/PureComponents/ParentComponent';
import RefsDemo from './components/Refs/RefsDemo';
import FocusInput from './components/Refs/FocusInput';
import ForwardRefParentInput from './components/Refs/ForwardRefParentInput';
import PortalDemo from './components/Portals/PortalDemo';
import Hero from './components/ErrorBoundary/Hero';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Form from './components/FormHandling/Form';
import Stylesheet from './components/Styling&CSS/Stylesheet';
import Inline from './components/Styling&CSS/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import PostListRendering from './components/List_Rendering/PostList';
import UserGreeting from './components/Conditional_Renderering/UserGreeting';
import ParentComponent2 from './components/Methods_as_Props/ParentComponent2';
import FunctionClick from './components/Event_Handling/FunctionClick';
import ClassClick from './components/Event_Handling/ClassClick';
import EventBind from './components/Event_Handling/EventBind';
import Greet from './components/Props/Greet';
import Hello from './components/JSX/Hello';
import Welcome from './components/Props/Welcome';
import Message from './components/State/Message';
import Counter2 from './components/SetState/Counter2';

function App() {
  return (
    <div className="App">

    <Counter2 />

    {/* <Message />*/}

    {/* <Hello />*/}

    {/* <Greet name="Bruce" altname="B">
      <p>This is children props</p>
    </Greet>
    <Greet name="Clark" altname="C">
      <button>Click here</button>
    </Greet>
    <Greet name="Diana" altname="D" />

    <Welcome name="Bruce" altname="B" />
    <Welcome name="Clark" altname="C" />
    <Welcome name="Diana" altname="D"/>*/}

    {/* <EventBind />
    <ClassClick />
    <FunctionClick />*/}

    {/* <ParentComponent2 />*/}
    
    {/* <UserGreeting />*/}

    {/* <PostListRendering />*/}

    {/* <h1 className='error'>Error</h1> {/*Applies to every child component */}
    {/*<h1 className={styles.success}>Success</h1> {/* Does not applies to child component as styles is only accessible in the file is is declared */}
    {/*<Inline />*/}
    {/*<Stylesheet primary={true} />*/}

    {/* <Form />*/}

    {/* <ErrorBoundary>
      <Hero heroname="Ironman" />
    </ErrorBoundary>

    <ErrorBoundary>
      <Hero heroname="Joker" />
    </ErrorBoundary>*/}
    
    {/* <PortalDemo />*/}

    {/* <ForwardRefParentInput />*/}
    {/* <FocusInput />*/}
    {/* <RefsDemo />*/}

    {/* <ParentComponent />*/}

    {/* <Tables />*/}

    {/* <FragmentDemo />*/}

    {/* <LifeCycleA />*/}

    {/* <PostForm />
    <PostList />*/}

    {/* <UserProvider value="MD">
      <ComponentC />
    </UserProvider>*/}

      {/*<Counter render={(count, incrementCount) => (
        <ClickCounter count={count} incrementCount={incrementCount} />
      )}
      />*/}

      {/*<Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
        </Counter>*/}

      {/* <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>*/}
       
      {/*<ClickCounter />
      <HoverCounter />
      <User render={(isLoggedIn) => isLoggedIn ? 'MD' : 'Guest'}/>*/}
    </div>
  );
}

export default App;
