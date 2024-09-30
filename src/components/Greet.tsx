type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? "Welcome " : "Hi "}
      {props.name} you have unread messages : {messageCount}
    </div>
  );
};
