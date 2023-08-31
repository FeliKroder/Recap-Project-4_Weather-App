export default function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => {
        return <li key={activity.id}>{activity.event.target[0].value}</li>;
      })}
    </ul>
  );
}
