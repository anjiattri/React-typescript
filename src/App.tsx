import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Button from "./components/Button";
import { ClassCounter } from "./components/class/Counter";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import List from "./components/generic/List";
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import CustomButton from "./components/html/Button";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Text from "./components/polymorphic/Text";
import DomRef from "./components/ref/DomRef";
import RandomNumber from "./components/restriction/RandomNumber";
import Counter from "./components/state/Counter";
import Status from "./components/Status";
import Toast from "./components/templateliterals/Toast";

function App() {
  const personName = {
    first: "Anjali",
    last: "Singh",
  };
  const nameList = [
    { first: "Nidhi", last: "Singh" },
    { first: "Honey", last: "Singh" },
    { first: "Dummy", last: "Singh" },
  ];

  return (
    <div className="App">
      <Greet name="Anjali" messageCount={20} isLoggedIn={false} />
      <Greet name="Anjali" isLoggedIn={false} />

      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="complete" />
      <Oscar>
        <h1>this is oscar</h1>
        <Heading>place holder text</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("event", event, id);
        }}
      />
      <Input
        value="anjali"
        handleChange={(event) => {
          console.log("event", event);
        }}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <ClassCounter message="the count is : " />

      <Private isLoggedIn={true} component={Profile} />
      {/* 
      <List
        items={["Batman", "Superman", "Spiderman"]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} /> */}

      <List
        items={[
          { id: 1, first: "Nidhi", last: "Singh" },
          { id: 2, first: "Honey", last: "Singh" },
          { id: 3, first: "Dummy", last: "Singh" },
        ]}
        onClick={(item) => console.log(item)}
      />
      {/* there should be restrictions */}
      <RandomNumber value={24} isPositive={true} />
      <Toast position="center-top" />
      <CustomButton
        variant="primary"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Primary Button
      </CustomButton>

      <Text size="lg" as="h1">
        Heading 1
      </Text>
      <Text size="sm" as="p">
        paragraph 1
      </Text>
    </div>
  );
}

export default App;
