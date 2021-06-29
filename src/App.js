// import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
// import Welcome from './components/welome'
// import Message from './components/message';
// import Counter from './components/counter';
import Click from './components/click'
import ClassClick from './components/ClassClick'
import EventBinding from './components/EventBinding'
import ParentComponent from './components/ParrentComponent'
import UserGreeting from './components/UseGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/StyleSheet'
import Inline from './components/inlilne'
import {  Route, Switch } from 'react-router-dom';
import Form from './components/Form'
import RefsDemo from './components/RefsDemo'
import RefClassParent from './components/RefClassParent'
import About from './components/About'
import Contact from './components/Contact'
import Menu from './components/Menu'
function App() {
  return (
    <div>
    <Menu></Menu>
    <Switch>
    <Route exact path='/' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/service' component={Greet}/>

    
    
    </Switch>
    {/* <About></About>
    <Contact></Contact> */}
    {/* <Inline></Inline>
    <Form></Form>
    <RefsDemo></RefsDemo>
    <RefClassParent></RefClassParent> */}
    <Stylesheet primary="{true}"></Stylesheet>
    {/* <NameList></NameList>
    <UserGreeting></UserGreeting>
    <ParentComponent></ParentComponent> */}
      {/* <Greet name="om" heroname="a">
             <p>This is children props</p>
                 
             </Greet>,
        { <Greet name="patawar"  heroname="a">

        </Greet> }
      <Welcome name="welcome om" heroname=" wa"></Welcome>
      <Welcome name="w om" heroname="w a"></Welcome> */}
      {/* <Counter></Counter>
      <Message></Message>
      <Welcome></Welcome>
      <Greet name="patawar"  heroname="a"></Greet>
      <Welcome name="welcome om" heroname=" wa"></Welcome>
      <Click></Click> */}
      {/* <ClassClick></ClassClick>
      <EventBinding></EventBinding> */}
      
    </div>
    
        
  )
}

export default App;
