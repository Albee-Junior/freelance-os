import ClientProfileCard from "./ClientProfileCard.jsx";
import clients from "./mockClients.js";
import styles from "./ClientsList.module.css";
function ClientsList() {
  return (
    <>
      <h2>Clients</h2>
      <ul className={styles["client-list"]}>
        {clients.map((client) => (
          <li key={client.id}>
            <ClientProfileCard client={client} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ClientsList;
