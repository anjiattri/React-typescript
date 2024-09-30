type StatusProps = {
  status: "loading" | "complete" | "error";
};
export default function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "loading....";
  } else if (props.status === "complete") {
    message = "data fetched successfully!";
  } else {
    message = "some error fetching data!";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}
