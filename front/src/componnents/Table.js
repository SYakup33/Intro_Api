export const Table = (props) => {
  return (
    <section className="mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Prénom</th>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {props.listAPasser.map((participant) => {
            return (
              <tr key={participant.id}>
                <td>{participant.firstName}</td>
                <td>{participant.lastName}</td>
                <td>{participant.email}</td>
                <td>
                  <img src={participant.avatar} alt="" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
