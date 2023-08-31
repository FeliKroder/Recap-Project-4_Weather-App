export default function Form(onAddActivity) {
  function handleSubmit(event) {
    event.preventDefault();
    const activityObject = {
      name: event.target[0].value,
      checkboxInput: event.target[1].checked,
    };
    onAddActivity(activityObject);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new Activity</h3>
      <label htmlFor="activityInput">New Activity</label>
      <input type="text" name="activityInput" id="activityInput" />
      <label htmlFor="checkboxInput">...is for Good Weather</label>
      <input type="checkbox" name="checkboxInput" id="checkboxInput" />
      <button type="submit">Add</button>
    </form>
  );
}
