function TagsBar(props) {
  return (
    <>
      <ul
        className={`${
          props.isVertical ? "d-flex gap-1" : "d-grid gap-1"
        } list-unstyled`}
      >
        <li className={"text-muted"} >
          <small>{props.location}</small>
        </li>
        <li className={"text-muted"}>
          <small>{props.salary}</small>
        </li>
        <li className={"text-muted"}>
          <small>{props.mode}</small>
        </li>
      </ul>
    </>
  );
}

export default TagsBar;
